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
    'Spring Boot': {
      name: 'Spring Boot',
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
    },
    GitHub: {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717',
      category: 'tool'
    },
    'JPA / Hibernate': {
      name: 'JPA / Hibernate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
      color: '#59666c',
      category: 'orm'
    },
    'APIs REST': {
      name: 'APIs REST',
      icon: '🌐',
      color: '#339933',
      category: 'api'
    },
    JavaScript: {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#f7df1e',
      category: 'language'
    },
    Redis: {
      name: 'Redis',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: '#dc382d',
      category: 'database'
    },
    RabbitMQ: {
      name: 'RabbitMQ',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
      color: '#ff6600',
      category: 'tool'
    },
    Linux: {
      name: 'Linux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      color: '#fcc624',
      category: 'os'
    },
    'Clean Code': {
      name: 'Clean Code',
      icon: '✨',
      color: '#4ade80',
      category: 'concept'
    },
    SOLID: {
      name: 'SOLID',
      icon: '🧱',
      color: '#3b82f6',
      category: 'concept'
    },
    'Arquitetura em camadas': {
      name: 'Arquitetura em camadas',
      icon: '🏗️',
      color: '#8b5cf6',
      category: 'concept'
    },
    'Processamento assíncrono': {
      name: 'Processamento assíncrono',
      icon: '⚡',
      color: '#ff9900',
      category: 'concept'
    }
  };

  getIconForTech(name: string): TechIcon {
    if (this.icons[name]) {
      return this.icons[name];
    }
    
    const lowerName = name.toLowerCase();
    const key = Object.keys(this.icons).find(k => k.toLowerCase() === lowerName);
    
    if (key) {
      return this.icons[key];
    }
    
    return {
      name: name,
      icon: '🔧',
      color: '#6b7280',
      category: 'general'
    };
  }

  getAllIcons(): TechIcon[] {
    return Object.values(this.icons);
  }
}