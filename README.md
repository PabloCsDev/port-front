# 🚀 Portfolio Web — Frontend Full Stack

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" width="70"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="70"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="70"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="70"/>
</p>

Frontend institucional desenvolvido em **Angular moderno**, consumindo uma **API REST real em produção**, com foco em **arquitetura limpa, organização, performance e experiência do usuário**.

Este projeto faz parte de um **portfólio full stack profissional**, simulando um produto real de mercado com frontend e backend desacoplados.

---

## 🎯 Objetivo do Projeto

- Apresentar um portfólio profissional dinâmico e institucional  
- Consumir dados reais de uma API REST (Spring Boot)  
- Demonstrar domínio de arquitetura frontend moderna  
- Simular um cenário real de aplicação em produção  
- Servir como vitrine técnica para recrutadores e empresas  

---

## ✨ Funcionalidades

✅ Consumo de API REST em produção  
✅ Exibição dinâmica de perfil profissional  
✅ Listagem de stack tecnológica  
✅ Listagem de projetos técnicos  
✅ Separação clara de responsabilidades  
✅ Environment configurado para dev e produção  
✅ SSR + Prerender para melhor performance e SEO  
✅ UI responsiva e moderna  
✅ Deploy automatizado em cloud  

---

## 🏗 Arquitetura da Aplicação
```
Usuário
↓
Angular (SSR + Prerender)
↓
ApiService (HttpClient)
↓
API REST Spring Boot
```

O frontend é totalmente desacoplado do backend, consumindo dados via HTTP e permitindo escalabilidade, manutenção e evolução independentes.

---

## 🌐 Backend Consumido

API REST em produção (Spring Boot):
```
https://portifolio-api-bae0.onrender.com/api
```

### Endpoints utilizados
```
- `GET /profile` → Perfil profissional  
- `GET /stack` → Stack tecnológica  
- `GET /projects` → Projetos técnicos  
```
---

## 🧱 Estrutura do Projeto

```
src/
├── app/
│ ├── core/
│ │ └── services/
│ │ └── api.service.ts
│ ├── features/
│ │ ├── home/
│ │ ├── stack/
│ │ └── projects/
│ ├── shared/
│ │ └── components/
│ └── app.routes.ts
├── environments/
│ ├── environment.ts
│ └── environment.development.ts
└── styles.css
```

Arquitetura pensada para **escalabilidade, legibilidade, manutenção e crescimento do projeto**.

---

## ⚙️ Configuração de Environment

### Produção
```
export const environment = {
  production: true,
  apiUrl: 'https://portifolio-api-bae0.onrender.com/api'
};
```
```
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```
### 🚀 Como executar o projeto localmente
``` 
Pré-requisitos
Node.js 18+
Angular CLI 21+
```
### 1️⃣ Clonar o repositório
```
git clone https://github.com/PabloCsDev/portfolio-frontend.git
cd portfolio-frontend
```
### 2️⃣ Instalar dependências
```
npm install
```
### 3️⃣ Executar em desenvolvimento
```
ng serve
```
A aplicação estará disponível em:
```
http://localhost:4200
``` 
### 🏗 Build de Produção
```
npm run build
```
Arquivos gerados em:
```
dist/portfolio-frontend/browser
```
### ☁️ Deploy
Frontend hospedado na Vercel, utilizando:

Build automático

Prerender de rotas

Alta performance

HTTPS por padrão

Integração direta com API em produção

### 🔮 Evoluções Futuras (Planejadas)
Skeleton loaders e estados de loading

Cache e otimização de requisições

Integração com GitHub API

Página de contato dinâmica

Internacionalização (i18n)

Monitoramento e logs de erro

Animações e microinterações

### 👨‍💻 Desenvolvido por
Pablo Carvalho Santos
Desenvolvedor Back-end | Java & Spring Boot

📧 Email: devpablocarvalho@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/pablo-carvalho-140255260
💻 GitHub: https://github.com/PabloCsDev

