"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import VideoPlayer from '@/components/video-player'

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  videoUrl?: string
  thumbnail?: string
  slug: string
  category: {
    name: string
    slug: string
  }
  publishedAt: string
  createdAt: string
}

export default function LatestNews() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticles() {
      try {
        // Fetch both featured and latest articles
        const [featuredResponse, latestResponse] = await Promise.all([
          fetch('https://admin.koodos.in/api/public/articles?status=PUBLISHED&featured=true&limit=2'),
          fetch('https://admin.koodos.in/api/public/articles?status=PUBLISHED&limit=6')
        ])
        
        let allArticles: any[] = []
        
        if (featuredResponse.ok) {
          const featuredData = await featuredResponse.json()
          allArticles = [...(featuredData || [])]
        }
        
        if (latestResponse.ok) {
          const latestData = await latestResponse.json()
          // Add latest articles that aren't already featured
          const latestFiltered = (latestData || []).filter((article: any) => 
            !allArticles.some(featured => featured.id === article.id)
          ).slice(0, 4 - allArticles.length)
          allArticles = [...allArticles, ...latestFiltered]
        }
        
        const response = { ok: true }
        const data = allArticles
        if (allArticles.length > 0) {
          const data = await response.json()
          // Map backend data to frontend format
          const mappedArticles = (data || []).map((article: any) => ({
            id: article.id,
            title: article.title,
            excerpt: article.excerpt || '',
            image: article.featured_image || '/placeholder.svg',
            videoUrl: article.video_url,
            slug: article.slug,
            category: { name: article.category, slug: article.category },
            publishedAt: article.published_at || article.created_at,
            createdAt: article.created_at
          }))
          setArticles(mappedArticles)
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error)
        // Fallback to mock data
        setArticles([
          {
            id: '1',
            title: 'PlayStation 5 Pro Announced with Enhanced Graphics',
            excerpt: 'Sony reveals the next generation of gaming with improved performance',
            image: '/placeholder.svg?height=200&width=300',
            slug: 'playstation-5-pro-announced',
            category: { name: 'Gaming', slug: 'gaming' },
            publishedAt: '2 hours ago',
            createdAt: new Date().toISOString()
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return (
      <section className="px-6 lg:px-12 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 lg:px-12 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 pb-2 inline-block"
      >
        Latest News
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <Link key={article.id} href={`/article/news/${article.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                {article.videoUrl ? (
                  <VideoPlayer 
                    src={article.videoUrl} 
                    poster={article.thumbnail || article.image}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={article.image || '/placeholder.svg?height=200&width=300'}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">
                  {article.category.name}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <div className="text-xs text-gray-500">
                  {new Date(article.publishedAt || article.createdAt).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}