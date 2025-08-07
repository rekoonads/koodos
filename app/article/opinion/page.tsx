"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, MessageCircle, Share2, Award, Smile } from "lucide-react"

const posts = [
  {
    id: 1,
    author: "GameMaster_Pro",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "Top Contributor",
    content: "Just finished Baldur's Gate 3 and wow! The storytelling is incredible. Every choice matters and the characters feel so real. This is what RPGs should be! 🎮✨",
    image: "/placeholder.svg?height=200&width=300",
    likes: 234,
    comments: 45,
    timeAgo: "2 hours ago",
    reactions: ["❤️", "🔥", "👏"]
  },
  {
    id: 2,
    author: "RetroGamer_Sarah",
    avatar: "/placeholder.svg?height=40&width=40",
    badge: "Veteran Player",
    content: "Unpopular opinion: I think indie games are more innovative than AAA titles right now. They take risks that big studios won't! What do you think? 🤔",
    likes: 156,
    comments: 78,
    timeAgo: "5 hours ago",
    reactions: ["🤔", "💯", "👍"]
  }
]

const topContributors = [
  { name: "GameMaster_Pro", posts: 127, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "RetroGamer_Sarah", posts: 98, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "TechReviewer", posts: 76, avatar: "/placeholder.svg?height=32&width=32" }
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          👥 Community
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
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
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{post.author}</h3>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {post.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{post.timeAgo}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 leading-relaxed mb-4">{post.content}</p>
                  
                  {post.image && (
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={post.image}
                        alt="Post image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Reactions */}
                <div className="px-6 pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    {post.reactions.map((reaction, i) => (
                      <button
                        key={i}
                        className="text-lg hover:scale-125 transition-transform"
                      >
                        {reaction}
                      </button>
                    ))}
                    <button className="text-gray-400 hover:text-gray-600 ml-2">
                      <Smile className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="border-t border-gray-100 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="font-semibold">Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={contributor.avatar}
                        alt={contributor.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{contributor.name}</p>
                      <p className="text-xs text-gray-500">{contributor.posts} posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-bold text-gray-900">12.4K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts Today</span>
                  <span className="font-bold text-green-600">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Online Now</span>
                  <span className="font-bold text-blue-600">1.2K</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}