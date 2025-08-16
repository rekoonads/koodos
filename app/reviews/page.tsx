import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Trophy, ThumbsUp, MessageCircle, TrendingUp, Award, Target, BarChart3, ArrowRight } from "lucide-react"
import { BannerCarousel } from "@/components/banner-carousel"

export default function ReviewsPage() {
  const reviews = [
    {
      title: "Cyberpunk 2077: Phantom Liberty Review",
      rating: 8.5,
      category: "RPG",
      excerpt:
        "A stellar expansion that redeems the cyberpunk experience with compelling storytelling and improved gameplay mechanics.",
      image: "/cyberpunk-phantom-liberty.png",
      date: "2 days ago",
      likes: 342,
      comments: 89,
      pros: ["Excellent storytelling", "Improved performance", "Great voice acting"],
      cons: ["Still some bugs", "High system requirements"],
      verdict: "A redemptive expansion that shows Cyberpunk's true potential",
      author: "Alex Chen",
      readTime: "15 min read",
      platform: "PC, PS5, Xbox",
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
      pros: ["Amazing graphics", "Fluid combat", "Great story"],
      cons: ["Short campaign", "Repetitive side missions"],
      verdict: "The definitive Spider-Man experience on PS5",
      author: "Sarah Johnson",
      readTime: "12 min read",
      platform: "PS5 Exclusive",
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
      pros: ["Unparalleled choice", "Amazing storytelling", "Perfect combat"],
      cons: ["Very long", "Complex systems"],
      verdict: "A masterpiece that redefines what RPGs can achieve",
      author: "Emma Wilson",
      readTime: "20 min read",
      platform: "PC, PS5, Xbox",
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
      pros: ["Atmospheric horror", "Innovative storytelling", "Stunning visuals"],
      cons: ["Pacing issues", "Complex narrative"],
      verdict: "A bold and innovative horror game that pushes boundaries",
      author: "Mike Rodriguez",
      readTime: "18 min read",
      platform: "PC, PS5, Xbox",
    },
    {
      title: "ASUS ROG Gaming Handheld Review",
      rating: 7.8,
      category: "Hardware",
      excerpt: "A solid gaming handheld that competes with Steam Deck but has room for improvement.",
      image: "/asus-rog-handheld.png",
      date: "1 week ago",
      likes: 234,
      comments: 45,
      pros: ["Great performance", "Good build quality", "Excellent display"],
      cons: ["Battery life", "Price point", "Software issues"],
      verdict: "A capable handheld with premium features at a premium price",
      author: "David Kim",
      readTime: "14 min read",
      platform: "Handheld",
    },
    {
      title: "Steam Deck OLED Review",
      rating: 8.9,
      category: "Hardware",
      excerpt: "Valve's latest handheld iteration brings OLED display and improved battery life to the table.",
      image: "/steam-deck-oled-handheld.png",
      date: "2 weeks ago",
      likes: 678,
      comments: 189,
      pros: ["OLED display", "Better battery", "Improved performance"],
      cons: ["Still large", "Limited storage"],
      verdict: "The best handheld gaming experience available",
      author: "Lisa Park",
      readTime: "16 min read",
      platform: "Handheld",
    },
  ]

  const topRatedGames = [
    { name: "Baldur's Gate 3", rating: 9.8, category: "RPG" },
    { name: "Spider-Man 2", rating: 9.2, category: "Action" },
    { name: "Alan Wake 2", rating: 9.0, category: "Horror" },
    { name: "Cyberpunk 2077: PL", rating: 8.5, category: "RPG" },
    { name: "Starfield", rating: 7.9, category: "RPG" },
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
      
      <div className="relative bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/review-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Trophy className="w-10 h-10 mr-4 text-yellow-400" />
                <span className="text-yellow-300 font-semibold tracking-wide text-lg">KOODOS REVIEWS</span>
                <Trophy className="w-10 h-10 ml-4 text-yellow-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Expert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                  Reviews
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                In-depth reviews and ratings for games, hardware, and gaming accessories by industry experts
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-sm lg:text-base text-gray-400">Expert Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-orange-400 mb-2">8.7</div>
                  <div className="text-sm lg:text-base text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-red-400 mb-2">50K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-sm lg:text-base text-gray-400">Coverage</div>
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
                <div className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Reviews</h2>
              </div>

              <div className="space-y-8">
                {reviews.map((review, index) => (
                  <Card
                    key={index}
                    className="group bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="lg:col-span-1">
                        <div className="aspect-video lg:aspect-square relative overflow-hidden">
                          <img
                            src={review.image}
                            alt={review.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"></div>
                          <div className="absolute top-4 right-4">
                            <div
                              className={`px-4 py-2 rounded-xl border-2 backdrop-blur-sm ${getRatingColor(review.rating)}`}
                            >
                              <div className="text-2xl font-bold">{review.rating}</div>
                              <div className="text-xs opacity-80">/ 10</div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className={`${getRatingBadge(review.rating).color} text-white font-bold px-3 py-1`}>
                              {getRatingBadge(review.rating).text}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <CardContent className="lg:col-span-2 p-6 lg:p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Badge className="bg-gray-100 text-gray-800 font-semibold">{review.category}</Badge>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${i < Math.floor(review.rating / 2) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>

                        <CardTitle className="text-xl lg:text-2xl mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight">
                          {review.title}
                        </CardTitle>

                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{review.excerpt}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-2" />
                              Pros
                            </h4>
                            <ul className="space-y-2">
                              {review.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                              <Target className="w-4 h-4 mr-2" />
                              Cons
                            </h4>
                            <ul className="space-y-2">
                              {review.cons.map((con, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-yellow-600" />
                            Verdict
                          </h4>
                          <p className="text-gray-700 italic">"{review.verdict}"</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{review.likes}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MessageCircle className="w-4 h-4" />
                              <span>{review.comments}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="xl:col-span-1">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 lg:p-8 border border-yellow-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 mr-3 text-yellow-600" />
                  <h3 className="text-xl font-bold text-gray-900">Top Rated</h3>
                </div>

                <div className="space-y-4">
                  {topRatedGames.map((game, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-yellow-100 hover:border-yellow-200 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
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

                <div className="mt-8 p-4 bg-white rounded-xl border border-yellow-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Review Stats</h4>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-semibold text-gray-900">47 Reviews</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Rating</span>
                      <span className="font-semibold text-yellow-600">8.4/10</span>
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
