import './globals.css'
import Navbar from './components/Navbar'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'CiberSeguridad Pro',
  description: 'Consejos para proteger tu vida digital',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
