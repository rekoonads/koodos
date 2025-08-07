"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Zap, Download } from "lucide-react"

const featuredGame = {
  title: "Baldur's Gate 3",
  image: "/placeholder.svg?height=400&width=800",
  description: "The ultimate RPG experience with endless possibilities"
}

const gameDrops = [
  { title: "Cyberpunk 2077 Update 2.1", type: "Patch", image: "/placeholder.svg?height=150&width=200" },
  { title: "Hogwarts Legacy", type: "New Release", image: "/placeholder.svg?height=150&width=200" },
  { title: "Fortnite Chapter 5", type: "Update", image: "/placeholder.svg?height=150&width=200" },
  { title: "Call of Duty: MW3", type: "New Release", image: "/placeholder.svg?height=150&width=200" }
]

const trendingGames = [
  "Baldur's Gate 3", "Cyberpunk 2077", "Hogwarts Legacy", "Starfield", "Spider-Man 2"
]

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Trending Games Ticker */}
      <div className="bg-red-600 py-2 overflow-hidden">
        <motion.div
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">TRENDING NOW:</span>
          {trendingGames.map((game, index) => (
            <span key={index} className="text-yellow-300">#{game}</span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Featured Game Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-12"
        >
          <Image
            src={featuredGame.image}
            alt={featuredGame.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded mb-4 inline-block">
              FEATURED
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              {featuredGame.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{featuredGame.description}</p>
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold text-white transition-colors">
              Play Now
            </button>
          </div>
        </motion.div>

        {/* Gaming Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Game Drops */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold mb-6 flex items-center gap-2"
            >
              <Zap className="w-6 h-6 text-red-600" />
              Latest Drops & Updates
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gameDrops.map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                      {game.type}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {game.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <Download className="w-5 h-5 text-red-600" />
                Free Games This Week
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Epic Games Store</p>
                    <p className="text-sm text-gray-600">Control Ultimate Edition</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Steam</p>
                    <p className="text-sm text-gray-600">Weekend Free Play</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Gaming Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Players</span>
                  <span className="text-red-600 font-bold">2.4M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">New Releases</span>
                  <span className="text-red-600 font-bold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Updates Today</span>
                  <span className="text-red-600 font-bold">12</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}