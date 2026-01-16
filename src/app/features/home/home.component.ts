import { Component, OnInit, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../core/services/profile.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LoadingComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
<div class="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-200">
  <app-header />

  <main class="container mx-auto px-4 py-16">
    @if (profileService.loading()) {
      <div class="mt-24">
        <app-loading />
      </div>
    }

    @else if (profileService.error()) {
      <div class="mt-24">
        <app-error
          [message]="profileService.error()!"
          (onRetry)="loadProfile()"
        />
      </div>
    }

    @else if (profileService.profile()) {
      <div class="max-w-6xl mx-auto">
        <section class="text-center mb-20">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            {{ profileService.profile()!.name }}
          </h1>

          <div class="inline-block mb-8">
            <div class="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900">
              <div class="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 border-b border-zinc-700">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              </div>
              <div class="px-4 py-2 font-mono text-sm">
                <span class="text-indigo-400">➜</span>
                <span class="text-zinc-300"> Desenvolvedor Back-end | Java</span>
              </div>
            </div>
          </div>

          <p class="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            {{ profileService.profile()!.summary }}
          </p>
          
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div class="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-xl p-6">
            <div class="text-4xl font-bold text-blue-400 mb-2">Dezenas</div>
            <div class="font-semibold text-zinc-200 text-lg">Projetos Desenvolvidos</div>
            <p class="text-sm text-zinc-400 mt-2">Arquitetura e boas práticas</p>
          </div>

          <div class="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-xl p-6">
            <div class="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div class="font-semibold text-zinc-200 text-lg">Código Aberto</div>
            <p class="text-sm text-zinc-400 mt-2">Repositórios públicos</p>
          </div>

          <div class="bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-xl p-6">
            <div class="text-4xl font-bold text-blue-400 mb-2">+2 Anos</div>
            <div class="font-semibold text-zinc-200 text-lg">Back-end Java</div>
            <p class="text-sm text-zinc-400 mt-2">APIs REST e sistemas</p>
          </div>
        </section>
        <div class="flex justify-center mt-10">
  <div class="inline-flex items-center px-4 py-2 bg-emerald-900/30 border border-emerald-700 rounded-lg space-x-2">
    <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
    <span class="text-emerald-300 font-mono text-sm typing">
      API Back-end Online • Dados consumidos em tempo real
    </span>
  </div>
</div>

  <br>
        <!-- STACK TECNOLÓGICA -->
            <div class="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl p-8 mb-16 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <h2 class="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                🛠 Stack Tecnológica Principal
              </h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Backend -->
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-900/10 transition-all duration-300">
                  <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12z"/>
                      <path d="M14.7 16.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.28 3.3z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Backend</h3>
                  <ul class="space-y-2">
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      Java 
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      Spring Boot 
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      Spring Security
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      JPA/Hibernate
                    </li>
                  </ul>
                </div>
                
                <!-- Frontend -->
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 dark:hover:from-purple-900/20 dark:hover:to-purple-900/10 transition-all duration-300">
                  <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 mb-4">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Frontend</h3>
                  <ul class="space-y-2">
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      Angular 
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      TypeScript
                    </li>
                     <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                      JavaScript
                    </li>
                  </ul>
                </div>
                
                <!-- Banco de Dados -->
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 dark:hover:from-green-900/20 dark:hover:to-green-900/10 transition-all duration-300">
                  <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 7v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm14 0H6v10h12V7zm-1-3h2v2h-2V4zm-4 0h2v2h-2V4zM9 4h2v2H9V4zM5 4h2v2H5V4z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Banco de Dados</h3>
                  <ul class="space-y-2">
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      PostgreSQL
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      MySQL
                    </li>
                    
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Redis
                    </li>
                  </ul>
                </div>
                
                <!-- DevOps -->
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 dark:hover:from-red-900/20 dark:hover:to-red-900/10 transition-all duration-300">
                  <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 mb-4">
                    <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">DevOps & Tools</h3>
                  <ul class="space-y-2">
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      Docker
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      Git/GitHub
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      Linux
                    </li>
                    <li class="flex items-center text-gray-700 dark:text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      RabbitMQ
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="text-center mt-10">
                <a 
                  routerLink="/stack"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Ver Stack Completa</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="text-center mb-24">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                🚀 Explore Mais
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Confira meus projetos completos
              </p>
              
              <div class="flex flex-col sm:flex-row justify-center gap-6">
            
                
                <a 
                  routerLink="/projects"
                  class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-700 to-indigo-800
 dark:from-gray-700 dark:to-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                  Ver Projetos
                </a>
              </div>
              
              
            </div>
            
            <!-- CONTATO -->
            <div class="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl p-8 mb-16 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <h2 class="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                📞 Contato & Informações
              </h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-6">
                  <div class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-indigo-500 dark:text-indigo-400
" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Localização</h3>
                      <p class="text-gray-600 dark:text-gray-300">
                        {{ profileService.profile()!.location }}
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    <div class="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                      <a 
                        href="mailto:{{ profileService.profile()!.email }}"
                        class="break-all sm:break-normal text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium hover:underline"
                      >
                        {{ profileService.profile()!.email }}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-6">
                  <div class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    <div class="w-12 h-12 rounded-xl bg-gray-900 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white mb-1">GitHub</h3>
                      <a 
                        [href]="profileService.profile()!.github"
                        target="_blank"
                        class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium hover:underline"
                      >
                        {{ profileService.profile()!.github.replace('https://', '') }}
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    <div class="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
                      <a 
                        [href]="profileService.profile()!.linkedin"
                        target="_blank"
                        class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium hover:underline"
                      >
                        {{ profileService.profile()!.linkedin.replace('https://', '') }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-10">
  <div class="inline-flex items-center px-4 py-2 bg-emerald-900/30 border border-emerald-700 rounded-lg space-x-2">
    <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
    <span class="text-emerald-300 font-mono text-sm typing">
      Site densenvolvido com arquitetura Full Stack: Spring Boot API + Angular Front-end
    </span>
  </div>
</div>

      
          </div>
        }
      </main>
      
      <app-footer />
  `,
  styles: [],
})
export class HomeComponent implements OnInit, AfterViewInit {

  profileService = inject(ProfileService);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadProfile();
    }
    
  }
  ngAfterViewInit(): void {
  if (!isPlatformBrowser(this.platformId)) return;

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


  loadProfile(): void {
    this.profileService.fetchProfile().subscribe();
  }
}
