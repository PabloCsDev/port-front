import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    const url = endpoint.startsWith('/')
      ? `${this.baseUrl}${endpoint}`
      : `${this.baseUrl}/${endpoint}`;

    return this.http.get<T>(url);
  }
}
