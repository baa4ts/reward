import { Ban } from 'lucide-react'
import React from 'react'

export const ErrorComponent = React.memo(() => (
    <section className="custom-width flex flex-col items-center justify-center gap-4 py-10 text-center">
        <Ban className="w-16 h-16 text-red-500 animate-pulse" />
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Hubo un error al cargar
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
            Intenta recargar la página o verifica tu conexión a internet.
        </p>
    </section>
))


