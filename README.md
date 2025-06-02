# KiSite - Template Moderno com Next.js e Flowbite React

Este é um template moderno e otimizado para desenvolvimento web, construído com Next.js 15 e Flowbite React. O projeto oferece uma base sólida para criar sites profissionais com componentes reutilizáveis e animações suaves.

## 🚀 Tecnologias Principais

- Next.js 15
- React 19
- Flowbite React
- TypeScript
- Tailwind CSS
- Framer Motion
- Swiper
- Animate.css

## 📦 Estrutura do Projeto

```
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── button/
│   │   ├── carousel/
│   │   ├── factsSection/
│   │   ├── features/
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── projectsPortifolio/
│   │   └── servicesSection/
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── ...
```

## 🛠️ Como Usar

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Para build de produção:

```bash
npm run build
```

5. Para iniciar em produção:

```bash
npm start
```

## ✨ Funcionalidades

- Design responsivo
- Animações suaves com Framer Motion
- Componentes reutilizáveis do Flowbite
- SEO otimizado
- Carrossel de imagens com Swiper
- Seções modulares e personalizáveis
- Suporte a TypeScript
- Integração com Font Awesome e Heroicons

## 🎨 Personalização

O projeto utiliza Tailwind CSS para estilização, permitindo fácil personalização através das classes utilitárias. Os componentes principais estão organizados em pastas separadas dentro de `app/components/`, facilitando a manutenção e customização.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código com Prettier
- `npm run format:check` - Verifica a formatação do código

## 🔧 Configuração

O projeto inclui configurações otimizadas para:

- ESLint
- Prettier
- TypeScript
- Tailwind CSS
- PostCSS

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

# 🚀 Template Next.js com Flowbite React

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Flowbite](https://img.shields.io/badge/Flowbite-3B82F6?style=for-the-badge&logo=flowbite&logoColor=white)

</div>

## 📝 Sobre o Projeto

Este é um template moderno e otimizado desenvolvido com Next.js e Flowbite React, projetado para servir como base para projetos web profissionais. O template foi construído com foco em performance, SEO e experiência do usuário, incorporando as melhores práticas de desenvolvimento web moderno.

### ✨ Características Principais

- ⚡ Renderização do lado do servidor (SSR) otimizada
- 🎨 Animações suaves e performáticas
- 📱 Design responsivo
- 🔄 Componentes reutilizáveis
- 🎯 Integração com Flowbite React para UI consistente
- 🌓 Suporte a temas claro/escuro
- 🔍 Otimizado para SEO

## 🎭 Sistema de Animações

O template implementa um sistema de animações otimizado para SSR, utilizando uma combinação de CSS e Intersection Observer.

### Como Animar Elementos

#### 1. Animações Básicas

Para animar qualquer elemento, adicione a classe `animate-on-scroll` junto com uma das classes de animação:

```jsx
// Animação de fade in com slide up
<div className="animate-on-scroll fade-in-up">
  Seu conteúdo aqui
</div>

// Animação de fade in com slide down
<div className="animate-on-scroll fade-in-down">
  Seu conteúdo aqui
</div>

// Animação de fade in com slide right
<div className="animate-on-scroll fade-in-right">
  Seu conteúdo aqui
</div>

// Animação de fade in com slide left
<div className="animate-on-scroll fade-in-left">
  Seu conteúdo aqui
</div>

// Animação de scale in
<div className="animate-on-scroll scale-in">
  Seu conteúdo aqui
</div>
```

#### 2. Animações com Delay

Para adicionar um delay na animação, use as classes de delay:

```jsx
// Delay de 100ms
<div className="animate-on-scroll fade-in-up delay-100">
  Conteúdo com delay
</div>

// Delay de 300ms
<div className="animate-on-scroll fade-in-up delay-300">
  Conteúdo com delay maior
</div>
```

#### 3. Animações com Duração Personalizada

Para personalizar a duração da animação:

```jsx
// Duração de 300ms
<div className="animate-on-scroll fade-in-up duration-300">
  Animação rápida
</div>

// Duração de 1.5s
<div className="animate-on-scroll fade-in-up duration-1500">
  Animação mais lenta
</div>
```

#### 4. Animações em Imagens

Para animar imagens, use o componente Image do Next.js:

```jsx
import Image from 'next/image';

// Imagem com animação de fade in
<div className="animate-on-scroll fade-in-up">
  <Image
    src="/sua-imagem.jpg"
    alt="Descrição da imagem"
    width={500}
    height={300}
    className="w-full h-auto"
  />
</div>

// Imagem com animação e delay
<div className="animate-on-scroll fade-in-right delay-300">
  <Image
    src="/sua-imagem.jpg"
    alt="Descrição da imagem"
    width={500}
    height={300}
    className="w-full h-auto"
  />
</div>
```

#### 5. Animações em Textos

Para animar textos:

```jsx
// Título com animação
<h1 className="animate-on-scroll fade-in-up">
  Seu título aqui
</h1>

// Parágrafo com animação e delay
<p className="animate-on-scroll fade-in-up delay-200">
  Seu texto aqui
</p>

// Texto com animação personalizada
<div className="animate-on-scroll fade-in-right duration-1000">
  Texto com animação mais lenta
</div>
```

#### 6. Animações em Listas

Para animar itens de lista sequencialmente:

```jsx
<ul>
  <li className="animate-on-scroll fade-in-up delay-100">Item 1</li>
  <li className="animate-on-scroll fade-in-up delay-200">Item 2</li>
  <li className="animate-on-scroll fade-in-up delay-300">Item 3</li>
</ul>
```

### Dicas de Uso

1. **Prioridade de Carregamento**

   - Use a propriedade `priority` no componente Image para imagens acima da dobra
   - Adicione delays maiores para elementos abaixo da dobra

2. **Performance**

   - Evite animar muitos elementos simultaneamente
   - Use delays para distribuir as animações
   - Mantenha as animações simples e suaves

3. **SEO e Acessibilidade**

   - Todas as animações são otimizadas para SEO
   - O conteúdo permanece acessível para leitores de tela
   - As animações não afetam a indexação do conteúdo

4. **Responsividade**
   - As animações funcionam em todos os dispositivos
   - Ajuste os delays e durações conforme necessário para dispositivos móveis

## 🤖 Prompt para IA

Para solicitar a implementação de animações otimizadas para SSR em componentes Next.js, use o seguinte prompt:

```
Preciso implementar animações em um componente Next.js que será renderizado no servidor (SSR). Por favor, siga estas especificações:

1. O componente não deve usar hooks do React (useState, useEffect, useInView, etc)
2. As animações devem ser ativadas quando os elementos entram na viewport
3. A implementação deve incluir:
   - Um arquivo CSS com as classes de animação (fade-in-up, fade-in-down, fade-in-right)
   - Um arquivo JavaScript com a lógica do Intersection Observer
   - A integração no layout principal da aplicação
   - A aplicação das classes no componente

As animações devem incluir:
- Fade in com slide up
- Fade in com slide down
- Fade in com slide right

O código deve ser otimizado para SSR e não deve depender de bibliotecas externas de animação.
```

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o template, entre em contato com a KiSite Soluções Web.

## ⚖️ Licença

Este template é propriedade exclusiva da **KiSite Soluções Web**. Todos os direitos reservados.

---

<div align="center">
  <sub>Desenvolvido com ❤️ pela KiSite Soluções Web</sub>
</div>
