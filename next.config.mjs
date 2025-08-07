/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  images: {
    domains: ['localhost', 'via.placeholder.com'],
    unoptimized: true
  }
}

export default nextConfig