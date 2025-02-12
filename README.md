# 📱 Calculadora Next.js + Tailwind CSS

Este é um projeto de calculadora simples construído com **Next.js** e **Tailwind CSS**.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- React (useState para gerenciar o estado da calculadora)
- Typescript

## 📂 Estrutura do Projeto

```
aula03-react-tailwind/
│── src/
│   ├── app/
│   │   ├── page.tsx (Página principal)
│   ├── components/
│   │   ├── Calculator.tsx (Componente da calculadora)
│── public/
│── styles/
│── package.json
│── README.md
```

## 🛠️ Instalação e Configuração

### 1️⃣ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (instalado com o Node.js)
- Um editor de código, como [VS Code](https://code.visualstudio.com/)

### 2️⃣ Criar o projeto Next.js

Para instalar o Next.js com TypeScript e Tailwind CSS, execute no terminal:

```sh
npx create-next-app@latest next-calculadora
```

Durante a instalação, selecione as seguintes opções:

- **TypeScript?** Sim
- **ESLint?** Sim
- **Tailwind CSS?** Sim
- **App Router (em vez de Pages Router)?** Sim
- **src/** Sim
- **Import alias?** Sim

Entre na pasta do projeto:

```sh
cd next-calculadora
```

### 3️⃣ Instalar dependências:

Caso necessário, instale manualmente as dependências:

```sh
npm install
```

### 4️⃣ Rodar o projeto:

```sh
npm run dev
```

Abra no navegador: [http://localhost:3000](http://localhost:3000)

## 🎨 Interface

A calculadora possui um design responsivo e minimalista, com botões estilizados usando Tailwind CSS.

## 🔢 Funcionalidades

✅ Adição, subtração, multiplicação e divisão
✅ Entrada de números e ponto decimal
✅ Botão de limpar (`C`)
✅ Exibição do resultado em tempo real

## 🤖 Melhorias Futuras

- [ ] Histórico de cálculos
- [ ] Suporte a teclas do teclado
- [ ] Melhor tratamento de erros
