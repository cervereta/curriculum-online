'use client';

import React from 'react';
import {
  CertificateCard,
  SkillBadge,
  SectionHeader,
  ProgressBar
} from './index';

/**
 * Ejemplos de uso para todos los componentes del curriculum
 * Este archivo sirve como documentación viviente y showcase
 */

export const CertificateExamples = () => {
  return (
    <div className="space-y-8 p-6">
      <SectionHeader
        title="Certificaciones"
        subtitle="Ejemplos de CertificateCard"
        description="Diferentes variaciones del componente de certificación"
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certificación destacada */}
        <CertificateCard
          title="Next.js 14 Expert Certification"
          code="NEXTJS-2024-EXPERT"
          category="Frontend Development"
          description="Certificación avanzada en desarrollo con Next.js 14, incluyendo App Router, Server Components y optimizaciones de rendimiento."
          skills={["React", "TypeScript", "Server Components", "App Router", "Performance"]}
          isHighlighted={true}
        />
        
        {/* Certificación normal */}
        <CertificateCard
          title="AWS Cloud Practitioner"
          code="AWS-CP-2024"
          category="Cloud Computing"
          description="Fundamentos de servicios cloud de Amazon Web Services."
          skills={["EC2", "S3", "RDS", "Lambda"]}
          isHighlighted={false}
        />
        
        {/* Sin código */}
        <CertificateCard
          title="AI/ML Fundamentals"
          category="Artificial Intelligence"
          description="Curso completo sobre fundamentos de inteligencia artificial y machine learning."
          skills={["Python", "TensorFlow", "scikit-learn", "Pandas"]}
        />
        
        {/* Minimalista */}
        <CertificateCard
          title="Advanced TypeScript"
          category="Programming Languages"
          skills={["TypeScript", "Generics", "Advanced Types"]}
        />
      </div>
    </div>
  );
};

export const SkillBadgeExamples = () => {
  return (
    <div className="space-y-8 p-6">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="Ejemplos de SkillBadge"
        description="Diferentes categorías y niveles de habilidades técnicas"
      />
      
      <div className="space-y-6">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cervereta-blue">Frontend Development</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="React" level="expert" category="frontend" />
            <SkillBadge name="Next.js" level="expert" category="frontend" />
            <SkillBadge name="TypeScript" level="advanced" category="frontend" />
            <SkillBadge name="Tailwind CSS" level="advanced" category="frontend" />
            <SkillBadge name="Framer Motion" level="intermediate" category="frontend" />
          </div>
        </div>
        
        {/* Backend Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cervereta-purple">Backend Development</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="Node.js" level="advanced" category="backend" />
            <SkillBadge name="Express.js" level="advanced" category="backend" />
            <SkillBadge name="Python" level="intermediate" category="backend" />
            <SkillBadge name="GraphQL" level="intermediate" category="backend" />
          </div>
        </div>
        
        {/* AI/ML Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cervereta-accent">AI & Machine Learning</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="OpenAI API" level="advanced" category="ai" />
            <SkillBadge name="TensorFlow" level="intermediate" category="ai" />
            <SkillBadge name="LangChain" level="intermediate" category="ai" />
            <SkillBadge name="Prompt Engineering" level="expert" category="ai" />
          </div>
        </div>
        
        {/* Database Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cervereta-medium">Databases</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="MongoDB" level="advanced" category="database" />
            <SkillBadge name="PostgreSQL" level="intermediate" category="database" />
            <SkillBadge name="Redis" level="intermediate" category="database" />
          </div>
        </div>
        
        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-600">Tools & DevOps</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="Git" level="expert" category="tools" />
            <SkillBadge name="Docker" level="intermediate" category="tools" />
            <SkillBadge name="Webpack" level="intermediate" category="tools" />
            <SkillBadge name="Jest" level="advanced" category="tools" />
          </div>
        </div>
        
        {/* Cloud Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cervereta-cyan">Cloud Platforms</h3>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="Vercel" level="expert" category="cloud" />
            <SkillBadge name="AWS" level="intermediate" category="cloud" />
            <SkillBadge name="Netlify" level="advanced" category="cloud" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProgressBarExamples = () => {
  return (
    <div className="space-y-8 p-6">
      <SectionHeader
        title="Skills Progress"
        subtitle="Ejemplos de ProgressBar"
        description="Diferentes estilos y colores para mostrar nivel de competencia"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Columna izquierda */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-cervereta-blue">Frontend Technologies</h3>
          <ProgressBar 
            skill="React & Next.js" 
            percentage={95} 
            color="blue" 
            animated 
            showLabel 
          />
          <ProgressBar 
            skill="TypeScript" 
            percentage={90} 
            color="purple" 
            animated 
            showLabel 
          />
          <ProgressBar 
            skill="CSS/Tailwind" 
            percentage={88} 
            color="cyan" 
            animated 
            showLabel 
          />
          <ProgressBar 
            skill="JavaScript ES6+" 
            percentage={92} 
            color="accent" 
            animated 
            showLabel 
          />
        </div>
        
        {/* Columna derecha */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-cervereta-purple">Backend & Tools</h3>
          <ProgressBar 
            skill="Node.js & Express" 
            percentage={85} 
            color="purple" 
            animated 
            showLabel 
          />
          <ProgressBar 
            skill="Database Management" 
            percentage={80} 
            color="blue" 
            animated 
            showLabel 
          />
          <ProgressBar 
            skill="API Design & GraphQL" 
            percentage={82} 
            color="cyan" 
            animated 
            showLabel 
          />
          <ProgressBar 
            skill="DevOps & Deployment" 
            percentage={75} 
            color="accent" 
            animated 
            showLabel 
          />
        </div>
      </div>
      
      {/* Sección AI/ML */}
      <div className="space-y-6 mt-12">
        <h3 className="text-lg font-semibold text-cervereta-accent">AI & Machine Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressBar 
            skill="OpenAI Integration" 
            percentage={88} 
            color="accent" 
            animated 
            showLabel 
          />
          <ProgressBar 
            skill="Prompt Engineering" 
            percentage={92} 
            color="purple" 
            animated 
            showLabel 
          />
        </div>
      </div>
    </div>
  );
};

export const SectionHeaderExamples = () => {
  return (
    <div className="space-y-16 p-6">
      {/* Header centrado completo */}
      <SectionHeader
        title="About CerveretaDev"
        subtitle="Full Stack Developer & AI Enthusiast"
        description="Passionate about creating exceptional digital experiences through cutting-edge web technologies and artificial intelligence integration."
        centered
      />
      
      {/* Header simple */}
      <SectionHeader
        title="Experience"
        subtitle="Professional Journey"
      />
      
      {/* Header solo título */}
      <SectionHeader
        title="Contact Information"
      />
      
      {/* Header con descripción larga */}
      <SectionHeader
        title="Technologies & Skills"
        subtitle="My Technical Arsenal"
        description="A comprehensive overview of the technologies, frameworks, and tools I use to build modern web applications. From frontend frameworks like React and Next.js to backend solutions with Node.js, and cutting-edge AI integrations."
        centered
      />
    </div>
  );
};

/**
 * Componente principal que muestra todos los ejemplos
 */
export const AllExamples = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl py-12">
        <SectionHeader
          title="Curriculum Components"
          subtitle="Showcase de CerveretaDev UI Library"
          description="Colección completa de componentes diseñados para el portfolio profesional"
          centered
        />
        
        <div className="space-y-24 mt-16">
          <SectionHeaderExamples />
          <CertificateExamples />
          <SkillBadgeExamples />
          <ProgressBarExamples />
        </div>
      </div>
    </div>
  );
};