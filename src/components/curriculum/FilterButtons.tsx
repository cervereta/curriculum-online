'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FilterButtonsProps {
  categories: Record<string, string>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
}

/**
 * Componente de botones de filtro elegantes para categorización
 * 
 * @example
 * <FilterButtons
 *   categories={{ all: 'Todas', certification: 'Certificaciones' }}
 *   activeFilter="all"
 *   onFilterChange={(filter) => setActiveFilter(filter)}
 * />
 */
export const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  activeFilter,
  onFilterChange,
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap justify-center gap-3 mb-8 ${className}`}
    >
      {Object.entries(categories).map(([key, label]) => (
        <motion.button
          key={key}
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(key)}
          className={`
            relative px-6 py-3 rounded-full font-medium text-sm
            transition-all duration-300 overflow-hidden
            ${activeFilter === key
              ? 'bg-gradient-to-r from-cervereta-blue to-cervereta-cyan text-white shadow-lg shadow-cervereta-blue/30'
              : 'bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-cervereta-blue/20 hover:text-cervereta-blue border border-gray-200/20'
            }
            backdrop-blur-sm
          `}
        >
          {/* Efecto de brillo en hover */}
          <div className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
            opacity-0 hover:opacity-100 transition-opacity duration-300
            transform -translate-x-full hover:translate-x-full transition-transform duration-700
          `} />
          
          {/* Contenido del botón */}
          <span className="relative z-10">{label}</span>
          
          {/* Indicador activo */}
          {activeFilter === key && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gradient-to-r from-cervereta-blue to-cervereta-cyan rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};