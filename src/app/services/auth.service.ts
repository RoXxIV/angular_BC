import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://127.0.0.1:8000/';


  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.url + 'login_check', {
      username,
      password
    });
  }

  // tslint:disable-next-line:ban-types
  saveUser(token: string): Observable<Object>{

    const httpOptions = {
  headers: new HttpHeaders({ Authorization: 'Bearer' + token})
};

    return this.http.get(this.url + 'api/user', httpOptions);
  }

  /*register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }*/
}
