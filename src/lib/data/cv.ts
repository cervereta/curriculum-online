import { CERVERETA_PERSONAL_INFO } from './personalInfo'
import { CERVERETA_EDUCATION } from './education'
import { CERVERETA_EXPERIENCE } from './experience'
import { CERVERETA_SKILLS } from './skills'

/**
 * Datos completos del CV de CerveretaDev
 * Consolidación de toda la información para generación del CV en PDF
 */
export const CERVERETA_CV_DATA = {
  personalInfo: CERVERETA_PERSONAL_INFO,
  education: CERVERETA_EDUCATION,
  experience: CERVERETA_EXPERIENCE,
  skills: CERVERETA_SKILLS,
}

/**
 * Obtiene las habilidades agrupadas por categoría
 */
export const getSkillsByCategory = () => {
  const categories: { [key: string]: any[] } = {}

  CERVERETA_SKILLS.forEach((skill) => {
    if (!categories[skill.category]) {
      categories[skill.category] = []
    }
    categories[skill.category].push(skill)
  })

  return categories
}

/**
 * Obtiene las habilidades técnicas (excluyendo idiomas y soft skills)
 */
export const getTechnicalSkills = () => {
  return CERVERETA_SKILLS.filter(
    (skill) =>
      skill.category !== 'languages' && skill.category !== 'soft-skills'
  )
}

/**
 * Obtiene las certificaciones más relevantes
 */
export const getHighlightedEducation = () => {
  return CERVERETA_EDUCATION.filter((edu) => edu.isHighlighted)
}

/**
 * Obtiene la experiencia laboral más reciente
 */
export const getRecentExperience = () => {
  return CERVERETA_EXPERIENCE.slice(0, 3)
}
