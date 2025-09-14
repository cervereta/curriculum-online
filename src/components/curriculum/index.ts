/**
 * Barrel export para componentes del curriculum
 * Facilita la importación de componentes desde otros archivos
 */

export { CertificateCard } from './CertificateCard';
export { SkillBadge } from './SkillBadge';
export { SectionHeader } from './SectionHeader';
export { ProgressBar } from './ProgressBar';
export { FilterButtons } from './FilterButtons';
export { StatsCard } from './StatsCard';

// Exportar tipos para uso externo
export type {
  CertificateCardProps,
  SkillBadgeProps,
  SectionHeaderProps,
  ProgressBarProps,
  SkillLevel,
  SkillCategory,
  ColorVariant
} from './types';