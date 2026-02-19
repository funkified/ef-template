export default function Hero() {
    return (
      <section className="relative text-center py-28 px-6 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto">
        <div className="absolute inset-0 opacity-20 bg-[url('/security.jpg')] bg-cover bg-center"></div>

          <h1 className="text-4xl font-bold mb-4">
            {config.headline}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            {config.subheadline}
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg">
            {config.cta}
          </button>
        </div>
      </section>
    )
  }
  