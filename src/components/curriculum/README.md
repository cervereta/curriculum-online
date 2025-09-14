# Componentes del Curriculum - CerveretaDev

Colección de componentes UI avanzados para el curriculum online, diseñados específicamente para el portfolio de CerveretaDev.

## 🎨 Paleta de Colores

Los componentes utilizan la paleta oficial de CerveretaDev:
- `cervereta-blue`: #028AFA (Azul principal)
- `cervereta-purple`: #1802FA (Azul oscuro/morado)
- `cervereta-medium`: #023CFA (Azul medio)
- `cervereta-cyan`: #02D8FA (Azul claro/cyan)
- `cervereta-accent`: #6902FA (Morado accent)
- `cervereta-soft`: #7494FA (Azul lavanda)

## 📦 Componentes Disponibles

### 1. CertificateCard

Tarjeta elegante para mostrar certificaciones académicas y profesionales.

```tsx
import { CertificateCard } from '@/components/curriculum';

<CertificateCard
  title="Next.js 14 Certification"
  code="CERT-2024-001"
  category="Frontend Development"
  description="Certificación avanzada en desarrollo con Next.js 14, incluyendo App Router y Server Components"
  skills={["React", "TypeScript", "Server Components", "App Router"]}
  isHighlighted={true}
/>
```

**Props:**
- `title` (string): Título de la certificación
- `code?` (string): Código de certificación opcional
- `category` (string): Categoría de la certificación
- `description?` (string): Descripción detallada
- `skills` (string[]): Array de habilidades relacionadas
- `isHighlighted?` (boolean): Si debe destacarse visualmente
- `className?` (string): Clases CSS adicionales

### 2. SkillBadge

Badge para mostrar habilidades técnicas con nivel y categoría.

```tsx
import { SkillBadge } from '@/components/curriculum';

<SkillBadge
  name="React"
  level="expert"
  category="frontend"
/>
```

**Props:**
- `name` (string): Nombre de la habilidad
- `level` ('beginner' | 'intermediate' | 'advanced' | 'expert'): Nivel de experiencia
- `category` ('frontend' | 'backend' | 'ai' | 'tools' | 'database' | 'cloud'): Categoría técnica
- `color?` (string): Color personalizado opcional
- `className?` (string): Clases CSS adicionales

**Categorías disponibles:**
- `frontend`: ⚛️ React, Vue, Angular, etc.
- `backend`: ⚙️ Node.js, Python, Java, etc.
- `ai`: 🤖 TensorFlow, PyTorch, OpenAI, etc.
- `tools`: 🛠️ Git, Docker, Webpack, etc.
- `database`: 🗄️ MongoDB, PostgreSQL, etc.
- `cloud`: ☁️ AWS, Azure, GCP, etc.

### 3. SectionHeader

Encabezado de sección reutilizable con tipografía jerárquica.

```tsx
import { SectionHeader } from '@/components/curriculum';

<SectionHeader
  title="Experiencia Profesional"
  subtitle="Más de 5 años desarrollando soluciones web"
  description="Mi trayectoria profesional abarca desde desarrollo frontend hasta implementación de soluciones de IA"
  centered
/>
```

**Props:**
- `title` (string): Título principal de la sección
- `subtitle?` (string): Subtítulo opcional
- `description?` (string): Descripción detallada opcional
- `centered?` (boolean): Si debe centrarse el contenido
- `className?` (string): Clases CSS adicionales

### 4. ProgressBar

Barra de progreso animada para mostrar nivel de habilidades.

```tsx
import { ProgressBar } from '@/components/curriculum';

<ProgressBar
  skill="React & Next.js"
  percentage={95}
  color="blue"
  animated
  showLabel
/>
```

**Props:**
- `skill` (string): Nombre de la habilidad
- `percentage` (number): Porcentaje de dominio (0-100)
- `color?` ('blue' | 'purple' | 'cyan' | 'accent'): Variante de color
- `animated?` (boolean): Si debe animarse al aparecer en pantalla
- `showLabel?` (boolean): Si mostrar etiqueta de nivel
- `className?` (string): Clases CSS adicionales

## 🚀 Uso Conjunto

Ejemplo de uso combinado para crear una sección completa:

```tsx
import { 
  SectionHeader, 
  CertificateCard, 
  SkillBadge, 
  ProgressBar 
} from '@/components/curriculum';

export default function SkillsSection() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Habilidades Técnicas"
        subtitle="Tecnologías que domino"
        description="Un resumen de mis competencias técnicas principales"
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-6">
          <ProgressBar skill="React & Next.js" percentage={95} color="blue" animated />
          <ProgressBar skill="TypeScript" percentage={90} color="purple" animated />
          <ProgressBar skill="Node.js" percentage={85} color="cyan" animated />
        </div>
        
        <div className="space-y-4">
          <CertificateCard
            title="Full Stack Development"
            category="Web Development"
            skills={["React", "Node.js", "MongoDB"]}
            isHighlighted
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-8 justify-center">
        <SkillBadge name="React" level="expert" category="frontend" />
        <SkillBadge name="TypeScript" level="advanced" category="frontend" />
        <SkillBadge name="Next.js" level="expert" category="frontend" />
        <SkillBadge name="Python" level="intermediate" category="ai" />
      </div>
    </section>
  );
}
```

## ♿ Accesibilidad

Todos los componentes incluyen:
- **Contraste adecuado**: Cumple con WCAG 2.1 AA (mínimo 4.5:1)
- **Navegación por teclado**: Completamente accesible con Tab/Enter
- **Lectores de pantalla**: ARIA labels y roles apropiados
- **Texto alternativo**: Descripciones para iconos y elementos visuales
- **Estados de foco**: Indicadores visuales claros

## 📱 Responsive Design

- **Mobile-first**: Diseñados para dispositivos móviles primero
- **Breakpoints**: Responsive en sm, md, lg, xl
- **Flexibilidad**: Se adaptan a diferentes tamaños de contenedor
- **Touch-friendly**: Áreas de toque adecuadas para dispositivos táctiles

## 🎭 Animaciones

Utilizan **Framer Motion** para:
- Animaciones de entrada suaves
- Estados hover interactivos
- Transiciones fluidas
- Efectos de scroll-triggered
- Respeta las preferencias de accesibilidad `prefers-reduced-motion`

## 🛠️ Tecnologías

- **React 18+** con hooks modernos
- **TypeScript** para type safety
- **Tailwind CSS** con clases personalizadas
- **Framer Motion** para animaciones
- **Next.js 14+** compatible

## 📝 Notas de Implementación

1. Asegúrate de tener instalado `framer-motion`
2. Los colores personalizados están configurados en `tailwind.config.ts`
3. Todos los componentes son **client-side** (usan `'use client'`)
4. Compatible con modo oscuro automático
5. Optimizado para rendimiento con lazy loading de animaciones