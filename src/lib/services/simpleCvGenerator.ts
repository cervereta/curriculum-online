/**
 * Genera un CV en formato de texto plano para CerveretaDev
 * Esta es una versión simplificada que no depende de bibliotecas externas
 */
export const generateSimpleCv = () => {
  const cvContent = `
CURRÍCULUM VITAE
================

INFORMACIÓN PERSONAL
-------------------
Nombre: CerveretaDev
Título: Desarrollador Web Full Stack & Experto en IA
Ubicación: España
Email: cervereta@cerveretadev.es
Teléfono: +34 622 564 303
Web: https://cerveretadev.es
LinkedIn: https://linkedin.com/in/cervereta
GitHub: https://github.com/cervereta

RESUMEN PROFESIONAL
-------------------
Desarrollador Web especializado en Next.js, React, TypeScript e Inteligencia Artificial con 5 años de experiencia creando soluciones innovadoras con IA, LLMs, automatizaciones y metodología BMAD-METHOD.

EXPERIENCIA PROFESIONAL
----------------------
Desarrollador Web Full Stack Freelance - CerveretaDev - Freelance (2020 - Actualidad)
- Desarrollo de aplicaciones web completas con Next.js, React y TypeScript
- Integración de soluciones de IA y automatización de procesos para clientes diversos
- Logros: Desarrollado más de 20 aplicaciones web, implementado soluciones de IA que aumentaron la productividad en un 40%, creado sistemas de automatización que redujeron tiempos de procesos repetitivos en un 60%

Consultor de Inteligencia Artificial - CerveretaDev (2022 - Actualidad)
- Especialista en integración de LLMs generativas, creación de workflows automatizados
- Desarrollo de herramientas con IA para empresas
- Logros: Diseñado e implementado workflows de IA para 15+ empresas, creado soluciones automatizadas que reemplazaron procesos manuales, entrenado a equipos en el uso efectivo de herramientas de IA

Desarrollador Web - Agencia Digital XYZ (2019 - 2021)
- Desarrollo y mantenimiento de sitios web y aplicaciones para clientes corporativos
- Logros: Liderado el desarrollo de 10+ proyectos web, implementado mejores prácticas de SEO que aumentaron el tráfico en un 35%, optimizado el rendimiento de aplicaciones existentes mejorando tiempos de carga en un 50%

Educador Tecnológico - Centro de Formación ABC (2018 - 2020)
- Formación de profesionales en tecnologías web y herramientas digitales
- Logros: Formado a más de 200 estudiantes en desarrollo web, diseñado currículos actualizados para cursos de programación, creado materiales educativos interactivos para aprendizaje en línea

FORMACIÓN Y CERTIFICACIONES
---------------------------
Desarrollo de Aplicaciones con Tecnologías Web (IFCD0210) - Certificación Profesional SEPE (2023)
- Certificación profesional completa en desarrollo web moderno con tecnologías frontend y backend
- Habilidades: HTML5, CSS3, JavaScript ES6+, PHP, MySQL, Responsive Design, APIs REST

Experto en Inteligencia Artificial - Formación Especializada (2024)
- Especialización avanzada en LLMs generativas, automatizaciones inteligentes, MCPs y workflows de IA aplicada
- Habilidades: LLMs, ChatGPT, Claude, Automatización con IA, MCPs, Workflows, Prompt Engineering, AI Tools

Docencia de la Formación Profesional para el Empleo (SSCE010) - Certificación Profesional SEPE (2022)
- Certificación en metodologías pedagógicas y diseño de formación profesional
- Habilidades: Metodología Didáctica, Evaluación de Competencias, Diseño Curricular, Tutorización, Formación Online

Asistencia a la Dirección (ADGG0108) - Certificación Profesional SEPE (2021)
- Competencias en gestión administrativa, organización empresarial y asistencia ejecutiva
- Habilidades: Gestión Administrativa, Organización Empresarial, Comunicación Corporativa, Gestión Documental, Protocolo

Excel Avanzado y Power BI (IFCT56) - Centro de Formación Especializada (2023)
- Análisis de datos avanzado, creación de dashboards interactivos y Business Intelligence
- Habilidades: Excel Avanzado, Power BI, DAX, Power Query, Visualización de Datos, Business Intelligence, Dashboards

HABILIDADES
-----------
Frontend: Next.js (Experto), React (Experto), TypeScript (Avanzado), JavaScript (Experto), HTML5 (Experto), CSS3 (Experto), Tailwind CSS (Avanzado), Vue.js (Intermedio)

Backend: Node.js (Avanzado), Python (Intermedio), PHP (Intermedio), Express.js (Avanzado), FastAPI (Intermedio)

Bases de Datos: MySQL (Avanzado), PostgreSQL (Intermedio), MongoDB (Avanzado), Firebase (Intermedio), Supabase (Intermedio)

IA y Machine Learning: LLMs (Experto), OpenAI API (Avanzado), Claude (Avanzado), Prompt Engineering (Experto), n8n (Avanzado), Make (Zapier) (Avanzado), LangChain (Intermedio)

Herramientas y DevOps: Git (Experto), Docker (Intermedio), VSCode (Experto), Figma (Intermedio), Postman (Avanzado), Claude Code (Experto), Cursor IDE (Avanzado)

Idiomas: Español (Experto), Inglés (Avanzado)

Habilidades Blandas: Formación (Avanzado), Comunicación (Experto), Resolución de Problemas (Experto)
`

  // Crear un Blob con el contenido del CV
  const blob = new Blob([cvContent], { type: 'text/plain' })

  // Crear un enlace de descarga
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'CerveretaDev-CV.txt'

  // Simular clic en el enlace para iniciar la descarga
  document.body.appendChild(a)
  a.click()

  // Limpiar
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
