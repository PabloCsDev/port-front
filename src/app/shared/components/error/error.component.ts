import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
      <div class="flex items-center">
        <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
        <h3 class="ml-3 text-sm font-medium text-red-800 dark:text-red-200">
          Erro ao carregar dados
        </h3>
      </div>
      <div class="mt-2 text-sm text-red-700 dark:text-red-300">
        {{ message }}
      </div>
      <div class="mt-4">
        <button 
          (click)="onRetry.emit()"
          class="text-sm font-medium text-red-800 dark:text-red-200 hover:text-red-900 dark:hover:text-red-100"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class ErrorComponent {
  @Input() message: string = 'Ocorreu um erro ao carregar os dados.';
  @Output() onRetry = new EventEmitter<void>();
}