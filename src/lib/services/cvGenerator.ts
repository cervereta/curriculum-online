import { CERVERETA_CV_DATA } from '../data/cv'
import { Skill } from '@/types/curriculum'

/**
 * Convierte una imagen a base64
 */
const getImageAsBase64 = (imagePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (!ctx) {
          reject(new Error('No se pudo obtener el contexto del canvas'))
          return
        }

        // Redimensionar para optimizar el PDF (máximo 150px)
        const maxSize = 150
        const ratio = Math.min(maxSize / img.width, maxSize / img.height)
        canvas.width = img.width * ratio
        canvas.height = img.height * ratio

        // Fondo blanco para asegurar buena calidad en JPG
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Dibujar la imagen redimensionada
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        // Convertir a base64 con alta calidad para CV
        const dataURL = canvas.toDataURL('image/jpeg', 0.85)
        resolve(dataURL)
      } catch (error) {
        reject(error)
      }
    }

    img.onerror = (error) => {
      console.warn('Error al cargar la imagen:', error)
      reject(new Error('No se pudo cargar la imagen'))
    }

    // Usar la ruta completa del servidor local para evitar problemas CORS
    img.src = window.location.origin + imagePath
  })
}

/**
 * Genera un CV en PDF para CerveretaDev
 */
export const generateCvPdf = async () => {
  // Cargar dinámicamente las dependencias de pdfmake
  const pdfMake = (await import('pdfmake/build/pdfmake')).default
  const vfs = (await import('pdfmake/build/vfs_fonts')).default

  // Registrar las fuentes
  if (vfs && vfs.pdfMake && vfs.pdfMake.vfs) {
    pdfMake.vfs = vfs.pdfMake.vfs
  } else if (vfs) {
    pdfMake.vfs = vfs
  } else {
    console.error('No se pudieron cargar las fuentes de pdfmake')
    throw new Error('Error al cargar las fuentes de pdfmake')
  }

  // Cargar la imagen del perfil (específica para CV)
  let profileImage = ''
  try {
    console.log('Intentando cargar imagen de perfil para CV...')
    profileImage = await getImageAsBase64('/cv-photo.jpg')
    console.log('Imagen de perfil para CV cargada exitosamente')
  } catch (error) {
    console.warn('No se pudo cargar la imagen de perfil:', error)
    console.log('Continuando sin imagen...')
    // Continuar sin imagen si hay error
  }

  // Configurar fuentes personalizadas
  pdfMake.fonts = {
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf',
    },
  }

  const { personalInfo, education, experience, skills } = CERVERETA_CV_DATA

  // Función auxiliar para crear secciones de habilidades
  const createSkillsSection = (skills: Skill[], category: string) => {
    return [
      { text: category, style: 'subheader', margin: [0, 10, 0, 5] },
      {
        ul: skills.map((skill) => `${skill.name} (${skill.level})`),
        style: 'listItem',
      },
    ]
  }

  // Definición del documento PDF
  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [40, 60, 40, 60],
    content: [
      // Encabezado con información personal e imagen
      {
        columns: [
          // Imagen de perfil
          profileImage
            ? {
                image: profileImage,
                width: 80,
                height: 80,
                alignment: 'center',
                margin: [0, 0, 20, 0],
              }
            : { text: '', width: 100 },
          // Información personal
          [
            { text: personalInfo.name, style: 'header' },
            {
              text: personalInfo.title,
              style: 'subheader',
              margin: [0, 5, 0, 10],
            },
            {
              columns: [
                [
                  {
                    text: 'Contacto',
                    style: 'subheader',
                    margin: [0, 10, 0, 5],
                  },
                  { text: `Email: ${personalInfo.email}`, style: 'listItem' },
                  {
                    text: `Teléfono: ${personalInfo.phone}`,
                    style: 'listItem',
                  },
                  {
                    text: `Ubicación: ${personalInfo.location}`,
                    style: 'listItem',
                  },
                  { text: `Web: ${personalInfo.website}`, style: 'listItem' },
                ],
              ],
            },
          ],
        ],
      },

      // Resumen profesional
      {
        text: 'Resumen Profesional',
        style: 'sectionHeader',
        margin: [0, 20, 0, 10],
      },
      { text: personalInfo.bio, style: 'paragraph' },

      // Experiencia
      {
        text: 'Experiencia Profesional',
        style: 'sectionHeader',
        margin: [0, 20, 0, 10],
      },
      ...experience
        .map((exp) => [
          { text: exp.position, style: 'subheader', margin: [0, 10, 0, 0] },
          { text: `${exp.company} | ${exp.period}`, style: 'listItem' },
          { text: exp.description, style: 'paragraph', margin: [0, 5, 0, 10] },
          ...(exp.achievements
            ? [
                {
                  ul: exp.achievements.map((a) => a),
                  style: 'listItem',
                },
              ]
            : []),
        ])
        .flat(),

      // Educación
      {
        text: 'Formación y Certificaciones',
        style: 'sectionHeader',
        margin: [0, 20, 0, 10],
      },
      ...education
        .map((edu) => [
          { text: edu.title, style: 'subheader', margin: [0, 10, 0, 0] },
          { text: `${edu.institution} | ${edu.year}`, style: 'listItem' },
          {
            text: edu.description || '',
            style: 'paragraph',
            margin: [0, 5, 0, 10],
          },
          ...(edu.skills
            ? [
                {
                  text: 'Habilidades: ' + edu.skills.join(', '),
                  style: 'listItem',
                  margin: [0, 0, 0, 10],
                },
              ]
            : []),
        ])
        .flat(),

      // Habilidades
      { text: 'Habilidades', style: 'sectionHeader', margin: [0, 20, 0, 10] },
      ...Object.entries(
        skills.reduce((acc: { [key: string]: Skill[] }, skill) => {
          if (!acc[skill.category]) {
            acc[skill.category] = []
          }
          acc[skill.category].push(skill)
          return acc
        }, {})
      )
        .map(([category, catSkills]) =>
          createSkillsSection(catSkills, category)
        )
        .flat(),
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
        color: '#1802FA',
      },
      subheader: {
        fontSize: 16,
        bold: true,
        color: '#028AFA',
      },
      sectionHeader: {
        fontSize: 18,
        bold: true,
        color: '#6902FA',
      },
      paragraph: {
        fontSize: 11,
        margin: [0, 5, 0, 0],
      },
      listItem: {
        fontSize: 10,
        margin: [0, 2, 0, 2],
      },
    },
    defaultStyle: {
      font: 'Roboto',
      fontSize: 10,
    },
  }

  try {
    // Generar y descargar el PDF
    console.log('Generando PDF...')
    const pdfDocGenerator = pdfMake.createPdf(docDefinition)
    pdfDocGenerator.download('CerveretaDev-CV.pdf')
    console.log('PDF generado correctamente')
  } catch (error) {
    console.error('Error al generar el PDF:', error)
    throw error
  }
}
