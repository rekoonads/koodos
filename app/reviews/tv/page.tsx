import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Tv, Trophy, ThumbsUp, MessageCircle, TrendingUp, Award, Target, BarChart3, ArrowRight, Users, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"

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
      releaseDate: "Jan 2024",
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
      releaseDate: "Jan 2024",
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
      releaseDate: "Jan 2024",
    },
    {
      title: "Criminal Record Review",
      rating: 8.5,
      category: "Thriller",
      excerpt: "Peter Capaldi and Cush Jumbo star in this gripping British crime thriller about race and justice.",
      image: "/alan-wake-2-horror.png",
      date: "3 weeks ago",
      likes: 567,
      comments: 156,
      author: "Sarah Johnson",
      readTime: "15 min read",
      network: "Apple TV+",
      genre: "Crime Thriller",
      releaseDate: "Jan 2024",
    },
    {
      title: "The Woman in the Wall Review",
      rating: 8.8,
      category: "Drama",
      excerpt: "Ruth Wilson delivers a haunting performance in this Irish mystery about dark secrets and redemption.",
      image: "/mario-nintendo-2024.png",
      date: "1 month ago",
      likes: 432,
      comments: 98,
      author: "Mike Rodriguez",
      readTime: "13 min read",
      network: "BBC",
      genre: "Mystery Drama",
      releaseDate: "Dec 2023",
    },
    {
      title: "The Curse Review",
      rating: 7.9,
      category: "Comedy",
      excerpt: "Nathan Fielder and Emma Stone star in this surreal comedy about reality TV and gentrification.",
      image: "/generic-superhero-game.png",
      date: "1 month ago",
      likes: 389,
      comments: 145,
      author: "Lisa Park",
      readTime: "12 min read",
      network: "Showtime",
      genre: "Dark Comedy",
      releaseDate: "Nov 2023",
    },
  ]

  const topRatedShows = [
    { name: "True Detective: Night Country", rating: 9.1, category: "Crime" },
    { name: "Masters of the Air", rating: 8.7, category: "War" },
    { name: "The Woman in the Wall", rating: 8.8, category: "Drama" },
    { name: "The Brothers Sun", rating: 8.3, category: "Action" },
    { name: "Criminal Record", rating: 8.5, category: "Thriller" },
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
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tv-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Tv className="w-10 h-10 mr-4 text-indigo-400" />
                <span className="text-indigo-300 font-semibold tracking-wide text-lg">TV REVIEWS</span>
                <Tv className="w-10 h-10 ml-4 text-indigo-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                TV{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                  Reviews
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                In-depth reviews and ratings for the latest television series and streaming shows
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-indigo-400 mb-2">400+</div>
                  <div className="text-sm lg:text-base text-gray-400">TV Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-blue-400 mb-2">8.5</div>
                  <div className="text-sm lg:text-base text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-cyan-400 mb-2">65K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-indigo-400 mb-2">All</div>
                  <div className="text-sm lg:text-base text-gray-400">Networks</div>
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
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest TV Reviews</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tvReviews.map((review, index) => (
                  <Link key={index} href={`/reviews/tv/${index + 1}`} className="group">
                    <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 hover:border-indigo-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-indigo-600 text-white font-medium">
                            {review.category}
                          </Badge>
                          <Badge className="bg-blue-600 text-white font-medium">
                            {review.network}
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
                          <Badge className="bg-gray-100 text-gray-800 font-semibold">{review.genre}</Badge>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <CardTitle className="text-lg mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
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
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-indigo-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 mr-3 text-indigo-600" />
                  <h3 className="text-xl font-bold text-gray-900">Top Rated Shows</h3>
                </div>

                <div className="space-y-4">
                  {topRatedShows.map((show, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-indigo-100 hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{show.name}</div>
                          <div className="text-xs text-gray-500">{show.category}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-lg border ${getRatingColor(show.rating)} font-bold text-sm`}>
                        {show.rating}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl border border-indigo-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Review Stats</h4>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-semibold text-gray-900">12 Reviews</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Rating</span>
                      <span className="font-semibold text-indigo-600">8.5/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Views</span>
                      <span className="font-semibold text-gray-900">1.5M</span>
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
