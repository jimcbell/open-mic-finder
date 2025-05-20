import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});
app.use(router);

export { app };
