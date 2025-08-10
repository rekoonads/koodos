"use client"

import { useState, useEffect } from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { fetchNews } from "@/lib/api"
import Link from "next/link"
import Image from "next/image"
import { fetchNews } from "@/lib/api"

interface Article {
  id: string
  title: string
  excerpt: string
  featuredImage?: string
  category: string
  author: string
  views: number
  slug?: string
  createdAt: string
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetchNews({ category: "latest-news", limit: 20 })
        if (response.success && response.data) {
          setArticles(response.data.articles)
        }
      } catch (error) {
        console.error("Failed to load news articles:", error)
      } finally {
        setLoading(false)
      }
    }
    loadArticles()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="h-12 bg-gray-200 rounded w-48 mb-8 animate-pulse"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-16 bg-gray-200 rounded flex-shrink-0 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                  </div>
                </div>
              </div>
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
          className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
        >
          Latest News
        </motion.h1>
        
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No news articles found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <Link href={`/article/news/${article.slug}`}>
                  <div className="flex gap-4 cursor-pointer">
                    <div className="relative w-32 h-20 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                      <Image
                        src={article.featuredImage || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-red-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}