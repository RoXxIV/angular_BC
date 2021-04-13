import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertHttpService {

  url = 'http://localhost:8000/api/adverts';


  constructor(private http: HttpClient) { }

  findAll(): Observable<Advert[]> {
    return this.http.get<Advert[]>(this.url);
  }
  add(advert: Advert): Observable<Advert>{
    return this.http.post<Advert>(this.url, advert);
  }

  findById(id: number): Observable<Advert> {
    return this.http.get<Advert>(`${this.url}/${id}`);
  }

  deleteOne(id: number): Observable<Advert>{
    return this.http.delete<Advert>(`${this.url}/${id}`);
  }
}
