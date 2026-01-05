/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Catch type errors during build for better code quality
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      }
    ],
  },
  reactCompiler: true,
  reactStrictMode: true,
}

export default nextConfig
