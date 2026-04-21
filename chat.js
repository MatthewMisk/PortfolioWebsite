// netlify/functions/chat.js
exports.handler = async function(event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { messages } = JSON.parse(event.body);
        
        // This securely pulls the API key from Netlify's environment variables
        const GROQ_API_KEY = process.env.GROQ_API_KEY;

        if (!GROQ_API_KEY) {
            return { 
                statusCode: 500, 
                body: JSON.stringify({ error: 'Missing API Key in environment variables' }) 
            };
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: messages,
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            return { statusCode: response.status, body: JSON.stringify({ error: errorText }) };
        }

        const data = await response.json();
        
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};