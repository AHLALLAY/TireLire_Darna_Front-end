import handleApi from './../api.js'

async function login(email, password) {
    try {
        const response = await handleApi('/login', 'POST', { email, password });
        if (response.status === 'success') {
            console.log('services/login => success');
            return {
                success: true,
                data: response.data
            };
        } else {
            console.error('services/login => failed');
            return {
                message:'error',
                success: false
            };
        }
    } catch (error) {
        console.error(`services/login : ${error}`);
        return {
            message: `error: ${error}`,
            success: false
        };
    }
}

export default {
    login
};