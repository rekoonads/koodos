"use client"

import { useState, useEffect } from "react"
import PageLayout from "@/components/page-layout"
import ArticleCard from "@/components/article-card"
import FilterBar from "@/components/filter-bar"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  featuredImage?: string
  category: string
  author: string
  createdAt: string
  slug: string
  views: number
}

const categories = ["news", "reviews", "guides", "anime", "tech", "videos"]

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://admin.koodos.in/api/public/news')
      const data = await response.json()
      
      if (data.success && data.data.articles) {
        setArticles(data.data.articles)
        setFilteredArticles(data.data.articles)
      }
    } catch (error) {
      console.error('Failed to fetch articles:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (query: string) => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredArticles(filtered)
  }

  const handleCategoryFilter = (category: string) => {
    if (category === "all") {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter((article) => article.category === category)
      setFilteredArticles(filtered)
    }
  }

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredArticles].sort((a, b) => {
      switch (sort) {
        case "latest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "popular":
          return b.views - a.views
        default:
          return 0
      }
    })
    setFilteredArticles(sorted)
  }

  return (
    <PageLayout title="News" description="Latest gaming and entertainment news from around the world">
      <FilterBar
        categories={categories}
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        onSortChange={handleSortChange}
      />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              image={article.featuredImage || '/placeholder.svg'}
              category={article.category}
              author={article.author}
              publishedAt={new Date(article.createdAt).toLocaleDateString()}
              readTime="5 min read"
              slug={article.slug}
            />
          ))}
        </div>
      )}
    </PageLayout>
  )
}
