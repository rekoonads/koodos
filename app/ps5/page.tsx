"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const ps5News = [
  {
    id: "1",
    title: "PlayStation 5 Pro Review: The Most Powerful Console Yet",
    excerpt: "Sony's mid-generation refresh delivers 4K gaming at 60fps with enhanced ray tracing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hardware Review",
    author: "Console Expert",
    publishedAt: "1 hour ago",
  },
  {
    id: "2",
    title: "Spider-Man 2 Exclusive Features on PS5",
    excerpt: "How Insomniac Games utilizes the PS5's unique capabilities for the ultimate Spider-Man experience.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Game Features",
    author: "PlayStation Specialist",
    publishedAt: "6 hours ago",
  },
  {
    id: "3",
    title: "PS5 System Update 8.0: New Features and Improvements",
    excerpt: "Sony rolls out major system update with enhanced UI and new social features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "System Update",
    author: "Tech News",
    publishedAt: "1 day ago",
  },
]

export default function PS5() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            PlayStation 5
          </motion.h1>
          <p className="text-xl opacity-90">Everything about Sony's next-generation gaming console</p>
        </div>
      </section>

      <section className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-80 overflow-hidden rounded-lg"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Featured PS5 Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                PS5 EXCLUSIVE
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                God of War Ragnarök: How PS5 Features Enhance the Norse Epic
              </h2>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 inline-block">
              Latest PS5 News
            </h3>
            {ps5News.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <span className="text-blue-600 text-xs font-semibold uppercase">{article.category}</span>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight mt-1">{article.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{article.author} • {article.publishedAt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Exclusive Games</h3>
            <p className="text-blue-100 text-sm">Latest PS5 exclusives</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">DualSense Features</h3>
            <p className="text-purple-100 text-sm">Haptic feedback guides</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Performance</h3>
            <p className="text-green-100 text-sm">4K gaming analysis</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-lg text-center"
          >
            <h3 className="text-lg font-bold mb-2">Accessories</h3>
            <p className="text-red-100 text-sm">Controllers & more</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}