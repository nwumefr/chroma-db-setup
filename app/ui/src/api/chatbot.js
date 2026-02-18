const baseUrl = 'http://localhost:8080'

export async function getChatbotResponse(prompt) {
    const result = await fetch(`${baseUrl}/response`, {
        method: 'POST',
        body: JSON.stringify({ 'prompt': prompt }),
        headers: { 'Content-Type': 'application/json'}
    });
    console.log("result", result)
    const data = await result.json()
    console.log("data", data)

    return data.response || `Sorry, I'm having an issue answering your question.`;
}