import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, model_validator
import json

from chatbot import get_chat_response

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"]
)


class ChatRequest(BaseModel):
    prompt: str

    @model_validator(mode="before")
    @classmethod
    def validate_to_json(cls, value):
        if isinstance(value, str):
            try:
                return json.loads(value)
            except json.JSONDecodeError:
                return value
        return value


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/response")
async def post_response(body: ChatRequest):
    # Run blocking RAG/LLM call in a thread so the event loop isn't blocked
    response_text = get_chat_response(body.prompt)
    return {"response": response_text}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8080)
