"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Filter, Star, Calendar, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Article {
  id: string
  title: string
  excerpt: string
  featuredImage: string
  category: string
  author: string
  publishedAt: string
  views: number
  rating?: number
  featured: boolean
}

interface Category {
  id: string
  name: string
  slug: string
  color: string
  icon: string
  description: string
}

const categories: Category[] = [
  {
    id: "1",
    name: "Game Reviews",
    slug: "game-reviews",
    color: "bg-purple-500",
    icon: "🎮",
    description: "Latest game reviews and ratings",
  },
  {
    id: "2",
    name: "Movie Reviews",
    slug: "movie-reviews",
    color: "bg-red-500",
    icon: "🎬",
    description: "Film reviews and entertainment",
  },
  {
    id: "3",
    name: "Tech Reviews",
    slug: "tech-reviews",
    color: "bg-blue-500",
    icon: "💻",
    description: "Technology and gadget reviews",
  },
  {
    id: "4",
    name: "Gaming News",
    slug: "gaming-news",
    color: "bg-green-500",
    icon: "📰",
    description: "Latest gaming industry news",
  },
  {
    id: "5",
    name: "Lifestyle",
    slug: "lifestyle",
    color: "bg-pink-500",
    icon: "✨",
    description: "Lifestyle and culture content",
  },
  {
    id: "6",
    name: "Esports",
    slug: "esports",
    color: "bg-orange-500",
    icon: "🏆",
    description: "Competitive gaming coverage",
  },
]

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    excerpt: "The expansion that finally delivers on the original promise",
    featuredImage: "/cyberpunk-phantom-liberty.png",
    category: "Game Reviews",
    author: "Alex Chen",
    publishedAt: "2024-01-15",
    views: 15420,
    rating: 9.2,
    featured: true,
  },
  {
    id: "2",
    title: "Dune: Part Two - A Cinematic Masterpiece",
    excerpt: "Denis Villeneuve continues his epic adaptation with stunning visuals",
    featuredImage: "/dune-part-two.png",
    category: "Movie Reviews",
    author: "Sarah Johnson",
    publishedAt: "2024-01-14",
    views: 8930,
    rating: 9.5,
    featured: true,
  },
  {
    id: "3",
    title: "RTX 4090 vs RTX 4080: Performance Comparison",
    excerpt: "Which GPU offers the best value for high-end gaming?",
    featuredImage: "/rtx-comparison.png",
    category: "Tech Reviews",
    author: "Mike Rodriguez",
    publishedAt: "2024-01-13",
    views: 12340,
    rating: 8.8,
    featured: false,
  },
  {
    id: "4",
    title: "Nintendo Direct: Major Announcements Recap",
    excerpt: "Everything announced in the latest Nintendo Direct presentation",
    featuredImage: "/nintendo-direct.png",
    category: "Gaming News",
    author: "Emma Wilson",
    publishedAt: "2024-01-12",
    views: 9870,
    featured: true,
  },
  {
    id: "5",
    title: "Gaming Setup Essentials for 2024",
    excerpt: "Build the perfect gaming environment with these must-have items",
    featuredImage: "/gaming-setup.png",
    category: "Lifestyle",
    author: "David Kim",
    publishedAt: "2024-01-11",
    views: 6540,
    featured: false,
  },
  {
    id: "6",
    title: "Worlds 2024: Championship Finals Preview",
    excerpt: "Everything you need to know about the biggest esports event",
    featuredImage: "/worlds-2024.png",
    category: "Esports",
    author: "Lisa Park",
    publishedAt: "2024-01-10",
    views: 11230,
    featured: true,
  },
]

export function DynamicCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "rating">("latest")
  const [currentSlide, setCurrentSlide] = useState(0)

  const filteredArticles =
    selectedCategory === "all"
      ? mockArticles
      : mockArticles.filter(
          (article) => article.category === categories.find((cat) => cat.slug === selectedCategory)?.name,
        )

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "rating":
        return (b.rating || 0) - (a.rating || 0)
      default:
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    }
  })

  const featuredArticles = mockArticles.filter((article) => article.featured)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Featured Articles Slider */}
      <section className="relative">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">Featured Content</h2>
        <div className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 h-64 sm:h-80 lg:h-96">
          {featuredArticles.map((article, index) => (
            <div
              key={article.id}
              className={cn(
                "absolute inset-0 transition-transform duration-500 ease-in-out",
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                    ? "-translate-x-full"
                    : "translate-x-full",
              )}
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center text-white">
                  <Badge className="w-fit mb-2 lg:mb-4 bg-white/20 text-white border-white/30 text-xs lg:text-sm">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 lg:mb-4 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-lg lg:text-xl mb-3 lg:mb-6 text-white/90 line-clamp-2 lg:line-clamp-none">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 mb-3 lg:mb-6 text-xs lg:text-sm">
                    <span className="flex items-center space-x-1 lg:space-x-2">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span className="hidden sm:inline">{new Date(article.publishedAt).toLocaleDateString()}</span>
                      <span className="sm:hidden">
                        {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                    </span>
                    <span className="flex items-center space-x-1 lg:space-x-2">
                      <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span>{article.views.toLocaleString()}</span>
                    </span>
                    {article.rating && (
                      <span className="flex items-center space-x-1 lg:space-x-2">
                        <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
                        <span>{article.rating}/10</span>
                      </span>
                    )}
                  </div>
                  <Link href={`/articles/${article.id}`}>
                    <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90 lg:size-lg">
                      Read More
                    </Button>
                  </Link>
                </div>
                <div className="hidden lg:block flex-1 relative">
                  <img
                    src={article.featuredImage || "/placeholder.svg?height=400&width=600"}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 p-1.5 lg:p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 p-1.5 lg:p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6" />
          </button>

          <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 lg:space-x-2">
            {featuredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors",
                  index === currentSlide ? "bg-white" : "bg-white/50",
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Browse Categories</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "latest" | "popular" | "rating")}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 mb-6 lg:mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "p-3 lg:p-4 rounded-xl border-2 transition-all text-center",
              selectedCategory === "all"
                ? "border-purple-500 bg-purple-50 text-purple-700"
                : "border-gray-200 hover:border-gray-300 text-gray-600",
            )}
          >
            <div className="text-xl lg:text-2xl mb-1 lg:mb-2">🌟</div>
            <div className="font-medium text-xs lg:text-sm">All Categories</div>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={cn(
                "p-3 lg:p-4 rounded-xl border-2 transition-all text-center",
                selectedCategory === category.slug
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 hover:border-gray-300 text-gray-600",
              )}
            >
              <div className="text-xl lg:text-2xl mb-1 lg:mb-2">{category.icon}</div>
              <div className="font-medium text-xs lg:text-sm">{category.name}</div>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {sortedArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={article.featuredImage || "/placeholder.svg?height=200&width=400"}
                  alt={article.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <Badge
                  className={cn(
                    "absolute top-2 lg:top-3 left-2 lg:left-3 text-xs",
                    categories.find((cat) => cat.name === article.category)?.color || "bg-gray-500",
                  )}
                >
                  {article.category}
                </Badge>
                {article.rating && (
                  <div className="absolute top-2 lg:top-3 right-2 lg:right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current text-yellow-400" />
                    <span>{article.rating}</span>
                  </div>
                )}
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-base lg:text-lg mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-2">
                  <span>By {article.author}</span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views.toLocaleString()}</span>
                    </span>
                    <span className="hidden sm:inline">{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link href={`/articles/${article.id}`} className="block mt-4">
                  <Button className="w-full text-sm">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
