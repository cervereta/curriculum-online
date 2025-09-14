'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigationItems } from './NavigationProvider';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'cervereta@cerveretadev.es',
      href: 'mailto:cervereta@cerveretadev.es',
    },
    {
      icon: MapPinIcon,
      label: 'Ubicación',
      value: 'España',
      href: null,
    },
  ];

  const legalLinks = [
    { label: 'Política de Privacidad', href: '/privacy' },
    { label: 'Términos de Uso', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cervereta-blue/5 via-cervereta-purple/5 to-cervereta-accent/5" />
        <motion.div
          animate={{
            background: [
              'radial-gradient(600px circle at 0% 0%, rgba(2, 138, 250, 0.1), transparent 50%)',
              'radial-gradient(600px circle at 100% 100%, rgba(105, 2, 250, 0.1), transparent 50%)',
              'radial-gradient(600px circle at 0% 100%, rgba(2, 216, 250, 0.1), transparent 50%)',
              'radial-gradient(600px circle at 100% 0%, rgba(24, 2, 250, 0.1), transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cervereta-blue via-cervereta-purple to-cervereta-accent bg-clip-text text-transparent mb-4">
                CerveretaDev
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Desarrollador Web especializado en tecnologías modernas y experto en IA. 
                Creando soluciones digitales innovadoras con pasión y excelencia técnica.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'IA', 'LLMs'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-cervereta-blue/20 to-cervereta-purple/20 rounded-full text-sm border border-cervereta-blue/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Navegación</h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href as string}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="group-hover:text-cervereta-cyan transition-all duration-200"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Contacto</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;
                  const content = (
                    <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                      <div className="p-2 bg-gradient-to-r from-cervereta-blue/20 to-cervereta-purple/20 rounded-lg">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </div>
                  );

                  return (
                    <li key={contact.label}>
                      {contact.href ? (
                        <motion.a
                          href={contact.href}
                          whileHover={{ x: 5 }}
                          className="block"
                        >
                          {content}
                        </motion.a>
                      ) : (
                        <motion.div whileHover={{ x: 5 }}>
                          {content}
                        </motion.div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Acciones Rápidas</h4>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cervereta-blue to-cervereta-purple text-white px-6 py-3 rounded-lg font-medium text-center hover:shadow-lg hover:shadow-cervereta-blue/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contactar
                </Link>
                
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ArrowUpIcon className="w-4 h-4" />
                  <span>Volver Arriba</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear}{' '}
                <a 
                  href="https://cerveretadev.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cervereta-blue hover:text-cervereta-cyan transition-colors duration-300 font-semibold"
                >
                  CerveretaDev
                </a>
                . Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desarrollado con Next.js, TypeScript y Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href as string}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;