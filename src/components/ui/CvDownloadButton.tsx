'use client'

import { Button } from '@/components/ui/Button'
import { generateCvPdf } from '@/lib/services/cvGenerator'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface CvDownloadButtonProps {
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const CvDownloadButton = ({
  className = '',
  variant = 'primary',
  size = 'md',
}: CvDownloadButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      console.log('Iniciando descarga del CV...')
      await generateCvPdf()
      console.log('Descarga del CV completada')
    } catch (error) {
      console.error('Error al generar el CV:', error)
      alert('Error al generar el CV. Por favor, revisa la consola para más detalles.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      size={size}
      disabled={isLoading}
      className={`flex items-center gap-2 ${className}`}
    >
      {isLoading ? (
        <>
          <span className="animate-spin">⏳</span>
          <span>Generando...</span>
        </>
      ) : (
        <>
          <DocumentArrowDownIcon className="w-5 h-5" />
          <span>Descargar CV</span>
        </>
      )}
    </Button>
  )
}
