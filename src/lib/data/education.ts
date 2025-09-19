import { Education } from '@/types/curriculum'

/**
 * Datos de formación académica y certificaciones de CerveretaDev
 * Información estructurada con categorías, skills específicos y destacados
 */
export const CERVERETA_EDUCATION: Education[] = [
  {
    id: 'ifcd0210',
    title: 'Desarrollo de Aplicaciones con Tecnologías Web',
    code: 'IFCD0210',
    category: 'certification',
    description:
      'Certificación profesional completa en desarrollo web moderno con tecnologías frontend y backend.',
    year: '2023',
    institution: 'Certificación Profesional SEPE',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'PHP',
      'MySQL',
      'Responsive Design',
      'APIs REST',
    ],
    isHighlighted: true,
  },
  {
    id: 'ai-expert',
    title: 'Experto en Inteligencia Artificial',
    category: 'expertise',
    description:
      'Especialización avanzada en LLMs generativas, automatizaciones inteligentes, MCPs y workflows de IA aplicada.',
    year: '2024',
    institution: 'Formación Especializada',
    skills: [
      'LLMs',
      'ChatGPT',
      'Claude',
      'Automatización con IA',
      'MCPs',
      'Workflows',
      'Prompt Engineering',
      'AI Tools',
    ],
    isHighlighted: true,
  },
  {
    id: 'ssce0110',
    title: 'Docencia de la Formación Profesional para el Empleo',
    code: 'SSCE0110',
    category: 'certification',
    description:
      'Certificación en metodologías pedagógicas y diseño de formación profesional.',
    year: '2022',
    institution: 'Certificación Profesional SEPE',
    skills: [
      'Metodología Didáctica',
      'Evaluación de Competencias',
      'Diseño Curricular',
      'Tutorización',
      'Formación Online',
    ],
  },
  {
    id: 'adgg0108',
    title: 'Asistencia a la Dirección',
    code: 'ADGG0108',
    category: 'certification',
    description:
      'Competencias en gestión administrativa, organización empresarial y asistencia ejecutiva.',
    year: '2021',
    institution: 'Certificación Profesional SEPE',
    skills: [
      'Gestión Administrativa',
      'Organización Empresarial',
      'Comunicación Corporativa',
      'Gestión Documental',
      'Protocolo',
    ],
  },
  {
    id: 'ifct56',
    title: 'Excel Avanzado y Power BI',
    code: 'IFCT56',
    category: 'specialization',
    description:
      'Análisis de datos avanzado, creación de dashboards interactivos y Business Intelligence.',
    year: '2023',
    institution: 'Centro de Formación Especializada',
    skills: [
      'Excel Avanzado',
      'Power BI',
      'DAX',
      'Power Query',
      'Visualización de Datos',
      'Business Intelligence',
      'Dashboards',
    ],
  },
  {
    id: 'adgg108po',
    title: 'Comunicación Digital Orientada al Cliente',
    code: 'ADGG108PO',
    category: 'specialization',
    description:
      'Estrategias de comunicación digital, marketing online y gestión de relaciones con clientes.',
    year: '2022',
    institution: 'Formación Sectorial',
    skills: [
      'Marketing Digital',
      'Community Management',
      'Email Marketing',
      'CRM',
      'Atención al Cliente Digital',
      'Social Media',
    ],
  },
  {
    id: 'ifct46',
    title: 'Competencias Digitales Avanzadas',
    code: 'IFCT46',
    category: 'certification',
    description:
      'Dominio avanzado de herramientas digitales, productividad y tecnologías emergentes.',
    year: '2022',
    institution: 'Certificación Digital',
    skills: [
      'Herramientas Digitales',
      'Productividad',
      'Colaboración Online',
      'Seguridad Digital',
      'Cloud Computing',
    ],
  },
  {
    id: 'excel-advanced',
    title: 'Excel Avanzado',
    category: 'course',
    description:
      'Dominio completo de funciones avanzadas, macros y automatización en Excel.',
    year: '2022',
    institution: 'Formación Técnica',
    skills: [
      'Macros VBA',
      'Tablas Dinámicas',
      'Funciones Avanzadas',
      'Automatización',
      'Análisis de Datos',
    ],
  },
  {
    id: 'ifct45',
    title: 'Competencias Digitales Básicas',
    code: 'IFCT45',
    category: 'certification',
    description:
      'Fundamentos sólidos en tecnologías digitales y herramientas de productividad.',
    year: '2021',
    institution: 'Certificación Digital',
    skills: [
      'Fundamentos Digitales',
      'Internet',
      'Ofimática',
      'Comunicación Digital',
      'Seguridad Básica',
    ],
  },
  {
    id: 'excel-fundamentals',
    title: 'Fundamentos de Excel',
    category: 'course',
    description:
      'Base sólida en el uso de Excel para análisis y gestión de datos.',
    year: '2021',
    institution: 'Formación Básica',
    skills: [
      'Excel Básico',
      'Fórmulas',
      'Gráficos',
      'Formateo',
      'Gestión de Datos',
    ],
  },
  {
    id: 'fcoo03',
    title:
      'Inserción Laboral, Sensibilización Medioambiental y en la Igualdad de Género',
    code: 'FCOO03',
    category: 'certification',
    description:
      'Competencias transversales en orientación laboral, sostenibilidad e igualdad.',
    year: '2021',
    institution: 'Formación Transversal',
    skills: [
      'Orientación Laboral',
      'Competencias Sociales',
      'Sostenibilidad',
      'Igualdad de Género',
      'Inserción Profesional',
    ],
  },
]

