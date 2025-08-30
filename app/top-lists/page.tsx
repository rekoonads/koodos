"use client"

import { useState, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, MessageCircle, TrendingUp, Award, Hash, Trophy, Medal, Crown } from "lucide-react"
import Link from "next/link"

const generateTopLists = (page: number) => {
  const categories = ['Gaming', 'Tech', 'Movies', 'Anime', 'Hardware']
  const listTypes = [
    'Top 10 Best Games of 2024',
    'Best Gaming Laptops Under $1000',
    'Most Anticipated Movies',
    'Best Anime Series to Watch',
    'Top Gaming Peripherals',
    'Best Indie Games',
    'Top Streaming Platforms',
    'Best VR Headsets',
    'Top Mobile Games',
    'Best Gaming Chairs'
  ]
  
  const baseId = page * 10
  return Array.from({ length: 10 }, (_, i) => ({
    id: `toplist-${baseId + i}`,
    title: `${listTypes[i]} - Updated ${new Date().getFullYear()}`,
    excerpt: `Comprehensive ranking and analysis of the ${listTypes[i].toLowerCase()} with detailed comparisons and expert insights.`,
    category: categories[i % categories.length],
    author: ['Alex Chen', 'Sarah Johnson', 'Mike Rodriguez', 'Emma Wilson', 'David Kim'][i % 5],
    publishedAt: new Date(Date.now() - (baseId + i) * 24 * 60 * 60 * 1000).toISOString(),
    readTime: Math.floor(Math.random() * 10) + 8,
    views: Math.floor(Math.random() * 50000) + 10000,
    comments: Math.floor(Math.random() * 200) + 50,
    itemCount: Math.floor(Math.random() * 15) + 5,
    slug: `toplist-${baseId + i}-${listTypes[i].toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    trending: Math.random() > 0.6,
    featured: i === 0 && page === 0,
    rank: baseId + i + 1
  }))
}

export default function TopListsPage() {
  const [topLists, setTopLists] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadTopLists = useCallback(async (pageNum: number) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newTopLists = generateTopLists(pageNum)
    
    if (pageNum === 0) {
      setTopLists(newTopLists)
    } else {
      setTopLists(prev => [...prev, ...newTopLists])
    }
    
    if (pageNum >= 4) setHasMore(false)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadTopLists(0)
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
          loadTopLists(nextPage)
          return nextPage
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore, loadTopLists])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />
    if (rank === 3) return <Trophy className="w-6 h-6 text-amber-600" />
    return <Award className="w-6 h-6 text-purple-500" />
  }

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-500 to-yellow-600"
    if (rank === 2) return "bg-gradient-to-r from-gray-400 to-gray-500"
    if (rank === 3) return "bg-gradient-to-r from-amber-500 to-amber-600"
    return "bg-gradient-to-r from-purple-500 to-purple-600"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Hash className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl font-bold text-white">
                Top Lists
              </h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Definitive rankings and curated lists covering the best in gaming, tech, and entertainment
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Leaderboard Style Layout */}
        <div className="space-y-4">
          {topLists.map((list, index) => (
            <Link key={list.id} href={`/article/${list.category.toLowerCase()}/${list.slug}`}>
              <div className="group cursor-pointer">
                <div className="bg-gray-900/80 border border-gray-700 hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-center p-6">
                    {/* Rank Section */}
                    <div className="flex-shrink-0 mr-6">
                      <div className={`w-16 h-16 ${getRankBadgeColor(list.rank)} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        #{list.rank}
                      </div>
                    </div>
                    
                    {/* Icon Section */}
                    <div className="flex-shrink-0 mr-6">
                      {getRankIcon(list.rank)}
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge className="bg-purple-600 text-white text-xs">
                          {list.category}
                        </Badge>
                        {list.trending && (
                          <Badge className="bg-orange-600 text-white text-xs flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </Badge>
                        )}
                        {list.featured && (
                          <Badge className="bg-red-600 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {list.title}
                      </h3>
                      <p className="text-gray-400 mb-3 line-clamp-2">
                        {list.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="text-gray-300 font-medium">{list.author}</span>
                        <span>{formatDate(list.publishedAt)}</span>
                        <div className="flex items-center space-x-1">
                          <Hash className="w-3 h-3" />
                          <span>{list.itemCount} items</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{list.readTime} min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{list.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{list.comments}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats Section */}
                    <div className="flex-shrink-0 text-right">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        {list.itemCount}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        Items
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
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="mt-4 text-gray-400">Loading more lists...</p>
          </div>
        )}

        {!hasMore && topLists.length > 0 && (
          <div className="text-center py-12">
            <div className="flex items-center justify-center text-gray-400">
              <Trophy className="w-5 h-5 mr-2" />
              <p>You've seen all our top lists!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}