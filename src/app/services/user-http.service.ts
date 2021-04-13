import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url = 'http://localhost:8000/api/users';
  urlToAdd = 'http://localhost:8000/register';

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  deleteOne(id: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`);
  }

  add(user: User): Observable<User>{
    return this.http.post<User>(this.urlToAdd, user);
  }

}
