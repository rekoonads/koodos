"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle, ThumbsUp, Award, User } from "lucide-react"

const discussions = [
  {
    id: 1,
    title: "What's the best RPG of 2024?",
    author: "GameMaster_Pro",
    avatar: "/placeholder.svg?height=40&width=40",
    replies: 47,
    upvotes: 156,
    timeAgo: "2 hours ago",
    bestAnswer: true,
    preview: "I think Baldur's Gate 3 takes the crown this year..."
  },
  {
    id: 2,
    title: "PlayStation 5 vs Xbox Series X - Performance Comparison",
    author: "TechReviewer",
    avatar: "/placeholder.svg?height=40&width=40",
    replies: 23,
    upvotes: 89,
    timeAgo: "5 hours ago",
    bestAnswer: false,
    preview: "After testing both consoles extensively..."
  }
]

export default function DiscussionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          🧵 Discussions
        </motion.h1>

        <div className="space-y-6">
          {discussions.map((discussion, index) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={discussion.avatar}
                  alt={discussion.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-red-600 cursor-pointer">
                      {discussion.title}
                    </h3>
                    {discussion.bestAnswer && (
                      <Award className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {discussion.author}
                    </span>
                    <span>{discussion.timeAgo}</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4 border-l-4 border-gray-300">
                    <p className="text-gray-700 text-sm">{discussion.preview}</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      {discussion.upvotes}
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      {discussion.replies} replies
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}