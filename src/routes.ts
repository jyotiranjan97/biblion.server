import { Request, Response } from 'express';

export const helloWorldRoute = (req: Request, res: Response) => {
  res.send('Hello World!');
};
