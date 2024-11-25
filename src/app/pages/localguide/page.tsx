import React from 'react'
import Image from "next/image";
const LocalGuide = () => {
  return (
    
    <div className="flex flex-col gap-8 p-6 ">
      <section className="text-center bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Aldea Brasilera
        </h1>

        <p className="text-gray-700 mb-4">
        Ubicada a orillas del río Paraná y a pocos kilómetros de Paraná y Diamante, Aldea Brasilera es una encantadora localidad que invita a los visitantes a descubrir su rica herencia cultural y natural. Fundada en el siglo XIX por inmigrantes alemanes del Volga, esta aldea combina tradiciones germánicas con el espíritu tranquilo de la vida entrerriana.

El pueblo se caracteriza por sus casas de estilo colonial, su iglesia histórica y la cálida hospitalidad de su gente. Rodeada de verdes paisajes, ofrece oportunidades para disfrutar de actividades al aire libre, como caminatas y paseos en bicicleta. Los visitantes también pueden deleitarse con la gastronomía local, que mezcla sabores típicos alemanes y argentinos.

Aldea Brasilera es el destino ideal para quienes buscan tranquilidad, historia y naturaleza en un entorno único.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-8">

      <div className="w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Image
          src="/principal/iglesia.jpeg"
          alt="Descripción de la imagen 1"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Image
          src="/principal/brasilera-1.webp"
          alt="Descripción de la imagen 2"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Image
          src="/principal/heim-barril.webp"
          alt="Descripción de la imagen 3"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Image
          src="/principal/aldea.jpeg"
          alt="Descripción de la imagen 3"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>
    </div>
      </section>
    </div>
  )
}
export default LocalGuide