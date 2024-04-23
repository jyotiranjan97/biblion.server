import { Request, Response } from 'express';
import { BookService } from '../services/BookService';

export class BooksController {
  private bookService: BookService;
  public static instance: BooksController;

  constructor() {
    this.bookService = new BookService();
  }

  static getInstance() {
    if (!BooksController.instance) {
      BooksController.instance = new BooksController();
    }
    return BooksController.instance;
  }

  async createBook(req: Request, res: Response) {
    try {
      const bookData = req.body;
      const newBook = await this.bookService.createBook(bookData);
      res.status(201).json(newBook);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBooks(req: Request, res: Response) {
    try {
      const books = await this.bookService.getBooks();
      res.status(200).json(books);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBookById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const book = await this.bookService.getBookById(id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(book);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateBook(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const bookData = req.body;
      const updatedBook = await this.bookService.updateBook(id, bookData);
      if (!updatedBook) {
        res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(updatedBook);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
