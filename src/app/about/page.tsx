'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  CodeBracketIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: 'Sistema de Gestión de Restaurante',
      description: 'WebApp completa para la gestión integral de restaurantes con Next.js y TypeScript',
      url: 'https://restaurante-cervereta-tc26.vercel.app/',
      features: ['Gestión de pedidos', 'Control de inventario', 'Panel administrativo', 'Interfaz responsive']
    },
    {
      title: 'Sistema de Gestión de Panadería',
      description: 'Aplicación especializada para panaderías con ventas al por mayor',
      url: 'https://panaderia-app-sigma.vercel.app/',
      features: ['Ventas mayoristas', 'Gestión de productos', 'Control de stock', 'Reportes detallados']
    }
  ];

  const values = [
    {
      icon: CodeBracketIcon,
      title: 'Código Limpio',
      description: 'Creo en escribir código mantenible, escalable y bien documentado que perdure en el tiempo.'
    },
    {
      icon: SparklesIcon,
      title: 'Innovación Constante',
      description: 'Siempre explorando las últimas tecnologías, especialmente en el fascinante mundo de la IA.'
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Soluciones Prácticas',
      description: 'Me enfoco en resolver problemas reales con aplicaciones que generen valor tangible.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Visión Global',
      description: 'Desarrollo aplicaciones pensando en escalabilidad y accesibilidad mundial.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/yo5.webp"
              alt="CerveretaDev"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-cervereta-blue shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cervereta-blue/20 to-cervereta-accent/20"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hola, soy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-blue to-cervereta-purple">
              CerveretaDev
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Web apasionado por crear soluciones innovadoras que combinan
            tecnología moderna con inteligencia artificial para resolver problemas reales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto space-y-16"
        >
          {/* Mi Historia */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-blue to-cervereta-cyan">
                Mi Historia
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Después de toda una vida utilizando la informática como hobby, hace 5 años tomé
                  la decisión que cambiaría mi carrera: aprender lenguajes de programación de forma profesional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lo que comenzó como curiosidad se convirtió en una verdadera pasión. Descubrí que
                  programar no solo era escribir código, sino crear soluciones que pueden impactar
                  positivamente en la vida de las personas y las empresas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hoy, especializado en <strong className="text-cervereta-blue">Next.js, React y tecnologías de IA</strong>,
                  combino mi experiencia previa con las últimas innovaciones tecnológicas para crear
                  aplicaciones web robustas y eficientes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cervereta-blue/10 to-cervereta-purple/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mi Journey Tecnológico</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cervereta-blue rounded-full"></div>
                    <span className="text-gray-700">2019: Primeros pasos en programación</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cervereta-cyan rounded-full"></div>
                    <span className="text-gray-700">2021: Especialización en Frontend</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cervereta-purple rounded-full"></div>
                    <span className="text-gray-700">2023: Inmersión en IA y Automatización</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cervereta-accent rounded-full"></div>
                    <span className="text-gray-700">2024: Desarrollo Full-Stack + IA</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Mis Proyectos Destacados */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-purple to-cervereta-accent">
                Proyectos que me Enorgullecen
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-cervereta-blue/10 rounded-lg hover:bg-cervereta-blue/20 transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-cervereta-blue" />
                    </motion.a>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Características principales:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-cervereta-blue rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mis Valores */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-cyan to-cervereta-soft">
                Lo que me Impulsa
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-gradient-to-r from-cervereta-blue/20 to-cervereta-purple/20 rounded-lg">
                      <Icon className="w-6 h-6 text-cervereta-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Pasiones y Tecnología */}
          <motion.section variants={itemVariants}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Pasión por la IA */}
              <div className="bg-gradient-to-br from-cervereta-blue to-cervereta-purple rounded-2xl p-8 text-white">
                <SparklesIcon className="w-12 h-12 text-white/80 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Fascinado por la IA</h3>
                <p className="text-white/90 mb-4">
                  La tecnología que más me emociona actualmente es todo lo relacionado con
                  la Inteligencia Artificial. Ver cómo podemos crear sistemas que aprenden,
                  se adaptan y resuelven problemas complejos me parece absolutamente fascinante.
                </p>
                <p className="text-white/90">
                  Desde LLMs hasta automatizaciones inteligentes, cada día descubro nuevas
                  formas de integrar IA en aplicaciones web para crear experiencias más
                  intuitivas y eficientes.
                </p>
              </div>

              {/* Vida fuera del código */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <HeartIcon className="w-12 h-12 text-cervereta-accent mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Más allá del Código</h3>
                <p className="text-gray-600 mb-4">
                  Cuando no estoy programando, me encontrarás disfrutando de la naturaleza.
                  El senderismo es mi forma favorita de desconectar y recargar energías.
                </p>
                <p className="text-gray-600">
                  El estudio de la naturaleza me enseña sobre sistemas complejos, adaptación
                  y eficiencia, conceptos que curiosamente se aplican muy bien al desarrollo
                  de software. La naturaleza es el mejor arquitecto de sistemas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">¿Listo para crear algo increíble juntos?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Si tienes una idea, un problema que resolver, o simplemente quieres charlar
                sobre tecnología, ¡me encantaría escucharte!
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-cervereta-blue to-cervereta-purple text-white font-semibold py-4 px-8 rounded-lg hover:shadow-xl transition-all duration-200"
              >
                Hablemos de tu proyecto
              </motion.a>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}