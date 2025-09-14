import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavigationProvider, Header, Footer, MobileMenu } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cerveretadev.es'),
  title: {
    default: 'CerveretaDev | Desarrollador Web & Experto en IA - Portfolio España',
    template: '%s | CerveretaDev - Desarrollo Web & IA'
  },
  description: 'CerveretaDev - Desarrollador Web especializado en Next.js, React, TypeScript e Inteligencia Artificial. 5 años creando soluciones innovadoras con IA, LLMs, automatizaciones y metodología BMAD-METHOD. Portfolio profesional España.',
  keywords: [
    // Marca personal
    'CerveretaDev', 'Cervereta', 'Portfolio CerveretaDev',
    // Desarrollo Web
    'Desarrollador Web España', 'Next.js Developer', 'React Developer', 'TypeScript Developer',
    'Frontend Developer España', 'Full Stack Developer', 'Desarrollo Web Profesional',
    // Tecnologías específicas
    'Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Python',
    'HTML5', 'CSS3', 'Bootstrap', 'Vue.js', 'Express.js', 'FastAPI',
    // Bases de datos
    'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase',
    // IA y Automatización
    'Inteligencia Artificial', 'IA Developer', 'LLMs', 'GPT-4', 'Claude AI', 'OpenAI',
    'Automatización', 'Workflows', 'n8n', 'Make Zapier', 'MCPs',
    'Machine Learning', 'AI Integration', 'LangChain', 'Vector DBs', 'RAG',
    // Metodología
    'BMAD-METHOD', 'Metodología Desarrollo', 'Best Practices',
    // Ubicación y servicios
    'Desarrollador España', 'Freelancer España', 'Consultor IA', 'Desarrollo Remoto',
    // Proyectos
    'Sistema Gestión Restaurante', 'Sistema Panadería', 'Aplicaciones Web',
    // Herramientas
    'Git', 'Docker', 'VSCode', 'Figma', 'Postman', 'Claude Code', 'Cursor IDE'
  ],
  authors: [{ name: 'CerveretaDev', url: 'https://cerveretadev.es' }],
  creator: 'CerveretaDev',
  publisher: 'CerveretaDev',
  category: 'Technology',
  classification: 'Portfolio',
  openGraph: {
    title: 'CerveretaDev | Desarrollador Web & Experto en IA - Portfolio España',
    description: 'Desarrollador Web especializado en Next.js, React e IA. 5 años creando soluciones innovadoras con metodología BMAD-METHOD. Portfolio profesional España.',
    url: 'https://cerveretadev.es',
    siteName: 'CerveretaDev - Portfolio Profesional',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'CerveretaDev - Desarrollador Web especializado en Next.js, React e Inteligencia Artificial',
      },
    ],
    locale: 'es_ES',
    type: 'website',
    countryName: 'España',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CerveretaDev | Desarrollador Web & Experto en IA',
    description: 'Desarrollador especializado en Next.js, React e IA. 5 años creando soluciones innovadoras con metodología BMAD-METHOD.',
    images: ['/og-image.webp'],
    creator: '@cerveretadev',
    site: '@cerveretadev',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cerveretadev.es',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'verification-code-here', // Añadir código de verificación real
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "CerveretaDev",
              "alternateName": "Cervereta",
              "description": "Desarrollador Web especializado en Next.js, React, TypeScript e Inteligencia Artificial",
              "url": "https://cerveretadev.es",
              "image": "https://cerveretadev.es/yo5.webp",
              "sameAs": [
                "https://github.com/cervereta",
                "https://linkedin.com/in/cervereta",
                "https://twitter.com/cerveretadev"
              ],
              "jobTitle": "Desarrollador Web Full Stack & Experto en IA",
              "worksFor": {
                "@type": "Organization",
                "name": "CerveretaDev - Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES",
                "addressRegion": "España"
              },
              "email": "cervereta@cerveretadev.es",
              "telephone": "+34622564303",
              "knowsAbout": [
                "Next.js", "React", "TypeScript", "JavaScript", "Inteligencia Artificial",
                "LLMs", "Automatización", "BMAD-METHOD", "Node.js", "Python",
                "Tailwind CSS", "MySQL", "MongoDB", "Git", "Docker"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Desarrollador Web Full Stack",
                "description": "Especialista en desarrollo web moderno con Next.js, React y tecnologías de IA",
                "skills": "Next.js, React, TypeScript, IA, LLMs, Automatización"
              },
              "@id": "https://cerveretadev.es/#person"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CerveretaDev Portfolio",
              "alternateName": "Portfolio CerveretaDev",
              "url": "https://cerveretadev.es",
              "description": "Portfolio profesional de CerveretaDev - Desarrollador Web especializado en Next.js, React e IA",
              "author": {
                "@type": "Person",
                "name": "CerveretaDev",
                "@id": "https://cerveretadev.es/#person"
              },
              "inLanguage": "es-ES",
              "copyrightYear": new Date().getFullYear(),
              "copyrightHolder": {
                "@type": "Person",
                "name": "CerveretaDev"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cerveretadev.es/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} h-full bg-gray-50 antialiased`}>
        <NavigationProvider>
          <div className="min-h-full flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
            <MobileMenu />
          </div>
        </NavigationProvider>
      </body>
    </html>
  )
}