"use client"

import { useState } from "react"
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
}

function ReviewCard({ id, title, excerpt, image, category, rating, author, publishedAt }: ReviewCardProps) {
  return (
    <Link href={`/reviews/${id}`}>
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

const reviews = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    excerpt: "CD Projekt RED's expansion finally delivers on the original game's promise with stellar storytelling.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Game Review",
    rating: 8.5,
    author: "Alex Chen",
    publishedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Spider-Man: Across the Spider-Verse Review",
    excerpt: "A visual masterpiece that pushes animation to new heights while delivering an emotional story.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Movie Review",
    rating: 9.2,
    author: "Sarah Johnson",
    publishedAt: "1 week ago",
  },
  {
    id: "3",
    title: "The Last of Us HBO Series Review",
    excerpt: "HBO's adaptation successfully translates the beloved game into compelling television.",
    image: "/placeholder.svg?height=300&width=400",
    category: "TV Review",
    rating: 8.8,
    author: "Mike Rodriguez",
    publishedAt: "3 days ago",
  },
]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </PageLayout>
  )
}
