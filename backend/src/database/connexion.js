import mongoose from 'mongoose';


class Connexion{
    async connectToDb(uri){
        try{
            const conn =await mongoose.connect(uri);
            
            return conn;
        }catch(error){
            console.log(`error while connecting to db : ${error.message}`);
            return false;
        }
    }

}

export default new Connexion();