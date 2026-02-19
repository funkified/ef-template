qtype HeroProps = {
  config: {
    headline: string
    subheadline: string
    cta: string
  }
}

export default function Hero({ config }: HeroProps) {
  const phoneNumber = "17875299283" // ← CAMBIA ESTE NÚMERO (sin +, sin espacios)

  return (
    <section className="relative text-white text-center py-32 px-6 overflow-hidden">
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Fondo (opcional) */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/security.jpg')" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {config.headline}
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          {config.subheadline}
        </p>

        {/* CTA principal */}
        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg text-lg">
          {config.cta}
        </button>

        {/* Botones de contacto */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          
          <a
            href={`tel:${phoneNumber}`}
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg"
          >
            📞 Llamar Ahora
          </a>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            className="bg-black hover:bg-gray-800 transition px-6 py-3 rounded-lg"
          >
            💬 WhatsApp
          </a>

        </div>
      </div>
    </section>
  )
}
