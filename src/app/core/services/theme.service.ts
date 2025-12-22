import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  
  isDarkMode = signal(true);
  
  constructor() {
    // Carregar tema salvo
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      // Verificar preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }
    
    // Aplicar tema inicial
    this.applyTheme();
    
    // Escutar mudanças no sinal
    effect(() => {
      this.applyTheme();
      this.saveTheme();
    });
  }
  
  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
  }
  
  private applyTheme(): void {
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  private saveTheme(): void {
    localStorage.setItem(this.THEME_KEY, this.isDarkMode() ? 'dark' : 'light');
  }
}
