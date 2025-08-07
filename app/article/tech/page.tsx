"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cpu, Smartphone, Mail, Eye } from "lucide-react"

const featuredTech = {
  title: "iPhone 15 Pro Max Review",
  image: "/placeholder.svg?height=300&width=600",
  description: "Apple's most advanced smartphone yet with titanium design"
}

const techCards = [
  {
    title: "MacBook Pro M3 Review",
    type: "Device Review",
    image: "/placeholder.svg?height=200&width=300",
    specs: { processor: "M3 Pro", ram: "18GB", storage: "512GB SSD" }
  },
  {
    title: "ChatGPT-4 New Features",
    type: "App Feature",
    image: "/placeholder.svg?height=200&width=300",
    specs: { version: "4.0", release: "Dec 2024", users: "100M+" }
  },
  {
    title: "How to Setup Home Server",
    type: "How-To Guide",
    image: "/placeholder.svg?height=200&width=300",
    specs: { difficulty: "Medium", time: "2 hours", tools: "Raspberry Pi" }
  }
]

export default function TechPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Tech Zone
          </h1>
          <p className="text-gray-600 text-xl">Explore the future of technology</p>
        </motion.div>

        {/* Featured Tech Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl overflow-hidden mb-12 bg-gray-900 border border-gray-700"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="relative p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold rounded-full mb-4 inline-block">
                  FEATURED REVIEW
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{featuredTech.title}</h2>
                <p className="text-gray-300 text-lg mb-6">{featuredTech.description}</p>
                <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-bold text-white transition-colors">
                  Read Full Review
                </button>
              </div>
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={featuredTech.image}
                  alt={featuredTech.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {techCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {card.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  
                  {/* Specs Table */}
                  <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Specifications</h4>
                    <div className="space-y-2">
                      {Object.entries(card.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-400 capitalize">{key}:</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-white/20 rounded-3xl p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Tech Trends</h3>
          <p className="text-gray-300 mb-6">Get the latest tech news and reviews delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-xl font-bold text-white hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}