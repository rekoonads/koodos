"use client"

import { motion } from "framer-motion"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Careers
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 text-lg">
            We're not currently hiring, but check back soon for exciting opportunities!
          </p>
        </motion.div>
      </div>
    </div>
  )
}