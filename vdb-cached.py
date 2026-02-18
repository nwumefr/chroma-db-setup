# setup env
import os
from dotenv import load_dotenv
load_dotenv()

# Simple query cache using embeddings
import numpy as np
import google.genai as genai

client = genai.Client(api_key=os.getenv("GENAI_API_KEY"))
# Cache storage: query_text -> {embedding, documents, response}
query_cache = {}
SIMILARITY_THRESHOLD = 0.92

def cosine_similarity(vec1, vec2):
    """Calculate similarity between two vectors."""
    vec1_np = np.array(vec1)
    vec2_np = np.array(vec2)
    dot = np.dot(vec1_np, vec2_np)
    norm = np.linalg.norm(vec1_np) * np.linalg.norm(vec2_np)
    return dot / norm if norm != 0 else 0.0

def get_query_embedding(query):
    """Get embedding for a query."""
    response = client.models.embed_content(
        model="gemini-embedding-001",
        contents=[query],
        config=genai.types.EmbedContentConfig(task_type="retrieval_query")
    )
    return response.embeddings[0].values

def get_from_cache(query):
    """Check if query or similar query is cached."""
    query_emb = get_query_embedding(query)
    
    # Check exact match
    if query in query_cache:
        print(f"CACHE HIT (exact): '{query}'")
        return query_cache[query]
    
    # Check similar queries
    for cached_query, cached_data in query_cache.items():
        sim = cosine_similarity(query_emb, cached_data['embedding'])
        if sim >= SIMILARITY_THRESHOLD:
            print(f"CACHE HIT (similar {sim:.2f}): '{query}'")
            return cached_data
    
    print(f"CACHE MISS: '{query}'")
    return None

def save_to_cache(query, documents, response):
    """Save query results to cache."""
    query_emb = get_query_embedding(query)
    query_cache[query] = {
        'embedding': query_emb,
        'documents': documents,
        'response': response
    }
    print(f"Cached: '{query}'")

print("Cache ready!")

# our prompt
prompt = "What services does RMHC offer?"

# setup chroma client
import chromadb
chroma_client = chromadb.PersistentClient('./tmp/chroma-db')

# custom embedding function using Gemini Embeddings API
# ref: https://github.com/google-gemini/cookbook/blob/main/examples/chromadb/Vectordb_with_chroma.ipynb
import google.genai as genai

client = genai.Client(api_key=os.getenv("GENAI_API_KEY"))

class GeminiEmbeddingFunction(chromadb.EmbeddingFunction):    
  def __call__(self, input: chromadb.Documents) -> chromadb.Embeddings:
    EMBEDDING_MODEL_ID = "gemini-embedding-001"  # @param ["gemini-embedding-001", "text-embedding-004"] {"allow-input": true, "isTemplate": true}
    title = "Custom query"
    response = client.models.embed_content(
        model=EMBEDDING_MODEL_ID,
        contents=input,
        config=genai.types.EmbedContentConfig(
          task_type="retrieval_document",
          title=title
        )
    )

    return response.embeddings[0].values
  
# create/get collection for storage
try:
    collection = chroma_client.get_collection(name="rmhc",
                                               embedding_function=GeminiEmbeddingFunction())
    print("Retrieved existing collection")
except:
    collection = chroma_client.create_collection(name="rmhc",
                                                 embedding_function=GeminiEmbeddingFunction())
    print("Created new collection")

# function for chunking text into smaller pieces for better embedding and retrieval
# makes use of huggingface tokenizers library to tokenize text
#  and chunk it based on a specified chunk size

