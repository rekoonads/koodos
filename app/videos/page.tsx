import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Eye,
  Clock,
  Calendar,
  Users,
  TrendingUp,
  Video,
  Headphones,
  ArrowRight,
  Filter,
  Grid3X3,
  List,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  Download,
  Bell,
  Star,
} from "lucide-react"
import Link from "next/link"

const featuredVideo = {
  id: 1,
  title: "Top 10 Games of 2024 - Year End Review",
  src: "/placeholder.mp4",
  poster: "/video-top-games-2024.png",
  duration: "18:42",
  views: "125K views",
  category: "Reviews",
  uploadDate: "2 days ago",
  description:
    "Our comprehensive review of the best games released in 2024, featuring gameplay footage, analysis, and our expert ratings. From indie darlings to AAA blockbusters, we cover everything you need to know about this year's gaming landscape.",
  likes: "4.2K",
  comments: "892",
  shares: "156",
  author: "Alex Chen",
  authorAvatar: "/gaming-journalist.png",
  subscribers: "250K",
  tags: ["Gaming", "Reviews", "2024", "Top 10", "GOTY"],
  trending: true,
  quality: "4K",
  language: "English",
  subtitles: true,
}

const videos = [
  {
    id: 1,
    title: "Building the Ultimate Gaming PC for $2000",
    thumbnail: "/video-pc-build.png",
    duration: "24:15",
    views: "89K views",
    category: "Hardware",
    uploadDate: "1 week ago",
    src: "/placeholder.mp4",
    likes: "3.1K",
    comments: "456",
    author: "Mike Rodriguez",
    description: "Complete step-by-step guide to building a high-performance gaming PC on a budget.",
    tags: ["PC Build", "Hardware", "Gaming", "Tutorial"],
    quality: "1080p",
    trending: false,
  },
  {
    id: 2,
    title: "Cyberpunk 2077 Phantom Liberty - Full Playthrough Part 1",
    thumbnail: "/video-cyberpunk-playthrough.png",
    duration: "45:30",
    views: "67K views",
    category: "Gameplay",
    uploadDate: "3 days ago",
    src: "/placeholder.mp4",
    likes: "2.8K",
    comments: "234",
    author: "Sarah Johnson",
    description: "Experience the complete Phantom Liberty expansion with expert commentary and tips.",
    tags: ["Cyberpunk 2077", "Gameplay", "Walkthrough", "RPG"],
    quality: "4K",
    trending: true,
  },
  {
    id: 3,
    title: "Elden Ring Boss Guide - Malenia Strategy & Tips",
    thumbnail: "/video-elden-ring-boss.png",
    duration: "12:33",
    views: "156K views",
    category: "Guide",
    uploadDate: "5 days ago",
    src: "/placeholder.mp4",
    likes: "5.7K",
    comments: "1.2K",
    author: "Emma Wilson",
    description: "Master the toughest boss in Elden Ring with our comprehensive strategy guide.",
    tags: ["Elden Ring", "Boss Guide", "Strategy", "Souls"],
    quality: "1080p",
    trending: true,
  },
  {
    id: 4,
    title: "Steam Deck vs ROG Ally - Ultimate Handheld Comparison",
    thumbnail: "/video-handheld-comparison.png",
    duration: "16:28",
    views: "203K views",
    category: "Hardware",
    uploadDate: "1 week ago",
    src: "/placeholder.mp4",
    likes: "7.3K",
    comments: "892",
    author: "David Kim",
    description: "In-depth comparison of the two leading gaming handhelds with performance tests.",
    tags: ["Steam Deck", "ROG Ally", "Handheld", "Comparison"],
    quality: "4K",
    trending: true,
  },
  {
    id: 5,
    title: "Indie Game Spotlight - Hidden Gems of 2024",
    thumbnail: "/video-indie-spotlight.png",
    duration: "22:15",
    views: "78K views",
    category: "Reviews",
    uploadDate: "2 weeks ago",
    src: "/placeholder.mp4",
    likes: "2.1K",
    comments: "345",
    author: "Jessica Park",
    description: "Discover amazing indie games you might have missed this year.",
    tags: ["Indie Games", "Hidden Gems", "Reviews", "2024"],
    quality: "1080p",
    trending: false,
  },
  {
    id: 6,
    title: "PlayStation 5 Pro Unboxing & First Impressions",
    thumbnail: "/video-ps5-pro-unboxing.png",
    duration: "14:22",
    views: "312K views",
    category: "Hardware",
    uploadDate: "4 days ago",
    src: "/placeholder.mp4",
    likes: "9.8K",
    comments: "1.5K",
    author: "Alex Chen",
    description: "First look at Sony's enhanced console with 8K gaming capabilities.",
    tags: ["PS5 Pro", "Unboxing", "PlayStation", "Console"],
    quality: "4K",
    trending: true,
  },
  {
    id: 7,
    title: "Spider-Man 2 Photo Mode - Creating Cinematic Shots",
    thumbnail: "/video-spiderman-photo.png",
    duration: "19:45",
    views: "45K views",
    category: "Tutorial",
    uploadDate: "1 week ago",
    src: "/placeholder.mp4",
    likes: "1.8K",
    comments: "267",
    author: "Maria Santos",
    description: "Master Spider-Man 2's photo mode to capture stunning in-game photography.",
    tags: ["Spider-Man 2", "Photo Mode", "Tutorial", "Photography"],
    quality: "4K",
    trending: false,
  },
  {
    id: 8,
    title: "Baldur's Gate 3 Character Creation Guide",
    thumbnail: "/video-bg3-character.png",
    duration: "28:12",
    views: "134K views",
    category: "Guide",
    uploadDate: "3 weeks ago",
    src: "/placeholder.mp4",
    likes: "4.5K",
    comments: "678",
    author: "Tom Wilson",
    description: "Complete guide to creating the perfect character for your BG3 adventure.",
    tags: ["Baldur's Gate 3", "Character Creation", "RPG", "Guide"],
    quality: "1080p",
    trending: false,
  },
]

