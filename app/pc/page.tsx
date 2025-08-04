"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const pcNews = [
  {
    id: "1",
    title: "RTX 4090 Ti Leaked Specifications Promise 30% Performance Boost",
    excerpt: "NVIDIA's upcoming flagship GPU could redefine 4K gaming performance standards.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hardware",
    author: "PC Hardware Expert",
    publishedAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Steam Deck Competitor: ASUS ROG Ally Review",
    excerpt: "Can ASUS challenge Valve's dominance in the handheld PC gaming market?",
    image: "/placeholder.svg?height=300&width=400",
    category: "Review",
    author: "Handheld Reviewer",
    publishedAt: "1 day ago",
  },
  {
    id: "3",
    title: "Best PC Games of 2024: Our Top Picks",
    excerpt: "From indie darlings to AAA blockbusters, these are the PC games you can't miss.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Features",
    author: "PC Gaming Editor",
    publishedAt: "2 days ago",
  },
]

export default function PC() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            PC Gaming
          </motion.h1>
          <p className="text-xl opacity-90">The ultimate destination for PC gaming news, reviews, and guides</p>
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
              alt="Featured PC Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-indigo-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                PC GAMING
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                AMD Ryzen 9 7950X3D vs Intel Core i9-13900K: The Ultimate Gaming CPU Battle
              </h2>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-600 pb-2 inline-block">
              Latest PC News
            </h3>
            {pcNews.map((article, index) => (
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
                  <span className="text-indigo-600 text-xs font-semibold uppercase">{article.category}</span>
                  <h4 className="text-gray-900 font-semibold text-sm leading-tight mt-1">{article.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{article.author} • {article.publishedAt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Hardware Reviews</h3>
            <p className="text-blue-100 mb-4">Latest GPU, CPU, and component reviews</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-50 transition-colors">
              View Reviews
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Build Guides</h3>
            <p className="text-green-100 mb-4">Step-by-step PC building tutorials</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-50 transition-colors">
              Build Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Game Optimization</h3>
            <p className="text-purple-100 mb-4">Get the best performance from your games</p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded font-semibold hover:bg-purple-50 transition-colors">
              Optimize
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}