"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, Clock, MessageCircle, Gamepad2, Monitor, Tv, BookOpen, Film } from "lucide-react"
import Link from "next/link"

const generateReviews = (type: string, count: number) => {
  const gameReviews = [
    { title: "Cyberpunk 2077: Phantom Liberty", rating: 8.5, excerpt: "A stellar expansion that redeems the cyberpunk experience", author: "Alex Chen", date: "2 days ago", views: 15420, comments: 89 },
    { title: "Spider-Man 2 PS5 Review", rating: 9.2, excerpt: "Insomniac delivers another web-slinging masterpiece", author: "Sarah Johnson", date: "1 week ago", views: 23150, comments: 123 },
    { title: "Baldur's Gate 3 Complete Review", rating: 9.8, excerpt: "The definitive RPG experience with unparalleled choice", author: "Emma Wilson", date: "3 days ago", views: 31200, comments: 234 },
    { title: "Alan Wake 2 Horror Review", rating: 9.0, excerpt: "A masterclass in psychological horror storytelling", author: "Mike Rodriguez", date: "5 days ago", views: 18750, comments: 156 },
    { title: "Starfield Space Exploration", rating: 7.5, excerpt: "Ambitious space RPG with mixed execution", author: "David Kim", date: "1 week ago", views: 28900, comments: 312 }
  ]

  const movieReviews = [
    { title: "Dune: Part Two Review", rating: 9.1, excerpt: "Villeneuve delivers a stunning sci-fi epic", author: "Sarah Johnson", date: "1 day ago", views: 12300, comments: 67 },
    { title: "Spider-Man: Across the Spider-Verse", rating: 9.5, excerpt: "Animation masterpiece that redefines the medium", author: "Alex Chen", date: "4 days ago", views: 19800, comments: 145 },
    { title: "The Batman (2022) Analysis", rating: 8.7, excerpt: "Dark and grounded take on the Dark Knight", author: "Emma Wilson", date: "6 days ago", views: 16500, comments: 98 },
    { title: "Top Gun: Maverick Review", rating: 8.9, excerpt: "Legacy sequel that soars to new heights", author: "Mike Rodriguez", date: "1 week ago", views: 21400, comments: 187 }
  ]

  const tvReviews = [
    { title: "The Last of Us HBO Review", rating: 9.3, excerpt: "Faithful adaptation that honors the source material", author: "David Kim", date: "2 days ago", views: 25600, comments: 203 },
    { title: "House of the Dragon Season 1", rating: 8.2, excerpt: "Returns to Westeros with mixed results", author: "Sarah Johnson", date: "5 days ago", views: 18900, comments: 156 },
    { title: "Stranger Things Season 4", rating: 8.8, excerpt: "Darker and more ambitious than ever", author: "Alex Chen", date: "1 week ago", views: 22100, comments: 178 },
    { title: "The Bear Season 2 Review", rating: 9.6, excerpt: "Culinary drama reaches new emotional heights", author: "Emma Wilson", date: "3 days ago", views: 14200, comments: 89 }
  ]

  const comicReviews = [
    { title: "Batman: The Knight Review", rating: 8.9, excerpt: "Chip Zdarsky delivers definitive Batman origin", author: "Mike Rodriguez", date: "1 day ago", views: 8900, comments: 45 },
    { title: "X-Men: Red Vol 1 Analysis", rating: 9.1, excerpt: "Al Ewing crafts compelling mutant politics", author: "David Kim", date: "4 days ago", views: 7200, comments: 38 },
    { title: "Saga Volume 11 Review", rating: 9.7, excerpt: "Vaughan and Staples return with emotional impact", author: "Sarah Johnson", date: "6 days ago", views: 11500, comments: 67 },
    { title: "The Nice House on the Lake", rating: 8.6, excerpt: "Tynion IV delivers unsettling horror masterpiece", author: "Alex Chen", date: "1 week ago", views: 6800, comments: 29 }
  ]

  const techReviews = [
    { title: "ASUS ROG Ally Handheld Review", rating: 8.1, excerpt: "Powerful Windows handheld with great potential", author: "Emma Wilson", date: "2 days ago", views: 19200, comments: 134 },
    { title: "PlayStation 5 Pro Analysis", rating: 8.7, excerpt: "Mid-gen refresh delivers impressive upgrades", author: "Alex Chen", date: "5 days ago", views: 31500, comments: 267 },
    { title: "Steam Deck OLED Review", rating: 9.0, excerpt: "Valve perfects the handheld gaming formula", author: "Mike Rodriguez", date: "1 week ago", views: 28700, comments: 198 },
    { title: "RTX 4090 Gaming Performance", rating: 9.2, excerpt: "Nvidia's flagship delivers unmatched 4K gaming", author: "David Kim", date: "3 days ago", views: 24800, comments: 156 }
  ]

  const reviewData = {
    games: gameReviews,
    movies: movieReviews,
    tv: tvReviews,
    comics: comicReviews,
    tech: techReviews
  }

  return reviewData[type as keyof typeof reviewData]?.slice(0, count) || []
}

