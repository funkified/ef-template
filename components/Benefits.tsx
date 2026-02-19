import { config } from "@/lib/config"

export default function Benefits() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-xl mx-auto">
        {config.benefits.map((item, i) => (
          <div key={i} className="mb-4 text-lg">
            ✓ {item}
          </div>
        ))}
      </div>
    </section>
  )
}
