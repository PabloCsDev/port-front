import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo com toque terminal -->
          <a routerLink="/" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-terminal-cyan to-terminal-purple flex items-center justify-center">
              <span class="text-white font-bold font-mono">PC</span>
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-terminal-cyan transition-colors">
                Pablo Carvalho
              </div>
              <div class="text-xs text-terminal-green font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                dev@pablo:~$
              </div>
            </div>
          </a>
          
          <!-- Desktop Menu - Clean com detalhes tech -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              routerLink="/" 
              routerLinkActive="text-terminal-cyan dark:text-terminal-cyan"
              class="text-gray-700 dark:text-gray-300 hover:text-terminal-cyan transition-colors font-medium relative group"
              [routerLinkActiveOptions]="{exact: true}"
            >
              Home
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              routerLink="/stack" 
              routerLinkActive="text-terminal-cyan dark:text-terminal-cyan"
              class="text-gray-700 dark:text-gray-300 hover:text-terminal-cyan transition-colors font-medium relative group"
            >
              Stack
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-green group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              routerLink="/projects" 
              routerLinkActive="text-terminal-cyan dark:text-terminal-cyan"
              class="text-gray-700 dark:text-gray-300 hover:text-terminal-cyan transition-colors font-medium relative group"
            >
              Projetos
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-purple group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <!-- Separador visual -->
            <div class="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
            
            <!-- Theme Toggle - Estilizado como botão de terminal -->
            <button 
              (click)="themeService.toggleTheme()"
              class="terminal-tag hover:bg-terminal-green/20 transition-colors"
              [attr.aria-label]="themeService.isDarkMode() ? 'Mudar para modo claro' : 'Mudar para modo escuro'"
            >
              @if (themeService.isDarkMode()) {
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
                <span>Light</span>
              } @else {
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                <span>Dark</span>
              }
            </button>
          </div>
          
          <!-- Mobile Menu Button - Simples -->
          <div class="md:hidden flex items-center space-x-4">
            <button 
              (click)="themeService.toggleTheme()"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              @if (themeService.isDarkMode()) {
                <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              } @else {
                <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              }
            </button>
            
            <button class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800" id="mobile-menu-button">
              <svg class="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  themeService = inject(ThemeService);
}
