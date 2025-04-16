'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      className="min-h-screen p-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Protege tu mundo digital 🛡️
      </h1>
      <p className="text-xl text-gray-400">
        Aprende a detectar estafas, navegar seguro y proteger tus datos en línea.
      </p>
      <div className="mt-8">
        <a
          href="/blog"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition"
        >
          Leer consejos
        </a>
      </div>
    </motion.main>
  )
}
