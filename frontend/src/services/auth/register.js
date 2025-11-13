import handleApi from './../api.js'

async function register(fullName, email, password) {
    try {
        const body = {
            fullName: fullName,
            email: email,
            password: password,
        };
        const response = await handleApi('/register', 'POST', body);
        if (response.status === 'success') {
            console.log('services/register => success');
            return {
                success: true,
                data: response.data,
            };
        } else {
            console.error('services/register => failed');
            return {
                success: false,
                message:'error',
            };
        }
    } catch (error) {
        console.error(`services/register : ${error}`);
        return {
            success: false,
            message: `error: ${error}`,
        };
    }
}

export default register;