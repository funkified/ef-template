import { config } from "@/lib/config"

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">
        {config.headline}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {config.subheadline}
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-lg">
        {config.cta}
      </button>
    </section>
  )
}
