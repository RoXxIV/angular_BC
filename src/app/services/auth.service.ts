import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'http://localhost:8000/';

  constructor(private http: HttpClient, private jwtToken: JwtHelperService) { }

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

  // Check whether the token is expired and return
   isAuthenticated(): boolean {
    const token = window.sessionStorage.getItem('auth-token');
    return !this.jwtToken.isTokenExpired(token);
  }
}
