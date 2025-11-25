import express from 'express';
import dotenv from 'dotenv';

import Connexion from './src/database/connexion.js';
import authRoutes from './src/routes/authRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
const connectToDb = async () => {
    const result = await Connexion.connectToDb(process.env.MONGODB_URI);
    if(result){
        console.log("connected to DB");
        return true;
    }else{
        console.log("error while connecting to DB");
        return false;
    }
}

app.listen(port, async() => {
    const dbConnected = await connectToDb();
    if (!dbConnected) {
        console.error('Impossible de démarrer le serveur sans connexion DB');
        process.exit(1);
    }
    console.log(`server running on http://localhost:${port}/`);
});

export default app;