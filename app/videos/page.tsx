"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, MessageCircle, Play, Volume2, Calendar, Users, Zap, Radio, X } from "lucide-react"
import Link from "next/link"
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

const generateVideos = (page: number) => {
  const categories = ['Gaming', 'Reviews', 'Tutorials', 'News', 'Entertainment']
  const videoTypes = [
    'Ultimate Gaming Setup Tour 2024',
    'Game Review: Complete Analysis',
    'How to Build Gaming PC Guide',
    'Gaming News Weekly Roundup',
    'Funny Gaming Moments Compilation',
    'Tech Unboxing and First Look',
    'Esports Tournament Highlights',
    'Gaming Tips and Tricks',
    'Developer Interview Special',
    'Live Gaming Session Highlights'
  ]
  
  const demoVideos = [
    { type: 'youtube', url: 'dQw4w9WgXcQ' }, // YouTube video ID
    { type: 'cloudinary', url: 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample.mp4' },
    { type: 'youtube', url: 'jNQXAC9IVRw' },
    { type: 'cloudinary', url: 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample2.mp4' },
    { type: 'youtube', url: 'M7lc1UVf-VE' },
    { type: 'cloudinary', url: 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample3.mp4' },
    { type: 'youtube', url: 'ScMzIvxBSi4' },
    { type: 'cloudinary', url: 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample4.mp4' },
    { type: 'youtube', url: 'kJQP7kiw5Fk' },
    { type: 'cloudinary', url: 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample5.mp4' }
  ]
  
  const baseId = page * 10
  return Array.from({ length: 10 }, (_, i) => ({
    id: `video-${baseId + i}`,
    title: `${videoTypes[i]} - Episode ${baseId + i + 1}`,
    excerpt: `Engaging video content featuring ${videoTypes[i].toLowerCase()} with high-quality production and expert commentary.`,
    category: categories[i % categories.length],
    author: ['GameMaster Pro', 'Tech Reviewer', 'Gaming Guru', 'Stream Queen', 'Video Creator'][i % 5],
    publishedAt: new Date(Date.now() - (baseId + i) * 24 * 60 * 60 * 1000).toISOString(),
    duration: `${Math.floor(Math.random() * 20) + 5}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    views: Math.floor(Math.random() * 100000) + 20000,
    comments: Math.floor(Math.random() * 500) + 100,
    likes: Math.floor(Math.random() * 2000) + 500,
    quality: ['HD', '4K', 'FHD'][Math.floor(Math.random() * 3)],
    isLive: Math.random() > 0.9,
    slug: `video-${baseId + i}-${videoTypes[i].toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    featured: i === 0 && page === 0,
    subscribers: Math.floor(Math.random() * 50000) + 10000,
    videoData: demoVideos[i % demoVideos.length]
  }))
}

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [showPlayer, setShowPlayer] = useState(false)
  const playerRef = useRef<HTMLVideoElement>(null)
  const plyrRef = useRef<Plyr | null>(null)

  useEffect(() => {
    if (showPlayer && selectedVideo) {
      const initPlayer = () => {
        if (selectedVideo.videoData.type === 'youtube') {
          // YouTube player with custom styling
          const youtubeDiv = document.getElementById('youtube-player')
          if (youtubeDiv) {
            plyrRef.current = new Plyr(youtubeDiv, {
              controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'fullscreen'],
              youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                playsinline: 1,
                enablejsapi: 1,
                origin: window.location.origin,
                widget_referrer: window.location.origin
              },
              hideControls: false,
              clickToPlay: true
            })
          }
        } else {
          // Cloudinary/MP4 player
          if (playerRef.current) {
            plyrRef.current = new Plyr(playerRef.current, {
              controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'fullscreen'],
              quality: { default: 720, options: [1080, 720, 480] },
              hideControls: false,
              clickToPlay: true
            })
          }
        }
      }
      
      setTimeout(initPlayer, 100)
      
      return () => {
        if (plyrRef.current) {
          plyrRef.current.destroy()
        }
      }
    }
  }, [showPlayer, selectedVideo])

  const closePlayer = () => {
    setShowPlayer(false)
    setSelectedVideo(null)
    if (plyrRef.current) {
      plyrRef.current.destroy()
      plyrRef.current = null
    }
    // Remove any YouTube branding elements
    setTimeout(() => {
      const ytElements = document.querySelectorAll('.ytp-chrome-top, .ytp-show-cards-title, .ytp-ce-element')
      ytElements.forEach(el => el.remove())
    }, 100)
  }
  const [filter, setFilter] = useState('all')

  const loadVideos = useCallback(async (pageNum: number) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newVideos = generateVideos(pageNum)
    
    if (pageNum === 0) {
      setVideos(newVideos)
    } else {
      setVideos(prev => [...prev, ...newVideos])
    }
    
    if (pageNum >= 4) setHasMore(false)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadVideos(0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return
      
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      
      if (scrollTop + clientHeight >= scrollHeight - 1000) {
        setPage(prev => {
          const nextPage = prev + 1
          loadVideos(nextPage)
          return nextPage
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore, loadVideos])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return date.toLocaleDateString()
  }

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`
    return views.toString()
  }

  const featuredVideo = videos.find(v => v.featured)
  const liveVideos = videos.filter(v => v.isLive)
  const regularVideos = videos.filter(v => !v.featured && !v.isLive)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Play className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl font-bold text-white">
                Videos
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Premium video content covering gaming, tech reviews, tutorials, and live streams
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Video - Hero Style */}
        

        {/* Live Videos Section */}
        {liveVideos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Radio className="w-6 h-6 text-red-500 mr-2" />
              Live Now
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
            </div>
          </div>
        )}

        {/* Regular Videos - Grid Layout */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">All Videos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-400">Loading more videos...</p>
          </div>
        )}

        {!hasMore && videos.length > 0 && (
          <div className="text-center py-12">
            <div className="flex items-center justify-center text-gray-400">
              <Play className="w-5 h-5 mr-2" />
              <p>You've watched all our videos!</p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styled Video Player Modal */}
      {showPlayer && selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <style jsx global>{`
            .plyr {
              --plyr-color-main: #3b82f6;
              --plyr-video-background: #000;
              --plyr-menu-background: rgba(0, 0, 0, 0.9);
              --plyr-menu-color: #fff;
              --plyr-control-icon-size: 18px;
              --plyr-control-spacing: 10px;
              --plyr-progress-loading-background: rgba(255, 255, 255, 0.25);
              --plyr-progress-buffer-background: rgba(255, 255, 255, 0.25);
              --plyr-range-track-background: rgba(255, 255, 255, 0.25);
              --plyr-range-fill-background: #3b82f6;
              --plyr-range-thumb-background: #3b82f6;
              --plyr-tooltip-background: rgba(0, 0, 0, 0.8);
              --plyr-tooltip-color: #fff;
            }
            .plyr__controls {
              background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
              border-radius: 0 0 8px 8px;
            }
            .plyr__control--overlaid {
              background: rgba(59, 130, 246, 0.9);
              border-radius: 50%;
              transition: all 0.3s ease;
            }
            .plyr__control--overlaid:hover {
              background: rgba(59, 130, 246, 1);
              transform: scale(1.1);
            }
            .plyr--youtube .plyr__video-wrapper {
              border-radius: 8px;
              overflow: hidden;
            }
            .plyr iframe {
              border-radius: 8px;
            }
          `}</style>
          <div className="relative w-full max-w-5xl">
            <button
              onClick={closePlayer}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 z-10 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-blue-500/20 shadow-2xl">
              <div className="relative">
                {selectedVideo.videoData.type === 'youtube' ? (
                  <div 
                    id="youtube-player"
                    data-plyr-provider="youtube"
                    data-plyr-embed-id={selectedVideo.videoData.url}
                    className="w-full aspect-video bg-black rounded-t-xl"
                  ></div>
                ) : (
                  <video
                    ref={playerRef}
                    className="w-full aspect-video bg-black rounded-t-xl"
                    crossOrigin="anonymous"
                    playsInline
                    poster={`/video-thumbnail-${(Math.floor(Math.random() * 3) + 1)}.png`}
                  >
                    <source src={selectedVideo.videoData.url} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{selectedVideo.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{selectedVideo.excerpt}</p>
                  </div>
                  <Badge className="bg-blue-600 text-white ml-4 flex-shrink-0">{selectedVideo.quality}</Badge>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium">{selectedVideo.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>{formatViews(selectedVideo.views)} views</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>{selectedVideo.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
