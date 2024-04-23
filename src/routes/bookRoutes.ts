import { Router } from 'express';
import { BooksController } from '../controllers/bookController';

const bookRouter = Router();

const booksController = new BooksController(); // Create an instance

bookRouter.get('/books', (req, res) => {
  booksController.getBooks(req, res);
});

bookRouter.get('/books/:id', (req, res) => {
  booksController.getBookById(req, res);
});

bookRouter.post('/books', (req, res) => {
  booksController.createBook(req, res);
});

bookRouter.put('/books/:id', (req, res) => {
  booksController.updateBook(req, res);
});

export { bookRouter };
