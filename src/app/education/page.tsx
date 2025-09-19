'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/curriculum/SectionHeader'
import { FilterButtons } from '@/components/curriculum/FilterButtons'
import { EducationStatsCard } from '@/components/curriculum/EducationStatsCard'
import { EducationCertificateCard } from '@/components/curriculum/EducationCertificateCard'
import {
  AcademicCapIcon,
  SparklesIcon,
  CheckBadgeIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  skills: string[]
  category: 'frontend' | 'backend' | 'ai' | 'tools'
  level: 'beginner' | 'intermediate' | 'advanced'
  imageUrl?: string
  certificateUrl?: string
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'IFCD0210 - DESARROLLO DE APLICACIONES CON TECNOLOGÍAS WEB',
    issuer: 'Certificado de Profesionalidad',
    date: '2023',
    description:
      'Certificado oficial de profesionalidad en desarrollo de aplicaciones web con tecnologías frontend y backend.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Frameworks Web'],
    category: 'frontend',
    level: 'advanced',
  },
  {
    id: '2',
    title: 'SSCE0110 - Docencia de la formación profesional para el empleo',
    issuer: 'Certificado de Profesionalidad',
    date: '2022',
    description:
      'Certificado oficial para impartir formación profesional para el empleo y diseño de acciones formativas.',
    skills: [
      'Metodologías Didácticas',
      'Evaluación',
      'Planificación Formativa',
      'Tutorización',
    ],
    category: 'tools',
    level: 'advanced',
  },
  {
    id: '3',
    title: 'ADGG0108 - Asistencia a la dirección',
    issuer: 'Certificado de Profesionalidad',
    date: '2021',
    description:
      'Certificado oficial en asistencia a la dirección y gestión administrativa avanzada.',
    skills: [
      'Gestión Administrativa',
      'Organización',
      'Comunicación Empresarial',
      'Office Avanzado',
    ],
    category: 'tools',
    level: 'intermediate',
  },
  {
    id: '4',
    title:
      'Experto en IA - LLMs generativas, Automatizaciones, MCPs, Workflows',
    issuer: 'Formación Especializada Autodidacta',
    date: '2024',
    description:
      'Especialización avanzada en Inteligencia Artificial generativa, incluyendo LLMs, automatizaciones con n8n/Make, MCPs de Claude y workflows complejos.',
    skills: [
      'LLMs',
      'Claude AI',
      'GPT-4',
      'n8n',
      'Make',
      'MCPs',
      'Automatización',
      'Workflows',
    ],
    category: 'ai',
    level: 'advanced',
  },
  {
    id: '5',
    title: 'IFCT56 - EXCEL AVANZADO Y POWER BI',
    issuer: 'Curso Especializado',
    date: '2023',
    description:
      'Especialización en análisis de datos con Excel avanzado y Power BI para business intelligence.',
    skills: [
      'Excel Avanzado',
      'Power BI',
      'Análisis de Datos',
      'Dashboards',
      'VBA',
    ],
    category: 'tools',
    level: 'advanced',
  },
  {
    id: '6',
    title: 'IFCT46 - COMPETENCIAS DIGITALES AVANZADAS',
    issuer: 'Formación Digital',
    date: '2022',
    description:
      'Certificación en competencias digitales avanzadas y transformación digital empresarial.',
    skills: [
      'Competencias Digitales',
      'Transformación Digital',
      'Herramientas Colaborativas',
      'Seguridad Digital',
    ],
    category: 'tools',
    level: 'intermediate',
  },
  {
    id: '7',
    title: 'IFCT45 - COMPETENCIAS DIGITALES BÁSICAS',
    issuer: 'Formación Digital',
    date: '2021',
    description:
      'Certificación básica en competencias digitales y uso de herramientas informáticas.',
    skills: [
      'Competencias Básicas',
      'Office',
      'Internet',
      'Comunicación Digital',
    ],
    category: 'tools',
    level: 'beginner',
  },
  {
    id: '8',
    title:
      'FCOO03 - INSERCIÓN LABORAL, SENSIBILIZACIÓN MEDIOAMBIENTAL Y EN LA IGUALDAD DE GÉNERO',
    issuer: 'Formación Complementaria',
    date: '2021',
    description:
      'Formación transversal en inserción laboral, medio ambiente e igualdad de género.',
    skills: [
      'Inserción Laboral',
      'Medio Ambiente',
      'Igualdad de Género',
      'Competencias Transversales',
    ],
    category: 'tools',
    level: 'intermediate',
  },
  {
    id: '9',
    title: 'ADGG108PO - COMUNICACIÓN DIGITAL ORIENTADA AL CLIENTE',
    issuer: 'Formación Especializada',
    date: '2022',
    description:
      'Especialización en comunicación digital y atención al cliente en entornos digitales.',
    skills: [
      'Comunicación Digital',
      'Atención al Cliente',
      'Marketing Digital',
      'Redes Sociales',
    ],
    category: 'tools',
    level: 'intermediate',
  },
  {
    id: '10',
    title: 'EXCEL AVANZADO',
    issuer: 'Formación Especializada',
    date: '2022',
    description:
      'Curso especializado en Excel avanzado con macros, funciones complejas y análisis de datos.',
    skills: [
      'Excel Avanzado',
      'Macros',
      'VBA',
      'Funciones Avanzadas',
      'Análisis de Datos',
    ],
    category: 'tools',
    level: 'advanced',
  },
  {
    id: '11',
    title: 'FUNDAMENTOS EXCEL',
    issuer: 'Formación Base',
    date: '2021',
    description:
      'Curso de fundamentos de Excel para manejo básico e intermedio de hojas de cálculo.',
    skills: ['Excel Básico', 'Fórmulas', 'Gráficos', 'Tablas Dinámicas'],
    category: 'tools',
    level: 'beginner',
  },
]

