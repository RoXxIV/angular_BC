import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../model/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModelHttpService {

  url = 'http://127.0.0.1:8000/api/models';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url);
  }
  add(model: Model): Observable<Model>{
    return this.http.post<Model>(this.url, model);
  }

  findById(id: number): Observable<Model> {
    return this.http.get<Model>(`${this.url}/${id}`);
  }

  deleteOne(id: number): Observable<Model>{
    return this.http.delete<Model>(`${this.url}/${id}`);
  }
}
