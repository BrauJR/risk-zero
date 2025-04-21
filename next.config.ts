// next.config.ts
import withMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],  // Permite que Next.js reconozca las páginas .mdx
}

export default withMDX({
  ...nextConfig,
  extension: /\.mdx$/,  // Asegúrate de que MDX esté habilitado
})
