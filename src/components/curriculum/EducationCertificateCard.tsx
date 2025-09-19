'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  skills: string[]
  category: 'frontend' | 'backend' | 'ai' | 'tools'
  level: 'beginner' | 'intermediate' | 'advanced'
  imageUrl?: string
  certificateUrl?: string
}

interface EducationCertificateCardProps {
  certificate: Certificate
  categoryLabels: Record<string, string>
  className?: string
}

export const EducationCertificateCard: React.FC<
  EducationCertificateCardProps
> = ({ certificate, categoryLabels, className = '' }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'bg-cervereta-purple/20 text-cervereta-purple border-cervereta-purple/30'
      case 'intermediate':
        return 'bg-cervereta-blue/20 text-cervereta-blue border-cervereta-blue/30'
      default:
        return 'bg-cervereta-cyan/20 text-cervereta-cyan border-cervereta-cyan/30'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'backend':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'ai':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'tools':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`
        relative overflow-hidden rounded-2xl p-8
        bg-white/90 backdrop-blur-sm border border-gray-200/50
        hover:border-cervereta-blue/40 hover:shadow-2xl hover:shadow-cervereta-blue/10
        transition-all duration-300 group
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cervereta-blue transition-colors duration-200 mb-2">
            {certificate.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <p className="text-cervereta-blue font-semibold text-lg">
              {certificate.issuer}
            </p>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="text-gray-600 font-medium">
              {certificate.date}
            </span>
          </div>
        </div>

        {/* Category and Level badges */}
        <div className="flex flex-col gap-2 ml-4">
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(certificate.category)}`}
          >
            {categoryLabels[certificate.category]}
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(certificate.level)}`}
          >
            {certificate.level.charAt(0).toUpperCase() +
              certificate.level.slice(1)}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6 text-base">
        {certificate.description}
      </p>

      {/* Skills */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
          Tecnologías Principales
        </h4>
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 bg-gradient-to-r from-cervereta-blue/10 to-cervereta-cyan/10
                         text-cervereta-blue text-sm rounded-lg font-medium
                         border border-cervereta-blue/20 hover:border-cervereta-blue/40
                         transition-all duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cervereta-blue/5 via-transparent to-cervereta-cyan/5
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
      />

      {/* Decorative corner gradient */}
      <div
        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cervereta-blue/10 to-transparent
                      rounded-2xl pointer-events-none"
      />
    </motion.div>
  )
}
