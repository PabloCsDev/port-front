import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header
      class="sticky top-0 z-50
             bg-white/70 dark:bg-gray-900/70
             backdrop-blur-md border-b
             border-gray-200 dark:border-gray-800"
    >
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">

        <!-- Terminal identity -->
        <div class="flex items-center gap-3 font-mono text-sm">
          <span class="text-green-600 dark:text-green-400 animate-pulse">●</span>
          <span class="text-gray-900 dark:text-gray-100">
            pablo@dev
          </span>
          <span class="text-gray-400">:~$</span>
        </div>


        <!-- Navigation -->
        <nav class="flex items-center gap-6 text-sm font-medium">
          <a
            routerLink="/"
            routerLinkActive="text-indigo-500 dark:text-indigo-400"
            class="text-gray-700 dark:text-gray-300 hover:text-indigo-500
 dark:hover:text-indigo-400 transition-colors"
          >
            Home
          </a>
          <a
            routerLink="/stack"
            routerLinkActive="text-blue-600 dark:text-blue-400"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Stack
          </a>
          <a
            routerLink="/projects"
            routerLinkActive="text-blue-600 dark:text-blue-400"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projetos
          </a>
        </nav>

      </div>
    </header>
  `
})
export class HeaderComponent {}
