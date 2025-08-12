"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Article {
  id: string
  title: string
  excerpt: string
  featured_image: string
  slug: string
  author: string
  published_at: string
}

interface CategoryPageProps {
  categorySlug: string
  categoryTitle: string
}

export default function CategoryPageTemplate({ categorySlug, categoryTitle }: CategoryPageProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(`https://admin.koodos.in/api/public/articles?category=${categorySlug}&status=PUBLISHED&limit=20`)
        if (response.ok) {
          const data = await response.json()
          setArticles(data || [])
        }
      } catch (error) {
        console.error(`Failed to fetch ${categorySlug} articles:`, error)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [categorySlug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">{categoryTitle}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900"
        >
          {categoryTitle}
        </motion.h1>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No {categoryTitle.toLowerCase()} articles available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link key={article.id} href={`/article/${categorySlug}/${article.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.featured_image || '/placeholder.svg?height=200&width=300'}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h2>
                    <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                    <div className="text-xs text-gray-500">
                      By {article.author} • {new Date(article.published_at).toLocaleDateString()}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}