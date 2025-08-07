"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, AlertCircle } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "PlayStation 5 Pro Officially Announced with 8K Gaming Support",
    excerpt: "Sony reveals enhanced console with improved ray tracing and AI upscaling technology",
    image: "/placeholder.svg?height=300&width=500",
    timestamp: "2 hours ago",
    isBreaking: true,
    category: "Breaking News"
  },
  {
    id: 2,
    title: "Nintendo Direct Showcases 15 New Games Coming This Year",
    excerpt: "Major announcements include new Zelda DLC and Mario Kart expansion",
    image: "/placeholder.svg?height=300&width=500",
    timestamp: "4 hours ago",
    isBreaking: false,
    category: "Gaming"
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Live Updates Bar */}
      <div className="bg-red-600 text-white px-6 py-2 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          LIVE UPDATES: Gaming Awards 2024 happening now
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
        >
          Latest News
        </motion.h1>

        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="relative h-64 lg:h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  {article.isBreaking && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      BREAKING
                    </div>
                  )}
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4" />
                    {article.timestamp}
                    <span className="text-red-600 font-semibold">{article.category}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Key Points:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Enhanced graphics processing unit with 45% faster rendering</li>
                      <li>Support for 8K gaming at 60fps on select titles</li>
                      <li>Backward compatibility with all PS5 games</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}