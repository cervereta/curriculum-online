'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EducationStatsCardProps {
  title: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'purple' | 'cyan' | 'accent';
  delay?: number;
  className?: string;
}

const colorVariants = {
  blue: {
    gradient: 'from-cervereta-blue to-cervereta-cyan',
    bg: 'bg-cervereta-blue/10',
    text: 'text-cervereta-blue',
    border: 'border-cervereta-blue/20 hover:border-cervereta-blue/40',
    shadow: 'hover:shadow-cervereta-blue/10'
  },
  purple: {
    gradient: 'from-cervereta-purple to-cervereta-accent',
    bg: 'bg-cervereta-purple/10',
    text: 'text-cervereta-purple',
    border: 'border-cervereta-purple/20 hover:border-cervereta-purple/40',
    shadow: 'hover:shadow-cervereta-purple/10'
  },
  cyan: {
    gradient: 'from-cervereta-cyan to-cervereta-soft',
    bg: 'bg-cervereta-cyan/10',
    text: 'text-cervereta-cyan',
    border: 'border-cervereta-cyan/20 hover:border-cervereta-cyan/40',
    shadow: 'hover:shadow-cervereta-cyan/10'
  },
  accent: {
    gradient: 'from-cervereta-accent to-cervereta-purple',
    bg: 'bg-cervereta-accent/10',
    text: 'text-cervereta-accent',
    border: 'border-cervereta-accent/20 hover:border-cervereta-accent/40',
    shadow: 'hover:shadow-cervereta-accent/10'
  }
};

export const EducationStatsCard: React.FC<EducationStatsCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
  delay = 0,
  className = ''
}) => {
  const [count, setCount] = React.useState(0);
  const colorConfig = colorVariants[color];

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay,
        type: 'spring',
        bounce: 0.3,
        duration: 0.6
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.2 }
      }}
      className={`
        relative text-center p-6 rounded-2xl
        bg-white/80 backdrop-blur-sm border ${colorConfig.border}
        hover:shadow-2xl ${colorConfig.shadow}
        transition-all duration-300 group cursor-pointer overflow-hidden
        ${className}
      `}
    >
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${colorConfig.bg} rounded-full -translate-y-6 translate-x-6 opacity-50`} />
      <div className={`absolute bottom-0 left-0 w-16 h-16 ${colorConfig.bg} rounded-full translate-y-4 -translate-x-4 opacity-30`} />

      {/* Icon */}
      <motion.div
        className={`inline-flex items-center justify-center w-14 h-14 ${colorConfig.bg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 5 }}
      >
        <Icon className={`w-7 h-7 ${colorConfig.text}`} />
      </motion.div>

      {/* Value */}
      <motion.div
        className={`text-4xl font-bold bg-gradient-to-r ${colorConfig.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
        key={count}
      >
        {count}
      </motion.div>

      {/* Title */}
      <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
        {title}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 h-1
                       bg-gradient-to-r ${colorConfig.gradient} transition-all duration-300 rounded-full`} />
    </motion.div>
  );
};