type FilterType = 'all' | 'frontend' | 'backend' | 'ai' | 'tools'

const filterCategories = {
  all: 'Todas',
  frontend: 'Desarrollo Web',
  backend: 'Backend',
  ai: 'IA & Automatización',
  tools: 'Competencias Profesionales',
}

export default function EducationPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredCertificates = useMemo(() => {
    return activeFilter === 'all'
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter)
  }, [activeFilter])

  const stats = useMemo(
    () => ({
      total: certificates.length,
      categories: Array.from(new Set(certificates.map((cert) => cert.category)))
        .length,
      advanced: certificates.filter((cert) => cert.level === 'advanced').length,
      recent: certificates.filter((cert) => cert.date === '2024').length,
    }),
    []
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <SectionHeader
          title="Mi Formación"
          subtitle="Certificaciones, cursos y aprendizaje continuo"
          centered
        />

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <EducationStatsCard
            title="Certificaciones"
            value={stats.total}
            icon={AcademicCapIcon}
            color="blue"
            delay={0.1}
          />
          <EducationStatsCard
            title="Categorías"
            value={stats.categories}
            icon={SparklesIcon}
            color="purple"
            delay={0.2}
          />
          <EducationStatsCard
            title="Nivel Avanzado"
            value={stats.advanced}
            icon={CheckBadgeIcon}
            color="cyan"
            delay={0.3}
          />
          <EducationStatsCard
            title="Este Año"
            value={stats.recent}
            icon={CalendarDaysIcon}
            color="accent"
            delay={0.4}
          />
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <FilterButtons
            categories={filterCategories}
            activeFilter={activeFilter}
            onFilterChange={(filter) => setActiveFilter(filter as FilterType)}
          />
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {filteredCertificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <EducationCertificateCard
                    certificate={certificate}
                    categoryLabels={filterCategories}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cervereta-blue to-cervereta-purple rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Aprendizaje Continuo</h3>
          <p className="text-white/90 mb-6">
            Mi enfoque de aprendizaje se basa en la práctica constante y la
            aplicación real de conocimientos. Cada certificación representa no
            solo el dominio de una tecnología, sino también su implementación en
            proyectos reales que resuelven problemas concretos.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🎯 Enfoque Práctico</h4>
              <p className="text-white/80">
                Cada conocimiento se aplica inmediatamente en proyectos reales
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">🚀 Tecnologías Emergentes</h4>
              <p className="text-white/80">
                Siempre al día con las últimas tendencias y herramientas
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">💡 Innovación Constante</h4>
              <p className="text-white/80">
                Desarrollo de metodologías propias como BMAD-METHOD
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
