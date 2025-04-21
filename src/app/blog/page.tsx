// src/app/blog/page.tsx

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import PageWrapper from '../components/PageWrapper'

// Esta función lee los archivos del servidor y retorna los posts
const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')
  const fileNames = fs.readdirSync(postsDirectory)

  const allPosts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')  // Eliminar la extensión .md

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    // Convertir Markdown a HTML
    const contentHtml = remark().use(html).processSync(matterResult.content).toString()

    return {
      id,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      contentHtml,
    }
  })

  // Ordenar los posts por fecha (más recientes primero)
  allPosts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

  return allPosts
}

export async function getStaticProps() {
  // Cargar los posts solo en el servidor durante la construcción
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}

export default function BlogPage({ posts }: { posts: Array<{ id: string, title: string, date: string }> }) {
  return (
    <PageWrapper>
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-bold mb-6">Blog de Ciberseguridad</h1>
        <p>Pronto artículos sobre phishing, malware, redes sociales y más.</p>

        <div className="space-y-4 mt-6">
          {posts.map(({ id, title, date }) => (
            <div key={id} className="border-b pb-4">
              <h2 className="text-2xl font-semibold">
                <Link href={`/blog/${id}`}>{title}</Link>
              </h2>
              <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  )
}
