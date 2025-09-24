import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada CerveretaDev
        'cervereta-blue': '#028AFA', // Azul principal brillante
        'cervereta-purple': '#1802FA', // Azul oscuro/morado dramatic
        'cervereta-medium': '#023CFA', // Azul medio
        'cervereta-cyan': '#02D8FA', // Azul claro/cyan highlights
        'cervereta-accent': '#6902FA', // Morado accent
        'cervereta-soft': '#7494FA', // Azul lavanda soft

        // Variaciones automáticas para cada color
        primary: {
          50: '#e6f6ff',
          100: '#cceeff',
          200: '#99ddff',
          300: '#66ccff',
          400: '#33bbff',
          500: '#028AFA',
          600: '#027bd8',
          700: '#026cb6',
          800: '#015d94',
          900: '#014e72',
        },
        secondary: {
          50: '#f3e6ff',
          100: '#e7ccff',
          200: '#cf99ff',
          300: '#b766ff',
          400: '#9f33ff',
          500: '#1802FA',
          600: '#1602e1',
          700: '#1402c8',
          800: '#1201af',
          900: '#100196',
        },
        accent: {
          50: '#f0e6ff',
          100: '#e1ccff',
          200: '#c399ff',
          300: '#a566ff',
          400: '#8733ff',
          500: '#6902FA',
          600: '#5e02e1',
          700: '#5302c8',
          800: '#4801af',
          900: '#3d0196',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
