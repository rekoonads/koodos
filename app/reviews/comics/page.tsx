"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, MessageCircle, Clock, Trophy, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ComicReviewsPage() {
  const comicReviews = [
    {
      title: "Batman: The Brave and the Bold Review",
      rating: 9.0,
      category: "Superhero",
      excerpt: "Tom King's latest Batman series delivers a fresh take on the Dark Knight with stunning artwork and compelling storytelling.",
      image: "/generic-superhero-game.png",
      date: "3 days ago",
      likes: 567,
      comments: 145,
      author: "Alex Chen",
      readTime: "12 min read",
      publisher: "DC Comics",
      genre: "Superhero",
      releaseDate: "Jan 2024"
    },
    {
      title: "Ultimate Spider-Man Review",
      rating: 8.8,
      category: "Superhero",
      excerpt: "Jonathan Hickman's reimagining of Spider-Man for the Ultimate Universe is a bold and exciting new direction.",
      image: "/spider-man-2-ps5.png",
      date: "1 week ago",
      likes: 678,
      comments: 234,
      author: "Sarah Johnson",
      readTime: "14 min read",
      publisher: "Marvel Comics",
      genre: "Superhero",
      releaseDate: "Jan 2024"
    },
    {
      title: "Saga #66 Review",
      rating: 9.2,
      category: "Sci-Fi",
      excerpt: "Brian K. Vaughan and Fiona Staples return with another emotional and visually stunning chapter of their epic space opera.",
      image: "/cyberpunk-phantom-liberty.png",
      date: "2 weeks ago",
      likes: 789,
      comments: 345,
      author: "Emma Wilson",
      readTime: "16 min read",
      publisher: "Image Comics",
      genre: "Sci-Fi",
      releaseDate: "Jan 2024"
    }
  ]

  const topRatedComics = [
    { title: "Saga #66", rating: 9.2, rank: 1 },
    { title: "Batman: The Brave and the Bold", rating: 9.0, rank: 2 },
    { title: "Ultimate Spider-Man", rating: 8.8, rank: 3 }
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
      <div className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/comic-pattern.png')] opacity-10"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-300 mr-3" />
                <span className="text-orange-300 font-semibold tracking-wide text-lg">COMIC REVIEWS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
                  Comic Reviews
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                In-depth reviews and ratings for the latest comic books and graphic novels
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
                <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Latest Comic Reviews</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {comicReviews.map((comic, index) => (
                  <Link key={index} href={`/reviews/comics/${comic.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <Card className="bg-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-700 hover:border-orange-500 overflow-hidden group cursor-pointer">
                      <div className="relative">
                        <img
                          src={comic.image}
                          alt={comic.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-orange-600 text-white font-medium">
                            {comic.category}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className={`px-3 py-2 rounded-xl border font-bold text-lg ${getRatingColor(comic.rating)}`}>
                            {comic.rating}
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-black/70 text-white">
                            {comic.publisher}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">{comic.author}</span>
                          <span className="text-sm text-gray-400">{comic.date}</span>
                        </div>
                        <CardTitle className="text-lg mb-3 text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                          {comic.title}
                        </CardTitle>
                        <p className="text-gray-400 mb-4 line-clamp-2">{comic.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{comic.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{comic.comments}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{comic.readTime}</span>
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
              <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-2xl p-6 lg:p-8 border border-orange-500/30 sticky top-8">
                <div className="flex items-center mb-6">
                  <Trophy className="w-6 h-6 text-orange-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Top Rated Comics</h3>
                </div>

                <div className="space-y-4">
                  {topRatedComics.map((comic, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {comic.rank}
                        </div>
                        <div className="font-semibold text-white text-sm">{comic.title}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-lg text-sm font-bold ${getRatingColor(comic.rating)}`}>
                        {comic.rating}
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