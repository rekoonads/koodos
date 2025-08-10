/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client', 'prisma')
    }
    return config
  },
  images: {
    domains: ['koodos.in', 'admin.koodos.in', 'via.placeholder.com', 'res.cloudinary.com'],
    unoptimized: true
  }
}

export default nextConfig