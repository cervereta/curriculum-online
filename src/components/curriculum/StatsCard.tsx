'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  label: string;
  value: number;
  color: string;
  delay?: number;
  className?: string;
}

/**
 * Tarjeta de estadísticas animada con contador
 * 
 * @example
 * <StatsCard
 *   label="Total Certificaciones"
 *   value={11}
 *   color="from-cervereta-blue to-cervereta-cyan"
 *   delay={0.1}
 * />
 */
export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  color,
  delay = 0,
  className = ''
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1500; // 1.5 seconds
      const increment = end / (duration / 16); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay,
        type: 'spring',
        bounce: 0.4,
        duration: 0.6
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`
        text-center p-6 rounded-xl 
        bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm 
        border border-gray-200/20 hover:border-cervereta-blue/30
        hover:shadow-lg hover:shadow-cervereta-blue/10
        transition-all duration-300 group cursor-pointer
        ${className}
      `}
    >
      {/* Valor numérico animado */}
      <motion.div 
        className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
        key={count} // Re-render when count changes
      >
        {count}
      </motion.div>
      
      {/* Etiqueta */}
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      {/* Línea decorativa inferior */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r ${color} transition-all duration-300 rounded-full`} />
    </motion.div>
  );
};