import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    LoadingComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <app-header />

      <main class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Projetos Técnicos
        </h1>

        @if (projectsService.loading()) {
          <app-loading />
        }

        @else if (projectsService.error()) {
          <app-error
            [message]="projectsService.error()!"
            (onRetry)="loadProjects()"
          />
        }

        @else {
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            @for (project of projectsService.projects(); track project.title) {
              <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-all flex flex-col">

                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ project.title }}
                </h2>

                <p class="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {{ project.summary }}
                </p>

                <p class="text-gray-600 dark:text-gray-300 mb-6 flex-1">
                  {{ project.description }}
                </p>

                <div class="mb-6">
                  <p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tecnologias utilizadas:
                  </p>

                  <div class="flex flex-wrap gap-2">
                    @for (tech of project.stack; track tech) {
                      <span
                        class="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700
                               dark:bg-blue-900/40 dark:text-blue-300"
                      >
                        {{ tech }}
                      </span>
                    }
                  </div>
                </div>

                <a
                  [href]="project.repositoryUrl"
                  target="_blank"
                  class="mt-auto inline-flex justify-center items-center px-6 py-3
                         bg-gray-900 dark:bg-gray-700 text-white font-semibold
                         rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all"
                >
                  Ver repositório no GitHub
                </a>
              </div>
            }
          </div>
        }
      </main>

      <app-footer />
    </div>
  `
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
