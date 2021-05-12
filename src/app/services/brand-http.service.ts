import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandHttpService {

  // acces api
  url = 'http://localhost:8000/api/brands';

  constructor(private http: HttpClient) { }

  // Get all Brands
  findAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.url);
  }

  // Add a Brand
  add(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>(this.url, brand);
  }

  // Update a Brand
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  // Find a Brand by ID
  findById(id: any): Observable<Brand> {
    return this.http.get<Brand>(`${this.url}/${id}`);
  }

  // Remove a Brand
  deleteOne(id: number): Observable<Brand>{
    return this.http.delete<Brand>(`${this.url}/${id}`);
  }
}
