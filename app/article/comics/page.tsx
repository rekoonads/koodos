"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, Eye, Moon, Sun } from "lucide-react"
import { useState } from "react"

const comic = {
  title: "Spider-Man: Web of Shadows",
  issue: "#12",
  publisher: "Marvel Comics",
  genre: "Superhero",
  pages: 22
}

const comicPages = [
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300", 
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300"
]

export default function ComicsPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [viewMode, setViewMode] = useState('single') // 'single' or 'grid'

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-6 mb-8 border-4 border-dashed ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-red-300 bg-red-50'}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`px-4 py-2 rounded-full font-bold text-sm ${darkMode ? 'bg-red-600 text-white' : 'bg-red-600 text-white'}`}>
                {comic.issue}
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Impact, sans-serif' }}>
                  {comic.title}
                </h1>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{comic.publisher}</span>
                  <span className={`bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold`}>
                    {comic.genre}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <BookOpen className="w-5 h-5" />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
              Start from Issue #1
            </button>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {comic.pages} pages • Reading time: ~15 min
            </span>
          </div>
        </motion.div>

        {/* Comic Reader */}
        {viewMode === 'single' ? (
          /* Single Page View */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className={`relative inline-block rounded-2xl overflow-hidden shadow-2xl border-4 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
              <Image
                src={comicPages[currentPage]}
                alt={`Page ${currentPage + 1}`}
                width={400}
                height={600}
                className="max-w-full h-auto"
              />
              
              {/* Page Navigation Overlay */}
              <div className="absolute inset-0 flex">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  className="flex-1 opacity-0 hover:opacity-20 bg-black transition-opacity"
                  disabled={currentPage === 0}
                />
                <button
                  onClick={() => setCurrentPage(Math.min(comicPages.length - 1, currentPage + 1))}
                  className="flex-1 opacity-0 hover:opacity-20 bg-black transition-opacity"
                  disabled={currentPage === comicPages.length - 1}
                />
              </div>
            </div>
            
            {/* Page Counter */}
            <div className={`mt-4 text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Page {currentPage + 1} of {comicPages.length}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {comicPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage 
                      ? 'bg-red-600' 
                      : darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          /* Grid View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {comicPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-lg overflow-hidden shadow-lg border-2 cursor-pointer hover:scale-105 transition-transform ${
                  darkMode ? 'border-gray-600' : 'border-gray-300'
                }`}
                onClick={() => {
                  setCurrentPage(index)
                  setViewMode('single')
                }}
              >
                <Image
                  src={page}
                  alt={`Page ${index + 1}`}
                  width={200}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Reading Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mt-8 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Reading Progress
            </span>
            <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {Math.round(((currentPage + 1) / comicPages.length) * 100)}%
            </span>
          </div>
          <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className="h-2 bg-red-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentPage + 1) / comicPages.length) * 100}%` }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}