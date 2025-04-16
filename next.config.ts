/** @type {import('next').NextConfig} */

import withMDX from '@next/mdx'

const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'], // Permite .mdx como extensión de página
}

export default withMDX({
  ...nextConfig, // Aquí fusionamos la configuración
  extension: /\.mdx$/, // Especificamos la extensión para MDX
})
