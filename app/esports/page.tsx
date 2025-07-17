"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Esports() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Esports
          </motion.h1>
          <p className="text-xl opacity-90">Competitive gaming news, tournaments, and player profiles</p>
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
              alt="Esports Featured"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-orange-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                TOURNAMENT
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                Valorant Champions 2024: India's Best Teams Compete
              </h2>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-orange-600 pb-2 inline-block">
              Popular Games
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Valorant",
                "CS2",
                "PUBG Mobile",
                "Free Fire",
                "League of Legends",
                "Dota 2"
              ].map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg text-center font-semibold"
                >
                  {game}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}