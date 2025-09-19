import { Experience } from '@/types/curriculum'

/**
 * Datos de experiencia profesional de CerveretaDev
 */
export const CERVERETA_EXPERIENCE: Experience[] = [
  {
    id: 'freelance-full-stack',
    position: 'Desarrollador Web Full Stack Freelance',
    company: 'CerveretaDev - Freelance',
    period: '2020 - Actualidad',
    description:
      'Desarrollo de aplicaciones web completas con Next.js, React y TypeScript. Integración de soluciones de IA y automatización de procesos para clientes diversos.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'IA',
      'Automatización',
    ],
    achievements: [
      'Desarrollado más de 20 aplicaciones web para clientes internacionales',
      'Implementado soluciones de IA que aumentaron la productividad de los clientes en un 40%',
      'Creado sistemas de automatización que redujeron tiempos de procesos repetitivos en un 60%',
    ],
    isCurrentPosition: true,
  },
  {
    id: 'ai-consultant',
    position: 'Consultor de Inteligencia Artificial',
    company: 'CerveretaDev',
    period: '2022 - Actualidad',
    description:
      'Especialista en integración de LLMs generativas, creación de workflows automatizados y desarrollo de herramientas con IA para empresas.',
    technologies: ['LLMs', 'OpenAI', 'Claude', 'n8n', 'Make', 'LangChain'],
    achievements: [
      'Diseñado e implementado workflows de IA para 15+ empresas',
      'Creado soluciones automatizadas que reemplazaron procesos manuales',
      'Entrenado a equipos en el uso efectivo de herramientas de IA',
    ],
  },
  {
    id: 'web-developer',
    position: 'Desarrollador Web',
    company: 'Agencia Digital XYZ',
    period: '2019 - 2021',
    description:
      'Desarrollo y mantenimiento de sitios web y aplicaciones para clientes corporativos.',
    technologies: ['JavaScript', 'React', 'PHP', 'MySQL', 'CSS', 'HTML'],
    achievements: [
      'Liderado el desarrollo de 10+ proyectos web para clientes importantes',
      'Implementado mejores prácticas de SEO que aumentaron el tráfico en un 35%',
      'Optimizado el rendimiento de aplicaciones existentes mejorando tiempos de carga en un 50%',
    ],
  },
  {
    id: 'tech-educator',
    position: 'Educador Tecnológico',
    company: 'Centro de Formación ABC',
    period: '2018 - 2020',
    description:
      'Formación de profesionales en tecnologías web y herramientas digitales.',
    technologies: ['Formación', 'Pedagogía', 'HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Formado a más de 200 estudiantes en desarrollo web',
      'Diseñado currículos actualizados para cursos de programación',
      'Creado materiales educativos interactivos para aprendizaje en línea',
    ],
  },
]
