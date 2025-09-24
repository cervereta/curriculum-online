import emailjs from '@emailjs/browser'

// Configuración de EmailJS
const EMAIL_SERVICE_ID = 'service_20kl5gq'
const EMAIL_TEMPLATE_ID = 'template_vrjfs8o'
const EMAIL_PUBLIC_KEY = 'vSIy-uVqckpfpQlUW'

// Inicializar EmailJS
emailjs.init(EMAIL_PUBLIC_KEY)

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export const sendEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString('es-ES'),
    }

    await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams,
      EMAIL_PUBLIC_KEY
    )

    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}
