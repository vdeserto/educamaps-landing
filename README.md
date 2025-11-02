# EducaMaps - Landing Page

![EducaMaps Logo](public/logo.png)

Landing page oficial do **EducaMaps**, a plataforma que conecta famílias às melhores instituições de ensino do Brasil.

## Sobre o Projeto

EducaMaps é uma solução inovadora que ajuda pais, estudantes e responsáveis a encontrar escolas, creches, faculdades e cursos próximos, com informações completas sobre:

- Metodologia de ensino
- Valores e mensalidades
- Avaliações de outros usuários
- Turnos disponíveis
- Infraestrutura

## Tecnologias

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod
- **Internacionalização**: next-intl
- **Deploy**: Vercel

## Estrutura do Projeto

```
educamaps-landing/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout principal + SEO
│   ├── page.tsx           # Página home
│   ├── globals.css        # Estilos globais
│   ├── sitemap.ts         # Sitemap dinâmico
│   └── robots.ts          # Robots.txt
├── components/
│   ├── ui/                # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── SectionHeader.tsx
│   └── sections/          # Seções da landing page
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── Features.tsx
│       ├── Benefits.tsx
│       ├── ForWho.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── lib/                   # Utilitários
├── public/                # Assets estáticos
└── types/                 # Tipos TypeScript
```

## Começando

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/educamaps-landing.git
cd educamaps-landing
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite `.env.local` com suas configurações.

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm run start
```

## SEO e Performance

Esta landing page foi otimizada com:

- ✅ **Metadata completa** (title, description, keywords)
- ✅ **Open Graph** tags (Facebook, LinkedIn)
- ✅ **Twitter Cards**
- ✅ **Schema.org** (Organization, WebSite)
- ✅ **Sitemap.xml** dinâmico
- ✅ **Robots.txt** configurado
- ✅ **Web Manifest** para PWA
- ✅ **Otimização de imagens** (AVIF, WebP)
- ✅ **Fonts otimizadas** (Google Fonts)
- ✅ **Lazy loading**
- ✅ **Headers de segurança**

## Features

- 🎨 Design moderno e responsivo
- 🚀 Performance otimizada (Core Web Vitals)
- ♿ Acessibilidade (WCAG)
- 🌐 Multi-idioma (PT-BR padrão)
- 📱 Mobile-first
- 🎭 Animações suaves
- 📊 Analytics ready
- 🔒 Segurança (Headers, CSP)

## Deploy

### Vercel (Recomendado)

1. Faça push para seu repositório GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/educamaps-landing)

### Outras plataformas

O projeto também funciona em:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Servidor Node.js

## Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## Licença

Este projeto é propriedade da **WK Comunicação** e **EducaMaps**.

## Contato

- **Email**: contato@educamaps.com.br
- **Telefone**: (67) 99853-9665
- **Website**: [https://educamaps.com.br](https://educamaps.com.br)
- **Endereço**: R. Gen. Câmara, 114 - Vila Planalto, Campo Grande - MS

---

Desenvolvido com ❤️ por [WK Comunicação](https://wknoticias.com.br)
