import { useState, useCallback } from 'react';
import { getChatbotResponse } from '../lib/chatbot';

export default function useChatbot() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [response, setResponse] = useState('');
    const useChatting = useCallback(async (prompt = '') => {
        setIsLoading(true)
        setError('')
        try {
            const data = await getChatbotResponse(prompt);
            console.log("data", data)
            setResponse(data);

        } catch (err) {
            console.error("Unexpected error", err)
            setError(err)
            setResponse(`Sorry, I'm having an issue answering your question.`)
        }
        setIsLoading(false)
    }, [prompt])

    return {useChatting, response, error, isLoading}
}
