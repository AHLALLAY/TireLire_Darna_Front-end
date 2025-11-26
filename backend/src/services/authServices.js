import User from './../models/user.js';
import bcrypt from 'bcryptjs';

class AuthService {

    async register(userData) {
        try {
            if (!userData.email || !userData.password) {
                return {
                    success: false,
                    message: 'Email et mot de passe sont requis'
                };
            }

            const userEmail = await User.findOne({ email: userData.email });
            if (userEmail) {
                return {
                    success: false, 
                    message: 'l\'email existe déjà'
                };
            }

            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const newUser = new User({
                ...userData,
                password: hashedPassword
            });

            await newUser.save();
            return {
                success: true,
                message: 'l\'utilisateur a été créé avec succès'
            };

        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            return {
                success: false,
                message: 'Erreur lors de l\'inscription',
                error: error.message
            };
        }
    }

    async login() {

    }
}

export default new AuthService();