import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  importRepositoryFromGithubByUsername(username): Observable<any> {
    return this.http.get(endpoint + 'github/import/' + username).pipe(map(this.extractData));
  }

  getImportedRepositoriesByUsername(username): Observable<any> {
    return this.http.get(endpoint + 'projects/' + username).pipe(map(this.extractData));
  }

}
