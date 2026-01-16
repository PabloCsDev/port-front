import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StackService } from '../../core/services/stack.service';
import { TechIconsService, TechIcon } from '../../core/services/tech-icons.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { StackResponse } from '../../shared/models/stack.model';

@Component({
  selector: 'app-stack',
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
    <div class="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-200">
      <app-header />

      <main class="container mx-auto px-4 py-12">
        <div class="max-w-6xl mx-auto">
          <div class="command-line mb-12">
            <div class="flex items-center mb-2">
              <span class="text-blue-400 font-mono ml-2">❯</span>
              <span class="text-terminal-green font-mono ml-2">tech_stack --show-all --with-icons</span>
              <span class="ml-2 h-4 w-2 bg-blue-400 animate-blink"></span>
            </div>
            <div class="text-terminal-cyan font-mono, AfterViewInit text-lg">
              Explorando o arsenal tecnológico
            </div>
          </div>

          @if (stackService.loading()) {
            <app-loading message="Carregando stack tecnológica..." />
          }

          @else if (stackService.error()) {
            <app-error [message]="stackService.error()!" (onRetry)="loadStack()" />
          }

          @else if (stack()) {
            <div class="space-y-12">
              @for (category of stack()!.categories; track category.id) {
                <section>
                  <div class="flex items-center mb-6">
                    <h2 class="text-2xl font-bold text-white font-mono">
                      <span class="text-blue-400">/</span> {{ category.label }}
                    </h2>
                    <span class="ml-4 text-code-comment font-mono text-sm">
                      ({{ category.items.length }})
                    </span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    @for (item of category.items; track item.name) {
                      @let techIcon = getTechIcon(item.name);
                      <div class="card-terminal hover-lift border-blue-400/30 hover:border-blue-400">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-12 h-12 rounded-lg bg-code-border/30 flex items-center justify-center mr-4">
                              @if (techIcon) {
                                @if (techIcon.icon.startsWith('http')) {
                                  <img [src]="techIcon.icon" class="w-8 h-8" />
                                } @else {
                                  <span class="text-2xl">{{ techIcon.icon }}</span>
                                }
                              } @else {
                                <span class="text-xl">⚙️</span>
                              }
                            </div>
                            <div>
                              <h3 class="font-bold text-white">{{ item.name }}</h3>
                              <div class="text-code-comment text-sm">
                                {{ techIcon?.category || 'tech' }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </section>
              }

              <div class="card-terminal mt-12 text-center">
                <div class=" text-terminal-green font-mono ml-2font-mono text-lg">
                  {{ stack()!.meta.learningMessage }}
                </div>
              </div>
            </div>
          }

          <div class="mt-12 text-center">
            <a routerLink="/" class="text-terminal-green font-mono ml-2 btn-terminal inline-flex items-center">
              <span class="text-terminal-green font-mono ml-2 font-mono">cd</span>
              <span class="ml-2">..</span>
            </a>
          </div>
        </div>
      </main>

      <app-footer />
    </div>
  `,
  styles: []
})
export class StackComponent implements OnInit, AfterViewInit {
  stackService = inject(StackService);
  techIconsService = inject(TechIconsService);

  stack = () => this.stackService.stack() as StackResponse | null;

  ngOnInit(): void {
    this.loadStack();
  }
ngAfterViewInit(): void {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

  loadStack(): void {
    this.stackService.fetchStack().subscribe();
  }

  getTechIcon(name: string): TechIcon | undefined {
    return this.techIconsService.getIconForTech(name);
  }
}

