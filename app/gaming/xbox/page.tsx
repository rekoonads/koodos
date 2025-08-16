import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Gamepad2, Trophy, ThumbsUp, MessageCircle, TrendingUp, Award, Target, BarChart3, ArrowRight, Users, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"

export default function XboxPage() {
  const xboxGames = [
    {
      title: "Halo Infinite",
      rating: 8.7,
      category: "FPS",
      excerpt: "Master Chief returns in this epic sci-fi shooter with an open world and enhanced multiplayer experience.",
      image: "/generic-superhero-game.png",
      date: "1 week ago",
      likes: 456,
      comments: 123,
      author: "Alex Chen",
      readTime: "16 min read",
      platform: "Xbox Series X|S",
      genre: "FPS",
      releaseDate: "Dec 2021",
    },
    {
      title: "Forza Motorsport",
      rating: 9.1,
      category: "Racing",
      excerpt: "The latest Forza Motorsport delivers stunning graphics and realistic racing physics on Xbox Series X.",
      image: "/cyberpunk-phantom-liberty.png",
      date: "2 weeks ago",
      likes: 678,
      comments: 234,
      author: "Sarah Johnson",
      readTime: "14 min read",
      platform: "Xbox Series X|S",
      genre: "Racing",
      releaseDate: "Oct 2023",
    },
    {
      title: "Starfield",
      rating: 7.9,
      category: "RPG",
      excerpt: "Bethesda's space exploration RPG offers vast worlds to discover and endless possibilities.",
      image: "/baldurs-gate-3-rpg.png",
      date: "3 weeks ago",
      likes: 789,
      comments: 345,
      author: "Emma Wilson",
      readTime: "20 min read",
      platform: "Xbox Series X|S",
      genre: "RPG",
      releaseDate: "Sep 2023",
    },
    {
      title: "Gears 5",
      rating: 8.5,
      category: "Action",
      excerpt: "The latest Gears of War installment features intense third-person combat and a compelling story.",
      image: "/spider-man-2-ps5.png",
      date: "1 month ago",
      likes: 567,
      comments: 189,
      author: "Mike Rodriguez",
      readTime: "12 min read",
      platform: "Xbox Series X|S",
      genre: "Action",
      releaseDate: "Sep 2019",
    },
  ]

  const gamePassGames = [
    { name: "Palworld", releaseDate: "Jan 2024", category: "Survival" },
    { name: "Persona 3 Reload", releaseDate: "Feb 2024", category: "RPG" },
    { name: "Hellblade 2", releaseDate: "2024", category: "Action" },
    { name: "Avowed", releaseDate: "2024", category: "RPG" },
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
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/xbox-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Gamepad2 className="w-10 h-10 mr-4 text-green-400" />
                <span className="text-green-300 font-semibold tracking-wide text-lg">XBOX GAMING</span>
                <Gamepad2 className="w-10 h-10 ml-4 text-green-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Xbox{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                  Gaming
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Latest Xbox Series X|S games, Game Pass updates, and Microsoft gaming news
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-green-400 mb-2">200+</div>
                  <div className="text-sm lg:text-base text-gray-400">Xbox Games</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-emerald-400 mb-2">8.8</div>
                  <div className="text-sm lg:text-base text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-teal-400 mb-2">60K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Xbox Fans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-green-400 mb-2">Game</div>
                  <div className="text-sm lg:text-base text-gray-400">Pass</div>
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
                <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Xbox Games</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {xboxGames.map((game, index) => (
                  <Link key={index} href={`/gaming/xbox/${index + 1}`} className="group">
                    <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 hover:border-green-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-green-600 text-white font-medium">
                            {game.category}
                          </Badge>
                          <Badge className="bg-emerald-600 text-white font-medium">
                            {game.platform}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{game.rating}</span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className={`${getRatingBadge(game.rating).color} text-white font-bold px-3 py-1`}>
                            {getRatingBadge(game.rating).text}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-gray-100 text-gray-800 font-semibold">{game.genre}</Badge>
                          <span className="text-sm text-gray-500">{game.date}</span>
                        </div>
                        <CardTitle className="text-lg mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                          {game.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{game.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{game.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{game.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{game.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              <span>{game.comments}</span>
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
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 lg:p-8 border border-green-200 sticky top-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 mr-3 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Game Pass</h3>
                </div>

                <div className="space-y-4">
                  {gamePassGames.map((game, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-green-100 hover:border-green-200 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{game.name}</div>
                          <div className="text-xs text-gray-500">{game.category}</div>
                        </div>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        {game.releaseDate}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl border border-green-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Xbox Stats</h4>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Game Pass</span>
                      <span className="font-semibold text-gray-900">25M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Rating</span>
                      <span className="font-semibold text-green-600">8.8/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Exclusive Games</span>
                      <span className="font-semibold text-gray-900">30+</span>
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
