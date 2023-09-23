import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { HttpError } from 'http-errors';
import createError from 'http-errors';
import { logger } from './config/logger';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  return res.status(200).json({ response: 'Home Route' });
});
app.get(
  '/test/error',
  async (_req: Request, _res: Response, next: NextFunction) => {
    const err = createError(401, 'Please check your access ');
    return next(err);
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.message);
  res.status(err.statusCode).json({
    name: err.name,
    statusCode: err.statusCode,
    message: err.message,
    details: [],
  });
});

export default app;
