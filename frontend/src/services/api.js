const API_BASE = 'http://localhost:3000';

async function handleApi(endpoint, methode = 'GET', body = null, token = null) {
    try {
        const api = API_BASE + endpoint;
        const header = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        }
        
        const options = {
            method: methode,
            headers: header
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(api, options);
        if (!response.ok) {
            return {
                message: `error: ${response.status}`,
                status: 'failed'
            };
        }

        return response.json();
    } catch (error) {
        return {
            message: `error: ${error}`,
            status: 'failed',
            error: error.name
        };
    }
}

export default handleApi;