'use client'

import { useState, useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import Link from 'next/link'

type Post = {
  id: string
  title: string
  date: string
  contentHtml: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [expandedPost, setExpandedPost] = useState<string | null>(null)

  // Cargar los posts desde la API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  // Función para alternar el contenido del post
  const togglePostContent = (id: string) => {
    setExpandedPost(expandedPost === id ? null : id)
  }

  return (
    <PageWrapper>
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold mb-6">Consejos de Ciberseguridad</h1>
        <p>Encuentra consejos sobre phishing, malware, redes sociales y más.</p>

        <div className="space-y-4 mt-6">
          {posts.map(({ id, title, date, contentHtml }) => (
            <div key={id} className="border-b pb-4">
              <h2
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => togglePostContent(id)}
              >
                {title}
              </h2>
              <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>

              {/* Solo muestra un resumen o el contenido expandido si el post está abierto */}
              {expandedPost === id && (
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              )}
              {/* Si el post no está expandido, mostrar un botón para expandir */}
              {expandedPost !== id && (
                <div className="mt-4">
                  <button
                    className="text-cyan-500 hover:text-cyan-600 mt-2"
                    onClick={() => togglePostContent(id)}
                  >
                    Leer más
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  )
}
