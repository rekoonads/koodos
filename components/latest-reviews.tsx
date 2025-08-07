"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

const reviewArticles = [
  {
    id: 1,
    title: "Cyberpunk 2077: Phantom Liberty Review",
    excerpt: "The expansion that finally delivers on the original promise",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    category: "Game Review",
    publishedAt: "1 day ago"
  },
  {
    id: 2,
    title: "Spider-Man 2 PS5 Review",
    excerpt: "Web-slinging action at its finest with dual protagonists",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    category: "Game Review",
    publishedAt: "2 days ago"
  },
  {
    id: 3,
    title: "ASUS ROG Ally Gaming Handheld Review",
    excerpt: "Can it compete with the Steam Deck?",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    category: "Hardware Review",
    publishedAt: "3 days ago"
  },
  {
    id: 4,
    title: "Baldur's Gate 3 Complete Review",
    excerpt: "The RPG that sets a new standard for the genre",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    category: "Game Review",
    publishedAt: "1 week ago"
  }
]

export default function LatestReviews() {
  return (
    <section className="px-6 lg:px-12 py-12 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
      >
        Latest Reviews
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviewArticles.map((article, index) => (
          <Link key={article.id} href={`/reviews/${article.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                  {article.category}
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 text-xs rounded flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {article.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <div className="text-xs text-gray-500">{article.publishedAt}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}