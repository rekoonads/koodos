import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Gamepad2, Trophy, ThumbsUp, MessageCircle, TrendingUp, Award, Target, BarChart3, ArrowRight, Users, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"

export default function GameReviewsPage() {
  const gameReviews = [
    {
      title: "Cyberpunk 2077: Phantom Liberty Review",
      rating: 8.5,
      category: "RPG",
      excerpt: "A stellar expansion that redeems the cyberpunk experience with compelling storytelling and improved gameplay mechanics.",
      image: "/cyberpunk-phantom-liberty.png",
      date: "2 days ago",
      likes: 342,
      comments: 89,
      author: "Alex Chen",
      readTime: "15 min read",
      platform: "PC, PS5, Xbox",
      genre: "RPG",
      releaseDate: "Sep 2023",
    },
    {
      title: "Spider-Man 2 PS5 Review",
      rating: 9.2,
      category: "Action",
      excerpt: "Insomniac delivers another web-slinging masterpiece with enhanced combat and stunning visuals.",
      image: "/spider-man-2-ps5.png",
      date: "1 week ago",
      likes: 567,
      comments: 123,
      author: "Sarah Johnson",
      readTime: "12 min read",
      platform: "PS5 Exclusive",
      genre: "Action-Adventure",
      releaseDate: "Oct 2023",
    },
    {
      title: "Baldur's Gate 3 Review",
      rating: 9.8,
      category: "RPG",
      excerpt: "Larian Studios delivers the definitive RPG experience with unparalleled choice and consequence.",
      image: "/baldurs-gate-3-rpg.png",
      date: "3 days ago",
      likes: 892,
      comments: 234,
      author: "Emma Wilson",
      readTime: "20 min read",
      platform: "PC, PS5, Xbox",
      genre: "RPG",
      releaseDate: "Aug 2023",
    },
    {
      title: "Alan Wake 2 Review",
      rating: 9.0,
      category: "Horror",
      excerpt: "A masterpiece of psychological horror that blends reality and nightmare in unprecedented ways.",
      image: "/alan-wake-2-horror.png",
      date: "5 days ago",
      likes: 445,
      comments: 156,
      author: "Mike Rodriguez",
      readTime: "18 min read",
      platform: "PC, PS5, Xbox",
      genre: "Horror",
      releaseDate: "Oct 2023",
    },
    {
      title: "Mario Wonder Review",
      rating: 9.8,
      category: "Platformer",
      excerpt: "Nintendo's latest 2D Mario adventure brings wonder and innovation to the classic formula.",
      image: "/mario-nintendo-2024.png",
      date: "1 week ago",
      likes: 678,
      comments: 234,
      author: "Lisa Park",
      readTime: "14 min read",
      platform: "Nintendo Switch",
      genre: "Platformer",
      releaseDate: "Oct 2023",
    },
    {
      title: "Final Fantasy VII Rebirth Review",
      rating: 9.5,
      category: "RPG",
      excerpt: "Square Enix expands the beloved remake with an epic open-world adventure.",
      image: "/generic-superhero-game.png",
      date: "2 weeks ago",
      likes: 789,
      comments: 345,
      author: "David Kim",
      readTime: "22 min read",
      platform: "PS5 Exclusive",
      genre: "RPG",
      releaseDate: "Feb 2024",
    },
  ]

  const topRatedGames = [
    { name: "Baldur's Gate 3", rating: 9.8, category: "RPG" },
    { name: "Mario Wonder", rating: 9.8, category: "Platformer" },
    { name: "Spider-Man 2", rating: 9.2, category: "Action" },
    { name: "Alan Wake 2", rating: 9.0, category: "Horror" },
    { name: "Cyberpunk 2077: PL", rating: 8.5, category: "RPG" },
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
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/game-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Gamepad2 className="w-10 h-10 mr-4 text-blue-400" />
                <span className="text-blue-300 font-semibold tracking-wide text-lg">GAME REVIEWS</span>
                <Gamepad2 className="w-10 h-10 ml-4 text-blue-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Video Game{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Reviews
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                In-depth reviews and ratings for the latest video games across all platforms
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-blue-400 mb-2">300+</div>
                  <div className="text-sm lg:text-base text-gray-400">Game Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">8.9</div>
                  <div className="text-sm lg:text-base text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-pink-400 mb-2">75K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-blue-400 mb-2">All</div>
                  <div className="text-sm lg:text-base text-gray-400">Platforms</div>
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
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Game Reviews</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gameReviews.map((review, index) => (
                  <Link key={index} href={`/reviews/${index + 1}`} className="group">
                    <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 hover:border-blue-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-blue-600 text-white font-medium">
                            {review.category}
                          </Badge>
                          <Badge className="bg-purple-600 text-white font-medium">
                            {review.platform}
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
                        <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
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
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 border border-blue-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Top Rated Games</h3>
                </div>

                <div className="space-y-4">
                  {topRatedGames.map((game, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{game.name}</div>
                          <div className="text-xs text-gray-500">{game.category}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-lg border ${getRatingColor(game.rating)} font-bold text-sm`}>
                        {game.rating}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl border border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Review Stats</h4>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-semibold text-gray-900">23 Reviews</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Rating</span>
                      <span className="font-semibold text-blue-600">8.9/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Views</span>
                      <span className="font-semibold text-gray-900">1.8M</span>
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
