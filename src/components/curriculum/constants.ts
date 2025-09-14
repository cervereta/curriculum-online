/**
 * Constantes y configuraciones para los componentes del curriculum
 */

import { SkillCategory, SkillLevel, ColorVariant } from './types';

// Paleta de colores CerveretaDev
export const CERVERETA_COLORS = {
  blue: '#028AFA',
  purple: '#1802FA', 
  medium: '#023CFA',
  cyan: '#02D8FA',
  accent: '#6902FA',
  soft: '#7494FA'
} as const;

// Configuración de categorías de habilidades
export const SKILL_CATEGORIES = {
  frontend: {
    icon: '⚛️',
    label: 'Frontend',
    color: 'cervereta-blue',
    description: 'Tecnologías de interfaz de usuario'
  },
  backend: {
    icon: '⚙️',
    label: 'Backend',
    color: 'cervereta-purple',
    description: 'Tecnologías de servidor y APIs'
  },
  ai: {
    icon: '🤖',
    label: 'AI/ML',
    color: 'cervereta-accent',
    description: 'Inteligencia Artificial y Machine Learning'
  },
  tools: {
    icon: '🛠️',
    label: 'Herramientas',
    color: 'gray-600',
    description: 'Herramientas de desarrollo y DevOps'
  },
  database: {
    icon: '🗄️',
    label: 'Bases de Datos',
    color: 'cervereta-medium',
    description: 'Sistemas de gestión de datos'
  },
  cloud: {
    icon: '☁️',
    label: 'Cloud',
    color: 'cervereta-cyan',
    description: 'Plataformas y servicios en la nube'
  }
} as const;

// Configuración de niveles de habilidad
export const SKILL_LEVELS = {
  beginner: {
    label: 'Principiante',
    percentage: 25,
    color: 'orange',
    description: 'Conocimientos básicos'
  },
  intermediate: {
    label: 'Intermedio',
    percentage: 50,
    color: 'yellow',
    description: 'Competencia sólida'
  },
  advanced: {
    label: 'Avanzado',
    percentage: 75,
    color: 'blue',
    description: 'Dominio avanzado'
  },
  expert: {
    label: 'Experto',
    percentage: 100,
    color: 'green',
    description: 'Maestría completa'
  }
} as const;

// Configuración de colores para ProgressBar
export const PROGRESS_COLORS = {
  blue: {
    gradient: 'from-cervereta-blue to-cervereta-cyan',
    glow: 'shadow-cervereta-blue/50',
    text: 'text-cervereta-blue'
  },
  purple: {
    gradient: 'from-cervereta-purple to-cervereta-accent',
    glow: 'shadow-cervereta-purple/50',
    text: 'text-cervereta-purple'
  },
  cyan: {
    gradient: 'from-cervereta-cyan to-cervereta-soft',
    glow: 'shadow-cervereta-cyan/50',
    text: 'text-cervereta-cyan'
  },
  accent: {
    gradient: 'from-cervereta-accent to-cervereta-soft',
    glow: 'shadow-cervereta-accent/50',
    text: 'text-cervereta-accent'
  }
} as const;

// Datos de ejemplo para certificaciones
export const SAMPLE_CERTIFICATES = [
  {
    title: "Next.js 14 Expert Certification",
    code: "NEXTJS-2024-EXP",
    category: "Frontend Development",
    description: "Certificación avanzada en desarrollo con Next.js 14, App Router y Server Components.",
    skills: ["React", "TypeScript", "Server Components", "App Router", "Performance"],
    isHighlighted: true
  },
  {
    title: "AWS Cloud Practitioner",
    code: "AWS-CP-2024",
    category: "Cloud Computing",
    description: "Fundamentos de servicios cloud de Amazon Web Services.",
    skills: ["EC2", "S3", "RDS", "Lambda", "CloudFormation"],
    isHighlighted: false
  },
  {
    title: "Advanced TypeScript",
    code: "TS-ADV-2024",
    category: "Programming Languages",
    description: "Dominio avanzado de TypeScript, tipos genéricos y patrones avanzados.",
    skills: ["TypeScript", "Generics", "Advanced Types", "Type Guards"],
    isHighlighted: false
  }
] as const;

// Datos de ejemplo para habilidades
export const SAMPLE_SKILLS = [
  // Frontend
  { name: "React", level: "expert" as SkillLevel, category: "frontend" as SkillCategory },
  { name: "Next.js", level: "expert" as SkillLevel, category: "frontend" as SkillCategory },
  { name: "TypeScript", level: "advanced" as SkillLevel, category: "frontend" as SkillCategory },
  { name: "Tailwind CSS", level: "advanced" as SkillLevel, category: "frontend" as SkillCategory },
  
  // Backend
  { name: "Node.js", level: "advanced" as SkillLevel, category: "backend" as SkillCategory },
  { name: "Express.js", level: "advanced" as SkillLevel, category: "backend" as SkillCategory },
  { name: "GraphQL", level: "intermediate" as SkillLevel, category: "backend" as SkillCategory },
  
  // AI/ML
  { name: "OpenAI API", level: "advanced" as SkillLevel, category: "ai" as SkillCategory },
  { name: "LangChain", level: "intermediate" as SkillLevel, category: "ai" as SkillCategory },
  { name: "Prompt Engineering", level: "expert" as SkillLevel, category: "ai" as SkillCategory },
  
  // Database
  { name: "MongoDB", level: "advanced" as SkillLevel, category: "database" as SkillCategory },
  { name: "PostgreSQL", level: "intermediate" as SkillLevel, category: "database" as SkillCategory },
  
  // Tools
  { name: "Git", level: "expert" as SkillLevel, category: "tools" as SkillCategory },
  { name: "Docker", level: "intermediate" as SkillLevel, category: "tools" as SkillCategory },
  { name: "Jest", level: "advanced" as SkillLevel, category: "tools" as SkillCategory },
  
  // Cloud
  { name: "Vercel", level: "expert" as SkillLevel, category: "cloud" as SkillCategory },
  { name: "AWS", level: "intermediate" as SkillLevel, category: "cloud" as SkillCategory }
] as const;

// Datos de ejemplo para barras de progreso
export const SAMPLE_PROGRESS = [
  { skill: "React & Next.js", percentage: 95, color: "blue" as ColorVariant },
  { skill: "TypeScript", percentage: 90, color: "purple" as ColorVariant },
  { skill: "Node.js & APIs", percentage: 85, color: "cyan" as ColorVariant },
  { skill: "Database Design", percentage: 80, color: "accent" as ColorVariant },
  { skill: "AI Integration", percentage: 88, color: "purple" as ColorVariant },
  { skill: "DevOps & Deployment", percentage: 75, color: "blue" as ColorVariant }
] as const;

// Configuración de animaciones
export const ANIMATION_CONFIG = {
  pageTransition: {
    duration: 0.5,
    ease: "easeInOut"
  },
  staggerChildren: {
    duration: 0.2
  },
  hoverScale: 1.05,
  tapScale: 0.95,
  progressDuration: 1.5
} as const;

// Breakpoints responsivos
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;