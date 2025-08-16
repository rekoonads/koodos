import { Footer } from "@/components/footer"
import {
  Cpu,
  Smartphone,
  Bot,
  Zap,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
  Star,
  Wifi,
  Battery,
  Monitor,
  Clock,
  Eye,
  MessageCircle,
  ThumbsUp,
} from "lucide-react"
import Link from "next/link"
import { BannerCarousel } from "@/components/banner-carousel"

const featuredTechProducts = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    description: "Apple's flagship smartphone with titanium design, A17 Pro chip, and revolutionary camera system.",
    rating: 4.8,
    price: "$1,199",
    originalPrice: "$1,299",
    discount: "8% OFF",
    category: "Smartphone",
    brand: "Apple",
    image: "/iphone-15-pro-max.png",
    specs: ["A17 Pro Chip", "48MP Camera", "Titanium Build", "USB-C"],
    pros: ["Exceptional performance", "Premium build quality", "Outstanding cameras"],
    cons: ["Expensive", "Limited customization"],
    views: "89K",
    likes: 2456,
    comments: 892,
    author: "Sarah Johnson",
    readTime: "12 min read",
    publishedAt: "2 days ago",
    inStock: true,
    trending: true,
  },
  {
    id: 2,
    title: "MacBook Pro M3 Max",
    description: "Professional laptop with M3 Max chip delivering unprecedented performance for creative workflows.",
    rating: 4.9,
    price: "$3,199",
    originalPrice: "$3,499",
    discount: "9% OFF",
    category: "Laptop",
    brand: "Apple",
    image: "/macbook-pro-m3-max.png",
    specs: ["M3 Max Chip", "36GB RAM", "1TB SSD", "16-inch Display"],
    pros: ["Blazing fast performance", "Excellent display", "Long battery life"],
    cons: ["Very expensive", "Limited ports"],
    views: "156K",
    likes: 3421,
    comments: 1203,
    author: "Mike Rodriguez",
    readTime: "18 min read",
    publishedAt: "1 week ago",
    inStock: true,
    trending: true,
  },
  {
    id: 3,
    title: "NVIDIA RTX 4090",
    description: "Ultimate gaming graphics card with 24GB VRAM and ray tracing capabilities for 4K gaming.",
    rating: 4.7,
    price: "$1,599",
    originalPrice: "$1,799",
    discount: "11% OFF",
    category: "Graphics Card",
    brand: "NVIDIA",
    image: "/rtx-4090-gpu.png",
    specs: ["24GB GDDR6X", "16384 CUDA Cores", "Ray Tracing", "DLSS 3"],
    pros: ["Unmatched 4K performance", "Excellent ray tracing", "Future-proof"],
    cons: ["Power hungry", "Very large size"],
    views: "234K",
    likes: 4892,
    comments: 1567,
    author: "Alex Chen",
    readTime: "15 min read",
    publishedAt: "3 days ago",
    inStock: false,
    trending: true,
  },
  {
    id: 4,
    title: "Samsung Galaxy S24 Ultra",
    description: "Android flagship with S Pen, AI photography features, and titanium construction.",
    rating: 4.6,
    price: "$1,299",
    originalPrice: "$1,399",
    discount: "7% OFF",
    category: "Smartphone",
    brand: "Samsung",
    image: "/galaxy-s24-ultra.png",
    specs: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen", "Titanium Frame"],
    pros: ["Versatile cameras", "S Pen functionality", "Great display"],
    cons: ["Expensive", "Bloatware"],
    views: "67K",
    likes: 1892,
    comments: 445,
    author: "Emma Wilson",
    readTime: "14 min read",
    publishedAt: "5 days ago",
    inStock: true,
    trending: false,
  },
]

