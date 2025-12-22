import { Injectable } from '@angular/core';

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
  category: 'language' | 'framework' | 'tool' | 'infra' | 'concept';
}

@Injectable({
  providedIn: 'root'
})
export class TechIconsService {
  
  private techIcons: Map<string, TechIcon> = new Map([
    // Linguagens
    ['Java', { 
      name: 'Java', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#007396',
      category: 'language'
    }],
    ['JavaScript', { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
      category: 'language'
    }],
    ['SQL', { 
      name: 'SQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#4169E1',
      category: 'language'
    }],
    
    // Frameworks
    ['Spring Boot', { 
      name: 'Spring Boot', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: '#6DB33F',
      category: 'framework'
    }],
    ['JPA / Hibernate', { 
      name: 'Hibernate', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
      color: '#59666C',
      category: 'framework'
    }],
    
    // Infra & Tools
    ['RabbitMQ', { 
      name: 'RabbitMQ', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
      color: '#FF6600',
      category: 'infra'
    }],
    ['Redis', { 
      name: 'Redis', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: '#DC382D',
      category: 'infra'
    }],
    ['Docker', { 
      name: 'Docker', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED',
      category: 'infra'
    }],
    ['Git', { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      category: 'tool'
    }],
    ['GitHub', { 
      name: 'GitHub', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717',
      category: 'tool'
    }],
    
    // Conceitos (usaremos ícones genéricos)
    ['APIs REST', { 
      name: 'REST API', 
      icon: '🔄',
      color: '#00BCD4',
      category: 'concept'
    }],
    ['Processamento assíncrono', { 
      name: 'Async', 
      icon: '⚡',
      color: '#FF9800',
      category: 'concept'
    }],
    ['Arquitetura em camadas', { 
      name: 'Layers', 
      icon: '🏗️',
      color: '#9C27B0',
      category: 'concept'
    }],
    ['Clean Code', { 
      name: 'Clean Code', 
      icon: '✨',
      color: '#4CAF50',
      category: 'concept'
    }],
    ['SOLID', { 
      name: 'SOLID', 
      icon: '🧱',
      color: '#2196F3',
      category: 'concept'
    }],
  ]);

  getIconForTech(techName: string): TechIcon | undefined {
    return this.techIcons.get(techName);
  }

  getAllTechIcons(): TechIcon[] {
    return Array.from(this.techIcons.values());
  }

  getTechByCategory(category: TechIcon['category']): TechIcon[] {
    return this.getAllTechIcons().filter(tech => tech.category === category);
  }
}
