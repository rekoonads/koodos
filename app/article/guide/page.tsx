"use client"

import { motion } from "framer-motion"
import { ChevronDown, Play, Download, HelpCircle } from "lucide-react"
import { useState } from "react"

const guide = {
  title: "Cyberpunk 2077: Complete Beginner's Guide",
  game: "Cyberpunk 2077",
  difficulty: "Beginner",
  logo: "/placeholder.svg?height=60&width=60"
}

const sections = [
  {
    title: "Getting Started",
    steps: [
      "Character Creation Tips",
      "Choosing Your Life Path", 
      "Essential Settings"
    ],
    video: "https://example.com/video1"
  },
  {
    title: "Combat Basics",
    steps: [
      "Weapon Types Overview",
      "Stealth vs Combat",
      "Cyberware Upgrades"
    ],
    video: "https://example.com/video2"
  },
  {
    title: "Pro Tips",
    steps: [
      "Money Making Strategies",
      "Best Early Game Builds",
      "Hidden Locations"
    ],
    video: "https://example.com/video3"
  }
]

export default function GuidePage() {
  const [openSection, setOpenSection] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={guide.logo}
              alt={guide.game}
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{guide.title}</h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {guide.difficulty}
                </span>
                <span className="text-gray-600">Game: {guide.game}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" />
              Download Checklist
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <HelpCircle className="w-4 h-4" />
              Need Help?
            </button>
          </div>
        </motion.div>

        {/* Guide Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenSection(openSection === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{section.steps.length} steps</p>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openSection === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-200"
                >
                  <div className="p-6 space-y-4">
                    {/* Video Walkthrough */}
                    <div className="bg-black rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">Video Walkthrough</h4>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          Watch
                        </button>
                      </div>
                      <div className="bg-gray-800 h-32 rounded flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Steps */}
                    <div className="space-y-3">
                      {section.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3 group">
                          <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium group-hover:text-red-600 transition-colors cursor-pointer">
                              {step}
                            </p>
                            <div className="relative">
                              <div className="absolute -left-2 top-2 w-4 h-4 bg-gray-100 border-2 border-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <div className="w-full h-full bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Completion Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Tracker</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Overall Progress</span>
              <span className="text-gray-900 font-semibold">2/3 sections completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full w-2/3 transition-all duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}