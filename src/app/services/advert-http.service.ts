import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertHttpService {

  // acces api
  url = 'http://localhost:8000/api/adverts';

  constructor(private http: HttpClient) { }

  // Get all Adverts
  findAll(): Observable<Advert[]> {
    return this.http.get<Advert[]>(this.url);
  }

  // Add an Advert
  add(advert: Advert): Observable<Advert>{
    return this.http.post<Advert>(this.url, advert);
  }

  // Find an Adbert by ID
  findById(id: number): Observable<Advert> {
    return this.http.get<Advert>(`${this.url}/${id}`);
  }

  // Delete an Advert
  deleteOne(id: number): Observable<Advert>{
    return this.http.delete<Advert>(`${this.url}/${id}`);
  }
}
