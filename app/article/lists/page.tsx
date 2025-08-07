"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy, TrendingUp, Users } from "lucide-react"

const topList = {
  title: "Top 10 Games of 2024",
  description: "The definitive ranking of this year's best games"
}

const games = [
  { rank: 1, title: "Baldur's Gate 3", reason: "Revolutionary RPG storytelling", image: "/placeholder.svg?height=150&width=200", votes: 15420 },
  { rank: 2, title: "Spider-Man 2", reason: "Perfect superhero action", image: "/placeholder.svg?height=150&width=200", votes: 12890 },
  { rank: 3, title: "Hogwarts Legacy", reason: "Magical world exploration", image: "/placeholder.svg?height=150&width=200", votes: 11250 },
  { rank: 4, title: "Starfield", reason: "Epic space adventure", image: "/placeholder.svg?height=150&width=200", votes: 9870 },
  { rank: 5, title: "Cyberpunk 2077: Phantom Liberty", reason: "Redemptive expansion", image: "/placeholder.svg?height=150&width=200", votes: 8640 }
]

export default function TopListsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-4 inline-block">
            🏆 TOP 10
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{topList.title}</h1>
          <p className="text-xl text-gray-600">{topList.description}</p>
        </motion.div>

        {/* Countdown List */}
        <div className="space-y-6">
          {games.map((game, index) => (
            <motion.div
              key={game.rank}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-300"
            >
              <div className="flex items-center">
                {/* Rank Number */}
                <div className="bg-red-600 text-white w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl font-bold">#{game.rank}</span>
                </div>
                
                {/* Game Image */}
                <div className="relative w-48 h-24 flex-shrink-0">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{game.title}</h3>
                  <p className="text-gray-600 mb-4">{game.reason}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{game.votes.toLocaleString()} votes</span>
                    </div>
                    
                    <button className="bg-gray-100 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Poll Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 mt-12 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Your Pick?</h2>
          <p className="text-gray-600 mb-6">Vote for your favorite game of 2024</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {games.slice(0, 3).map((game) => (
              <button
                key={game.rank}
                className="bg-white hover:bg-red-600 hover:text-white border-2 border-gray-200 hover:border-red-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {game.title}
              </button>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>Live voting • Updates every hour</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}