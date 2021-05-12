import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../model/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModelHttpService {

  // acces api
  url = 'http://localhost:8000/api/models';

  constructor(private http: HttpClient) { }

  // Get all Models
  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }

  // Add a Model
  add(model: Model): Observable<Model>{
    return this.http.post<Model>(this.url, model);
  }

  // Update a Model
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  // Find a Model by ID
  findById(id: number): Observable<Model> {
    return this.http.get<Model>(`${this.url}/${id}`);
  }

  // Delete a Model
  deleteOne(id: number): Observable<Model>{
    return this.http.delete<Model>(`${this.url}/${id}`);
  }

}
