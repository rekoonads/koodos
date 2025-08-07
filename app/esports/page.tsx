"use client"

import { motion } from "framer-motion"

export default function EsportsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
        >
          Esports
        </motion.h1>
        
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item * 0.2 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-48 bg-gray-200 rounded"></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Esports Tournament {item}</h3>
                  <p className="text-gray-600 mb-4">Latest esports news and tournament coverage.</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}