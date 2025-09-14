'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation, navigationItems } from './NavigationProvider';
import { 
  HomeIcon, 
  UserIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CpuChipIcon, 
  EnvelopeIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

// Mapeo de iconos para cada item de navegación
const iconMap = {
  'inicio': HomeIcon,
  'sobre-mi': UserIcon,
  'formacion': AcademicCapIcon,
  'habilidades': CpuChipIcon,
  'contacto': EnvelopeIcon,
};

const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu, activeSection } = useNavigation();

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: 'spring' as const,
        stiffness: 400,
        damping: 25,
      }
    })
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={closeMobileMenu}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold bg-gradient-to-r from-cervereta-blue via-cervereta-purple to-cervereta-accent bg-clip-text text-transparent"
                >
                  CerveretaDev
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Cerrar menú"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-4">
                  {navigationItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    const Icon = iconMap[item.id as keyof typeof iconMap];
                    
                    return (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        custom={index}
                      >
                        <Link
                          href={item.href as string}
                          onClick={closeMobileMenu}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-gradient-to-r from-cervereta-blue/10 to-cervereta-purple/10 border border-cervereta-blue/20'
                              : 'hover:bg-gray-50 hover:scale-105'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${
                            isActive
                              ? 'bg-gradient-to-r from-cervereta-blue to-cervereta-purple text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1">
                            <span className={`text-lg font-medium ${
                              isActive
                                ? 'text-cervereta-blue'
                                : 'text-gray-800'
                            }`}>
                              {item.label}
                            </span>
                          </div>
                          
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileTab"
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-cervereta-blue to-cervereta-purple"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 border-t border-gray-200"
              >
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Desarrollador Web & Experto en IA
                  </p>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="mailto:contact@cerveretadev.es"
                      className="p-2 rounded-lg bg-gradient-to-r from-cervereta-blue to-cervereta-purple text-white hover:shadow-lg transition-shadow duration-200"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;