import { Schema, model } from 'mongoose';

export interface Book {
  title: string;
  author: string;
  isbn: string;
  price: number;
  genre: string;
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
});

const BookModel = model<Book>('Book', bookSchema);

export default BookModel;
