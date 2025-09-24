# QWEN.md - Contexto del Proyecto

## 📋 Descripción General del Proyecto

Este proyecto es un **Portfolio/Currículum Online personal** desarrollado por **CerveretaDev**, un desarrollador web especializado en Next.js, React, TypeScript e Inteligencia Artificial. Se trata de un sitio web profesional que muestra las habilidades, experiencia y proyectos del desarrollador.

### Tecnologías Principales

- **Next.js 14** con App Router y Server Components
- **TypeScript** con configuración estricta
- **Tailwind CSS** para estilos utilitarios
- **ESLint + Prettier** para linting y formateo
- **Framer Motion** para animaciones
- **Heroicons** para iconos

## 🏗️ Arquitectura y Estructura del Proyecto

### Estructura de Carpetas

```
src/
├── app/                 # App Router (páginas, layouts, estados)
│   ├── about/          # Sección "Acerca de"
│   ├── contact/        # Sección "Contacto"
│   ├── education/      # Sección "Educación"
│   ├── experience/     # Sección "Experiencia"
│   ├── skills/         # Sección "Habilidades"
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout raíz
│   └── page.tsx        # Página principal
├── components/          # Componentes reutilizables
│   ├── Common/         # Componentes comunes
│   ├── curriculum/     # Componentes específicos del currículum
│   ├── layout/         # Componentes de layout
│   ├── Layout/         # Componentes de layout (mayúscula)
│   └── ui/             # Componentes de interfaz básicos
├── hooks/              # Hooks personalizados
├── lib/                # Funciones auxiliares y constantes
└── types/              # Tipos TypeScript globales
```

### Configuración de Imports

El proyecto utiliza alias de TypeScript configurados en `tsconfig.json`:

- `@/*` - Acceso directo a `src/`
- `@/components/*` - Componentes
- `@/hooks/*` - Hooks personalizados
- `@/lib/*` - Utilidades
- `@/types/*` - Tipos TypeScript

## ▶️ Comandos de Desarrollo

### Comandos Principales

- `npm run dev` - Inicia el servidor de desarrollo en el puerto 3000
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint para verificar problemas de código
- `npm run lint:fix` - Corrige automáticamente problemas de linting
- `npm run type-check` - Verifica tipos TypeScript
- `npm run format` - Formatea el código con Prettier
- `npm run format:check` - Verifica el formato del código con Prettier

### Flujo de Desarrollo Recomendado

1. Usar `npm run dev` para desarrollo local
2. Ejecutar `npm run type-check` para verificar tipos
3. Usar `npm run lint:fix` para corregir problemas de linting
4. Ejecutar `npm run format` para formatear el código
5. Verificar con `npm run build` antes de desplegar

## 🎨 Sistema de Diseño y Estilos

### Paleta de Colores Personalizada

El proyecto utiliza una paleta de colores personalizada definida en `tailwind.config.ts`:

- `cervereta-blue` (#028AFA) - Azul principal brillante
- `cervereta-purple` (#1802FA) - Azul oscuro/morado dramático
- `cervereta-medium` (#023CFA) - Azul medio
- `cervereta-cyan` (#02D8FA) - Azul claro/cyan para highlights
- `cervereta-accent` (#6902FA) - Morado para acentos
- `cervereta-soft` (#7494FA) - Azul lavanda suave

### Animaciones y Efectos

- Animaciones personalizadas como `fade-in` y `spin-slow`
- Gradientes para textos y fondos
- Efectos de sombra y transiciones

## ⚙️ Configuración del Proyecto

### Variables de Entorno

Copiar `.env.local.example` como `.env.local` y configurar las variables necesarias:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api
DATABASE_URL=
API_SECRET_KEY=
# ... otras variables
```

### Configuración de Next.js

En `next.config.js` se configuran:

- Patrones de imágenes remotas
- Variables de entorno personalizadas

### TypeScript

Configuración estricta en `tsconfig.json` con:

- Resolución de módulos tipo "bundler"
- Rutas base con alias
- Plugins de Next.js

## 🧱 Patrones de Componentes

### Componentes UI

Los componentes básicos se encuentran en `src/components/ui/` y siguen estos patrones:

- Uso de `forwardRef` para referencias
- Interfaces TypeScript que extienden tipos HTML nativos
- Props para variantes y tamaños con valores por defecto
- Uso de la función `cn()` para concatenar clases de Tailwind

### Ejemplo de Componente

```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    // Implementación del componente
  }
)
```

## 🔧 Características Especiales

### SEO y Metadata

- Metadata completa optimizada para SEO
- Open Graph y Twitter Cards configurados
- Schema.org para estructura de datos
- Canonical URLs y verificación de Google

### Responsive Design

- Layout completamente responsive
- Navegación móvil con menú hamburguesa
- Grid y Flexbox para disposiciones adaptables

### Performance

- Optimización de imágenes con Next.js Image
- Gradientes CSS en lugar de imágenes pesadas
- Lazy loading de componentes cuando es posible

## 📝 Convenciones de Desarrollo

### Código

- TypeScript estricto con verificación de tipos
- Componentes funcionales de React con hooks
- Estilos con Tailwind CSS utilitario
- Linting con ESLint y formateo con Prettier

### Commits y Despliegue

- Verificar tipos antes de hacer commits
- Mantener consistencia de código con Prettier
- Construir y probar antes de desplegar

### Nomenclatura

- Componentes en PascalCase
- Archivos en camelCase o kebab-case
- Variables y funciones en camelCase
- Constantes en UPPER_SNAKE_CASE

## 🌐 Despliegue

- Configurado para desplegar en Vercel (carpeta `.vercel/`)
- Compatible con despliegue estático
- Optimizado para performance en producción
