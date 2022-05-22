import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {List} from "./List";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {
  }

  getLists(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getList(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  addList(list: Object): Observable<Object> {
    return this.http.post(`${this.url}`, list);
  }

  editList(list: List): Observable<Object> {
    return this.http.put(`${this.url}/${list.id}`, list);
  }

  deleteList(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
