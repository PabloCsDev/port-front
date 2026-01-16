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

        <div class="flex items-center gap-3 font-mono text-sm">
          <span class="text-blue-400 mb-2 dark:text-green-400 animate-pulse">●</span>
          <a
            routerLink="/"
            class="font-mono cursor-pointer hover:text-blue-400 transition-colors"
          >
            pablo@dev
          </a>
          <span class="text-gray-400">:~$</span>
        </div>

        <nav class="flex items-center gap-6 text-sm font-medium">

          <a
            routerLink="/"
            routerLinkActive="text-blue-400"
            [routerLinkActiveOptions]="{ exact: true }"
            class="relative px-3 py-2 font-mono transition-all duration-300 hover:text-blue-400 mb-2
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                   after:bg-blue-400 after:transition-all after:duration-300
                   hover:after:w-full"
          >
            Home
          </a>

          <a
            routerLink="/stack"
            routerLinkActive="text-blue-400"
            class="relative px-3 py-2 font-mono transition-all duration-300 hover:text-blue-400 mb-2
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                   after:bg-blue-400 after:transition-all after:duration-300
                   hover:after:w-full"
          >
            Stack
          </a>

          <a
            routerLink="/projects"
           routerLinkActive="text-blue-400"
            class="relative px-3 py-2 font-mono transition-all duration-300 hover:text-blue-400 mb-2
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                   after:bg-blue-400 after:transition-all after:duration-300
                   hover:after:w-full"
          >
            Projects
          </a>

        </nav>

      </div>
    </header>
  `
})
export class HeaderComponent {}
