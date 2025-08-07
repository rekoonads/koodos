"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center"
      >
        <span className="text-black font-bold text-2xl">K</span>
      </motion.div>
    </div>
  )
}