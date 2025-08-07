"use client"

import { motion } from "framer-motion"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
        >
          Latest News
        </motion.h1>
        
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex gap-4">
                <div className="w-24 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Breaking News {item}</h3>
                  <p className="text-gray-600 text-sm mb-2">Latest updates from the gaming and tech world.</p>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}