/**
 * Categorías de formación disponibles con sus etiquetas en español
 */
export const EDUCATION_CATEGORIES = {
  all: 'Todas',
  certification: 'Certificaciones',
  course: 'Cursos',
  expertise: 'Especialidades',
  specialization: 'Especializaciones',
} as const

/**
 * Colores para las categorías de formación
 */
export const EDUCATION_CATEGORY_COLORS = {
  certification: 'from-cervereta-blue to-cervereta-cyan',
  course: 'from-cervereta-purple to-cervereta-accent',
  expertise: 'from-cervereta-accent to-cervereta-soft',
  specialization: 'from-cervereta-cyan to-cervereta-blue',
} as const

/**
 * Obtiene las formaciones destacadas
 */
export const getHighlightedEducation = (): Education[] => {
  return CERVERETA_EDUCATION.filter((education) => education.isHighlighted)
}

/**
 * Filtra formaciones por categoría
 */
export const getEducationByCategory = (category: string): Education[] => {
  if (category === 'all') return CERVERETA_EDUCATION
  return CERVERETA_EDUCATION.filter(
    (education) => education.category === category
  )
}

/**
 * Obtiene todas las skills únicas de la formación
 */
export const getAllEducationSkills = (): string[] => {
  const allSkills = CERVERETA_EDUCATION.flatMap(
    (education) => education.skills || []
  )
  return Array.from(new Set(allSkills)).sort()
}

/**
 * Estadísticas de formación
 */
export const getEducationStats = () => {
  const total = CERVERETA_EDUCATION.length
  const certifications = CERVERETA_EDUCATION.filter(
    (e) => e.category === 'certification'
  ).length
  const courses = CERVERETA_EDUCATION.filter(
    (e) => e.category === 'course'
  ).length
  const specializations = CERVERETA_EDUCATION.filter(
    (e) => e.category === 'specialization'
  ).length
  const expertise = CERVERETA_EDUCATION.filter(
    (e) => e.category === 'expertise'
  ).length
  const highlighted = CERVERETA_EDUCATION.filter((e) => e.isHighlighted).length
  const totalSkills = getAllEducationSkills().length

  return {
    total,
    certifications,
    courses,
    specializations,
    expertise,
    highlighted,
    totalSkills,
  }
}
