import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StackService } from '../../core/services/stack.service';
import { TechIconsService, TechIcon } from '../../core/services/tech-icons.service';
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
          <!-- Terminal Header -->
          <div class="command-line mb-12">
            <div class="flex items-center mb-2">
              <span class="text-terminal-red font-mono">❯</span>
              <span class="text-terminal-green font-mono ml-2">tech_stack --show-all --with-icons</span>
              <span class="ml-2 h-4 w-2 bg-terminal-green animate-blink"></span>
            </div>
            <div class="text-terminal-cyan font-mono text-lg">
              Explorando o arsenal tecnológico
            </div>
          </div>
          
          @if (stackService.loading()) {
            <div class="mt-12">
              <app-loading 
                message="Carregando stack tecnológica..."
                subMessage="Buscando dados do repositório..."
              />
            </div>
          }
          
          @else if (stackService.error()) {
            <div class="mt-12">
              <app-error 
                [message]="stackService.error()!"
                (onRetry)="loadStack()"
              />
            </div>
          }
          
          @else if (stackService.stack()) {
            <div class="space-y-12">
              <!-- Linguagens -->
              <section class="animate-fade-in">
                <div class="flex items-center mb-6">
                  <div class="w-3 h-3 rounded-full bg-terminal-red mr-3"></div>
                  <h2 class="text-2xl font-bold text-white font-mono">
                    <span class="text-terminal-blue">/</span> linguagens
                  </h2>
                  <span class="ml-4 text-code-comment font-mono text-sm">
                    ({{ stackService.stack()!.languages.length }})
                  </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  @for (language of stackService.stack()!.languages; track language; let i = $index) {
                    @let techIcon = getTechIcon(language);
                    <div 
                      class="card-terminal hover-lift" 
                      [style.animation-delay]="(i * 0.1) + 's'"
                    >
                      <div class="flex items-center">
                        @if (techIcon) {
                          <div class="w-12 h-12 rounded-lg bg-code-border/30 flex items-center justify-center mr-4">
                            @if (techIcon.icon.startsWith('http')) {
                              <img 
                                [src]="techIcon.icon" 
                                [alt]="techIcon.name" 
                                class="w-8 h-8"
                                [style.filter]="'brightness(1.2)'"
                              />
                            } @else {
                              <span class="text-2xl">{{ techIcon.icon }}</span>
                            }
                          </div>
                        }
                        <div>
                          <h3 class="font-bold text-white" [style.color]="techIcon?.color">
                            {{ language }}
                          </h3>
                          @if (techIcon) {
                            <div class="text-code-comment text-sm mt-1">
                              {{ techIcon.category }}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </section>
              
              <!-- Frameworks -->
              <section class="animate-fade-in">
                <div class="flex items-center mb-6">
                  <div class="w-3 h-3 rounded-full bg-terminal-yellow mr-3"></div>
                  <h2 class="text-2xl font-bold text-white font-mono">
                    <span class="text-terminal-purple">/</span> frameworks
                  </h2>
                  <span class="ml-4 text-code-comment font-mono text-sm">
                    ({{ stackService.stack()!.frameworks.length }})
                  </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  @for (framework of stackService.stack()!.frameworks; track framework; let i = $index) {
                    @let techIcon = getTechIcon(framework);
                    <div 
                      class="card-terminal hover-lift" 
                      [style.animation-delay]="(i * 0.1 + 0.3) + 's'"
                    >
                      <div class="flex items-center">
                        @if (techIcon) {
                          <div 
                            class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                            [style.backgroundColor]="techIcon.color + '20'"
                          >
                            @if (techIcon.icon.startsWith('http')) {
                              <img 
                                [src]="techIcon.icon" 
                                [alt]="techIcon.name" 
                                class="w-8 h-8"
                              />
                            } @else {
                              <span class="text-2xl">{{ techIcon.icon }}</span>
                            }
                          </div>
                        }
                        <div>
                          <h3 class="font-bold text-white">
                            {{ framework }}
                          </h3>
                          <div class="text-code-comment text-sm mt-1">
                            {{ techIcon?.category || 'framework' }}
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </section>
              
              <!-- Infraestrutura -->
              <section class="animate-fade-in">
                <div class="flex items-center mb-6">
                  <div class="w-3 h-3 rounded-full bg-terminal-green mr-3"></div>
                  <h2 class="text-2xl font-bold text-white font-mono">
                    <span class="text-terminal-cyan">/</span> infra & ferramentas
                  </h2>
                  <span class="ml-4 text-code-comment font-mono text-sm">
                    ({{ stackService.stack()!.infrastructure.length }})
                  </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  @for (infra of stackService.stack()!.infrastructure; track infra; let i = $index) {
                    @let techIcon = getTechIcon(infra);
                    <div 
                      class="card-terminal hover-lift" 
                      [style.animation-delay]="(i * 0.1 + 0.6) + 's'"
                    >
                      <div class="flex items-center">
                        @if (techIcon) {
                          <div class="w-12 h-12 rounded-lg bg-code-border/30 flex items-center justify-center mr-4">
                            @if (techIcon.icon.startsWith('http')) {
                              <img 
                                [src]="techIcon.icon" 
                                [alt]="techIcon.name" 
                                class="w-8 h-8"
                              />
                            } @else {
                              <span class="text-2xl">{{ techIcon.icon }}</span>
                            }
                          </div>
                        }
                        <div>
                          <h3 class="font-bold text-white">
                            {{ infra }}
                          </h3>
                          <div class="text-code-comment text-sm mt-1">
                            {{ techIcon?.category || 'tool' }}
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </section>
              
              <!-- Conceitos -->
              <section class="animate-fade-in">
                <div class="flex items-center mb-6">
                  <div class="w-3 h-3 rounded-full bg-terminal-cyan mr-3"></div>
                  <h2 class="text-2xl font-bold text-white font-mono">
                    <span class="text-terminal-green">/</span> conceitos & práticas
                  </h2>
                  <span class="ml-4 text-code-comment font-mono text-sm">
                    ({{ stackService.stack()!.concepts.length }})
                  </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  @for (concept of stackService.stack()!.concepts; track concept; let i = $index) {
                    @let techIcon = getTechIcon(concept);
                    <div 
                      class="card-terminal hover-lift" 
                      [style.animation-delay]="(i * 0.1 + 0.9) + 's'"
                    >
                      <div class="flex items-center">
                        @if (techIcon) {
                          <div 
                            class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                            [style.backgroundColor]="techIcon.color + '20'"
                          >
                            <span class="text-2xl">{{ techIcon.icon }}</span>
                          </div>
                        } @else {
                          <div class="w-12 h-12 rounded-lg bg-code-border/30 flex items-center justify-center mr-4">
                            <span class="text-2xl">💡</span>
                          </div>
                        }
                        <div>
                          <h3 class="font-bold text-white">
                            {{ concept }}
                          </h3>
                          <div class="text-code-comment text-sm mt-1">
                            {{ techIcon?.category || 'concept' }}
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </section>
            </div>
            
            <!-- Stats Footer -->
            <div class="mt-16 card-terminal">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-terminal-green font-mono">
                    {{ getTotalItems() }}
                  </div>
                  <div class="text-code-comment text-sm mt-1">Total Items</div>
                </div>
                
                <div class="text-center">
                  <div class="text-3xl font-bold text-terminal-cyan font-mono">
                    {{ getUniqueCategories() }}
                  </div>
                  <div class="text-code-comment text-sm mt-1">Categories</div>
                </div>
                
                <div class="text-center">
                  <div class="text-3xl font-bold text-terminal-purple font-mono">
                    100%
                  </div>
                  <div class="text-code-comment text-sm mt-1">Production Ready</div>
                </div>
                
                <div class="text-center">
                  <div class="text-3xl font-bold text-terminal-yellow font-mono">
                    Always
                  </div>
                  <div class="text-code-comment text-sm mt-1">Learning</div>
                </div>
              </div>
            </div>
          }
          
          <!-- Back Command -->
          <div class="mt-12 text-center">
            <a 
              routerLink="/"
              class="btn-terminal inline-flex items-center"
            >
              <span class="text-terminal-red font-mono">cd</span>
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
  
  ngOnInit(): void {
    this.loadStack();
  }
  
  ngAfterViewInit(): void {
    this.initStaggerAnimation();
  }
  
  loadStack(): void {
    this.stackService.fetchStack().subscribe();
  }
  
  getTechIcon(techName: string): TechIcon | undefined {
    return this.techIconsService.getIconForTech(techName);
  }
  
  getTotalItems(): number {
    if (!this.stackService.stack()) return 0;
    const stack = this.stackService.stack()!;
    return stack.languages.length + stack.frameworks.length + 
           stack.infrastructure.length + stack.concepts.length;
  }
  
  getUniqueCategories(): number {
    return 4; // linguagens, frameworks, infra, conceitos
  }
  
  initStaggerAnimation(): void {
    // Animação em cascata para os cards
    const cards = document.querySelectorAll('.hover-lift');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.05}s`;
    });
  }
}