const techNews = [
  {
    id: 1,
    title: "Apple Vision Pro 2 Rumors: What to Expect in 2024",
    excerpt:
      "Industry insiders reveal potential features and improvements for the next-generation mixed reality headset.",
    category: "VR/AR",
    timeAgo: "3 hours ago",
    views: "45K",
    comments: 234,
    author: "Tech Insider",
    trending: true,
  },
  {
    id: 2,
    title: "NVIDIA RTX 5090 Specifications Leaked",
    excerpt: "Next-generation GPU promises 50% performance improvement with new architecture and enhanced ray tracing.",
    category: "Hardware",
    timeAgo: "6 hours ago",
    views: "78K",
    comments: 567,
    author: "Hardware Leaks",
    trending: true,
  },
  {
    id: 3,
    title: "Google Pixel 9 Pro Camera Samples Surface",
    excerpt: "Early camera samples showcase improved computational photography and new AI-powered features.",
    category: "Mobile",
    timeAgo: "1 day ago",
    views: "32K",
    comments: 189,
    author: "Mobile News",
    trending: false,
  },
  {
    id: 4,
    title: "Tesla FSD Beta 12 Rolling Out Globally",
    excerpt: "Full Self-Driving capabilities expand to international markets with improved neural networks.",
    category: "Automotive",
    timeAgo: "2 days ago",
    views: "89K",
    comments: 892,
    author: "Auto Tech",
    trending: true,
  },
]

const aiApps = [
  {
    name: "ChatGPT Plus",
    description: "Advanced AI assistant with GPT-4 capabilities",
    rating: 4.8,
    price: "$20/month",
    category: "AI Assistant",
    users: "100M+",
  },
  {
    name: "Midjourney",
    description: "AI-powered image generation and art creation",
    rating: 4.7,
    price: "$10/month",
    category: "Creative AI",
    users: "15M+",
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer for code completion",
    rating: 4.6,
    price: "$10/month",
    category: "Developer Tools",
    users: "5M+",
  },
  {
    name: "Notion AI",
    description: "AI-enhanced productivity and note-taking",
    rating: 4.5,
    price: "$8/month",
    category: "Productivity",
    users: "30M+",
  },
]

const tutorials = [
  {
    title: "Build Your First Gaming PC - Complete Guide 2024",
    difficulty: "Beginner",
    duration: "45 min",
    views: "234K",
    rating: 4.9,
    category: "Hardware",
  },
  {
    title: "Master iPhone Photography: Pro Tips & Techniques",
    difficulty: "Intermediate",
    duration: "30 min",
    views: "156K",
    rating: 4.7,
    category: "Photography",
  },
  {
    title: "Smart Home Setup: Complete Automation Guide",
    difficulty: "Intermediate",
    duration: "60 min",
    views: "89K",
    rating: 4.8,
    category: "Smart Home",
  },
  {
    title: "AI Prompt Engineering: Get Better Results",
    difficulty: "Beginner",
    duration: "25 min",
    views: "67K",
    rating: 4.6,
    category: "AI",
  },
]

