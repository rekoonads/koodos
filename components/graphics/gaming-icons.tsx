"use client"

import { motion } from "framer-motion"

interface GamingIconsProps {
  className?: string
}

export function GamingIcons({ className = "" }: GamingIconsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-white text-xs font-bold">PS</span>
      </motion.div>
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-white text-xs font-bold">XB</span>
      </motion.div>
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-white text-xs font-bold">SW</span>
      </motion.div>
      <motion.div
        className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-white text-xs font-bold">PC</span>
      </motion.div>
    </div>
  )
}
