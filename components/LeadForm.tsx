export default function LeadForm() {
    return (
      <section className="py-12 px-6">
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="border p-3 rounded"
          />
          <button className="bg-green-600 text-white py-3 rounded">
            Enviar Información
          </button>
        </form>
      </section>
    )
  }
  
  