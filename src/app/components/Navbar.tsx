'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Risk Zero</h1>
        <ul className="flex gap-4">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/sobre-mi">Sobre mí</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}
