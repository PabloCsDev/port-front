<table align="center"> <tr> <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" width="70"/></td> <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="70"/></td> <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="70"/></td> <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg" width="70"/></td> </tr> </table>
Frontend moderno desenvolvido em Angular 17+ para consumir a API REST Spring Boot de um portfólio profissional. Interface responsiva, performática e com foco em experiência do usuário, demonstrando boas práticas de desenvolvimento frontend.

### 🎯 Objetivo do Projeto
Criar uma interface profissional e moderna para exibir informações institucionais

Demonstrar consumo eficiente de APIs REST

Implementar boas práticas de desenvolvimento Angular (Standalone Components, Signals, etc.)

Proporcionar excelente experiência em dispositivos móveis e desktop

### ✨ Funcionalidades
✅ Interface responsiva com Tailwind CSS
✅ Dark/Light mode automático
✅ Animações suaves e transições otimizadas
✅ Consumo de API com tratamento de erros
✅ Componentes standalone (Angular 17+)
✅ Gerenciamento de estado com Signals
✅ SEO otimizado e performance
✅ Design system consistente

### 🏗 Arquitetura
```
Frontend Angular 17+
       ↓
    Services (API Calls)
       ↓
    Componentes Standalone
       ↓
   Interface do Usuário
   ```
O projeto segue uma arquitetura modular moderna, aproveitando ao máximo os recursos do Angular 17+.

### 📱 Telas Principais
🔹 Home - Apresentação profissional com stats e stack
🔹 Stack - Lista completa de tecnologias organizadas por categoria
🔹 Projects - Galeria de projetos com detalhes técnicos
🔹 Responsive - Layout adaptado para todos os dispositivos

### 🚀 Como executar o projeto
Pré-requisitos

```
Node.js 18+

npm 9+ ou yarn

Angular CLI 17+
```

### 1️⃣ Clonar o repositório

bash
git clone https://github.com/PabloCsDev/port-front.git
cd portfolio-frontend
### 2️⃣ Instalar dependências
```
bash
npm install
# ou
yarn install
``` 
### 3️⃣ Configurar API Backend
Certifique-se que a Portfolio API está rodando na porta 8080

### 4️⃣ Executar em desenvolvimento
```
bash
ng serve
# ou
npm start 
```

### 🌐 A aplicação estará disponível em:
```
http://localhost:4200
```

### 🧪 Scripts disponíveis
bash
# Servidor de desenvolvimento
```
npm run start
```
# Build para produção
```
npm run build
```
# Executar testes
```
npm run test
```
# Lint do código
```
npm run lint
```
# Preview do build
```
npm run preview
```
### 📁 Estrutura do Projeto
```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   │   ├── profile.service.ts
│   │   │   ├── theme.service.ts
│   │   │   └── index.ts
│   │   └── interceptors/
│   │       └── api.interceptor.ts
│   ├── features/
│   │   ├── home/
│   │   │   └── home.component.ts
│   │   ├── stack/
│   │   │   └── stack.component.ts
│   │   ├── projects/
│   │   │   └── projects.component.ts
│   │   └── shared/
│   │       ├── components/
│   │       │   ├── header/
│   │       │   ├── footer/
│   │       │   ├── loading/
│   │       │   └── error/
│   │       └── layouts/
│   │           └── main.layout.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.component.ts
├── assets/
│   ├── images/
│   └── styles/
│       └── global.scss
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── index.html
``` 
### 🛠 Tecnologias Utilizadas
Angular 17+ - Framework principal

TypeScript - Tipagem estática

Tailwind CSS - Estilização utilitária

RxJS - Programação reativa

ESLint - Padronização de código

Angular Signals - Gerenciamento de estado

Angular Router - Navegação SPA

Angular HttpClient - Comunicação HTTP

### 🎨 Design System
Cores: Gradientes modernos com paleta profissional

Tipografia: Fontes do sistema para performance

Espaçamento: Sistema 4px-based

Breakpoints: Mobile-first (sm:640px, md:768px, lg:1024px)

Componentes: Reutilizáveis e consistentes

### 🔮 Evoluções futuras (planejadas)
PWA (Progressive Web App)

Internacionalização (i18n)

Analytics integrado

Testes E2E com Cypress

Otimização de performance (Lazy Loading)

Integração com CMS Headless

Deploy automático CI/CD

### ⚡ Performance
Lighthouse Score: 95+ (Performance, Accessibility, SEO)

Bundle otimizado com tree-shaking

Imagens otimizadas e lazy loading

Code splitting automático

### 📱 Responsividade
Mobile (100% funcional)

Tablet (layout adaptativo)

Desktop (experiência completa)

Acessibilidade (WCAG 2.1)

### 👨‍💻 Desenvolvido por
Pablo Carvalho Santos
Desenvolvedor Full Stack | Angular & Spring Boot

📧 Email: devpablocarvalho@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/pablo-carvalho-140255260
💻 GitHub: https://github.com/PabloCsDev

