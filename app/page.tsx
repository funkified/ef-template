import Hero from "@/components/Hero"
import Benefits from "@/components/Benefits"
import LeadForm from "@/components/LeadForm"

export default function Home() {
  return (
    <main>
      <div className="text-xs text-center py-2 bg-yellow-200">
        DEMO - Powered by Emporium Factory
      </div>
      <Hero />
      <Benefits />
      <LeadForm />
    </main>
  )
}
