import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  login(credentials: User): Observable<any> {
    return this.http.post(this.url + 'login_check', {
      username: credentials.username,
      password: credentials.password
    });
  }
  saveUser(token: string): Observable<Object>{
    const httpOptions = {
    headers: new HttpHeaders({ Authorization: `Bearer ${token}`})
  };
    return this.http.get(`${this.url}api/user`, httpOptions);
  }
}
