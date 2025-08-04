"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function NintendoSwitch() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 text-white py-12">
        <div className="px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Nintendo Switch
          </motion.h1>
          <p className="text-xl opacity-90">Portable gaming at its finest</p>
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
              alt="Nintendo Switch Featured"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded mb-3 inline-block">
                NINTENDO EXCLUSIVE
              </span>
              <h2 className="text-white font-bold text-2xl leading-tight">
                The Legend of Zelda: Tears of the Kingdom Review
              </h2>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-red-600 pb-2 inline-block">
              Must-Play Games
            </h3>
            <div className="space-y-4">
              {[
                "Super Mario Odyssey",
                "Animal Crossing: New Horizons", 
                "Mario Kart 8 Deluxe",
                "Super Smash Bros. Ultimate"
              ].map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <h4 className="font-semibold text-gray-900">{game}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}