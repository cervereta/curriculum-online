'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CertificateCardProps } from './types'
import { SkillBadge } from './SkillBadge'

/**
 * Tarjeta elegante para mostrar certificaciones académicas y profesionales
 *
 * @example
 * <CertificateCard
 *   title="Next.js Certification"
 *   code="CERT-2024-001"
 *   category="Frontend Development"
 *   description="Advanced certification in Next.js 14 development"
 *   skills={["React", "TypeScript", "Server Components"]}
 *   isHighlighted={true}
 * />
 */
export const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  code,
  category,
  description,
  skills,
  isHighlighted = false,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`
        relative overflow-hidden rounded-xl p-6 
        ${
          isHighlighted
            ? 'bg-gradient-to-br from-cervereta-blue/10 via-cervereta-purple/5 to-cervereta-accent/10 border-2 border-cervereta-blue/30'
            : 'bg-white/5 border border-gray-200/20 hover:border-cervereta-blue/40'
        }
        backdrop-blur-sm shadow-lg hover:shadow-2xl
        transition-all duration-300 group
        ${className}
      `}
    >
      {/* Highlight indicator */}
      {isHighlighted && (
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-cervereta-blue">
          <div className="absolute -top-[26px] -right-[2px] text-white text-xs font-bold transform rotate-45">
            ★
          </div>
        </div>
      )}

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cervereta-blue/5 to-cervereta-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cervereta-blue transition-colors duration-300">
              {title}
            </h3>
            {code && (
              <span className="inline-block px-2 py-1 text-xs font-mono bg-cervereta-blue/20 text-cervereta-blue rounded-md">
                {code}
              </span>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cervereta-purple/20 to-cervereta-accent/20 text-cervereta-purple border border-cervereta-purple/30">
            {category}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Habilidades relacionadas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cervereta-cyan/20 to-cervereta-blue/20 text-cervereta-blue border border-cervereta-cyan/30 hover:shadow-sm transition-all duration-200"
                >
                  🔧 {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cervereta-blue via-cervereta-purple to-cervereta-accent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
    </motion.div>
  )
}
