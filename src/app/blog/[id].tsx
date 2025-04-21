// src/app/blog/[id].tsx
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter'

// Directorio donde están tus archivos MDX
const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')

// Función para obtener el post por su id
const getPostById = async (id: string) => {
  // Asegúrate de que el archivo exista
  const fullPath = path.join(postsDirectory, `${id}.mdx`)

  // Verificar si el archivo no existe
  if (!fs.existsSync(fullPath)) {
    return null
  }

  // Leer el archivo MDX
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Usar gray-matter para extraer frontmatter
  const { data, content } = matter(fileContents)

  // Serializar el contenido MDX (para ser renderizado)
  const mdxSource = await serialize(content)

  return {
    id,
    title: data.title,
    date: data.date,
    mdxSource,
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params

  // Obtener el post usando la función anterior
  const post = await getPostById(id)

  // Si no existe el post, mostrar página 404
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>

      {/* Renderizamos el contenido MDX aquí */}
      <div className="mt-6">
        <MDXRemote {...post.mdxSource} />
      </div>
    </div>
  )
}
