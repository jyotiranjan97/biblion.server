import { Request, Response } from 'express';

export async function getBooks(req: Request, res: Response) {
  res.send('All books');
}
