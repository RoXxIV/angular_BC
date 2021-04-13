import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skateshop } from '../model/skateshop';

@Injectable({
  providedIn: 'root'
})
export class SkateshopHttpService {

  url = 'http://localhost:8000/api/skateshops';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Skateshop[]> {
    return this.http.get<Skateshop[]>(this.url);
  }
  add(skateshop: Skateshop): Observable<Skateshop>{
    return this.http.post<Skateshop>(this.url, skateshop);
  }

  findById(id: number): Observable<Skateshop> {
    return this.http.get<Skateshop>(`${this.url}/${id}`);
  }

  deleteOne(id: number): Observable<Skateshop>{
    return this.http.delete<Skateshop>(`${this.url}/${id}`);
  }
}
