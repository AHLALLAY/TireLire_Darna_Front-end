import authServices from "../services/authServices.js";

class AuthController{
    async register(req, res){
        try{
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Données manquantes'
                });
            }

            const result = await authServices.register(req.body);

            if(result.success){
                return res.status(201).json(result);
            }

            return res.status(400).json(result);
        }catch(error){
            return res.status(500).json({
                success:false,
                message: error.message
            });
        }
    }

    async login(){

    }
}


export default new AuthController();