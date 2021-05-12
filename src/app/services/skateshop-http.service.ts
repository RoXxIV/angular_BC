import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skateshop } from '../model/skateshop';

@Injectable({
  providedIn: 'root'
})
export class SkateshopHttpService {

  // acces api
  url = 'http://localhost:8000/api/skateshops';

  constructor(private http: HttpClient) { }

  // Get all Skateshops
  findAll(): Observable<Skateshop[]> {
    return this.http.get<Skateshop[]>(this.url);
  }

  // Add a Skateshop
  add(skateshop: Skateshop): Observable<Skateshop>{
    return this.http.post<Skateshop>(this.url, skateshop);
  }

  // Find a Skateshop by ID
  findById(id: number): Observable<Skateshop> {
    return this.http.get<Skateshop>(`${this.url}/${id}`);
  }

  // Delete a Skateshop
  deleteOne(id: number): Observable<Skateshop>{
    return this.http.delete<Skateshop>(`${this.url}/${id}`);
  }
}
