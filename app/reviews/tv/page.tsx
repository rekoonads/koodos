"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, MessageCircle, Clock, Trophy, Tv } from "lucide-react"
import Link from "next/link"

export default function TVReviewsPage() {
  const tvReviews = [
    {
      title: "True Detective: Night Country Review",
      rating: 9.1,
      category: "Crime",
      excerpt: "Jodie Foster delivers a masterful performance in this chilling Arctic-set crime drama that redefines the series.",
      image: "/cyberpunk-phantom-liberty.png",
      date: "2 days ago",
      likes: 756,
      comments: 198,
      author: "Emma Wilson",
      readTime: "16 min read",
      network: "HBO",
      genre: "Crime Drama",
      releaseDate: "Jan 2024"
    },
    {
      title: "The Brothers Sun Review",
      rating: 8.3,
      category: "Action",
      excerpt: "Michelle Yeoh leads this stylish action-comedy about family, crime, and identity in Los Angeles.",
      image: "/spider-man-2-ps5.png",
      date: "1 week ago",
      likes: 445,
      comments: 123,
      author: "Alex Chen",
      readTime: "14 min read",
      network: "Netflix",
      genre: "Action Comedy",
      releaseDate: "Jan 2024"
    },
    {
      title: "Masters of the Air Review",
      rating: 8.7,
      category: "War",
      excerpt: "Apple TV+'s epic World War II drama delivers stunning aerial combat sequences and compelling human stories.",
      image: "/baldurs-gate-3-rpg.png",
      date: "2 weeks ago",
      likes: 678,
      comments: 234,
      author: "David Kim",
      readTime: "18 min read",
      network: "Apple TV+",
      genre: "War Drama",
      releaseDate: "Jan 2024"
    }
  ]

  const topRatedShows = [
    { title: "True Detective: Night Country", rating: 9.1, rank: 1 },
    { title: "Masters of the Air", rating: 8.7, rank: 2 },
    { title: "The Brothers Sun", rating: 8.3, rank: 3 }
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
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tv-pattern.png')] opacity-10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Tv className="w-8 h-8 text-indigo-300 mr-3" />
                <span className="text-indigo-300 font-semibold tracking-wide text-lg">TV REVIEWS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                  TV Reviews
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                In-depth reviews and ratings for the latest television series and streaming shows
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
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Latest TV Reviews</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tvReviews.map((show, index) => (
                  <Link key={index} href={`/reviews/tv/${show.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <Card className="bg-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-700 hover:border-indigo-500 overflow-hidden group cursor-pointer">
                      <div className="relative">
                        <img
                          src={show.image}
                          alt={show.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-indigo-600 text-white font-medium">
                            {show.category}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className={`px-3 py-2 rounded-xl border font-bold text-lg ${getRatingColor(show.rating)}`}>
                            {show.rating}
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-black/70 text-white">
                            {show.network}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">{show.author}</span>
                          <span className="text-sm text-gray-400">{show.date}</span>
                        </div>
                        <CardTitle className="text-lg mb-3 text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
                          {show.title}
                        </CardTitle>
                        <p className="text-gray-400 mb-4 line-clamp-2">{show.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{show.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{show.comments}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{show.readTime}</span>
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
              <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-2xl p-6 lg:p-8 border border-indigo-500/30 sticky top-8">
                <div className="flex items-center mb-6">
                  <Trophy className="w-6 h-6 text-indigo-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Top Rated Shows</h3>
                </div>

                <div className="space-y-4">
                  {topRatedShows.map((show, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {show.rank}
                        </div>
                        <div className="font-semibold text-white text-sm">{show.title}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-lg text-sm font-bold ${getRatingColor(show.rating)}`}>
                        {show.rating}
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