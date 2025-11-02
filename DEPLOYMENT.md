# Guia de Deploy - EducaMaps Landing Page

## Pré-Deploy Checklist

Antes de fazer o deploy, certifique-se de:

- [ ] Adicionar logo real em `/public/logo.png`
- [ ] Adicionar imagem Open Graph em `/public/og-image.jpg` (1200x630px)
- [ ] Adicionar favicon em `/public/favicon.ico`
- [ ] Adicionar ícones PWA:
  - `/public/icon-16x16.png`
  - `/public/icon-32x32.png`
  - `/public/icon-192x192.png`
  - `/public/icon-512x512.png`
  - `/public/apple-touch-icon.png`
- [ ] Configurar Google Analytics ID (se desejado)
- [ ] Configurar código de verificação do Google Search Console
- [ ] Atualizar links de redes sociais no Footer
- [ ] Configurar serviço de email para o formulário de contato

## Deploy na Vercel (Recomendado)

### Opção 1: Via GitHub

1. **Suba o código para o GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: EducaMaps landing page"
   git branch -M main
   git remote add origin git@github.com:seu-usuario/educamaps-landing.git
   git push -u origin main
   ```

2. **Importe na Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Selecione seu repositório
   - Configure as variáveis de ambiente:
     - `NEXT_PUBLIC_SITE_URL=https://educamaps.com.br`
     - (Adicione outras conforme necessário)
   - Clique em "Deploy"

3. **Configure domínio customizado**:
   - Na dashboard do projeto, vá em "Settings" > "Domains"
   - Adicione `educamaps.com.br`
   - Configure os DNS conforme instruções da Vercel

### Opção 2: Via Vercel CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

## Variáveis de Ambiente

### Desenvolvimento (.env.local)
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Produção
Configure na dashboard da Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://educamaps.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics (opcional)
```

## Configurações Pós-Deploy

### 1. Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Verifique usando o código no `layout.tsx` ou via DNS
4. Submeta o sitemap: `https://educamaps.com.br/sitemap.xml`

### 2. Google Analytics (Opcional)

1. Crie uma propriedade no Google Analytics
2. Copie o ID (G-XXXXXXXXXX)
3. Adicione à variável de ambiente `NEXT_PUBLIC_GA_ID`
4. Adicione o script no `layout.tsx`:

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `}
    </Script>
  </>
)}
```

### 3. Formulário de Contato

Para processar envios do formulário, você pode:

**Opção A: Email via API Route (Next.js)**

Crie `/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `Novo contato - ${data.name}`,
    html: `
      <h2>Novo contato do site</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Tipo:</strong> ${data.type}</p>
      <p><strong>Mensagem:</strong> ${data.message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
```

**Opção B: Serviços terceiros**
- [EmailJS](https://www.emailjs.com/)
- [FormSpree](https://formspree.io/)
- [SendGrid](https://sendgrid.com/)

### 4. Monitoramento

Configure monitoramento com:
- **Vercel Analytics** (incluído gratuitamente)
- **Vercel Speed Insights** (performance)
- **Sentry** (error tracking - opcional)

## Performance Checklist

Após o deploy, verifique:

- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [GTmetrix](https://gtmetrix.com/)
- [ ] [WebPageTest](https://www.webpagetest.org/)
- [ ] Core Web Vitals no Google Search Console
- [ ] Teste mobile responsiveness

## SEO Checklist

- [ ] Título e descrição otimizados
- [ ] Open Graph tags funcionando (teste em [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Twitter Cards funcionando
- [ ] Sitemap acessível e válido
- [ ] Robots.txt configurado
- [ ] Schema.org markup válido (teste em [validator.schema.org](https://validator.schema.org/))
- [ ] Links internos funcionando
- [ ] Imagens com alt text
- [ ] Headings hierárquicos (H1, H2, H3)

## Domínio Customizado

### Configuração DNS

Configure os seguintes registros no seu provedor de DNS:

```
Tipo    Nome    Valor
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

Ou use os nameservers da Vercel para gerenciamento completo.

## Manutenção

### Atualizações

```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

### Backup

Faça backup regular de:
- Código fonte (GitHub)
- Variáveis de ambiente
- Assets (imagens, logos)
- Dados do formulário (se armazenados)

## Troubleshooting

### Build falha

```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Erros de TypeScript

```bash
# Verificar tipos
npm run type-check
```

### Preview local do build

```bash
npm run build
npm run start
```

## Suporte

Para questões técnicas:
- Email: dev@wknoticias.com.br
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)

---

**Última atualização**: 2025-11-02
