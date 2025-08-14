"use client"

import { motion } from "framer-motion"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Cookie Policy
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your device when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to improve your browsing experience and analyze website traffic.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}