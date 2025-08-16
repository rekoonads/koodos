"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { fetchReviews, type Review, formatTimeAgo } from "@/lib/api"

const mockReviews: Review[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    gameTitle: "Cyberpunk 2077: Phantom Liberty",
    excerpt: "A redemption story that finally delivers on the original promise of Night City.",
    featuredImage: "/cyberpunk-phantom-liberty-review.png",
    imageAlt: "Cyberpunk 2077 Phantom Liberty Review",
    category: { name: "RPG", color: "#8B5CF6" },
    author: { name: "Alex Chen", avatar: "/diverse-gaming-avatars.png" },
    rating: 8.5,
    platform: ["PC", "PS5", "Xbox Series X"],
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    views: 12300,
    likes: 756,
    comments: 89,
  },
  {
    id: "2",
    title: "Spider-Man 2 PS5 Review",
    gameTitle: "Marvel's Spider-Man 2",
    excerpt: "Insomniac Games delivers the definitive superhero gaming experience.",
    featuredImage: "/spider-man-2-ps5-review.png",
    imageAlt: "Spider-Man 2 PS5 Review",
    category: { name: "Action", color: "#EC4899" },
    author: { name: "Sarah Johnson", avatar: "/diverse-gaming-avatars.png" },
    rating: 9.2,
    platform: ["PS5"],
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    views: 18700,
    likes: 1240,
    comments: 156,
  },
  {
    id: "3",
    title: "ASUS ROG Gaming Handheld Review",
    gameTitle: "ASUS ROG Ally",
    excerpt: "A solid gaming handheld that competes with Steam Deck but has room for improvement.",
    featuredImage: "/asus-rog-handheld.png",
    imageAlt: "ASUS ROG Ally Review",
    category: { name: "Hardware", color: "#F59E0B" },
    author: { name: "Emma Wilson", avatar: "/diverse-gaming-avatars.png" },
    rating: 7.8,
    platform: ["Handheld"],
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    views: 9800,
    likes: 542,
    comments: 67,
  },
  {
    id: "4",
    title: "Baldur's Gate 3 Complete Review",
    gameTitle: "Baldur's Gate 3",
    excerpt: "The ultimate D&D experience in digital form with incredible depth and storytelling.",
    featuredImage: "/baldurs-gate-3-tga.png",
    imageAlt: "Baldur's Gate 3 Review",
    category: { name: "RPG", color: "#10B981" },
    author: { name: "Mike Rodriguez", avatar: "/diverse-gaming-avatars.png" },
    rating: 9.8,
    platform: ["PC", "PS5", "Xbox Series X"],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    views: 34500,
    likes: 2100,
    comments: 423,
  },
]

export function LatestReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetchReviews({
          limit: 6,
          featured: false,
        })

        if (response.error) {
          setReviews(mockReviews)
        } else {
          setReviews(response.reviews || mockReviews)
        }
      } catch (err) {
        setReviews(mockReviews)
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [])

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="border-b-2 border-blue-600 pb-2 inline-block">
          <h2 className="text-2xl font-bold text-gray-900">Latest Reviews</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="border-b-2 border-blue-600 pb-2 inline-block">
        <h2 className="text-2xl font-bold text-gray-900">Latest Reviews</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.slice(0, 4).map((review, index) => (
          <Card
            key={review.id}
            className="bg-white border border-gray-200 hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
          >
            <div className="aspect-video bg-gray-200 relative">
              <img
                src={review.featuredImage || "/placeholder.svg"}
                alt={review.imageAlt || review.gameTitle}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-600 text-white font-bold text-xs px-2 py-1">
                Game Review
              </Badge>
              <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{review.rating}</span>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{review.gameTitle}</h3>

              <p className="text-gray-600 text-xs mb-3 line-clamp-2">{review.excerpt}</p>

              <div className="text-xs text-gray-500">
                <span>{formatTimeAgo(review.createdAt)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
