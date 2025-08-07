"use client"

import { motion } from "framer-motion"
import { Play, Heart, Share2, Eye, Clock, SkipForward } from "lucide-react"
import { useState } from "react"

const featuredVideo = {
  title: "Cyberpunk 2077: Complete Walkthrough - Part 1",
  thumbnail: "/placeholder.svg?height=400&width=700",
  duration: "24:35",
  views: "1.2M views",
  likes: "45K",
  description: "Complete walkthrough of Cyberpunk 2077's main story missions with all side quests and collectibles."
}

const videoList = [
  {
    title: "Spider-Man 2 Boss Fight Compilation",
    thumbnail: "/placeholder.svg?height=120&width=200",
    duration: "15:42",
    views: "890K"
  },
  {
    title: "Baldur's Gate 3 Character Creation Guide",
    thumbnail: "/placeholder.svg?height=120&width=200",
    duration: "18:20",
    views: "654K"
  },
  {
    title: "Hogwarts Legacy Hidden Secrets",
    thumbnail: "/placeholder.svg?height=120&width=200",
    duration: "12:15",
    views: "432K"
  }
]

const timeStamps = [
  { time: "0:00", title: "Introduction" },
  { time: "2:30", title: "Character Setup" },
  { time: "8:45", title: "First Mission" },
  { time: "15:20", title: "Combat Tutorial" },
  { time: "20:10", title: "Story Progression" }
]

export default function VideoPage() {
  const [theaterMode, setTheaterMode] = useState(false)

  return (
    <div className={`min-h-screen transition-all duration-300 ${theaterMode ? 'bg-black' : 'bg-white'}`}>
      <div className={`mx-auto px-6 py-8 transition-all duration-300 ${theaterMode ? 'max-w-full' : 'max-w-7xl'}`}>
        
        {/* Theater Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-3xl font-bold ${theaterMode ? 'text-white' : 'text-gray-900'}`}
          >
            Video Content
          </motion.h1>
          <button
            onClick={() => setTheaterMode(!theaterMode)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
          >
            {theaterMode ? 'Exit Theater' : 'Theater Mode'}
          </button>
        </div>

        <div className={`grid gap-8 ${theaterMode ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'}`}>
          
          {/* Main Video Player */}
          <div className={theaterMode ? 'col-span-1' : 'lg:col-span-2'}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              <div className={`relative ${theaterMode ? 'h-[70vh]' : 'h-96 lg:h-[500px]'} bg-gray-800 flex items-center justify-center`}>
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-all hover:scale-110">
                    <Play className="w-12 h-12 text-white fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
                  {featuredVideo.duration}
                </div>
              </div>

              {/* Video Controls */}
              <div className="bg-black p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-semibold flex items-center gap-2 transition-colors">
                      <Heart className="w-4 h-4" />
                      {featuredVideo.likes}
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg text-white font-semibold flex items-center gap-2 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye className="w-4 h-4" />
                    {featuredVideo.views}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">{featuredVideo.title}</h2>
                <p className="text-gray-300 text-sm">{featuredVideo.description}</p>
              </div>
            </motion.div>

            {/* Time-stamped Sections */}
            {!theaterMode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Video Chapters
                </h3>
                <div className="space-y-2">
                  {timeStamps.map((stamp, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-red-400 font-mono text-sm">{stamp.time}</span>
                      <span className="text-gray-300 group-hover:text-white">{stamp.title}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - Video List */}
          {!theaterMode && (
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <SkipForward className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-bold text-white">Up Next</h3>
                </div>
                
                <div className="space-y-4">
                  {videoList.map((video, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer group"
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white px-1 text-xs rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-gray-400 text-xs mt-1">{video.views}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Auto-play Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-red-900/30 to-gray-800 rounded-xl p-4 border border-red-500/20"
              >
                <h4 className="text-white font-semibold mb-2">Auto-play Next</h4>
                <div className="flex items-center gap-3">
                  <img
                    src={videoList[0].thumbnail}
                    alt={videoList[0].title}
                    className="w-16 h-10 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium line-clamp-1">{videoList[0].title}</p>
                    <p className="text-gray-400 text-xs">Starting in 10s</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}