'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProgressBarProps, ColorVariant } from './types';

/**
 * Barra de progreso animada para mostrar nivel de habilidades
 * 
 * @example
 * <ProgressBar
 *   skill="React & Next.js"
 *   percentage={95}
 *   color="blue"
 *   animated
 *   showLabel
 * />
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  skill,
  percentage,
  color = 'blue',
  animated = true,
  showLabel = true,
  className = ''
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Configuración de colores para cada variante
  const colorConfig = {
    blue: {
      bg: 'from-cervereta-blue to-cervereta-cyan',
      glow: 'shadow-cervereta-blue/50',
      text: 'text-cervereta-blue'
    },
    purple: {
      bg: 'from-cervereta-purple to-cervereta-accent',
      glow: 'shadow-cervereta-purple/50',
      text: 'text-cervereta-purple'
    },
    cyan: {
      bg: 'from-cervereta-cyan to-cervereta-soft',
      glow: 'shadow-cervereta-cyan/50',
      text: 'text-cervereta-cyan'
    },
    accent: {
      bg: 'from-cervereta-accent to-cervereta-soft',
      glow: 'shadow-cervereta-accent/50',
      text: 'text-cervereta-accent'
    }
  };

  const colorStyle = colorConfig[color];

  // Animación del porcentaje cuando entra en vista
  useEffect(() => {
    if (isInView && animated) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 300);
      return () => clearTimeout(timer);
    } else if (!animated) {
      setAnimatedPercentage(percentage);
    }
  }, [isInView, percentage, animated]);

  // Obtener el nivel basado en el porcentaje
  const getSkillLevel = (percent: number) => {
    if (percent >= 90) return { level: 'Experto', color: 'text-green-600' };
    if (percent >= 75) return { level: 'Avanzado', color: 'text-blue-600' };
    if (percent >= 50) return { level: 'Intermedio', color: 'text-yellow-600' };
    return { level: 'Principiante', color: 'text-gray-600' };
  };

  const skillLevel = getSkillLevel(percentage);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${className}`}
    >
      {/* Header con nombre de habilidad y porcentaje */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">
            {skill}
          </h4>
          {showLabel && (
            <span className={`text-xs font-medium ${skillLevel.color} bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full`}>
              {skillLevel.level}
            </span>
          )}
        </div>
        <motion.span
          className={`font-bold text-sm ${colorStyle.text}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(animatedPercentage)}%
        </motion.span>
      </div>

      {/* Barra de progreso contenedor */}
      <div className="relative">
        {/* Barra de fondo */}
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          {/* Barra de progreso animada */}
          <motion.div
            className={`
              h-full bg-gradient-to-r ${colorStyle.bg}
              relative overflow-hidden rounded-full
              shadow-lg ${colorStyle.glow}
            `}
            initial={{ width: 0 }}
            animate={{ width: `${animatedPercentage}%` }}
            transition={{
              duration: animated ? 1.5 : 0,
              ease: "easeOut",
              delay: animated ? 0.3 : 0
            }}
          >
            {/* Efecto de brillo animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
            
            {/* Puntos decorativos */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Indicador de meta (opcional) */}
        {percentage >= 80 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.3 }}
            className="absolute -top-1 right-0 transform translate-x-1/2"
          >
            <div className={`w-5 h-5 ${colorStyle.bg} bg-gradient-to-br rounded-full shadow-lg flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">★</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Marcadores de referencia */}
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </motion.div>
  );
};