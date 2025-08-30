"use client"

import { useState, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, MessageCircle, User, Calendar, Mic, Play } from "lucide-react"
import Link from "next/link"

const generateInterviews = (page: number) => {
  const allInterviews = [
    { title: 'Hideo Kojima on Death Stranding 2', category: 'Developer', interviewee: 'Hideo Kojima' },
    { title: 'Ryan Reynolds Gaming Habits', category: 'Celebrity', interviewee: 'Ryan Reynolds' },
    { title: 'Faker: League of Legends Legacy', category: 'Esports', interviewee: 'Lee Faker' },
    { title: 'Phil Spencer Xbox Future', category: 'Industry', interviewee: 'Phil Spencer' },
    { title: 'PewDiePie Content Creation', category: 'Creator', interviewee: 'Felix PewDiePie' },
    { title: 'Shigeru Miyamoto Nintendo Vision', category: 'Developer', interviewee: 'Shigeru Miyamoto' },
    { title: 'Keanu Reeves Cyberpunk Experience', category: 'Celebrity', interviewee: 'Keanu Reeves' },
    { title: 'Ninja Streaming Evolution', category: 'Esports', interviewee: 'Tyler Ninja' },
    { title: 'Todd Howard Starfield Journey', category: 'Industry', interviewee: 'Todd Howard' },
    { title: 'MrBeast Gaming Content Strategy', category: 'Creator', interviewee: 'Jimmy MrBeast' },
    { title: 'Gabe Newell Steam Deck Innovation', category: 'Industry', interviewee: 'Gabe Newell' },
    { title: 'Scarlett Johansson Voice Acting', category: 'Celebrity', interviewee: 'Scarlett Johansson' },
    { title: 'Shroud Competitive Gaming', category: 'Esports', interviewee: 'Michael Shroud' },
    { title: 'Markiplier Horror Gaming', category: 'Creator', interviewee: 'Mark Markiplier' },
    { title: 'Amy Hennig Narrative Design', category: 'Developer', interviewee: 'Amy Hennig' },
    { title: 'Henry Cavill Gaming Passion', category: 'Celebrity', interviewee: 'Henry Cavill' },
    { title: 'Doublelift Retirement Thoughts', category: 'Esports', interviewee: 'Yiliang Doublelift' },
    { title: 'Jacksepticeye Community Building', category: 'Creator', interviewee: 'Sean Jacksepticeye' },
    { title: 'Satya Nadella Gaming Vision', category: 'Industry', interviewee: 'Satya Nadella' },
    { title: 'Neil Druckmann Storytelling', category: 'Developer', interviewee: 'Neil Druckmann' }
  ]
  
  const startIndex = page * 10
  const endIndex = startIndex + 10
  const pageInterviews = allInterviews.slice(startIndex, endIndex)
  
  return pageInterviews.map((interview, i) => ({
    id: `interview-${startIndex + i}`,
    title: `${interview.title} - Exclusive Interview`,
    excerpt: `In-depth conversation about ${interview.title.toLowerCase()} covering career insights, future plans, and industry perspectives.`,
    category: interview.category,
    interviewee: interview.interviewee,
    interviewer: ['Sarah Chen', 'Mike Johnson', 'Emma Rodriguez', 'Alex Wilson', 'David Kim'][i % 5],
    publishedAt: new Date(Date.now() - (startIndex + i) * 24 * 60 * 60 * 1000).toISOString(),
    duration: `${Math.floor(Math.random() * 30) + 15}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    views: Math.floor(Math.random() * 80000) + 20000,
    comments: Math.floor(Math.random() * 400) + 100,
    isVideo: Math.random() > 0.4,
    slug: `interview-${startIndex + i}-${interview.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    featured: i === 0 && page === 0
  }))
}

export default function InterviewsPage() {
  const [interviews, setInterviews] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadInterviews = useCallback(async (pageNum: number) => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const newInterviews = generateInterviews(pageNum)
    
    if (pageNum === 0) {
      setInterviews(newInterviews)
    } else {
      setInterviews(prev => [...prev, ...newInterviews])
    }
    
    if (pageNum >= 1 || pageInterviews.length === 0) setHasMore(false)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadInterviews(0)
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
          loadInterviews(nextPage)
          return nextPage
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore, loadInterviews])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Developer: 'bg-blue-600',
      Celebrity: 'bg-purple-600',
      Esports: 'bg-green-600',
      Industry: 'bg-orange-600',
      Creator: 'bg-pink-600'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-600'
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Mic className="w-12 h-12 text-white mr-4" />
              <h1 className="text-5xl font-bold text-white">
                Exclusive Interviews
              </h1>
            </div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              In-depth conversations with industry leaders, developers, celebrities, and esports professionals
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Interview Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>
          
          <div className="space-y-12">
            {interviews.map((interview, index) => (
              <div key={interview.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-black"></div>
                
                {/* Interview Card */}
                <div className="ml-20">
                  <Link href={`/interviews/${interview.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="bg-gray-900/80 border border-gray-700 hover:border-emerald-500/50 rounded-xl p-8 transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:shadow-emerald-500/10">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between mb-6">
                          <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-0">
                            <Badge className={`${getCategoryColor(interview.category)} text-white text-sm`}>
                              {interview.category}
                            </Badge>
                            {interview.featured && (
                              <Badge className="bg-red-600 text-white text-sm">Featured</Badge>
                            )}
                            {interview.isVideo && (
                              <Badge className="bg-gray-700 text-white text-sm flex items-center gap-1">
                                <Play className="w-3 h-3" />
                                Video
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-emerald-400 font-medium text-lg">{interview.duration}</div>
                            <div className="text-gray-400 text-sm">Duration</div>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                          {interview.title}
                        </h2>

                        {/* Participants */}
                        <div className="flex items-center gap-8 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{interview.interviewee}</div>
                              <div className="text-gray-400 text-sm">Interviewee</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                              <Mic className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{interview.interviewer}</div>
                              <div className="text-gray-400 text-sm">Interviewer</div>
                            </div>
                          </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {interview.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(interview.publishedAt)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{interview.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{interview.comments}</span>
                            </div>
                          </div>
                          <div className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            {interview.isVideo ? 'Watch Interview →' : 'Read Interview →'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            <p className="mt-4 text-gray-400">Loading more interviews...</p>
          </div>
        )}

        {!hasMore && interviews.length > 0 && (
          <div className="text-center py-12">
            <div className="flex items-center justify-center text-gray-400">
              <Mic className="w-5 h-5 mr-2" />
              <p>You've seen all our exclusive interviews!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}