import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/lookup.routes.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors options
const corsOptions = {
  origin: process.env.FE_URL || '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel');
});
const port: number = parseInt(process.env.APP_PORT || '8080', 10);

app.use(cors(corsOptions));
// Routes
app.use(userRouter);

// Server Start
app.listen(port, () => {
  console.log(`Server is Running at PORT: ${port}`);
});
