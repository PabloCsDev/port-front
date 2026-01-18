import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../core/services/projects.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-200">
      <app-header />

      <main class="container mx-auto px-4 py-12">
        <div class="max-w-6xl mx-auto">

          <div class="mb-10 font-mono">
            <div class="flex items-center mb-1">
              <span class="text-blue-400 ml-2">❯</span>
              <span class="text-terminal-green ml-2">
                projects --list
              </span>
            </div>
            <div class="text-terminal-cyan text-base">
              projetos técnicos
            </div>
          </div>

          @if (projectsService.loading()) {
            <app-loading message="Carregando projetos..." />
          }

          @else if (projectsService.error()) {
            <app-error
              [message]="projectsService.error()!"
              (onRetry)="loadProjects()"
            />
          }

          @else {
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

              @for (project of projectsService.projects(); track project.title) {
                <div class="card-terminal border-blue-400/30 flex flex-col">

                  <h2 class="text-lg font-mono text-white mb-1">
                    <span class="text-blue-400">~/</span>{{ project.title }}
                  </h2>

                  <div class="text-terminal-cyan text-sm font-mono mb-3">
                    {{ project.summary }}
                  </div>

                  <p class="text-zinc-400 text-sm mb-4 flex-1">
                    {{ project.description }}
                  </p>

                  <div class="mb-4">
                    <div class="text-code-comment font-mono text-xs mb-2">
                      stack:
                    </div>

                    <div class="flex flex-wrap gap-2">
                      @for (tech of project.stack; track tech) {
                        <span
                          class="px-2 py-1 text-xs font-mono rounded
                                 bg-code-border/30 text-terminal-green
                                 border border-blue-400/20"
                        >
                          {{ tech }}
                        </span>
                      }
                    </div>
                  </div>

                  <a
                    [href]="project.repositoryUrl"
                    target="_blank"
                    class="btn-terminal font-mono text-sm text-center"
                  >
                    abrir repositório
                  </a>
                </div>
              }

              <!-- CARD NOVOS PROJETOS -->
              <div
                class="card-terminal border-dashed border-blue-400/40
                       font-mono relative overflow-hidden"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r
                         from-transparent via-blue-400/10 to-transparent
                         animate-[scan_4s_linear_infinite]"
                ></div>

                <div class="relative text-center">
                  <div class="text-terminal-green mb-2 text-base">
                    ~/projects
                  </div>

                  <div class="text-terminal-cyan text-sm mb-4">
                    inicializando novos módulos…
                  </div>

                  <div class="flex justify-center gap-2 mb-4">
                    <span class="px-2 py-1 text-xs border border-blue-400/30 text-terminal-green">
                      em desenvolvimento
                    </span>
                    <span class="px-2 py-1 text-xs border border-blue-400/30 text-terminal-green">
                      refatoração
                    </span>
                    <span class="px-2 py-1 text-xs border border-blue-400/30 text-terminal-green">
                      testes
                    </span>
                  </div>

                  <div class="text-code-comment text-xs">
                    aguardando novos commits…
                  </div>
                </div>
              </div>

            </div>
          }

          <div class="mt-10 text-center">
            <a routerLink="/" class="btn-terminal font-mono inline-flex items-center">
              <span class="text-terminal-green">cd</span>
              <span class="ml-2">..</span>
            </a>
          </div>

        </div>
      </main>

      <app-footer />
    </div>
  `
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.loadProjects();
  }

  ngAfterViewInit(): void {}

  loadProjects(): void {
    this.projectsService.fetchProjects().subscribe();
  }
}
