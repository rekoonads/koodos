"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp } from "lucide-react"

const socialPosts = [
  {
    id: 1,
    type: "image",
    content: "Just got my hands on the new PlayStation 5 Pro! The graphics are absolutely insane 🔥 #PS5Pro #Gaming",
    image: "/placeholder.svg?height=300&width=400",
    author: "TechGamer_Mike",
    avatar: "/placeholder.svg?height=40&width=40",
    likes: 1247,
    comments: 89,
    shares: 34,
    timeAgo: "2h",
    hashtags: ["#PS5Pro", "#Gaming", "#TechReview"]
  },
  {
    id: 2,
    type: "video",
    content: "Epic boss fight compilation from my Elden Ring playthrough! Which boss gave you the most trouble? 🗡️",
    image: "/placeholder.svg?height=300&width=400",
    author: "EldenRing_Master",
    avatar: "/placeholder.svg?height=40&width=40",
    likes: 892,
    comments: 156,
    shares: 67,
    timeAgo: "4h",
    hashtags: ["#EldenRing", "#BossFight", "#Gaming"]
  },
  {
    id: 3,
    type: "image",
    content: "My gaming setup is finally complete! RGB everything 🌈 What do you think of the new monitor setup?",
    image: "/placeholder.svg?height=300&width=400",
    author: "SetupGuru_Alex",
    avatar: "/placeholder.svg?height=40&width=40",
    likes: 2156,
    comments: 234,
    shares: 89,
    timeAgo: "6h",
    hashtags: ["#GamingSetup", "#RGB", "#BattleStation"]
  }
]

const viralContent = [
  { title: "Cyberpunk 2077 Hidden Easter Egg", views: "2.4M", thumbnail: "/placeholder.svg?height=80&width=120" },
  { title: "Speedrun World Record Broken", views: "1.8M", thumbnail: "/placeholder.svg?height=80&width=120" },
  { title: "New Game Announcement Reaction", views: "1.2M", thumbnail: "/placeholder.svg?height=80&width=120" }
]

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          📢 Social Feed
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {socialPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Post Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={post.avatar}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{post.author}</h3>
                      <p className="text-sm text-gray-500">{post.timeAgo} ago</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-gray-800 leading-relaxed mb-4">{post.content}</p>
                </div>

                {/* Post Media */}
                <div className="relative">
                  <Image
                    src={post.image}
                    alt="Post content"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {post.type === 'video' && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hashtags */}
                <div className="px-6 py-3">
                  <div className="flex flex-wrap gap-2">
                    {post.hashtags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Post Actions */}
                <div className="border-t border-gray-100 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors group">
                      <Heart className="w-5 h-5 group-hover:fill-current" />
                      <span className="font-semibold">{post.likes.toLocaleString()}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="font-semibold">{post.shares}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Viral Now */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-500" />
                Viral Now
              </h3>
              <div className="space-y-4">
                {viralContent.map((content, index) => (
                  <div key={index} className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={content.thumbnail}
                        alt={content.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                        {content.title}
                      </h4>
                      <p className="text-xs text-gray-500">{content.views} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Story Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Stories</h3>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[1, 2, 3, 4].map((story) => (
                  <div key={story} className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full p-0.5">
                      <div className="w-full h-full bg-white rounded-full p-0.5">
                        <div className="w-full h-full bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-xs text-center mt-1 text-gray-600">User {story}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trending Hashtags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Trending</h3>
              <div className="space-y-2">
                {["#PS5Pro", "#EldenRing", "#GamingSetup", "#Cyberpunk2077", "#Nintendo"].map((tag, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">
                      {tag}
                    </span>
                    <span className="text-xs text-gray-500">{Math.floor(Math.random() * 50 + 10)}K posts</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}