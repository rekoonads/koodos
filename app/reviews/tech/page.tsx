"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, MessageCircle, Clock, Trophy, Monitor } from "lucide-react"
import Link from "next/link"

export default function TechReviewsPage() {
  const techReviews = [
    {
      title: "ASUS ROG Ally Handheld Review",
      rating: 8.1,
      category: "Gaming",
      excerpt: "Powerful Windows handheld with great potential but some rough edges that need polishing.",
      image: "/asus-rog-ally-handheld-gaming.png",
      date: "2 days ago",
      likes: 567,
      comments: 145,
      author: "Emma Wilson",
      readTime: "15 min read",
      brand: "ASUS",
      price: "$699",
      releaseDate: "Jun 2023"
    },
    {
      title: "PlayStation 5 Pro Analysis",
      rating: 8.7,
      category: "Console",
      excerpt: "Mid-gen refresh delivers impressive upgrades for 4K gaming enthusiasts willing to pay the premium.",
      image: "/playstation-5-pro.png",
      date: "5 days ago",
      likes: 892,
      comments: 267,
      author: "Alex Chen",
      readTime: "18 min read",
      brand: "Sony",
      price: "$699",
      releaseDate: "Nov 2024"
    },
    {
      title: "Steam Deck OLED Review",
      rating: 9.0,
      category: "Handheld",
      excerpt: "Valve perfects the handheld gaming formula with stunning OLED display and improved battery life.",
      image: "/steam-deck-oled-handheld.png",
      date: "1 week ago",
      likes: 1234,
      comments: 398,
      author: "Mike Rodriguez",
      readTime: "16 min read",
      brand: "Valve",
      price: "$549",
      releaseDate: "Nov 2023"
    }
  ]

  const topRatedTech = [
    { title: "Steam Deck OLED", rating: 9.0, rank: 1 },
    { title: "PlayStation 5 Pro", rating: 8.7, rank: 2 },
    { title: "ASUS ROG Ally", rating: 8.1, rank: 3 }
  ]

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400 bg-green-500/20 border-green-500/30"
    if (rating >= 8) return "text-blue-400 bg-blue-500/20 border-blue-500/30"
    if (rating >= 7) return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
    if (rating >= 6) return "text-orange-400 bg-orange-500/20 border-orange-500/30"
    return "text-red-400 bg-red-500/20 border-red-500/30"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tech-pattern.png')] opacity-10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-blue-300 mr-3" />
                <span className="text-blue-300 font-semibold tracking-wide text-lg">TECH REVIEWS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-blue-400 to-indigo-400">
                  Tech Reviews
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                In-depth reviews of the latest tech products, gadgets, and gaming hardware
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12 mb-16">
            <div className="xl:col-span-3">
              <div className="flex items-center mb-8">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Latest Tech Reviews</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techReviews.map((tech, index) => (
                  <Link key={index} href={`/reviews/tech/${tech.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <Card className="bg-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-700 hover:border-blue-500 overflow-hidden group cursor-pointer">
                      <div className="relative">
                        <img
                          src={tech.image}
                          alt={tech.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-blue-600 text-white font-medium">
                            {tech.category}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className={`px-3 py-2 rounded-xl border font-bold text-lg ${getRatingColor(tech.rating)}`}>
                            {tech.rating}
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-black/70 text-white">
                            {tech.price}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <Badge className="bg-black/70 text-white">
                            {tech.brand}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">{tech.author}</span>
                          <span className="text-sm text-gray-400">{tech.date}</span>
                        </div>
                        <CardTitle className="text-lg mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                          {tech.title}
                        </CardTitle>
                        <p className="text-gray-400 mb-4 line-clamp-2">{tech.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{tech.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{tech.comments}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{tech.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="xl:col-span-1">
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl p-6 lg:p-8 border border-blue-500/30 sticky top-8">
                <div className="flex items-center mb-6">
                  <Trophy className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Top Rated Tech</h3>
                </div>

                <div className="space-y-4">
                  {topRatedTech.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {tech.rank}
                        </div>
                        <div className="font-semibold text-white text-sm">{tech.title}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-lg text-sm font-bold ${getRatingColor(tech.rating)}`}>
                        {tech.rating}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}