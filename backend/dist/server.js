import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { corsOptions } from './utils/cors-config.js';
import lookUp from './routes/lookup.routes.js';
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< Updated upstream
=======
//cors options
const corsOptions = {
    origin: process.env.FE_URL || '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
};
// Testing route
>>>>>>> Stashed changes
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
const port = parseInt(process.env.APP_PORT || '8080', 10);
app.use(cors(corsOptions));
// Routes
app.use(lookUp);
// Server Start
app.listen(port, () => {
    console.log(`Server is Running at PORT: ${port}`);
});
