"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Anime() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Anime & Manga
          </motion.h1>
          <p className="text-xl opacity-90">Latest anime news, reviews, and manga updates</p>
        </div>
      </section>

      <section className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-80 overflow-hidden rounded-lg"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Anime Featured"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-pink-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                ANIME REVIEW
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                Demon Slayer Season 4: Everything We Know So Far
              </h2>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-pink-600 pb-2 inline-block">
              Trending Anime
            </h3>
            <div className="space-y-4">
              {[
                "Attack on Titan: Final Season",
                "Jujutsu Kaisen Season 2",
                "One Piece: Wano Arc",
                "My Hero Academia Season 7"
              ].map((anime, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <h4 className="font-semibold text-gray-900">{anime}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}