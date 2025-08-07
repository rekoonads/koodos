"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, Quote } from "lucide-react"

const article = {
  title: "The Evolution of Gaming: From Pixels to Virtual Reality",
  author: "Dr. Sarah Chen",
  readTime: "12 min read",
  publishedAt: "December 15, 2024",
  image: "/placeholder.svg?height=300&width=800"
}

const sections = [
  { id: "intro", title: "Introduction", progress: 0 },
  { id: "early-days", title: "The Early Days", progress: 25 },
  { id: "3d-revolution", title: "The 3D Revolution", progress: 50 },
  { id: "online-gaming", title: "Online Gaming Era", progress: 75 },
  { id: "vr-future", title: "VR and the Future", progress: 100 }
]

export default function DeepDivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-red-600 w-1/3 transition-all duration-300"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center px-4" style={{ fontFamily: 'serif' }}>
                {article.title}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <span>By {article.author}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
            <span>{article.publishedAt}</span>
          </div>
        </motion.div>

        {/* Scroll Markers */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span className="text-xs text-gray-500">{section.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
          style={{ fontFamily: 'serif' }}
        >
          {/* TL;DR Section */}
          <div className="bg-gray-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              TL;DR
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Gaming has evolved from simple 8-bit graphics to immersive virtual reality experiences. 
              This deep dive explores the technological milestones, cultural impact, and future 
              possibilities of interactive entertainment.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Dawn of Digital Entertainment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The journey of gaming began in the 1970s with simple arcade machines that captured 
                the imagination of millions. Pong, released in 1972, marked the beginning of what 
                would become a multi-billion dollar industry.
              </p>
              
              {/* Citation Box */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                <p className="text-sm text-blue-800">
                  <Quote className="w-4 h-4 inline mr-2" />
                  "The impact of early arcade games cannot be overstated in shaping modern entertainment." 
                  - Gaming History Institute, 2023
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Console Revolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The introduction of home consoles in the 1980s brought gaming into living rooms 
                worldwide. Nintendo's NES revitalized the industry after the 1983 crash, 
                establishing many conventions still used today.
              </p>
              
              {/* Inline Chart Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center rounded-lg mb-4">
                <p className="text-gray-600">📊 Console Sales Chart (1985-2024)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modern Gaming Landscape</h2>
              <p className="text-gray-700 leading-relaxed">
                Today's gaming industry encompasses mobile gaming, esports, virtual reality, 
                and cloud gaming. The boundaries between traditional entertainment mediums 
                continue to blur as technology advances.
              </p>
            </section>
          </div>

          {/* Footnotes */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">References</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>1. Gaming History Institute. "The Evolution of Interactive Entertainment." 2023.</p>
              <p>2. Chen, S. "Virtual Reality and the Future of Gaming." Tech Review, 2024.</p>
              <p>3. Industry Analytics Report. "Gaming Market Trends 2024." GameData Corp.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}