const categories = ["All", "Reviews", "Hardware", "Gameplay", "Guides", "News", "Podcasts", "Tutorials", "Unboxing"]

const podcasts = [
  {
    id: 1,
    title: "Gaming Industry Roundtable - Future of Gaming",
    duration: "52:18",
    episode: "Episode 47",
    description: "Industry experts discuss upcoming trends, AI in gaming, and the future of interactive entertainment.",
    guests: ["Phil Spencer", "Shuhei Yoshida", "Tim Sweeney"],
    publishDate: "3 days ago",
    downloads: "15K",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Indie Developer Interview - Pizza Tower Creator",
    duration: "38:45",
    episode: "Episode 46",
    description: "Deep dive with the creator of Pizza Tower about indie game development and creative process.",
    guests: ["Tour De Pizza"],
    publishDate: "1 week ago",
    downloads: "12K",
    rating: 4.9,
  },
  {
    id: 3,
    title: "E3 2024 Predictions & Game Awards Recap",
    duration: "41:22",
    episode: "Episode 45",
    description: "Our predictions for E3 2024 and comprehensive recap of The Game Awards ceremony.",
    guests: ["Geoff Keighley"],
    publishDate: "2 weeks ago",
    downloads: "18K",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Retro Gaming Revival - Why Old Games Matter",
    duration: "35:56",
    episode: "Episode 44",
    description: "Exploring the resurgence of retro gaming and its impact on modern game design.",
    guests: ["Digital Foundry Team"],
    publishDate: "3 weeks ago",
    downloads: "9K",
    rating: 4.6,
  },
]

const liveStreams = [
  {
    title: "Live: Baldur's Gate 3 Co-op Campaign",
    viewers: "2.3K watching",
    category: "Gameplay",
    status: "live",
    thumbnail: "/stream-bg3-coop.png",
  },
  {
    title: "Tech Talk: RTX 4090 Benchmarks",
    viewers: "1.8K watching",
    category: "Hardware",
    status: "live",
    thumbnail: "/stream-rtx-bench.png",
  },
  {
    title: "Indie Game Discovery Stream",
    viewers: "892 watching",
    category: "Reviews",
    status: "live",
    thumbnail: "/stream-indie-games.png",
  },
]

const upcomingVideos = [
  {
    title: "Final Fantasy VII Rebirth - Full Review",
    scheduledDate: "Tomorrow, 3:00 PM",
    category: "Reviews",
    estimatedDuration: "25 min",
  },
  {
    title: "Building a Streaming Setup for $500",
    scheduledDate: "Feb 15, 2:00 PM",
    category: "Tutorial",
    estimatedDuration: "18 min",
  },
  {
    title: "Helldivers 2 - First Impressions",
    scheduledDate: "Feb 16, 4:00 PM",
    category: "Gameplay",
    estimatedDuration: "15 min",
  },
]

