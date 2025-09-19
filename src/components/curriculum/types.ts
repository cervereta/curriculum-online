/**
 * Tipos y interfaces para los componentes del curriculum
 */

export interface CertificateCardProps {
  title: string
  code?: string
  category: string
  description?: string
  skills: string[]
  isHighlighted?: boolean
  className?: string
}

export interface SkillBadgeProps {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'frontend' | 'backend' | 'ai' | 'tools' | 'database' | 'cloud'
  color?: string
  className?: string
}

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export interface ProgressBarProps {
  skill: string
  percentage: number
  color?: 'blue' | 'purple' | 'cyan' | 'accent'
  animated?: boolean
  showLabel?: boolean
  className?: string
}

export type SkillLevel = SkillBadgeProps['level']
export type SkillCategory = SkillBadgeProps['category']
export type ColorVariant = ProgressBarProps['color']
