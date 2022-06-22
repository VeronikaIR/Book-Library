import {Note} from "./Note";

export class Book {
  id: number;
  title: string;
  genre: string;
  author: string;
  isbn: string;
  coverUrl: string;
  notes: Note[];
}
