import { Footer } from "@/components/footer"
import { Newspaper, TrendingUp, Clock, Eye, MessageCircle, ArrowRight, Star, Users } from "lucide-react"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"

export default function LatestUpdatesPage() {
  const latestNews = [
    {
      id: 1,
      title: "PlayStation 5 Pro Officially Announced with 8K Gaming Support",
      excerpt: "Sony reveals enhanced console specifications and launch lineup for holiday 2024 with groundbreaking features.",
      category: "Gaming",
      timeAgo: "2 hours ago",
      views: "45K",
      comments: 234,
      author: "Gaming Insider",
      trending: true,
      image: "/playstation-5-pro.png",
    },
    {
      id: 2,
      title: "NVIDIA RTX 5090 Specifications Leaked - 50% Performance Boost",
      excerpt: "Next-generation GPU promises unprecedented performance with new architecture and enhanced ray tracing capabilities.",
      category: "Tech",
      timeAgo: "4 hours ago",
      views: "78K",
      comments: 567,
      author: "Tech Leaks",
      trending: true,
      image: "/rtx-comparison.png",
    },
    {
      id: 3,
      title: "Baldur's Gate 3 Wins Game of the Year at The Game Awards 2024",
      excerpt: "Larian Studios' RPG masterpiece takes home the prestigious award, beating out strong competition from Spider-Man 2 and Alan Wake 2.",
      category: "Gaming",
      timeAgo: "6 hours ago",
      views: "156K",
      comments: 892,
      author: "Awards Coverage",
      trending: true,
      image: "/baldurs-gate-3-tga.png",
    },
    {
      id: 4,
      title: "Apple Vision Pro 2 Development Confirmed by Industry Sources",
      excerpt: "Apple's next-generation mixed reality headset is already in development with significant improvements over the original.",
      category: "Tech",
      timeAgo: "1 day ago",
      views: "67K",
      comments: 445,
      author: "VR News",
      trending: false,
      image: "/futuristic-console-reveal.png",
    },
    {
      id: 5,
      title: "Nintendo Direct February 2024: All Major Announcements",
      excerpt: "New Mario game, Zelda DLC, and third-party surprises revealed in latest presentation with release dates.",
      category: "Gaming",
      timeAgo: "1 day ago",
      views: "89K",
      comments: 567,
      author: "Nintendo News",
      trending: true,
      image: "/nintendo-direct.png",
    },
    {
      id: 6,
      title: "Tesla FSD Beta 12 Rolling Out Globally with Enhanced AI",
      excerpt: "Full Self-Driving capabilities expand to international markets with improved neural networks and safety features.",
      category: "Tech",
      timeAgo: "2 days ago",
      views: "92K",
      comments: 723,
      author: "Auto Tech",
      trending: true,
      image: "/futuristic-gaming-setup.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Carousel */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <BannerCarousel />
      </div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/news-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Newspaper className="w-10 h-10 mr-4 text-purple-400" />
                <span className="text-purple-300 font-semibold tracking-wide text-lg">KOODOS NEWS</span>
                <Newspaper className="w-10 h-10 ml-4 text-purple-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Latest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                  Updates
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Stay up-to-date with the latest news across gaming, tech, movies, and esports
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <div className="group bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Gaming
                  </span>
                </div>
                <div className="group bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Tech
                  </span>
                </div>
                <div className="group bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Movies
                  </span>
                </div>
                <div className="group bg-orange-600 hover:bg-orange-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Esports
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">1000+</div>
                  <div className="text-sm lg:text-base text-gray-400">News Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm lg:text-base text-gray-400">Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-indigo-400 mb-2">500K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-sm lg:text-base text-gray-400">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest News</h2>
            <Link href="/news" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
              View All News <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200">
                  <div className="relative">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium text-white ${
                        news.category === "Gaming" ? "bg-purple-600" :
                        news.category === "Tech" ? "bg-blue-600" :
                        news.category === "Movies" ? "bg-red-600" : "bg-orange-600"
                      }`}>
                        {news.category}
                      </span>
                      {news.trending && (
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">Trending</span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                      <Clock className="w-3 h-3" />
                      <span className="font-medium">{news.timeAgo}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{news.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{news.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{news.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
