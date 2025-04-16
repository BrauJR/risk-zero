import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../layout'

interface PostMeta {
  title: string
  description: string
  date: string
  slug: string
}

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

  // Verifica si la carpeta existe
  const folderExists = fs.existsSync(postsDirectory)

  if (!folderExists) {
    return (
      <Layout>
        <h1 className="text-2xl font-bold text-red-500">⚠️ La carpeta /app/blog/posts no existe</h1>
        <p className="text-gray-400">Crea la carpeta y agrega al menos un archivo .mdx dentro.</p>
      </Layout>
    )
  }

  const files = fs.readdirSync(postsDirectory)

  if (files.length === 0) {
    return (
      <Layout>
        <h1 className="text-xl">📝 No hay artículos aún</h1>
        <p>Agrega archivos .mdx a la carpeta <code>/app/blog/posts</code> para empezar a publicar.</p>
      </Layout>
    )
  }

  const posts: PostMeta[] = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      ...data,
      slug: filename.replace('.mdx', ''),
    } as PostMeta
  })

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Blog de Ciberseguridad</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-700 pb-4">
            <Link href={`/blog/${post.slug}`} className="block hover:text-cyan-400">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <p>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
