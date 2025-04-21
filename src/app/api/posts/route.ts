// src/app/api/posts/route.ts (o .js si no usas TypeScript)
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function GET() {
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

  return new Response(JSON.stringify(allPosts))
}
