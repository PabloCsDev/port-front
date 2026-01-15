import { Injectable } from '@angular/core';

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class TechIconsService {

  private icons: Record<string, TechIcon> = {
    Java: {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#f89820',
      category: 'language'
    },
    TypeScript: {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178c6',
      category: 'language'
    },
    Angular: {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      color: '#dd0031',
      category: 'framework'
    },
    Spring: {
      name: 'Spring',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: '#6db33f',
      category: 'framework'
    },
    'Spring Security': {
      name: 'Spring Security',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: '#6db33f',
      category: 'security'
    },
    PostgreSQL: {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#336791',
      category: 'database'
    },
    MySQL: {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479a1',
      category: 'database'
    },
    Docker: {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ed',
      category: 'infrastructure'
    },
    Git: {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#f05032',
      category: 'tool'
    }
  };

  getIconForTech(name: string): TechIcon | undefined {
    if (this.icons[name]) {
      return this.icons[name];
    }
    const lowerName = name.toLowerCase();
    const key = Object.keys(this.icons).find(k => k.toLowerCase() === lowerName);
    return key ? this.icons[key] : undefined;
  }
}