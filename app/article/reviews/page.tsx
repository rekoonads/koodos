"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, ThumbsUp, ThumbsDown, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

interface Review {
  id: string
  title: string
  excerpt: string
  featured_image: string
  review_score: number
  pros: string[]
  cons: string[]
  verdict: string
  slug: string
  category: string
  author: string
  published_at: string
  purchase_link?: string
  price?: string
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('https://admin.koodos.in/api/public/articles?category=reviews&status=PUBLISHED&limit=20')
        if (response.ok) {
          const data = await response.json()
          setReviews(data || [])
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Game Reviews</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96 animate-pulse" />
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
          Game Reviews
        </motion.h1>

        {reviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No reviews available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Link key={review.id} href={`/article/reviews/${review.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src={review.featured_image || '/placeholder.svg?height=400&width=300'}
                      alt={review.title}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    {review.review_score && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-2 rounded-full font-bold text-lg flex items-center gap-1">
                        <Star className="w-5 h-5 fill-current" />
                        {review.review_score}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{review.title}</h2>
                    <p className="text-gray-600 mb-4">{review.excerpt}</p>

                    {(review.pros?.length > 0 || review.cons?.length > 0) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {review.pros?.length > 0 && (
                          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <ThumbsUp className="w-4 h-4 text-green-400" />
                              <h3 className="font-semibold text-green-700">Pros</h3>
                            </div>
                            <ul className="text-sm space-y-1">
                              {review.pros.slice(0, 3).map((pro, i) => (
                                <li key={i} className="text-gray-700">• {pro}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {review.cons?.length > 0 && (
                          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <ThumbsDown className="w-4 h-4 text-red-400" />
                              <h3 className="font-semibold text-red-700">Cons</h3>
                            </div>
                            <ul className="text-sm space-y-1">
                              {review.cons.slice(0, 3).map((con, i) => (
                                <li key={i} className="text-gray-700">• {con}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {review.verdict && (
                      <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <h3 className="font-semibold mb-2 text-gray-900">Verdict</h3>
                        <p className="text-gray-600 text-sm">{review.verdict}</p>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        By {review.author} • {new Date(review.published_at).toLocaleDateString()}
                      </div>
                      <div className="flex gap-2">
                        {review.purchase_link && (
                          <a 
                            href={review.purchase_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold text-sm transition-colors flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Buy {review.price || 'Now'}
                          </a>
                        )}
                        <div className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold text-sm transition-colors">
                          Read Review
                        </div>
                      </div>
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