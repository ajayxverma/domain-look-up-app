import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import lookUp from './routes/lookup.routes.js';
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Testing route
app.get('/', (_req, res) => {
    return res.send('Service is running on Vercel');
});
const port = parseInt(process.env.APP_PORT || '8080', 10);
app.use(cors());
// Routes
app.use(lookUp);
// Server Start
app.listen(port, () => {
    console.log(`Server is Running at PORT: ${port}`);
});
