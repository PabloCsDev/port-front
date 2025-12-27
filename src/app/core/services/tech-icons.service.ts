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

  private icons: Map<string, TechIcon> = new Map();

  constructor() {
    this.initializeIcons();
  }

  private initializeIcons(): void {
    // Todos os ícones do Devicon como você mostrou
    const icons: [string, TechIcon][] = [
      // Java e Spring
      ['Java', { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#f89820', category: 'backend' }],
      ['Java 17+', { name: 'Java 17+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#f89820', category: 'backend' }],
      ['Java 17', { name: 'Java 17', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#f89820', category: 'backend' }],
      ['Spring', { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6db33f', category: 'backend' }],
      ['Spring Boot', { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6db33f', category: 'backend' }],
      ['Spring Boot 3', { name: 'Spring Boot 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6db33f', category: 'backend' }],
      ['Spring Security', { name: 'Spring Security', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6db33f', category: 'backend' }],
      ['JPA', { name: 'JPA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', color: '#59666c', category: 'backend' }],
      ['Hibernate', { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', color: '#59666c', category: 'backend' }],
      ['JPA / Hibernate', { name: 'JPA / Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', color: '#59666c', category: 'backend' }],
      ['Maven', { name: 'Maven', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg', color: '#c71a36', category: 'backend' }],
      ['Gradle', { name: 'Gradle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg', color: '#02303a', category: 'backend' }],
      
      // Frontend
      ['Angular', { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', color: '#dd0031', category: 'frontend' }],
      ['TypeScript', { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178c6', category: 'frontend' }],
      ['Tailwind CSS', { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#38b2ac', category: 'frontend' }],
      ['RxJS', { name: 'RxJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactivex/reactivex-original.svg', color: '#b7178c', category: 'frontend' }],
      ['JavaScript', { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e', category: 'frontend' }],
      ['HTML5', { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34f26', category: 'frontend' }],
      ['CSS3', { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572b6', category: 'frontend' }],
      
      // Databases
      ['PostgreSQL', { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' }],
      ['MySQL', { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1', category: 'database' }],
      ['MongoDB', { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47a248', category: 'database' }],
      ['Redis', { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#d82c20', category: 'database' }],
      
      // DevOps & Tools
      ['Docker', { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ed', category: 'devops' }],
      ['Linux', { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#fcc624', category: 'devops' }],
      ['Ubuntu', { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', color: '#e95420', category: 'devops' }],
      ['Git', { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#f05032', category: 'devops' }],
      ['GitHub', { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717', category: 'devops' }],
      ['Git / GitHub', { name: 'Git / GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717', category: 'devops' }],
      ['CI/CD', { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#d24939', category: 'devops' }],
      ['Jenkins', { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#d24939', category: 'devops' }],
      ['AWS', { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#ff9900', category: 'devops' }],
      ['Azure', { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078d4', category: 'devops' }],
      ['Kubernetes', { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326ce5', category: 'devops' }],
      ['Nginx', { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', color: '#269539', category: 'devops' }],
      ['Apache', { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', color: '#d22128', category: 'devops' }],
      
      // Fallbacks para tecnologias que não tem no Devicon
      ['RxJS 7', { name: 'RxJS 7', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactivex/reactivex-original.svg', color: '#b7178c', category: 'frontend' }],
      ['Tailwind', { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#38b2ac', category: 'frontend' }],
      ['Postgres', { name: 'Postgres', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791', category: 'database' }],
      ['Docker Compose', { name: 'Docker Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ed', category: 'devops' }],
      ['CI CD', { name: 'CI CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#d24939', category: 'devops' }],
    ];

    // Adiciona todas as combinações
    icons.forEach(([key, icon]) => {
      this.icons.set(key.toLowerCase(), icon);
      
      // Adiciona sem espaços
      const withoutSpaces = key.replace(/\s+/g, '').toLowerCase();
      if (withoutSpaces !== key.toLowerCase()) {
        this.icons.set(withoutSpaces, icon);
      }
      
      // Adiciona apenas primeira palavra
      const firstWord = key.split(' ')[0].toLowerCase();
      if (firstWord !== key.toLowerCase()) {
        this.icons.set(firstWord, icon);
      }
    });
  }

  getIconForTech(name: string): TechIcon | undefined {
    if (!name) return undefined;
    
    const normalized = name.toLowerCase().trim();
    
    // 1. Busca exata
    let icon = this.icons.get(normalized);
    
    // 2. Busca por palavras-chave
    if (!icon) {
      const keywords = normalized.split(/[\s\/\+-]+/);
      
      for (const keyword of keywords) {
        icon = this.icons.get(keyword);
        if (icon) break;
      }
    }
    
    // 3. Busca parcial
    if (!icon) {
      for (const [key, value] of this.icons) {
        if (normalized.includes(key) || key.includes(normalized)) {
          icon = value;
          break;
        }
      }
    }
    
    return icon;
  }
}