import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    LoadingComponent, 
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <app-header />
      
      <main class="container mx-auto px-4 py-12">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Projetos Técnicos
          </h1>
          <p class="text-gray-600 dark:text-gray-400 mb-12">
            Sistemas reais que demonstram habilidades práticas em desenvolvimento back-end
          </p>
          
          @if (projectsService.loading()) {
            <app-loading />
          }
          
          @else if (projectsService.error()) {
            <app-error 
              [message]="projectsService.error()!"
              (onRetry)="loadProjects()"
            />
          }
          
          @else if (projectsService.projects().length > 0) {
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              @for (project of projectsService.projects(); track project.id) {
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                        {{ project.title }}
                      </h3>
                      <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                        ID: {{ project.id }}
                      </span>
                    </div>
                    
                    <div class="mb-4">
                      <span class="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        {{ project.summary }}
                      </span>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                      {{ project.description }}
                    </p>
                    
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        Tecnologias utilizadas:
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        @for (tech of project.stack; track tech) {
                          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">
                            {{ tech }}
                          </span>
                        }
                      </div>
                    </div>
                  </div>
                  
                  <div class="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      [href]="project.repositoryUrl"
                      target="_blank"
                      class="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Ver repositório
                    </a>
                  </div>
                </div>
              }
            </div>
          }
          
          <div class="mt-12 text-center">
            <a 
              routerLink="/"
              class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
              </svg>
              Voltar para Home
            </a>
          </div>
        </div>
      </main>
      
      <app-footer />
    </div>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {
  projectsService = inject(ProjectsService);
  
  ngOnInit(): void {
    this.loadProjects();
  }
  
  loadProjects(): void {
    this.projectsService.fetchProjects().subscribe();
  }
}
