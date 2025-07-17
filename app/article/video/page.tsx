"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Videos() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Videos
          </motion.h1>
          <p className="text-xl opacity-90">Gaming videos, reviews, and entertainment content</p>
        </div>
      </section>

      <section className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Spider-Man 2 Gameplay Walkthrough",
            "PS5 vs Xbox Series X Comparison",
            "Top 10 Games of 2024",
            "Nintendo Direct Highlights",
            "PC Build Guide 2024",
            "Anime Season Preview"
          ].map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt={video} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{video}</h3>
                <p className="text-gray-600 text-sm">KOODOS Gaming • 2 days ago</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}