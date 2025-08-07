"use client"

import { motion } from "framer-motion"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-2 inline-block"
        >
          Reviews
        </motion.h1>
        
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex gap-6"
            >
              <div className="w-32 h-24 bg-gray-200 rounded flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review {item}</h3>
                <p className="text-gray-600">Comprehensive review of the latest games and tech.</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="ml-2 text-sm text-gray-500">8.5/10</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}