import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StackService } from '../../core/services/stack.service';
import { TechIconsService } from '../../core/services/tech-icons.service';
import { StackCategory } from '../../shared/models/stack.model';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

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
<div class="min-h-screen bg-code-bg scanlines">
  <app-header />

  <main class="container mx-auto px-4 py-12">
    <div class="max-w-6xl mx-auto">

      <div class="command-line mb-12">
        <div class="flex items-center mb-2">
          <span class="text-terminal-red font-mono">❯</span>
          <span class="text-terminal-green font-mono ml-2">
            tech_stack --show-all --with-icons
          </span>
          <span class="ml-2 h-4 w-2 bg-terminal-green animate-blink"></span>
        </div>
        <div class="text-terminal-cyan font-mono text-lg">
          Explorando o arsenal tecnológico
        </div>
      </div>

      @if (stackService.loading()) {
        <app-loading message="Carregando stack tecnológica..." />
      }

      @else if (stackService.error()) {
        <app-error
          [message]="stackService.error() || 'Ocorreu um erro ao carregar a stack'"
          (onRetry)="stackService.fetchStack().subscribe()"
        />
      }

      @else {
        <div class="space-y-14">

          @for (category of categories; track category.id) {
            <section>
              <div class="flex items-center mb-6">
                <div class="w-3 h-3 rounded-full bg-terminal-green mr-3"></div>
                <h2 class="text-2xl font-bold text-white font-mono">
                  <span class="text-terminal-blue">/</span> {{ category.label }}
                </h2>
                <span class="ml-4 text-code-comment font-mono text-sm">
                  ({{ category.items.length }})
                </span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                @for (item of category.items; track item.name) {
                  @let icon = getIcon(item.name);

                  <div class="card-terminal hover-lift">
                    <div class="flex items-center">
                      <div class="w-12 h-12 rounded-lg bg-code-border/30 flex items-center justify-center mr-4">
                        @if (icon && icon.icon && icon.icon.startsWith('http')) {
                          <img
                            [src]="icon.icon"
                            [alt]="item.name"
                            class="w-8 h-8"
                          />
                        } @else if (icon && icon.icon) {
                          <span class="text-2xl">{{ icon.icon }}</span>
                        } @else {
                          <span class="text-xl">⬡</span>
                        }
                      </div>

                      <div>
                        <h3 class="font-bold text-white">
                          {{ item.name }}
                        </h3>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </section>
          }

          <div class="card-terminal mt-16">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div class="text-3xl font-bold text-terminal-green font-mono">
                  {{ getTotalItems() }}
                </div>
                <div class="text-code-comment text-sm">Total Items</div>
              </div>

              <div>
                <div class="text-3xl font-bold text-terminal-cyan font-mono">
                  {{ categories.length }}
                </div>
                <div class="text-code-comment text-sm">Categories</div>
              </div>

              <div>
                <div class="text-3xl font-bold text-terminal-purple font-mono">
                  100%
                </div>
                <div class="text-code-comment text-sm">Production Ready</div>
              </div>

              <div>
                <div class="text-3xl font-bold text-terminal-yellow font-mono">
                  Always
                </div>
                <div class="text-code-comment text-sm">Learning</div>
              </div>
            </div>
          </div>

          <div class="mt-12 text-center">
            <a routerLink="/" class="btn-terminal inline-flex items-center">
              <span class="text-terminal-red font-mono">cd</span>
              <span class="ml-2">..</span>
            </a>
          </div>

        </div>
      }

    </div>
  </main>

  <app-footer />
</div>
  `
})
export class StackComponent implements OnInit {
  stackService = inject(StackService);
  techIconsService = inject(TechIconsService);

  ngOnInit(): void {
    this.stackService.fetchStack().subscribe();
  }

  get categories(): StackCategory[] {
    return this.stackService.stack()?.categories ?? [];
  }

  getIcon(name: string) {
    return this.techIconsService.getIconForTech(name);
  }

  getTotalItems(): number {
    return this.categories.reduce((total, category) => {
      return total + category.items.length;
    }, 0);
  }
}