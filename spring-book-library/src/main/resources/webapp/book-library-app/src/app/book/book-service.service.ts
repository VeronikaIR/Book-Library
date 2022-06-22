import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from "./Book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://localhost:8080/books';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  addBook(book: Object): Observable<Object> {
    return this.http.post(`${this.url}`, book);
  }

  addBookNote(bookId: number, note: Object): Observable<Object> {
    return this.http.post(`${this.url}/${bookId}/notes`, note);
  }

  editBook(book: Book): Observable<Object> {
    return this.http.put(`${this.url}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
