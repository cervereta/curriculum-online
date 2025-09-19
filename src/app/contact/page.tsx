'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'cervereta@cerveretadev.es',
      href: 'mailto:cervereta@cerveretadev.es',
      description: 'Contacto profesional',
    },
    {
      icon: PhoneIcon,
      label: 'Teléfono',
      value: '+34 622 564 303',
      href: 'tel:+34622564303',
      description: 'Disponible de lunes a viernes',
    },
    {
      icon: MapPinIcon,
      label: 'Ubicación',
      value: 'España',
      href: null,
      description: 'Trabajo remoto y presencial',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¡Hablemos de tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-blue to-cervereta-purple">
              próximo proyecto
            </span>
            !
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes una idea? ¿Necesitas ayuda con desarrollo web o IA? Estoy
            aquí para ayudarte a convertir tu visión en realidad.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Información de Contacto */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-blue to-cervereta-cyan">
                  Información de Contacto
                </span>
              </h2>

              <div className="space-y-6">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon
                  const content = (
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                      <div className="p-3 bg-gradient-to-r from-cervereta-blue/20 to-cervereta-purple/20 rounded-lg">
                        <Icon className="w-6 h-6 text-cervereta-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {contact.label}
                        </h3>
                        <p className="text-cervereta-blue font-medium">
                          {contact.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  )

                  return contact.href ? (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      whileHover={{ scale: 1.02 }}
                      className="block"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={contact.label}
                      whileHover={{ scale: 1.02 }}
                    >
                      {content}
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-cervereta-blue to-cervereta-purple rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">¿Listo para empezar?</h3>
              <p className="text-white/90 mb-6">
                Ya sea un proyecto web, automatización con IA, o consultoria
                técnica, estoy aquí para ayudarte a alcanzar tus objetivos.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Desarrollo Web',
                  'IA & Automatización',
                  'Consultoría',
                  'BMAD-METHOD',
                ].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-purple to-cervereta-accent">
                  Envíame un mensaje
                </span>
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 font-medium">
                    ✅ ¡Mensaje enviado correctamente! Te responderé pronto.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cervereta-blue focus:border-transparent transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cervereta-blue focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cervereta-blue focus:border-transparent transition-all duration-200"
                    placeholder="¿Sobre qué quieres hablar?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cervereta-blue focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntame más sobre tu proyecto o consulta..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cervereta-blue to-cervereta-purple text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
