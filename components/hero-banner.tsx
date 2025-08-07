"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="relative h-96 lg:h-[500px] overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Gaming Banner"
          fill
          className="object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="relative z-10 flex items-center h-full px-6 lg:px-12">
        <div className="text-white max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-4"
          >
            Welcome to KOODOS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl mb-6 text-gray-200"
          >
            Your ultimate destination for gaming news, reviews, and entertainment content
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Explore Latest
          </motion.button>
        </div>
      </div>
    </section>
  )
}