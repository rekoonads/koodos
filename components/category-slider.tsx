"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface Article {
  id: string
  title: string
  excerpt: string
  featuredImage: string
  category: string
  author: string
  publishedAt: string
  rating?: number
  timeAgo: string
}

const latestNews: Article[] = [
  {
    id: "1",
    title: "Nintendo Direct February 2024 Announcements",
    excerpt: "Major game reveals and release dates announced",
    featuredImage: "/nintendo-direct-news.png",
    category: "Gaming News",
    author: "Gaming Team",
    publishedAt: "2024-01-15",
    timeAgo: "2 hours ago",
  },
  {
    id: "2",
    title: "PlayStation 5 Pro Rumors Heat Up",
    excerpt: "New console variant could launch this year",
    featuredImage: "/playstation-5-pro.png",
    category: "Gaming News",
    author: "Tech Reporter",
    publishedAt: "2024-01-15",
    timeAgo: "4 hours ago",
  },
  {
    id: "3",
    title: "Steam Deck OLED vs Original Comparison",
    excerpt: "Is the upgrade worth it for handheld gaming?",
    featuredImage: "/steam-deck-oled-handheld.png",
    category: "Gaming News",
    author: "Hardware Team",
    publishedAt: "2024-01-14",
    timeAgo: "1 day ago",
  },
  {
    id: "4",
    title: "Epic Games Store Weekly Free Games",
    excerpt: "This week's free titles revealed",
    featuredImage: "/epic-free-games.png",
    category: "Gaming News",
    author: "Deals Team",
    publishedAt: "2024-01-14",
    timeAgo: "1 day ago",
  },
]

const latestReviews: Article[] = [
  {
    id: "5",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    excerpt: "The long-awaited expansion finally delivers on the original promise",
    featuredImage: "/cyberpunk-phantom-liberty.png",
    category: "Game Review",
    author: "Alex Chen",
    publishedAt: "2024-01-15",
    rating: 4.5,
    timeAgo: "1 day ago",
  },
  {
    id: "6",
    title: "Spider-Man 2 PS5 Review",
    excerpt: "Web-slinging action reaches new heights on PlayStation 5",
    featuredImage: "/spider-man-2-ps5.png",
    category: "Game Review",
    author: "Sarah Johnson",
    publishedAt: "2024-01-14",
    rating: 4.0,
    timeAgo: "2 days ago",
  },
  {
    id: "7",
    title: "ASUS ROG Ally Gaming Handheld Review",
    excerpt: "Can this Windows handheld compete with Steam Deck?",
    featuredImage: "/asus-rog-ally-handheld-gaming.png",
    category: "Hardware Review",
    author: "Mike Rodriguez",
    publishedAt: "2024-01-13",
    rating: 3.5,
    timeAgo: "3 days ago",
  },
  {
    id: "8",
    title: "Baldur's Gate 3 Complete Review",
    excerpt: "The RPG that sets a new standard for the genre",
    featuredImage: "/baldurs-gate-3-rpg.png",
    category: "Game Review",
    author: "Emma Wilson",
    publishedAt: "2024-01-12",
    rating: 5.0,
    timeAgo: "4 days ago",
  },
]

export function CategorySlider() {
  return (
    <div className="space-y-8">
      {/* Latest News Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 inline-block pb-1">Latest News</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-200">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <img
                  src={article.featuredImage || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Reviews Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 inline-block pb-1">
            Latest Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestReviews.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative">
                <img
                  src={article.featuredImage || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                {/* Red badge in top-left */}
                <Badge className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1">
                  {article.category}
                </Badge>
                {/* Rating in top-right */}
                {article.rating && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current text-yellow-400" />
                    <span>{article.rating}</span>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>By {article.author}</span>
                  <span>{article.timeAgo}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
