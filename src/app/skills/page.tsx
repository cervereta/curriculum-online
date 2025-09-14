'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Datos de habilidades organizadas por categorías
const programmingSkills = {
  frontend: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vue.js'],
  backend: ['Node.js', 'Python', 'Java', 'PHP', 'Express.js', 'FastAPI', 'Spring Boot'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
  tools: ['Git', 'Docker', 'VSCode', 'Figma', 'Postman'],
};

const aiExperienceSkills = {
  llms: ['Claude', 'GPT-4', 'Gemini', 'Ollama', 'OpenAI API'],
  workflows: ['n8n', 'Make (Zapier)', 'Claude Code', 'Cursor IDE'],
  clis: ['Claude CLI', 'OpenAI CLI', 'Custom CLIs'],
  metodologias: ['BMAD-METHOD'],
  herramientas: ['LangChain', 'Vector DBs', 'RAG', 'Fine-tuning'],
  plataformas: ['Anthropic Console', 'OpenAI Platform', 'Azure AI'],
};

// Componente SkillBadge simple
const SkillBadge = ({ skill }: { skill: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    className="px-4 py-2 bg-gradient-to-r from-cervereta-blue/20 to-cervereta-purple/20 rounded-lg border border-cervereta-blue/30 text-sm font-medium text-cervereta-blue hover:from-cervereta-blue/30 hover:to-cervereta-purple/30 transition-all duration-200"
  >
    {skill}
  </motion.div>
);

// Componente BMadMethod destacado
const BmadMethodCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="col-span-full bg-gradient-to-r from-cervereta-blue to-cervereta-purple rounded-xl p-6 text-white"
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
        <span className="text-lg font-bold">🚀</span>
      </div>
      <h3 className="text-xl font-bold">BMAD-METHOD</h3>
    </div>
    <p className="text-white/90 mb-4">
      Metodología propia para el desarrollo eficiente de aplicaciones con IA.
      Combina mejores prácticas de desarrollo, automatización y deployment.
    </p>
    <div className="flex flex-wrap gap-2">
      {['Automatización', 'Desarrollo Ágil', 'IA Integration', 'Best Practices'].map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            Mis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-blue to-cervereta-purple">
              Habilidades Técnicas
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones digitales innovadoras
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Sección Programación */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-blue to-cervereta-cyan">
                Programación
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(programmingSkills).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 capitalize flex items-center">
                    <span className="w-2 h-2 bg-cervereta-blue rounded-full mr-3"></span>
                    {category === 'databases' ? 'Bases de Datos' : category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Sección IA Experience */}
          <motion.section variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cervereta-purple to-cervereta-accent">
                IA Experience
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {Object.entries(aiExperienceSkills)
                .filter(([category]) => category !== 'metodologias')
                .map(([category, skills]) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 capitalize flex items-center">
                      <span className="w-2 h-2 bg-cervereta-purple rounded-full mr-3"></span>
                      {category === 'herramientas' ? 'Herramientas IA' :
                       category === 'plataformas' ? 'Plataformas' :
                       category === 'clis' ? 'CLIs' :
                       category === 'workflows' ? 'Workflows' : category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* BMAD-METHOD destacado */}
            <BmadMethodCard />
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}