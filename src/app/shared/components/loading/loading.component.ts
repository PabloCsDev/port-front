import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center p-12">
      <div class="relative">
        <div class="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 rounded-full"></div>
        <div class="w-16 h-16 border-4 border-primary-600 dark:border-primary-400 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
      </div>
      
      @if (message) {
        <p class="mt-4 text-gray-600 dark:text-gray-300 font-medium">{{ message }}</p>
      } @else {
        <p class="mt-4 text-gray-600 dark:text-gray-300 font-medium">Carregando...</p>
      }
      
      @if (subMessage) {
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ subMessage }}</p>
      }
    </div>
  `,
  styles: []
})
export class LoadingComponent {
  @Input() message?: string;
  @Input() subMessage?: string;
}
