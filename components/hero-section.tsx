"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/motion/animated-button"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Welcome to KOODOS",
      subtitle: "Your ultimate destination for gaming news, reviews, and entertainment content",
      image: "/cyberpunk-gaming-hero.png",
      cta: "Explore Latest",
    },
  ]

  return (
    <div className="relative h-[400px] bg-gradient-to-r from-white via-gray-100 to-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center px-12">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to KOODOS
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your ultimate destination for gaming news, reviews, and entertainment content
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <AnimatedButton className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base font-semibold rounded-md transition-all">
              Explore Latest
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
