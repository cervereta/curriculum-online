import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio - CerveretaDev',
  description: 'CerveretaDev - Desarrollador Web Full Stack especializado en Next.js, React, TypeScript e Inteligencia Artificial. 5 años creando soluciones innovadoras con IA y metodología BMAD-METHOD.',
  keywords: [
    'CerveretaDev Inicio', 'Desarrollador Web', 'Next.js Developer', 'React Developer',
    'TypeScript', 'Inteligencia Artificial', 'IA Developer', 'Full Stack Developer España',
    'LLMs', 'Automatización', 'BMAD-METHOD', 'Portfolio Desarrollador'
  ],
  openGraph: {
    title: 'CerveretaDev - Desarrollador Web & Experto en IA',
    description: 'Desarrollador Full Stack especializado en Next.js, React e IA. Creando soluciones innovadoras con 5 años de experiencia.',
    url: 'https://cerveretadev.es',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'CerveretaDev - Desarrollador Web & Experto en IA',
      },
    ],
  },
  twitter: {
    title: 'CerveretaDev - Desarrollador Web & Experto en IA',
    description: 'Desarrollador Full Stack especializado en Next.js, React e IA. Creando soluciones innovadoras.',
  },
  alternates: {
    canonical: 'https://cerveretadev.es',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/yo5.webp"
                alt="CerveretaDev - Desarrollador Web & Experto en IA"
                width={320}
                height={320}
                priority
                className="rounded-full object-cover border-4 border-cervereta-blue shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cervereta-blue/20 to-cervereta-accent/20"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hola, soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-blue to-cervereta-accent">
                CerveretaDev
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
              Desarrollador Web especializado en{' '}
              <span className="text-cervereta-blue font-semibold">Next.js</span> y{' '}
              <span className="text-cervereta-accent font-semibold">React</span>, 
              con experiencia en IA, LLMs generativas y automatizaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cervereta-blue to-cervereta-medium text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Trabajemos Juntos
              </a>
              <a
                href="/skills"
                className="px-8 py-4 border-2 border-cervereta-blue text-cervereta-blue rounded-lg font-semibold transition-all duration-300 hover:bg-cervereta-blue hover:text-white"
              >
                Ver mis Habilidades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Especializado en
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <div className="w-16 h-16 bg-gradient-to-r from-cervereta-blue to-cervereta-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">WEB</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Desarrollo Web</h3>
            <p className="text-gray-600 text-center">Next.js, React, TypeScript, Tailwind CSS</p>
          </Card>

          <Card>
            <div className="w-16 h-16 bg-gradient-to-r from-cervereta-accent to-cervereta-purple rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">IA</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Inteligencia Artificial</h3>
            <p className="text-gray-600 text-center">LLMs generativas, MCPs, Workflows</p>
          </Card>

          <Card>
            <div className="w-16 h-16 bg-gradient-to-r from-cervereta-soft to-cervereta-medium rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AUTO</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Automatización</h3>
            <p className="text-gray-600 text-center">Workflows, Excel Avanzado, Power BI</p>
          </Card>
        </div>
      </section>
    </div>
  )
}