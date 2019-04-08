import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http:HttpClient) { }

  getRepositories(){
    return this.http.get('localhost:8080/api/v1/yunussandikci');
  }
}