export default function TechPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner Carousel */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <BannerCarousel />
      </div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tech-circuit-pattern.png')] opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Cpu className="w-8 h-8 mr-3 text-cyan-400" />
                <span className="text-cyan-300 font-semibold tracking-wide">KOODOS TECH</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Tech{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Innovation
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Cutting-edge technology reviews, gadget guides, and AI innovations that shape tomorrow
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
                <div className="group bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  <span className="flex items-center">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Gadgets
                  </span>
                </div>
                <div className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  <span className="flex items-center">
                    <Bot className="w-4 h-4 mr-2" />
                    AI & Apps
                  </span>
                </div>
                <div className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Reviews
                  </span>
                </div>
                <div className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Tutorials
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">1000+</div>
                  <div className="text-sm text-gray-400">Tech Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">75K+</div>
                  <div className="text-sm text-gray-400">Tech Enthusiasts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">Daily</div>
                  <div className="text-sm text-gray-400">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">200+</div>
                  <div className="text-sm text-gray-400">Exclusives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Featured Tech Products Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Tech Products</h2>
              <Link href="/tech/reviews" className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center">
                View All Reviews <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {featuredTechProducts.map((product) => (
                <Link key={product.id} href={`/tech/reviews/${product.id}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-100">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded font-medium">
                          {product.category}
                        </span>
                        {product.trending && (
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">Trending</span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.rating}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                        <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                          {product.brand}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-medium">
                            {product.price}
                          </span>
                          {product.discount && (
                            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                              {product.discount}
                            </span>
                          )}
                        </div>
                      </div>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-3 py-1 rounded font-medium">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.specs.slice(0, 2).map((spec, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{product.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{product.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{product.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" />
                            <span>{product.likes}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{product.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tech News Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Tech News</h2>
              <Link href="/tech/news" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View All News <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {techNews.map((news) => (
                <Link key={news.id} href={`/tech/news/${news.id}`} className="group">
                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200 hover:border-gray-300 p-6 rounded-xl transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {news.category}
                        </span>
                        {news.trending && (
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">Trending</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">{news.timeAgo}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
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
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{news.comments}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI Apps Section */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Top AI Apps & Tools</h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {aiApps.map((app, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded font-medium">
                        {app.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{app.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{app.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{app.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">{app.price}</span>
                      <span className="text-xs text-gray-500">{app.users} users</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tutorials Section */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Popular Tech Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorials.map((tutorial, index) => (
                <Link key={index} href={`/tech/tutorials/${index + 1}`} className="group">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 p-6 rounded-xl transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {tutorial.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            tutorial.difficulty === "Beginner"
                              ? "bg-blue-100 text-blue-600"
                              : tutorial.difficulty === "Intermediate"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-red-100 text-red-600"
                          }`}
                        >
                          {tutorial.difficulty}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{tutorial.rating}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {tutorial.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{tutorial.views}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Tech Categories</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive coverage across all technology sectors and emerging innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {/* Gadgets Section */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 hover:border-cyan-300 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-cyan-800">Latest Gadgets</h3>
              </div>
              <p className="text-cyan-700 mb-8 text-lg leading-relaxed">
                Reviews and news on the newest tech gadgets and devices
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-cyan-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">iPhone 15 Pro Review</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm ml-1 text-gray-600">9.2</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Titanium design meets Pro performance</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-cyan-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Samsung Galaxy S24 Ultra</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm ml-1 text-gray-600">9.0</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">AI-powered photography revolution</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-cyan-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-cyan-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">MacBook Pro M3 Benchmarks</span>
                    <TrendingUp className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="text-sm text-gray-600">Performance that defies expectations</div>
                </div>
              </div>
            </div>

            {/* AI & Apps Section */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-300 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-purple-800">AI & Apps</h3>
              </div>
              <p className="text-purple-700 mb-8 text-lg leading-relaxed">
                Artificial intelligence breakthroughs and app reviews
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-purple-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">ChatGPT-4 Deep Dive</span>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-sm ml-1 text-gray-600">50K</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Next-gen AI capabilities explored</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-purple-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Best AI Apps 2024</span>
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-sm text-gray-600">Top productivity and creative tools</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-purple-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Machine Learning Trends</span>
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-sm text-gray-600">Future of intelligent systems</div>
                </div>
              </div>
            </div>

            {/* Tech Tutorials Section */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2 md:col-span-2 xl:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-green-800">Tech Tutorials</h3>
              </div>
              <p className="text-green-700 mb-8 text-lg leading-relaxed">Step-by-step guides and how-to tutorials</p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-green-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Build Your First PC</span>
                    <Monitor className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-600">Complete beginner's guide</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-green-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Photography Tips</span>
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-600">Master mobile photography</div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group-hover:shadow-green-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Smart Home Setup</span>
                    <Wifi className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-600">Connected living made simple</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 via-gray-50 to-blue-50 rounded-3xl p-8 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Tech Reviews</h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Our most comprehensive and trending technology reviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                <div className="w-full h-56 bg-gradient-to-br from-slate-500 via-cyan-500 to-blue-500 rounded-2xl mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                        VR/AR
                      </span>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 fill-current mr-2" />
                        <span className="text-lg font-bold">9.5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-cyan-600 transition-colors">
                  Vision Pro Review
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Apple's revolutionary mixed reality headset tested in real-world scenarios with comprehensive
                  analysis.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">VR/AR</span>
                    <span className="text-gray-500 text-sm">3 days ago</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                <div className="w-full h-56 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                        GPU
                      </span>
                      <div className="flex items-center">
                        <Battery className="w-5 h-5 mr-2" />
                        <span className="text-lg font-bold">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  RTX 4090 Benchmarks
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Ultimate gaming performance tested across 50+ games with detailed frame rate analysis and power
                  consumption.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                      GPU
                    </span>
                    <span className="text-gray-500 text-sm">1 week ago</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 md:col-span-2 xl:col-span-1">
                <div className="w-full h-56 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                        Auto
                      </span>
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        <span className="text-lg font-bold">+15%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                  Tesla Model Y Update
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  New features and performance improvements reviewed with real-world testing and efficiency analysis.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Auto</span>
                    <span className="text-gray-500 text-sm">2 weeks ago</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors" />
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
