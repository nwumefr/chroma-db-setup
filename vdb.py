import chromadb
chroma_client = chromadb.PersistentClient('./tmp/chroma-db')
coll = chroma_client.get_collection('test')

prompt = "What is kubernetes?"

print(coll.query(query_texts=[prompt]))
