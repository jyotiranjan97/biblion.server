import BookModel, { Book } from '../models/Book';

export class BookService {
  async createBook(bookData: Book): Promise<Book> {
    const newBook = new BookModel(bookData);
    await newBook.save();
    return newBook;
  }

  async getBooks(): Promise<Book[]> {
    return BookModel.find();
  }

  async getBookById(id: string): Promise<Book | null> {
    return BookModel.findById(id);
  }

  async updateBook(id: string, bookData: Book): Promise<Book | null> {
    return BookModel.findByIdAndUpdate(id, bookData);
  }
}
