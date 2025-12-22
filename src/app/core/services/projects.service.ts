import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Project } from '../../shared/models/project.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = signal<Project[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private apiService: ApiService) {}

  fetchProjects(): Observable<Project[]> {
    this.loading.set(true);
    
    return this.apiService.get<Project[]>('/projects').pipe(
      tap({
        next: (data) => {
          this.projects.set(data);
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
