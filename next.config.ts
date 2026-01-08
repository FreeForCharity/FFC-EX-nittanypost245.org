import type { NextConfig } from 'next'

const rawBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim()
const normalizedBasePath =
  rawBasePath === '/' || rawBasePath === '/FFC_Single_Page_Template'
    ? ''
    : rawBasePath.replace(/\/+$/, '')

const nextConfig: NextConfig = {
  output: 'export',
  // Images configuration
  images: {
    // This allows all images, local or external, to load without optimization
    unoptimized: true,
    // Use remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nittanypost245.org',
      },
      {
        protocol: 'https',
        hostname: 'www.nittanypost245.org',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
    ],
  },
  // Optional: base path and asset prefix if using a subdirectory deployment
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath,
}

export default nextConfig
