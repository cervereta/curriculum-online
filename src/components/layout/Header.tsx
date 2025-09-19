'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useNavigation, navigationItems } from './NavigationProvider'

const Header: React.FC = () => {
  const { activeSection, toggleMobileMenu } = useNavigation()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-cervereta-blue via-cervereta-purple to-cervereta-accent bg-clip-text text-transparent"
            >
              CerveretaDev
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Link
                  key={item.id}
                  href={item.href as string}
                  className="relative group"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-cervereta-blue'
                        : 'text-gray-600 hover:text-cervereta-blue'
                    }`}
                  >
                    {item.label}
                  </motion.span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      initial={false}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cervereta-blue to-cervereta-purple rounded-full"
                    />
                  )}

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cervereta-cyan to-cervereta-soft rounded-full origin-left"
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center space-y-1.5 group"
            aria-label="Abrir menú de navegación"
          >
            <motion.span className="block w-5 h-0.5 bg-gradient-to-r from-cervereta-blue to-cervereta-purple rounded-full group-hover:from-cervereta-purple group-hover:to-cervereta-accent transition-colors duration-200" />
            <motion.span className="block w-5 h-0.5 bg-gradient-to-r from-cervereta-blue to-cervereta-purple rounded-full group-hover:from-cervereta-purple group-hover:to-cervereta-accent transition-colors duration-200" />
            <motion.span className="block w-5 h-0.5 bg-gradient-to-r from-cervereta-blue to-cervereta-purple rounded-full group-hover:from-cervereta-purple group-hover:to-cervereta-accent transition-colors duration-200" />
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
