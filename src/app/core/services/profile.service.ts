import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Profile } from '../../shared/models/profile.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = signal<Profile | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private apiService: ApiService) {}

  fetchProfile(): Observable<Profile> {
    this.loading.set(true);
    this.error.set(null);

    return this.apiService.get<Profile>('/profile').pipe(
      tap({
        next: (data) => {
          this.profile.set(data);
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
