// next.config.ts
import withMDX from '@next/mdx'

const nextConfig = {
  experimental: {
    appDir: true, // Solo habilita esto si estás usando `appDir` en Next.js 13
  },
  pageExtensions: ['ts', 'tsx', 'mdx'], // Permite .mdx como extensión de página
}

export default withMDX({
  ...nextConfig,
  extension: /\.mdx$/, // Permite .mdx como extensión para las páginas
})