export function ReviewsPageClient() {
  const [activeSection, setActiveSection] = useState('all')

  const sections = [
    { id: 'games', name: 'Game Reviews', icon: Gamepad2, color: 'text-blue-400' },
    { id: 'movies', name: 'Movie Reviews', icon: Film, color: 'text-red-400' },
    { id: 'tv', name: 'TV Reviews', icon: Tv, color: 'text-green-400' },
    { id: 'comics', name: 'Comic Reviews', icon: BookOpen, color: 'text-purple-400' },
    { id: 'tech', name: 'Tech Reviews', icon: Monitor, color: 'text-yellow-400' }
  ]

  const formatDate = (dateString: string) => dateString
  const formatViews = (views: number) => views.toLocaleString()

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-400"
    if (rating >= 8) return "text-blue-400"
    if (rating >= 7) return "text-yellow-400"
    return "text-red-400"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 text-white">
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Reviews</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert reviews and ratings across games, movies, TV shows, comics, and tech
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeSection === 'all' 
                ? 'bg-white text-black' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Reviews
          </button>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeSection === section.id 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <section.icon className="w-4 h-4" />
              {section.name}
            </button>
          ))}
        </div>

        {activeSection === 'all' ? (
          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.id}>
                <div className="flex items-center mb-8">
                  <section.icon className={`w-8 h-8 ${section.color} mr-4`} />
                  <h2 className="text-3xl font-bold text-white">{section.name}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {generateReviews(section.id, 6).map((review, index) => (
                    <Link key={index} href={`/reviews/${section.id}/${review.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      <div className="group cursor-pointer bg-gray-900/80 border border-gray-700 hover:border-gray-500 rounded-xl p-6 transition-all duration-300 hover:bg-gray-900">
                        <div className="flex items-start justify-between mb-4">
                          <Badge className={`${section.color} bg-gray-800 text-xs`}>
                            {section.name.replace(' Reviews', '')}
                          </Badge>
                          <div className={`text-2xl font-bold ${getRatingColor(review.rating)}`}>
                            {review.rating}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors line-clamp-2">
                          {review.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {review.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="text-gray-300">{review.author}</span>
                          <span>{formatDate(review.date)}</span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{formatViews(review.views)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{review.comments}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(review.rating / 2) ? "text-yellow-400 fill-current" : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-8">
              {sections.find(s => s.id === activeSection) && (
                <>
                  {(() => {
                    const section = sections.find(s => s.id === activeSection)!
                    return (
                      <>
                        <section.icon className={`w-8 h-8 ${section.color} mr-4`} />
                        <h2 className="text-3xl font-bold text-white">{section.name}</h2>
                      </>
                    )
                  })()}
                </>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generateReviews(activeSection, 12).map((review, index) => (
                <Link key={index} href={`/reviews/${activeSection}/${review.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  <div className="group cursor-pointer bg-gray-900/80 border border-gray-700 hover:border-gray-500 rounded-xl p-6 transition-all duration-300 hover:bg-gray-900">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-gray-800 text-gray-300 text-xs">
                        {sections.find(s => s.id === activeSection)?.name.replace(' Reviews', '')}
                      </Badge>
                      <div className={`text-2xl font-bold ${getRatingColor(review.rating)}`}>
                        {review.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors line-clamp-2">
                      {review.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {review.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="text-gray-300">{review.author}</span>
                      <span>{formatDate(review.date)}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 w-4" />
                        <span>{formatViews(review.views)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{review.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(review.rating / 2) ? "text-yellow-400 fill-current" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}