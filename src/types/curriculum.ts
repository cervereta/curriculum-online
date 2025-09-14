// Tipos para el sistema de curriculum de CerveretaDev

export interface Education {
  id: string
  title: string
  code?: string
  category: 'certification' | 'course' | 'expertise' | 'specialization'
  description?: string
  year?: string
  institution?: string
  skills?: string[]
  isHighlighted?: boolean
}

export interface Experience {
  id: string
  position: string
  company: string
  period: string
  description: string
  technologies: string[]
  achievements?: string[]
  isCurrentPosition?: boolean
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'ai' | 'soft-skills' | 'languages'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
  icon?: string
  color?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
  imageUrl?: string
  featured: boolean
  category: 'web' | 'ai' | 'automation' | 'tool'
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  phone?: string
  website?: string
  linkedin?: string
  github?: string
  bio: string
  profileImage: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Datos específicos de CerveretaDev basados en la información proporcionada
export const CERVERETA_EDUCATION: Education[] = [
  {
    id: 'ifcd0210',
    title: 'Desarrollo de Aplicaciones con Tecnologías Web',
    code: 'IFCD0210',
    category: 'certification',
    institution: 'Certificación Profesional',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    isHighlighted: true
  },
  {
    id: 'ssce0110',
    title: 'Docencia de la Formación Profesional para el Empleo',
    code: 'SSCE0110',
    category: 'certification',
    institution: 'Certificación Profesional',
    skills: ['Formación', 'Pedagogía', 'Evaluación']
  },
  {
    id: 'adgg0108',
    title: 'Asistencia a la Dirección',
    code: 'ADGG0108',
    category: 'certification',
    institution: 'Certificación Profesional',
    skills: ['Gestión', 'Administración', 'Comunicación']
  },
  {
    id: 'ai-expert',
    title: 'Experto en IA',
    category: 'expertise',
    description: 'LLMs generativas, Automatizaciones, MCPs, Workflows y más',
    skills: ['LLMs', 'Automatización', 'MCPs', 'Workflows', 'AI Tools'],
    isHighlighted: true
  },
  {
    id: 'ifct56',
    title: 'Excel Avanzado y Power BI',
    code: 'IFCT56',
    category: 'specialization',
    skills: ['Excel', 'Power BI', 'Análisis de Datos', 'Dashboards']
  },
  {
    id: 'ifct46',
    title: 'Competencias Digitales Avanzadas',
    code: 'IFCT46',
    category: 'certification',
    skills: ['Herramientas Digitales', 'Productividad', 'Tecnología']
  },
  {
    id: 'ifct45',
    title: 'Competencias Digitales Básicas',
    code: 'IFCT45',
    category: 'certification',
    skills: ['Fundamentos Digitales', 'Internet', 'Aplicaciones Básicas']
  },
  {
    id: 'excel-advanced',
    title: 'Excel Avanzado',
    category: 'course',
    skills: ['Excel', 'Macros', 'Fórmulas Avanzadas', 'Análisis']
  },
  {
    id: 'excel-fundamentals',
    title: 'Fundamentos Excel',
    category: 'course',
    skills: ['Excel Básico', 'Fórmulas', 'Gráficos']
  },
  {
    id: 'fcoo03',
    title: 'Inserción Laboral, Sensibilización Medioambiental y en la Igualdad de Género',
    code: 'FCOO03',
    category: 'certification',
    skills: ['Orientación Laboral', 'Sostenibilidad', 'Igualdad']
  },
  {
    id: 'adgg108po',
    title: 'Comunicación Digital Orientada al Cliente',
    code: 'ADGG108PO',
    category: 'specialization',
    skills: ['Comunicación Digital', 'Atención al Cliente', 'Marketing Digital']
  }
]

export const SKILL_CATEGORIES = {
  frontend: 'Frontend Development',
  backend: 'Backend Development', 
  tools: 'Herramientas y Software',
  ai: 'Inteligencia Artificial',
  'soft-skills': 'Habilidades Blandas',
  languages: 'Idiomas'
} as const