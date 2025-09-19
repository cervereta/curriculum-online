import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-cervereta-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-6">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <Link
          href="/"
          className="bg-cervereta-blue text-white px-6 py-2 rounded-lg hover:bg-cervereta-medium transition-colors duration-200 inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
