import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../model/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModelHttpService {

  url = 'http://localhost:8000/api/models';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }
  add(model: Model): Observable<Model>{
    return this.http.post<Model>(this.url, model);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  findById(id: number): Observable<Model> {
    return this.http.get<Model>(`${this.url}/${id}`);
  }

  deleteOne(id: number): Observable<Model>{
    return this.http.delete<Model>(`${this.url}/${id}`);
  }

}
