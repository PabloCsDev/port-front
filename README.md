# 🚀 Portfolio Web — Frontend Full Stack

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" width="70"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="70"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="70"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="70"/>
</p>

Frontend institucional desenvolvido com **Angular moderno**, utilizando **SSR (Server-Side Rendering) + Prerender**, consumindo uma **API REST real em produção**, com foco em **arquitetura limpa, organização, performance e experiência do usuário**.

Este projeto faz parte de um **portfólio full stack profissional**, simulando um produto real de mercado, com frontend e backend totalmente desacoplados.

---

## 🎯 Objetivo do Projeto

- Apresentar um portfólio profissional dinâmico e institucional  
- Consumir dados reais de uma API REST (Spring Boot)  
- Demonstrar domínio de arquitetura frontend moderna  
- Simular um cenário real de aplicação em produção  
- Servir como vitrine técnica para recrutadores e empresas  

---

## ✨ Funcionalidades

- ✅ Consumo de API REST em produção  
- ✅ Exibição dinâmica de perfil profissional  
- ✅ Listagem de stack tecnológica  
- ✅ Listagem de projetos técnicos  
- ✅ Separação clara de responsabilidades  
- ✅ Environment configurado para dev e produção  
- ✅ **SSR (Angular Universal) + Prerender**  
- ✅ UI responsiva e moderna  
- ✅ Deploy automatizado em cloud  

---

## 🧠 Renderização (SSR)

Este projeto utiliza **Angular Universal**, permitindo que as páginas sejam **renderizadas no servidor** antes de chegar ao navegador.

Arquivos responsáveis:
- `server.ts`  
- `main.server.ts`  
- `app.routes.server.ts`  
- `app.config.server.ts`  

**Benefícios do SSR:**
- Melhor SEO  
- Melhor tempo de carregamento inicial (TTFB)  
- Melhor indexação por motores de busca  
- Experiência de usuário mais fluida  

---

## 🏗 Arquitetura da Aplicação
```
Usuário
↓
Angular (SSR + Prerender)
↓
ApiService (HttpClient + Interceptor)
↓
API REST Spring Boot (Railway)
```

O frontend é totalmente desacoplado do backend, consumindo dados via HTTP, o que permite escalabilidade, manutenção e evolução independentes.

---

## 🌐 Backend Consumido

API REST em produção (Spring Boot) no Railway:
```
https://port-api.up.railway.app/api
```
### Endpoints utilizados
```
GET /profile → Perfil profissional

GET /stack → Stack tecnológica

GET /projects → Projetos técnicos
```
---

## 🧱 Estrutura do Projeto
```
src
├── app
│   ├── app.component.ts
│   ├── app.config.server.ts
│   ├── app.config.ts
│   ├── app.html
│   ├── app.routes.server.ts
│   ├── app.routes.ts
│   ├── app.scss
│   ├── app.spec.ts
│   ├── app.ts
│   ├── core
│   │   ├── interceptors
│   │   │   └── api.interceptor.ts
│   │   ├── service
│   │   │   └── theme.service.ts
│   │   └── services
│   │       ├── api.service.ts
│   │       ├── profile.service.ts
│   │       ├── projects.service.ts
│   │       ├── stack.service.ts
│   │       ├── tech-icons.service.ts
│   │       └── theme.service.ts
│   ├── features
│   │   ├── home
│   │   │   └── home.component.ts
│   │   ├── projects
│   │   │   └── projects.component.ts
│   │   └── stack
│   │       └── stack.component.ts
│   └── shared
│       ├── components
│       │   ├── error
│       │   │   └── error.component.ts
│       │   ├── footer
│       │   │   └── footer.component.ts
│       │   ├── header
│       │   │   └── header.component.ts
│       │   └── loading
│       │       └── loading.component.ts
│       └── models
│           ├── api-response.model.ts
│           ├── profile.model.ts
│           ├── project.model.ts
│           └── stack.model.ts
├── assets
│   └── curriculo.pdf
├── environments
│   ├── environment.development.ts
│   ├── environment.prod.ts
│   ├── environment.production.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.server.ts
├── main.ts
├── server.ts
└── styles.scss
```
Arquitetura pensada para **escalabilidade, legibilidade, manutenção e crescimento**.

---

## ⚙️ Configuração de Environment

### Produção
```
export const environment = {
  production: true,
  apiUrl: 'https://port-api.up.railway.app/api'
};
```
Desenvolvimento
```
export  const  environment  = {
	production: false,
	apiUrl: 'https://port-api.up.railway.app/api'
};
```
🚀 Como executar o projeto localmente
Pré-requisitos
Node.js 18+

Angular CLI 21+

1️⃣ Clonar o repositório
```
git clone https://github.com/PabloCsDev/portfolio-frontend.git
cd portfolio-frontend
```
2️⃣ Instalar dependências
```
npm install
```
3️⃣ Executar em desenvolvimento
```
ng serve
```
A aplicação estará disponível em:
```
http://localhost:4200
```
🏗 Build de Produção
```
npm run build
```
Arquivos gerados em:
```
dist/portfolio-frontend/browser
```
☁️ Deploy
Frontend hospedado na Vercel

Build automático

SSR + Prerender de rotas

Alta performance

HTTPS por padrão

Integração direta com API em produção

🔮 Evoluções Futuras (Planejadas)
Skeleton loaders e estados de loading

Cache e otimização de requisições

Integração com GitHub API

Página de contato dinâmica

Internacionalização (i18n)

Monitoramento e logs de erro

Animações e microinterações

👨‍💻 Desenvolvido por
Pablo Carvalho Santos
Desenvolvedor Back-end | Java & Spring Boot

📧 Email: devpablocarvalho@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/pablo-carvalho-140255260
💻 GitHub: https://github.com/PabloCsDev
