"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, User, TrendingUp } from "lucide-react"

const featuredArticles = [
  {
    id: "1",
    title: "PlayStation 5: Sony Is Reportedly Going To Increase the Prices of Its First-Party Games in India",
    image: "/placeholder.svg?height=300&width=400",
    category: "Gaming",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: "2",
    title: "Nintendo Switch 2 Should Reportedly Be Available in India Through Unofficial Channels From June 8",
    image: "/placeholder.svg?height=300&width=400",
    category: "Gaming",
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: "3",
    title: "GDC 2025: The Indian Video Games Industry Was Represented by... Real-Money Gaming Again",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industry",
    gradient: "from-purple-600 to-pink-600",
  },
]

const newsArticles = [
  {
    id: "1",
    title:
      "Nvidia Introduces 'Smooth Motion' for Its GeForce RTX 40 Series GPUs With Latest 590.26 Preview Driver Update",
    excerpt:
      "The Nvidia Smooth Motion feature is currently unavailable on the Nvidia app, but users can still enable it.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Technology",
    author: "Aritra Bhowmick",
    publishedAt: "6 hours, 4 minutes",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "F1: The Movie Returns to IMAX Theatres Across India After Popular Demand",
    excerpt: "Warner Bros. India has added early morning IMAX shows after Superman's release.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Movies",
    author: "Kanak Hozary",
    publishedAt: "6 hours, 46 minutes",
    readTime: "3 min read",
  },
  {
    id: "3",
    title: "Garena Free Fire Max: Redeem Codes for July 14, 2025, Available Now",
    excerpt: "The codes are for one-time redemption only.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gaming",
    author: "Aritra Bhowmick",
    publishedAt: "7 hours, 42 minutes",
    readTime: "4 min read",
  },
]

export default function IndiaPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-8 py-12 border-b border-gray-800"
      >
        <div className="flex items-center gap-4 mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
          <h1 className="text-4xl font-bold text-white">KOODOS India</h1>
        </div>
        <p className="text-gray-400 text-lg">Gaming news and content focused on the Indian gaming community</p>
      </motion.section>

      {/* Featured Articles Grid */}
      <section className="px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Featured Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href={`/article/${article.id}`}>
                <article className="cursor-pointer">
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-60`} />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
                        className="bg-white text-black px-3 py-1 text-xs font-bold rounded-full mb-3 inline-block"
                      >
                        {article.category}
                      </motion.span>
                      <h3 className="text-white font-bold text-lg leading-tight">{article.title}</h3>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="px-8 pb-12">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Latest News
        </motion.h2>

        <div className="space-y-6">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <Link href={`/article/${article.id}`}>
                <article className="group cursor-pointer flex gap-6 bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700">
                  <div className="relative w-32 h-24 flex-shrink-0 rounded overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white text-black px-2 py-1 text-xs font-bold rounded">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gray-300 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.excerpt}</p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.publishedAt}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
