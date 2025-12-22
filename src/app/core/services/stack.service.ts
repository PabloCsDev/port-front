import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Stack } from '../../shared/models/stack.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  stack = signal<Stack | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private apiService: ApiService) {}

  fetchStack(): Observable<Stack> {
    this.loading.set(true);
    
    return this.apiService.get<Stack>('/stack').pipe(
      tap({
        next: (data) => {
          this.stack.set(data);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err.message);
          this.loading.set(false);
        }
      })
    );
  }
}
