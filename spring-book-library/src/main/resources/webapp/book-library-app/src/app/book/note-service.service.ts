import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from "./Book";
import {Note} from "./Note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) {
  }

  getNotes(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getNote(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  addNote(note: Object): Observable<Object> {
    return this.http.post(`${this.url}`, note);
  }

  editNote(note: Note): Observable<Object> {
    return this.http.put(`${this.url}/${note.id}`, note);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
