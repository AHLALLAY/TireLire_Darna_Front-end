import handleApi from './../api.js'

async function login(email, password) {
    try {
        const response = await handleApi('/login', 'POST', { email, password });
        if (response.status === 'success') {
            console.log('services/login => success');
            return {
                success: true,
                data: response.data,
            };
        } else {
            console.error('services/login => failed');
            return {
                success: false,
                message: response.message || 'Erreur de connexion',
            };
        }
    } catch (error) {
        console.error(`services/login : ${error}`);
        return {
            success: false,
            message: `error: ${error}`,
        };
    }
}

export default login;