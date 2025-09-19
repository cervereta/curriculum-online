'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeaderProps } from './types'

/**
 * Encabezado de sección elegante y reutilizable con tipografía jerárquica
 *
 * @example
 * <SectionHeader
 *   title="Experiencia Profesional"
 *   subtitle="Más de 5 años desarrollando soluciones web"
 *   description="Mi trayectoria profesional abarca desde desarrollo frontend hasta soluciones de IA"
 *   centered
 * />
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = false,
  className = '',
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`
        ${centered ? 'text-center' : 'text-left'}
        ${className}
      `}
    >
      {/* Línea decorativa superior */}
      <motion.div
        variants={itemVariants}
        className={`
          relative mb-6
          ${centered ? 'flex justify-center' : 'flex justify-start'}
        `}
      >
        <div className="flex items-center gap-4">
          <div className="h-px bg-gradient-to-r from-transparent via-cervereta-blue to-transparent w-16"></div>
          <div className="w-2 h-2 rounded-full bg-cervereta-blue"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-cervereta-blue to-transparent w-16"></div>
        </div>
      </motion.div>

      {/* Título principal */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cervereta-blue via-cervereta-purple to-cervereta-accent bg-clip-text text-transparent leading-tight"
      >
        {title}
      </motion.h2>

      {/* Subtítulo */}
      {subtitle && (
        <motion.h3
          variants={itemVariants}
          className="text-lg md:text-xl font-semibold text-cervereta-blue/80 mb-3 tracking-wide"
        >
          {subtitle}
        </motion.h3>
      )}

      {/* Descripción */}
      {description && (
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}

      {/* Línea decorativa inferior */}
      <motion.div
        variants={itemVariants}
        className={`
          mt-8 relative
          ${centered ? 'flex justify-center' : 'flex justify-start'}
        `}
      >
        <div className="flex items-center">
          <div className="h-px bg-gradient-to-r from-cervereta-purple via-cervereta-accent to-cervereta-soft w-24"></div>
          <div className="w-1 h-1 rounded-full bg-cervereta-accent mx-2"></div>
          <div className="w-1 h-1 rounded-full bg-cervereta-soft mx-1"></div>
          <div className="w-1 h-1 rounded-full bg-cervereta-purple mx-1"></div>
        </div>
      </motion.div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cervereta-blue/10 to-cervereta-cyan/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
            delay: 5,
          }}
          className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cervereta-purple/10 to-cervereta-accent/10 rounded-full blur-2xl"
        />
      </div>
    </motion.div>
  )
}