import transformers
from transformers import AutoTokenizer, GPT2Tokenizer
# define tokenizer
tokenizer:GPT2Tokenizer = AutoTokenizer.from_pretrained('openai-community/gpt2-medium')
# chunking function
def chunker(text, chunk_size=5) -> list[str]:
    tokens = tokenizer.tokenize(text)
    # get length of tokens
    _len = len(tokens)
    chunks = []
    chunk = []
    for i in range(_len):
        if i%chunk_size==0 and i!=0:
            print(chunk)    
            print('chunk limit reached')
            chunks.append(tokenizer.convert_tokens_to_string(chunk))
            chunk = []
        chunk.append(tokens[i])
        print(f'Token {i}: {tokens[i]}')
        
    if chunk:  # Append the last chunk if it exists
        print(chunk)
        chunks.append(tokenizer.convert_tokens_to_string(chunk))
    return chunks

# read text from rmhc_docs dir
# note we will not be doing file readong for the scraper most likely
# as far as i (chi) understand
# companies usually run scrapers through timed jobs or specific triggers
# that manage the scraping and data ingestion process
# a common approach is to have sth like an aws lambda function or a serverless function
# that gets triggered when new data is available or at scheduled intervals 
# to perform the scraping and then directly ingest the data 
# into the vector db

# import os
# import uuid

# docs = {}

# rmhc_docs_dir = './rmhc_docs'
# for filename in os.listdir(rmhc_docs_dir):
#     print(filename)
#     if filename.endswith(('.txt','.md')):
#         with open(os.path.join(rmhc_docs_dir, filename), 'rb') as f:
#             # read doc
#             content = f.read().decode('utf-8', errors='ignore')
#             # chunk doc into 500 token chunks
#             chunks = chunker(content, chunk_size=500)
#             # add chunks to docs dict with unique id
#             for i in chunks:
#                 doc_id = str(uuid.uuid4())
#                 docs[doc_id] = i

# print(f"Total chunks created: {len(docs)}")
# print("Adding chunks to collection...")
# for i in docs:
#     collection.add(ids=[i], documents=[docs[i]])
#     print(f"Added chunk with id {i} to collection")
# print("All chunks added to collection!")

RAG_prompt_template = '''
CONTEXT:
{retrieved_documents}

QUESTION:
{user_question}

INSTRUCTIONS:
Answer the QUESTION using only the information provided in the CONTEXT above.
Keep your answer grounded in the facts of the CONTEXT.
Use [chunk_id] notation immediately after each statement to cite sources.
If the CONTEXT doesn't contain enough information to fully answer the QUESTION, state: "I don't have enough information to answer this completely" and explain what's missing.
Match the language of the user's QUESTION in your response.

Provide a clear, factual answer based solely on the CONTEXT provided.
'''

# Query with caching
from pprint import pprint

prompt = "What services does RMHC offer?"
print(f"Query: {prompt}")
# Try cache first
print("\nChecking cache...")
cached = get_from_cache(prompt)

if cached:
    # Use cached results
    print("Using cached results:")
    doc_chunks = cached['documents']
    response_text = cached['response']
else:
    # Fetch from database
    print("Fetching from database...")
    res = collection.query(query_texts=[prompt], n_results=4)
    doc_chunks = [i for i in res['documents'][0]]
    
    # Generate response
    print("Generating response from LLM...")
    formatted_prompt = RAG_prompt_template.format(
        retrieved_documents='\n\n'.join(doc_chunks),
        user_question=prompt
    )
    
    from google import genai
    from google.genai.types import HttpOptions
    
    client_llm = genai.Client(api_key=os.getenv("GENAI_API_KEY"), http_options=HttpOptions(api_version="v1"))
    response = client_llm.models.generate_content(
        model="gemini-2.5-flash",
        contents=formatted_prompt,
        config=genai.types.GenerateContentConfig(
            max_output_tokens=1024,
            temperature=0.2,
            top_p=0.8,
            stop_sequences=["###"]
        )
    )
    response_text = response.text
    
    # Cache it
    save_to_cache(prompt, doc_chunks, response_text)

print(response_text)

# View cache stats
print(f"\n Cache size: {len(query_cache)} queries")

# Try cache again to see hit
cached = get_from_cache(prompt)
print(cached['response'])