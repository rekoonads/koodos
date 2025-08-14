"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          About Koodos
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Koodos is your ultimate destination for gaming news, reviews, and entertainment content. 
              We're passionate about bringing you the latest updates from the world of gaming, tech, and pop culture.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-700 mb-4">
              From breaking gaming news to in-depth reviews, we cover everything that matters to gamers and tech enthusiasts. 
              Our team of dedicated writers and reviewers work around the clock to bring you quality content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions or feedback? Reach out to us at contact@koodos.in
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}