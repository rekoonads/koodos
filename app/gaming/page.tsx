"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const gamingNews = [
  {
    id: "1",
    title: "PlayStation 5 Pro Review: The Most Powerful Console Yet",
    excerpt: "Sony's latest console delivers unprecedented gaming performance with enhanced ray tracing and 4K capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hardware",
    author: "Gaming Expert",
    publishedAt: "2 hours ago",
  },
  {
    id: "2", 
    title: "Elden Ring DLC Shadow of the Erdtree Gets Release Date",
    excerpt: "FromSoftware announces the highly anticipated expansion with new areas, bosses, and storylines.",
    image: "/placeholder.svg?height=300&width=400",
    category: "News",
    author: "RPG Specialist",
    publishedAt: "4 hours ago",
  },
  {
    id: "3",
    title: "Call of Duty: Modern Warfare III Multiplayer Beta Impressions",
    excerpt: "Our hands-on experience with the latest entry in the iconic FPS franchise.",
    image: "/placeholder.svg?height=300&width=400", 
    category: "Preview",
    author: "FPS Reviewer",
    publishedAt: "6 hours ago",
  },
]

export default function Gaming() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Gaming
          </motion.h1>
          <p className="text-xl opacity-90">Latest gaming news, reviews, and updates</p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="px-8 py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Link href="/post/game-awards-2024">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-80 overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Featured Gaming Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                  FEATURED
                </span>
                <h2 className="text-white font-bold text-2xl leading-tight">
                  The Game Awards 2024: All Winners and Biggest Announcements
                </h2>
              </div>
            </motion.div>
          </Link>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-black pb-2 inline-block">
              Trending in Gaming
            </h3>
            {gamingNews.slice(0, 3).map((article, index) => (
              <Link key={article.id} href={`/post/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <span className="text-black text-xs font-semibold uppercase">{article.category}</span>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight mt-1">{article.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{article.author} • {article.publishedAt}</p>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming Categories */}
      <section className="px-8 py-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-900 mb-6"
        >
          Browse by Platform
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: "PlayStation 5", href: "/ps5", color: "bg-black" },
            { name: "Xbox Series X", href: "/xbox", color: "bg-gray-800" },
            { name: "Nintendo Switch", href: "/nintendo-switch", color: "bg-gray-700" },
            { name: "PC Gaming", href: "/pc", color: "bg-gray-900" },
          ].map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={platform.href}
                className={`block ${platform.color} text-white p-6 rounded-lg text-center font-semibold hover:opacity-90 transition-opacity`}
              >
                {platform.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}