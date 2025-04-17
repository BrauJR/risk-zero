'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Risk Zero</h1>

        {/* Botón hamburguesa (visible solo en móviles) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Abrir menú"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú de navegación */}
        <ul className={`md:flex gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out z-10 ${isOpen ? 'flex flex-col items-center py-4' : 'hidden md:flex'}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link href="/sobre-mi" onClick={() => setIsOpen(false)}>Sobre mí</Link></li>
          <li><Link href="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}
