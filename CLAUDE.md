# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos de Desarrollo

### Comandos Principales

- `npm run dev` - Servidor de desarrollo (puerto 3000)
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige automáticamente problemas de ESLint
- `npm run type-check` - Verifica tipos TypeScript (usar antes de commits)
- `npm run format` - Formatea código con Prettier
- `npm run format:check` - Verifica formato del código

### Flujo de Desarrollo

1. Usar `npm run type-check` para verificar tipos antes de commits
2. Ejecutar `npm run lint:fix` para corregir problemas de linting
3. Usar `npm run format` para mantener consistencia de formato

### Dependencias Clave

- **pdfmake** - Generación de PDFs para el CV
- **framer-motion** - Animaciones
- **@heroicons/react** - Iconografía
- **clsx** - Utilidad para clases condicionales

## Arquitectura del Proyecto

### Stack Tecnológico

- **Next.js 14** con App Router y Server Components
- **TypeScript** con configuración estricta
- **Tailwind CSS** para estilos
- **ESLint + Prettier** para calidad de código

### Estructura de Carpetas

```
src/
├── app/                 # App Router (páginas, layouts, loading states)
├── components/
│   ├── ui/             # Componentes básicos reutilizables (Button, Card)
│   ├── layout/         # Componentes de layout (Header, Footer, Navigation)
│   ├── curriculum/     # Componentes específicos del currículum
│   └── Common/         # Componentes comunes (LoadingSpinner)
├── hooks/              # Hooks personalizados (useLocalStorage)
├── lib/                # Utilidades, constantes y datos
│   └── data/          # Datos del currículum
└── types/              # Tipos TypeScript globales
```

### Configuración de Imports

El proyecto usa alias de TypeScript configurados en `tsconfig.json`:

- `@/*` - Acceso directo a `src/`
- `@/components/*` - Componentes
- `@/hooks/*` - Hooks personalizados
- `@/lib/*` - Utilidades
- `@/types/*` - Tipos TypeScript

### Patrones de Componentes

- Los componentes UI están en `src/components/ui/` y siguen el patrón de `forwardRef`
- Uso de la función `cn()` de `@/lib/utils` para concatenación de clases de Tailwind con clsx
- Componentes tipados con interfaces TypeScript extendiendo tipos HTML nativos
- Variants y sizes definidos mediante props con valores por defecto
- Componentes de currículum organizados por funcionalidad (filtros, cards, estadísticas)

### Tipos y Interfaces

Los tipos globales están centralizados en `src/types/index.ts`, incluyendo:

- `User` - Interface para usuarios
- `ApiResponse<T>` - Respuesta genérica de API
- `Theme` - Tema de la aplicación
- `NavigationItem` - Items de navegación

### Layout Principal

- Configurado en `src/app/layout.tsx` con idioma español
- Usa fuente Inter de Google Fonts
- Layout responsive con flexbox y altura completa
- Metadata completa para SEO con Open Graph y Twitter Cards
- NavigationProvider para manejo de estado de navegación
- Header fijo, contenido principal con padding-top, y Footer al final

### Características Específicas del Proyecto

- **Portfolio personal** - Currículum online interactivo con generación de PDF
- **Metadata personalizada** - SEO optimizado con dominio cerveretadev.es
- **Navegación móvil** - Menú hamburguesa con estado global
- **Componentes de currículum** - Sistema modular para mostrar experiencia, educación, habilidades
- **Utilidades comunes** - Funciones para formateo de fechas, capitalización y sleep
- **Generación de PDF** - Sistema completo con pdfmake para exportar CV (ver `src/lib/services/`)
- **Datos del CV** - Estructura modular en `src/lib/data/` para fácil mantenimiento

### Servicios de Generación de PDF

- `cvGenerator.ts` - Generador principal de PDF del CV
- `simpleCvGenerator.ts` - Versión simplificada del generador
- Datos centralizados en `src/lib/data/cv.ts` con funciones de utilidad
