import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandHttpService {

  url = 'http://127.0.0.1:8000/api/brands';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.url);
  }
}
