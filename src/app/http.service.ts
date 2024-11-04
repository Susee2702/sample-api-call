import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }
}
