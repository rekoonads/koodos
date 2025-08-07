"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Calendar, Users } from "lucide-react"

const seasonalAnime = [
  {
    title: "Attack on Titan: Final Season",
    image: "/placeholder.svg?height=300&width=200",
    season: "Winter 2024",
    episodes: "12/12",
    rating: 9.2
  },
  {
    title: "Demon Slayer: Hashira Training",
    image: "/placeholder.svg?height=300&width=200", 
    season: "Spring 2024",
    episodes: "8/11",
    rating: 8.8
  }
]

const characters = [
  { name: "Eren Yeager", anime: "Attack on Titan", image: "/placeholder.svg?height=150&width=150" },
  { name: "Tanjiro Kamado", anime: "Demon Slayer", image: "/placeholder.svg?height=150&width=150" },
  { name: "Gojo Satoru", anime: "Jujutsu Kaisen", image: "/placeholder.svg?height=150&width=150" }
]

export default function AnimePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
          style={{ fontFamily: 'serif' }}
        >
          🍥 Anime Corner
        </motion.h1>

        {/* Seasonal Anime */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {seasonalAnime.map((anime, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  width={200}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {anime.season}
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {anime.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{anime.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Episodes: {anime.episodes}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Character Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Character Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {characters.map((character, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900">{character.name}</h4>
                <p className="text-sm text-gray-600">{character.anime}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}