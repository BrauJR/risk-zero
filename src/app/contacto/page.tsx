export default function Contacto() {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        <form
          action="https://formsubmit.co/jrm4912@gmail.com"
          method="POST"
          className="max-w-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Tu mensaje"
            className="w-full p-2 rounded bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md"
          >
            Enviar mensaje
          </button>
        </form>
      </main>
    )
  }
  