export default function VideosPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/video-grid-pattern.png')] opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Video className="w-10 h-10 mr-4 text-purple-400" />
                <span className="text-purple-300 font-semibold tracking-wide text-lg">KOODOS VIDEO</span>
                <Video className="w-10 h-10 ml-4 text-purple-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                Video{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                  Content
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Gaming videos, reviews, tutorials, podcasts, and live gameplay from the KOODOS team
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-sm lg:text-base text-gray-400">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-pink-400 mb-2">2.5M</div>
                  <div className="text-sm lg:text-base text-gray-400">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-indigo-400 mb-2">100K+</div>
                  <div className="text-sm lg:text-base text-gray-400">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-purple-400 mb-2">Weekly</div>
                  <div className="text-sm lg:text-base text-gray-400">New Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Live Streams Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Live Now</h2>
              </div>
              <Link href="/videos/live" className="text-red-600 hover:text-red-800 font-medium flex items-center">
                View All Streams <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {liveStreams.map((stream, index) => (
                <Link key={index} href={`/videos/live/${index + 1}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-100">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="w-5 h-5 text-red-600 ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <div className="flex items-center bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                            LIVE
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            {stream.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                        {stream.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{stream.viewers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>Live Chat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 mr-4"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Video</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <Card className="bg-white shadow-xl border border-gray-200 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="w-8 h-8 text-purple-600 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg font-medium">
                        {featuredVideo.duration}
                      </div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        {featuredVideo.trending && (
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">Trending</span>
                        )}
                        <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                          {featuredVideo.quality}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-purple-100 text-purple-800 font-semibold px-3 py-1">
                        {featuredVideo.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredVideo.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredVideo.uploadDate}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredVideo.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredVideo.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{featuredVideo.author.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{featuredVideo.author}</div>
                          <div className="text-sm text-gray-500">{featuredVideo.subscribers} subscribers</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                          <Bell className="w-4 h-4" />
                          Subscribe
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredVideo.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <ThumbsUp className="w-5 h-5" />
                          <span className="font-medium">{featuredVideo.likes}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MessageCircle className="w-5 h-5" />
                          <span className="font-medium">{featuredVideo.comments}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Share2 className="w-5 h-5" />
                          <span className="font-medium">{featuredVideo.shares}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                          <Bookmark className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="xl:col-span-1 space-y-6">
                <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <TrendingUp className="w-6 h-6 mr-3 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-900">Trending Videos</h3>
                    </div>
                    <div className="space-y-4">
                      {videos
                        .filter((v) => v.trending)
                        .slice(0, 3)
                        .map((video, index) => (
                          <Link key={index} href={`/videos/${video.id}`} className="block">
                            <div className="flex space-x-3 p-3 bg-white rounded-lg border border-purple-100 hover:border-purple-200 transition-colors cursor-pointer group">
                              <div className="relative flex-shrink-0">
                                <div className="w-16 h-10 bg-gradient-to-br from-purple-200 to-indigo-200 rounded overflow-hidden">
                                  <div className="w-full h-full flex items-center justify-center">
                                    <Play className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                                  </div>
                                </div>
                                <div className="absolute bottom-0 right-0 bg-black/80 text-white text-xs px-1 rounded-tl">
                                  {video.duration}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm text-gray-900 line-clamp-2 mb-1 group-hover:text-purple-600 transition-colors">
                                  {video.title}
                                </h4>
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                  <span>{video.views}</span>
                                  <span>•</span>
                                  <span>{video.uploadDate}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-6 h-6 mr-3 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Upcoming Videos</h3>
                    </div>
                    <div className="space-y-4">
                      {upcomingVideos.map((video, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg border border-green-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-green-600">{video.category}</span>
                            <span className="text-xs text-gray-500">{video.estimatedDuration}</span>
                          </div>
                          <h4 className="font-medium text-sm text-gray-900 mb-2">{video.title}</h4>
                          <div className="text-xs text-gray-500">{video.scheduledDate}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Podcasts Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Gaming Podcasts</h2>
              </div>
              <Link
                href="/videos/podcasts"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                View All Episodes <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {podcasts.map((podcast) => (
                <Link key={podcast.id} href={`/videos/podcasts/${podcast.id}`} className="group">
                  <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                            <Headphones className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="text-xs font-medium text-indigo-600">{podcast.episode}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="text-xs text-gray-500">{podcast.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs text-gray-500">{podcast.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">{podcast.publishDate}</div>
                          <div className="text-xs text-gray-500">{podcast.downloads} downloads</div>
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {podcast.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{podcast.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {podcast.guests.slice(0, 2).map((guest, index) => (
                            <span key={index} className="text-xs bg-white text-indigo-600 px-2 py-1 rounded">
                              {guest}
                            </span>
                          ))}
                          {podcast.guests.length > 2 && (
                            <span className="text-xs text-gray-500">+{podcast.guests.length - 2} more</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-full transition-colors">
                            <Play className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* All Videos Section */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 mr-4"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">All Videos</h2>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                  <button className="p-2 bg-white rounded shadow-sm">
                    <Grid3X3 className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 text-gray-600">
                    <List className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span className="font-medium">Filter</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    index === 0 ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {videos.map((video) => (
                <Link key={video.id} href={`/videos/${video.id}`} className="group">
                  <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 hover:border-purple-200 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-5 h-5 text-purple-600 ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">
                          {video.duration}
                        </div>
                        <div className="absolute top-2 left-2 flex gap-1">
                          <Badge className="bg-white/90 text-gray-800 text-xs font-medium">{video.category}</Badge>
                          {video.trending && (
                            <Badge className="bg-red-600 text-white text-xs font-medium">Trending</Badge>
                          )}
                        </div>
                        <div className="absolute top-2 right-2">
                          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            {video.quality}
                          </span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{video.author.charAt(0)}</span>
                        </div>
                        <span className="text-xs text-gray-600">{video.author}</span>
                      </div>

                      <CardTitle className="text-base lg:text-lg mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors leading-tight">
                        {video.title}
                      </CardTitle>

                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{video.views}</span>
                        </div>
                        <span>{video.uploadDate}</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="w-3 h-3" />
                            <span>{video.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>{video.comments}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
