'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillBadgeProps, SkillLevel, SkillCategory } from './types';

/**
 * Badge elegante para mostrar habilidades técnicas con nivel y categoría
 * 
 * @example
 * <SkillBadge
 *   name="React"
 *   level="expert"
 *   category="frontend"
 * />
 */
export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  level,
  category,
  color,
  className = ''
}) => {
  // Mapeo de niveles a colores y intensidad
  const levelConfig = {
    beginner: { intensity: '25', label: 'Principiante' },
    intermediate: { intensity: '50', label: 'Intermedio' },
    advanced: { intensity: '75', label: 'Avanzado' },
    expert: { intensity: '100', label: 'Experto' }
  };

  // Mapeo de categorías a colores y estilos
  const categoryConfig = {
    frontend: { 
      bg: 'from-cervereta-blue/20 to-cervereta-cyan/20',
      text: 'text-cervereta-blue',
      border: 'border-cervereta-blue/30',
      icon: '⚛️'
    },
    backend: { 
      bg: 'from-cervereta-purple/20 to-cervereta-medium/20',
      text: 'text-cervereta-purple',
      border: 'border-cervereta-purple/30',
      icon: '⚙️'
    },
    ai: { 
      bg: 'from-cervereta-accent/20 to-cervereta-soft/20',
      text: 'text-cervereta-accent',
      border: 'border-cervereta-accent/30',
      icon: '🤖'
    },
    tools: { 
      bg: 'from-gray-200/20 to-gray-300/20',
      text: 'text-gray-600 dark:text-gray-300',
      border: 'border-gray-300/30',
      icon: '🛠️'
    },
    database: { 
      bg: 'from-cervereta-medium/20 to-cervereta-blue/20',
      text: 'text-cervereta-medium',
      border: 'border-cervereta-medium/30',
      icon: '🗄️'
    },
    cloud: { 
      bg: 'from-cervereta-cyan/20 to-cervereta-soft/20',
      text: 'text-cervereta-cyan',
      border: 'border-cervereta-cyan/30',
      icon: '☁️'
    }
  };

  const categoryStyle = categoryConfig[category];
  const levelInfo = levelConfig[level];

  // Obtener las barras de nivel visual
  const getLevelBars = () => {
    const levels = ['beginner', 'intermediate', 'advanced', 'expert'];
    const currentLevelIndex = levels.indexOf(level);
    
    return levels.map((_, index) => (
      <div
        key={index}
        className={`w-1 h-3 rounded-full transition-all duration-300 ${
          index <= currentLevelIndex 
            ? `bg-gradient-to-t ${categoryStyle.bg.replace('/20', '/60')}`
            : 'bg-gray-200/30'
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-full
        bg-gradient-to-r ${categoryStyle.bg}
        border ${categoryStyle.border}
        ${categoryStyle.text}
        text-sm font-medium
        hover:shadow-md hover:shadow-cervereta-blue/25
        transition-all duration-300 cursor-default
        ${className}
      `}
    >
      {/* Icono de categoría */}
      <span className="text-xs" role="img" aria-label={category}>
        {categoryStyle.icon}
      </span>

      {/* Nombre de la habilidad */}
      <span className="font-semibold">
        {name}
      </span>

      {/* Indicador de nivel visual */}
      <div className="flex items-center gap-0.5 ml-1" aria-label={`Nivel: ${levelInfo.label}`}>
        {getLevelBars()}
      </div>

      {/* Texto de nivel (solo en hover) */}
      <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap z-50">
        {levelInfo.label}
      </div>
    </motion.div>
  );
};