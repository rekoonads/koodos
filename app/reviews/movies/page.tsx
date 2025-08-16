import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Video, Trophy, ThumbsUp, MessageCircle, TrendingUp, Award, Target, BarChart3, ArrowRight, Users, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"

export default function MovieReviewsPage() {
  const movieReviews = [
    {
      title: "Dune: Part Two Review",
      rating: 9.2,
      category: "Sci-Fi",
      excerpt: "Denis Villeneuve's epic conclusion to the Dune saga delivers stunning visuals and masterful storytelling.",
      image: "/dune-part-two.png",
      date: "1 day ago",
      likes: 892,
      comments: 234,
      author: "Sarah Johnson",
      readTime: "18 min read",
      director: "Denis Villeneuve",
      genre: "Sci-Fi",
      releaseDate: "Mar 2024",
    },
    {
      title: "Poor Things Review",
      rating: 8.8,
      category: "Drama",
      excerpt: "Emma Stone delivers a career-defining performance in this surreal and visually stunning dark comedy.",
      image: "/cyberpunk-phantom-liberty.png",
      date: "3 days ago",
      likes: 567,
      comments: 156,
      author: "Alex Chen",
      readTime: "15 min read",
      director: "Yorgos Lanthimos",
      genre: "Drama",
      releaseDate: "Dec 2023",
    },
    {
      title: "The Zone of Interest Review",
      rating: 9.0,
      category: "Drama",
      excerpt: "A haunting and masterfully crafted examination of evil through the lens of everyday life.",
      image: "/alan-wake-2-horror.png",
      date: "1 week ago",
      likes: 445,
      comments: 123,
      author: "Emma Wilson",
      readTime: "16 min read",
      director: "Jonathan Glazer",
      genre: "Drama",
      releaseDate: "Dec 2023",
    },
    {
      title: "Killers of the Flower Moon Review",
      rating: 8.5,
      category: "Crime",
      excerpt: "Scorsese's epic Western crime drama is a powerful examination of American history and greed.",
      image: "/spider-man-2-ps5.png",
      date: "2 weeks ago",
      likes: 678,
      comments: 189,
      author: "Mike Rodriguez",
      readTime: "20 min read",
      director: "Martin Scorsese",
      genre: "Crime",
      releaseDate: "Oct 2023",
    },
    {
      title: "Oppenheimer Review",
      rating: 9.1,
      category: "Biography",
      excerpt: "Nolan's ambitious biopic is a technical marvel with powerhouse performances and stunning visuals.",
      image: "/baldurs-gate-3-rpg.png",
      date: "3 weeks ago",
      likes: 789,
      comments: 345,
      author: "David Kim",
      readTime: "22 min read",
      director: "Christopher Nolan",
      genre: "Biography",
      releaseDate: "Jul 2023",
    },
    {
      title: "Barbie Review",
      rating: 8.3,
      category: "Comedy",
      excerpt: "Greta Gerwig's Barbie is a smart, funny, and surprisingly profound exploration of identity and feminism.",
      image: "/mario-nintendo-2024.png",
      date: "1 month ago",
      likes: 567,
      comments: 234,
      author: "Lisa Park",
      readTime: "14 min read",
      director: "Greta Gerwig",
      genre: "Comedy",
      releaseDate: "Jul 2023",
    },
  ]

  const topRatedMovies = [
    { name: "Dune: Part Two", rating: 9.2, category: "Sci-Fi" },
    { name: "Oppenheimer", rating: 9.1, category: "Biography" },
    { name: "The Zone of Interest", rating: 9.0, category: "Drama" },
    { name: "Poor Things", rating: 8.8, category: "Drama" },
    { name: "Killers of the Flower Moon", rating: 8.5, category: "Crime" },
  ]

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400 bg-green-500/20 border-green-500/30"
    if (rating >= 8) return "text-blue-400 bg-blue-500/20 border-blue-500/30"
    if (rating >= 7) return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
    if (rating >= 6) return "text-orange-400 bg-orange-500/20 border-orange-500/30"
    return "text-red-400 bg-red-500/20 border-red-500/30"
  }

  const getRatingBadge = (rating: number) => {
    if (rating >= 9) return { text: "Masterpiece", color: "bg-green-600" }
    if (rating >= 8) return { text: "Excellent", color: "bg-blue-600" }
    if (rating >= 7) return { text: "Good", color: "bg-yellow-600" }
    if (rating >= 6) return { text: "Fair", color: "bg-orange-600" }
    return { text: "Poor", color: "bg-red-600" }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Carousel */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <BannerCarousel />
      </div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/movie-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Video className="w-10 h-10 mr-4 text-purple-400" />
                <span className="text-purple-300 font-semibold tracking-wide text-lg">MOVIE REVIEWS</span>
                <Video className="w-10 h-10 ml-4 text-purple-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Movie{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                  Reviews
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                In-depth reviews and ratings for the latest films across all genres
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-sm lg:text-base text-gray-400">Movie Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-pink-400 mb-2">8.7</div>
                  <div className="text-sm lg:text-base text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-red-400 mb-2">85K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">All</div>
                  <div className="text-sm lg:text-base text-gray-400">Genres</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12 mb-16">
            <div className="xl:col-span-3">
              <div className="flex items-center mb-8">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Movie Reviews</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {movieReviews.map((review, index) => (
                  <Link key={index} href={`/reviews/movies/${index + 1}`} className="group">
                    <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 hover:border-purple-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-purple-600 text-white font-medium">
                            {review.category}
                          </Badge>
                          <Badge className="bg-pink-600 text-white font-medium">
                            {review.genre}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{review.rating}</span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className={`${getRatingBadge(review.rating).color} text-white font-bold px-3 py-1`}>
                            {getRatingBadge(review.rating).text}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-gray-100 text-gray-800 font-semibold">{review.director}</Badge>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <CardTitle className="text-lg mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {review.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{review.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{review.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{review.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{review.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{review.comments}</span>
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8 border border-purple-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 mr-3 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Top Rated Movies</h3>
                </div>

                <div className="space-y-4">
                  {topRatedMovies.map((movie, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-purple-100 hover:border-purple-200 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{movie.name}</div>
                          <div className="text-xs text-gray-500">{movie.category}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-lg border ${getRatingColor(movie.rating)} font-bold text-sm`}>
                        {movie.rating}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Review Stats</h4>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-semibold text-gray-900">15 Reviews</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Rating</span>
                      <span className="font-semibold text-purple-600">8.7/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Views</span>
                      <span className="font-semibold text-gray-900">2.1M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
