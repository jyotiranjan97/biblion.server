import { Router } from 'express';
import { getBooks } from '../controllers/bookController';

const bookRouter = Router();

bookRouter.get('/', (req, res) => {
  getBooks(req, res);
});

export { bookRouter };
