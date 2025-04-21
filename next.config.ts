// next.config.js

import withMDX from '@next/mdx'

const nextConfig = {
  experimental: {
    appDir: true, // Si estás usando el directorio `app` de Next.js
  },
  pageExtensions: ['ts', 'tsx', 'mdx'], // Permite .mdx como extensión de página
}

export default withMDX({
  ...nextConfig, // Mantenemos la configuración de Next.js
  extension: /\.mdx$/, // Especificamos que .mdx debe ser procesado
})
