// next.config.ts

import withMDX from '@next/mdx'

const nextConfig = {
  experimental: {
    appDir: true,  // Si estás utilizando Next.js 13 y appDir
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],  // Permite que Next.js reconozca las páginas .mdx
}

export default withMDX({
  ...nextConfig,  // Combina tu configuración con la de MDX
  extension: /\.mdx$/,  // Indica que los archivos .mdx son páginas válidas
})
