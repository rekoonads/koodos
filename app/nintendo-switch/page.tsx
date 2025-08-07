"use client"

import { motion } from "framer-motion"

export default function NintendoSwitchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
        >
          Nintendo Switch
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Switch Game {item}</h3>
                <p className="text-gray-600 text-sm">Nintendo Switch exclusive content.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}