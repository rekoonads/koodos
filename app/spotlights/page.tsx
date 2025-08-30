"use client"

import { useState, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, MessageCircle, Star, Trophy, User, Calendar } from "lucide-react"
import Link from "next/link"

const generateSpotlights = (page: number) => {
  const categories = ['Gaming', 'Tech', 'Entertainment', 'Esports', 'Innovation']
  const titles = [
    'Rising Star Developer Spotlight',
    'Breakthrough Gaming Technology',
    'Indie Game Success Story',
    'Esports Champion Profile',
    'Innovation in Gaming Industry',
    'Creative Director Interview',
    'Gaming Community Hero',
    'Tech Startup Spotlight',
    'Content Creator Feature',
    'Gaming Industry Pioneer'
  ]
  
  const baseId = page * 10
  return Array.from({ length: 10 }, (_, i) => ({
    id: `spotlight-${baseId + i}`,
    title: `${titles[i]} - ${new Date().getFullYear()}`,
    excerpt: `Exclusive spotlight featuring remarkable achievements and innovations in ${categories[i % categories.length].toLowerCase()}.`,
    category: categories[i % categories.length],
    author: ['Alex Chen', 'Sarah Johnson', 'Mike Rodriguez', 'Emma Wilson', 'David Kim'][i % 5],
    publishedAt: new Date(Date.now() - (baseId + i) * 24 * 60 * 60 * 1000).toISOString(),
    readTime: Math.floor(Math.random() * 8) + 5,
    views: Math.floor(Math.random() * 30000) + 5000,
    comments: Math.floor(Math.random() * 150) + 20,
    rating: (Math.random() * 2 + 3).toFixed(1),
    slug: `spotlight-${baseId + i}-${titles[i].toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    featured: i === 0 && page === 0
  }))
}

export default function SpotlightsPage() {
  const [spotlights, setSpotlights] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadSpotlights = useCallback(async (pageNum: number) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newSpotlights = generateSpotlights(pageNum)
    
    if (pageNum === 0) {
      setSpotlights(newSpotlights)
    } else {
      setSpotlights(prev => [...prev, ...newSpotlights])
    }
    
    if (pageNum >= 4) setHasMore(false)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadSpotlights(0)
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
          loadSpotlights(nextPage)
          return nextPage
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore, loadSpotlights])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const featuredSpotlight = spotlights.find(s => s.featured)
  const regularSpotlights = spotlights.filter(s => !s.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4 text-white">
                Spotlights
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Celebrating the innovators, creators, and visionaries shaping the future of gaming and technology
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Spotlight - Magazine Style */}
        {featuredSpotlight && (
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-white">Featured Spotlight</h2>
            </div>
            
            <Link href={`/article/${featuredSpotlight.category.toLowerCase()}/${featuredSpotlight.slug}`}>
              <div className="group cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-yellow-400 to-orange-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center">
                      <div className="text-center">
                        <Trophy className="w-24 h-24 text-white/80 mx-auto mb-4" />
                        <Badge className="bg-yellow-600 text-white text-sm px-3 py-1">
                          {featuredSpotlight.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="bg-red-600 text-white w-fit mb-4">Featured</Badge>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                      {featuredSpotlight.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredSpotlight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span className="text-gray-300">{featuredSpotlight.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(featuredSpotlight.publishedAt)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{featuredSpotlight.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredSpotlight.readTime} min read</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredSpotlight.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{featuredSpotlight.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Spotlights - List Style */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-8">All Spotlights</h2>
          
          {regularSpotlights.map((spotlight, index) => (
            <Link key={spotlight.id} href={`/article/${spotlight.category.toLowerCase()}/${spotlight.slug}`}>
              <div className="group cursor-pointer bg-gray-900/50 border border-gray-700 hover:border-orange-500/50 rounded-xl p-6 transition-all duration-300 hover:bg-gray-900/80">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge className="bg-orange-600 text-white text-xs">
                        {spotlight.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-sm">{spotlight.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {spotlight.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {spotlight.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span className="text-gray-300">{spotlight.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(spotlight.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{spotlight.readTime} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{spotlight.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{spotlight.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
            <p className="mt-4 text-gray-400">Loading more spotlights...</p>
          </div>
        )}

        {!hasMore && spotlights.length > 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">You've seen all our spotlights!</p>
          </div>
        )}
      </div>
    </div>
  )
}