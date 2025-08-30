"use client"

import { useState, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, MessageCircle, ThumbsUp, ThumbsDown, Users, Flame, MessageSquare, User } from "lucide-react"
import Link from "next/link"

const generateOpinions = (page: number) => {
  const categories = ['Gaming', 'Tech', 'Industry', 'Culture', 'Future']
  const opinionTypes = [
    'The Future of Gaming is Cloud-Based',
    'Why Indie Games Are Better Than AAA',
    'Mobile Gaming Will Replace Consoles',
    'AI in Gaming: Revolution or Risk?',
    'The Death of Physical Media',
    'Subscription Services vs Game Ownership',
    'VR Gaming: Hype or Reality?',
    'The Rise of Battle Royale Games',
    'Gaming Addiction: Real or Myth?',
    'The Impact of Streaming on Gaming'
  ]
  
  const baseId = page * 10
  return Array.from({ length: 10 }, (_, i) => ({
    id: `opinion-${baseId + i}`,
    title: `${opinionTypes[i]} - A Critical Analysis`,
    excerpt: `Thought-provoking perspective on ${opinionTypes[i].toLowerCase()} with compelling arguments and industry insights.`,
    category: categories[i % categories.length],
    author: ['Alex Chen', 'Sarah Johnson', 'Mike Rodriguez', 'Emma Wilson', 'David Kim'][i % 5],
    publishedAt: new Date(Date.now() - (baseId + i) * 24 * 60 * 60 * 1000).toISOString(),
    readTime: Math.floor(Math.random() * 8) + 6,
    views: Math.floor(Math.random() * 40000) + 8000,
    comments: Math.floor(Math.random() * 300) + 80,
    likes: Math.floor(Math.random() * 500) + 100,
    dislikes: Math.floor(Math.random() * 50) + 10,
    controversial: Math.random() > 0.7,
    slug: `opinion-${baseId + i}-${opinionTypes[i].toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    featured: i === 0 && page === 0,
    stance: ['Pro', 'Against', 'Neutral'][Math.floor(Math.random() * 3)]
  }))
}

export default function OpinionsPage() {
  const [opinions, setOpinions] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadOpinions = useCallback(async (pageNum: number) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newOpinions = generateOpinions(pageNum)
    
    if (pageNum === 0) {
      setOpinions(newOpinions)
    } else {
      setOpinions(prev => [...prev, ...newOpinions])
    }
    
    if (pageNum >= 4) setHasMore(false)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadOpinions(0)
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
          loadOpinions(nextPage)
          return nextPage
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore, loadOpinions])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
    
    if (diffHours < 24) return `${diffHours}h ago`
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  const getStanceColor = (stance: string) => {
    switch (stance) {
      case 'Pro': return 'bg-green-600'
      case 'Against': return 'bg-red-600'
      default: return 'bg-gray-600'
    }
  }

  const getEngagementRatio = (likes: number, dislikes: number) => {
    const total = likes + dislikes
    return total > 0 ? (likes / total) * 100 : 50
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl font-bold text-white">
                Opinions
              </h1>
            </div>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Bold takes, heated debates, and thought-provoking perspectives on gaming and tech culture
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Forum/Debate Style Layout */}
        <div className="space-y-6">
          {opinions.map((opinion) => (
            <Link key={opinion.id} href={`/article/${opinion.category.toLowerCase()}/${opinion.slug}`}>
              <div className="group cursor-pointer">
                <div className="bg-gray-900/80 border border-gray-700 hover:border-red-500/50 rounded-xl transition-all duration-300 hover:bg-gray-900 hover:shadow-lg">
                  <div className="p-6">
                    {/* Header with badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className={`${getStanceColor(opinion.stance)} text-white text-xs`}>
                        {opinion.stance}
                      </Badge>
                      <Badge className="bg-red-600 text-white text-xs">
                        {opinion.category}
                      </Badge>
                      {opinion.controversial && (
                        <Badge className="bg-orange-600 text-white text-xs flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          Hot Take
                        </Badge>
                      )}
                      {opinion.featured && (
                        <Badge className="bg-yellow-600 text-white text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {opinion.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {opinion.excerpt}
                    </p>
                    
                    {/* Author and Date */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{opinion.author}</div>
                          <div className="text-gray-400 text-xs">{formatDate(opinion.publishedAt)}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{opinion.readTime} min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{opinion.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Engagement Section */}
                    <div className="flex items-center justify-between">
                      {/* Like/Dislike Bar */}
                      <div className="flex-1 mr-6">
                        <div className="flex items-center justify-between mb-2 text-sm">
                          <div className="flex items-center space-x-1 text-green-400">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{opinion.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-red-400">
                            <ThumbsDown className="w-4 h-4" />
                            <span>{opinion.dislikes}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-red-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getEngagementRatio(opinion.likes, opinion.dislikes)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Comments */}
                      <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium">{opinion.comments}</span>
                        <span className="text-sm">replies</span>
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
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-400">Loading more hot takes...</p>
          </div>
        )}

        {!hasMore && opinions.length > 0 && (
          <div className="text-center py-12">
            <div className="flex items-center justify-center text-gray-400">
              <Flame className="w-5 h-5 mr-2" />
              <p>You've read all our controversial opinions!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}