"""
RAG chatbot with embedding-based query cache. Used by the FastAPI /response endpoint.
Copied the logic from vdb-cached.py to this file for use by the api.
"""
import os
import sys
import logging
import numpy as np
import chromadb
import google.genai as genai
from dotenv import load_dotenv

load_dotenv()


# We don't need logging to show in stdout for now
logging.basicConfig(
    level=logging.INFO, 
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)]
)

logger = logging.getLogger("chroma-db-chatbot")

# Project root (chroma-db-setup); two levels up from app/api/chatbot.py
_PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
CHROMA_PATH = os.path.join(_PROJECT_ROOT, "tmp", "chroma-db")
RMHC_DOCS_DIR = os.path.join(_PROJECT_ROOT, "rmhc_docs")

# GenAI client for embeddings
_client = genai.Client(api_key=os.getenv("GENAI_API_KEY"))
query_cache: dict = {}
SIMILARITY_THRESHOLD = 0.92

RAG_prompt_template = """
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
"""


def cosine_similarity(vec1, vec2):
    vec1_np = np.array(vec1)
    vec2_np = np.array(vec2)
    dot = np.dot(vec1_np, vec2_np)
    norm = np.linalg.norm(vec1_np) * np.linalg.norm(vec2_np)
    return dot / norm if norm != 0 else 0.0


def get_query_embedding(query: str):
    response = _client.models.embed_content(
        model="gemini-embedding-001",
        contents=[query],
        config=genai.types.EmbedContentConfig(task_type="retrieval_query"),
    )
    return response.embeddings[0].values


def get_from_cache(query: str) -> dict | None:
    query_emb = get_query_embedding(query)
    if query in query_cache:
        return query_cache[query]
    for cached_query, cached_data in query_cache.items():
        sim = cosine_similarity(query_emb, cached_data["embedding"])
        if sim >= SIMILARITY_THRESHOLD:
            return cached_data
    return None


def save_to_cache(query: str, documents: list, response: str):
    query_emb = get_query_embedding(query)
    query_cache[query] = {
        "embedding": query_emb,
        "documents": documents,
        "response": response,
    }


class GeminiEmbeddingFunction(chromadb.EmbeddingFunction):
    def __call__(self, input: chromadb.Documents) -> chromadb.Embeddings:
        response = _client.models.embed_content(
            model="gemini-embedding-001",
            contents=input,
            config=genai.types.EmbedContentConfig(
                task_type="retrieval_document",
                title="Custom query",
            ),
        )
        return response.embeddings[0].values


def _get_collection():
    chroma_client = chromadb.PersistentClient(CHROMA_PATH)
    try:
        collection = chroma_client.get_collection(
            name="rmhc", embedding_function=GeminiEmbeddingFunction()
        )
        logger.info("Retrieved existing collection")
    except Exception:
        collection = chroma_client.create_collection(
            name="rmhc", embedding_function=GeminiEmbeddingFunction()
        )
    try:
        n = collection.count()
    except Exception:
        n = 0
    if n == 0:
        logger.info("Created new collection")
        chunk_docs(collection)
        logger.info("Chunks added to collection")
    else:
        logger.info(f"Collection already has {n} documents")

    return collection


_collection = None


def get_collection():
    global _collection
    logger.info("Getting collection")
    if _collection is None:
        _collection = _get_collection()
        logger.info("Collection created")
    return _collection


def chunk_docs(collection):
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
                logger.info(chunk)    
                logger.info('chunk limit reached')
                chunks.append(tokenizer.convert_tokens_to_string(chunk))
                chunk = []
            chunk.append(tokens[i])
            logger.info(f'Token {i}: {tokens[i]}')
            
        if chunk:  # Append the last chunk if it exists
            logger.info(chunk)
            chunks.append(tokenizer.convert_tokens_to_string(chunk))
        return chunks

    import uuid

    docs = {}

    rmhc_docs_dir = os.path.join(_PROJECT_ROOT, "rmhc_docs")
    logger.info(rmhc_docs_dir)
    for filename in os.listdir(rmhc_docs_dir):
        logger.info(filename)
        if filename.endswith(('.txt','.md')):
            with open(os.path.join(rmhc_docs_dir, filename), 'rb') as f:
                # read doc
                content = f.read().decode('utf-8', errors='ignore')
                # chunk doc into 500 token chunks
                chunks = chunker(content, chunk_size=500)
                # add chunks to docs dict with unique id
                for i in chunks:
                    doc_id = str(uuid.uuid4())
                    docs[doc_id] = i

    logger.info(f"Total chunks created: {len(docs)}")
    logger.info("Adding chunks to collection...")
    for i in docs:
        collection.add(ids=[i], documents=[docs[i]])
        logger.info(f"Added chunk with id {i} to collection")
    logger.info("All chunks added to collection!")

def get_chat_response(prompt: str, n_results: int = 4) -> str:
    """
    Run the RAG pipeline: check cache -> query Chroma -> generate with Gemini -> cache.
    Returns the model response text.
    """

    logger.info("Hello logger")
    cached = get_from_cache(prompt)
    if cached:
        return cached["response"]

    collection = get_collection()
    res = collection.query(query_texts=[prompt], n_results=n_results)
    doc_chunks = list(res["documents"][0])

    formatted_prompt = RAG_prompt_template.format(
        retrieved_documents="\n\n".join(doc_chunks),
        user_question=prompt,
    )

    from google.genai.types import HttpOptions

    client_llm = genai.Client(api_key=os.getenv("GENAI_API_KEY"), http_options=HttpOptions(api_version="v1"))
    response = client_llm.models.generate_content(
        model="gemini-2.5-flash",
        contents=formatted_prompt,
        config=genai.types.GenerateContentConfig(
            max_output_tokens=1024,
            temperature=0.2,
            top_p=0.8,
            stop_sequences=["###"],
        ),
    )
    response_text = response.text or ""

    save_to_cache(prompt, doc_chunks, response_text)
    return response_text
