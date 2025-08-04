"use client"

import { useState, useEffect } from "react"
import PageLayout from "@/components/page-layout"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ReviewCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  rating: number
  author: string
  publishedAt: string
  slug?: string
}

function ReviewCard({ id, title, excerpt, image, category, rating, author, publishedAt, slug }: ReviewCardProps) {
  return (
    <Link href={`/article/review/${slug || id}`}>
      <article className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">{category}</span>
          </div>
          <div className="absolute top-4 right-4 bg-black/70 rounded-lg px-2 py-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white font-bold">{rating}/10</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>By {author}</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

async function fetchReviews() {
  try {
    const response = await fetch('https://admin.koodos.in/api/public/news?category=reviews')
    const result = await response.json()
    
    if (result.success && result.data && result.data.articles) {
      return result.data.articles.map((article: any) => ({
        id: article.id,
        title: article.title,
        excerpt: article.excerpt || article.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        image: article.featuredImage || '/placeholder.svg',
        category: 'Game Review',
        rating: article.reviewScore || 8.0,
        author: article.author,
        publishedAt: new Date(article.createdAt).toLocaleDateString(),
        slug: article.slug
      }))
    }
    return []
  } catch (error) {
    console.error('Failed to fetch reviews:', error)
    return []
  }
}

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadReviews() {
      const data = await fetchReviews()
      setReviews(data)
      setLoading(false)
    }
    loadReviews()
  }, [])

  const filteredReviews =
    selectedCategory === "all"
      ? reviews
      : reviews.filter((review) => review.category.toLowerCase().includes(selectedCategory))

  return (
    <PageLayout title="Reviews" description="In-depth reviews of games, movies, TV shows, and more">
      <div className="mb-6">
        <div className="flex gap-2 flex-wrap">
          {["all", "game", "movie", "tv"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category ? "bg-red-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category === "all" ? "All Reviews" : `${category.charAt(0).toUpperCase() + category.slice(1)} Reviews`}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-800 rounded-lg h-80" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      )}
    </PageLayout>
  )
}
