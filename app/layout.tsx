import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://educamaps.com.br';
const siteName = 'EducaMaps';
const siteDescription = 'Encontre escolas, creches, faculdades e cursos próximos com informações completas sobre metodologia, valores e avaliações. Descubra a melhor educação perto de você.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Encontre a melhor educação perto de você`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    'escolas',
    'creches',
    'faculdades',
    'cursos',
    'educação',
    'ensino',
    'escola próxima',
    'encontrar escola',
    'buscar faculdade',
    'instituições de ensino',
    'avaliação de escolas',
    'metodologia de ensino',
    'educação infantil',
    'ensino fundamental',
    'ensino médio',
    'ensino superior'
  ],
  authors: [{ name: 'WK Comunicação', url: 'https://wknoticias.com.br' }],
  creator: 'WK Comunicação',
  publisher: 'EducaMaps',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Encontre a melhor educação perto de você`,
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteName} - Plataforma de busca de instituições de ensino`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Encontre a melhor educação perto de você`,
    description: siteDescription,
    images: ['/og-image.jpg'],
    creator: '@educamaps',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'pt-BR': siteUrl,
    },
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description: siteDescription,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'R. Gen. Câmara, 114 - Vila Planalto',
                addressLocality: 'Campo Grande',
                addressRegion: 'MS',
                addressCountry: 'BR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-67-99853-9665',
                contactType: 'Customer Service',
                availableLanguage: ['Portuguese'],
              },
              sameAs: [
                'https://facebook.com/educamaps',
                'https://instagram.com/educamaps',
                'https://linkedin.com/company/educamaps',
              ],
            }),
          }}
        />

        {/* JSON-LD Schema for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteName,
              url: siteUrl,
              description: siteDescription,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/buscar?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
