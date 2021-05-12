import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  // acces api
  url = 'http://localhost:8000/api/users';

  // Register a User
  urlAdd = 'http://localhost:8000/register';

  constructor(private http: HttpClient) { }

  // Get all Users
  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  // Add a User
  add(user: User): Observable<User>{
    return this.http.post<User>(this.urlAdd, user);
  }

  // Find a User by ID
  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  // Delete a User
  deleteOne(id: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
