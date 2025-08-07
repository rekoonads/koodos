"use client"

import { motion } from "framer-motion"

export default function MobileGamingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
        >
          Mobile Gaming
        </motion.h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: item * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
            >
              <div className="h-24 bg-gray-200 rounded mb-3"></div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Mobile Game {item}</h3>
              <p className="text-gray-600 text-xs">Mobile gaming reviews.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}