"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { BannerCarousel } from "@/components/banner-carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"
import { CloudinaryImage } from "@/components/cloudinary-image"
import { ArticleCarousel } from "@/components/article-carousel"



interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  featuredImage?: string
  category: {
    name: string
    slug: string
    color?: string
  }
  author: {
    name?: string
    avatar?: string
  }
  publishedAt?: string
  readTime: number
  views: number
  featured: boolean
  createdAt: string
}

// Fallback articles for when database is empty
const generateFallbackArticles = (page = 1) => {
  const categories = [
    { name: 'Gaming', slug: 'gaming', color: '#10b981' },
    { name: 'Reviews', slug: 'reviews', color: '#f59e0b' },
    { name: 'Tech', slug: 'tech', color: '#3b82f6' },
    { name: 'News', slug: 'news', color: '#ef4444' },
    { name: 'Guides', slug: 'guides', color: '#8b5cf6' }
  ]
  
  const articles = [
    { title: 'Cyberpunk 2077: Phantom Liberty Review', image: '/cyberpunk-phantom-liberty.png', category: 1 },
    { title: 'Spider-Man 2 PS5 Complete Review', image: '/spider-man-2-ps5.png', category: 1 },
    { title: 'Baldur\'s Gate 3 RPG Guide', image: '/baldurs-gate-3-rpg.png', category: 4 },
    { title: 'PlayStation 5 Pro Announcement', image: '/playstation-5-pro.png', category: 3 },
    { title: 'Nintendo Direct Latest News', image: '/nintendo-direct.png', category: 3 },
    { title: 'Steam Deck OLED Handheld Review', image: '/steam-deck-oled-handheld.png', category: 1 },
    { title: 'PC Gaming Setup Guide 2024', image: '/pc-gaming-guide.png', category: 4 },
    { title: 'Top Games of 2024 List', image: '/top-games-2024-list.png', category: 0 },
    { title: 'Esports Tournament Coverage', image: '/esports-tournament-arena.png', category: 3 },
    { title: 'Gaming Laptop Buying Guide', image: '/gaming-laptop.png', category: 2 },
    { title: 'Elden Ring Boss Guide', image: '/elden-ring-guide.png', category: 4 },
    { title: 'RTX Graphics Comparison', image: '/rtx-comparison.png', category: 2 },
    { title: 'iOS Games 2024 Roundup', image: '/ios-games-2024.png', category: 0 },
    { title: 'Mario Nintendo 2024 Updates', image: '/mario-nintendo-2024.png', category: 3 },
    { title: 'Indie Game Spotlight', image: '/indie-game-screenshot.png', category: 0 },
    { title: 'Gaming News Updates', image: '/gaming-news-updates.png', category: 3 },
    { title: 'Handheld Gaming Revolution', image: '/handheld-gaming.png', category: 2 },
    { title: 'Epic Free Games Weekly', image: '/epic-free-games.png', category: 3 },
    { title: 'Mac M3 Gaming Performance', image: '/mac-m3-gaming.png', category: 2 },
    { title: 'Upcoming Games Preview', image: '/upcoming-games.png', category: 0 }
  ]
  
  const baseIndex = (page - 1) * 12
  return articles.map((article, i) => ({
    id: `fallback-${baseIndex + i}`,
    title: `${article.title} ${page > 1 ? `- Page ${page}` : ''}`,
    slug: `fallback-${baseIndex + i}-${article.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    excerpt: `Detailed coverage and analysis of ${categories[article.category].name.toLowerCase()} topics with expert insights and community perspectives.`,
    featuredImage: article.image,
    category: categories[article.category],
    author: {
      name: ['Alex Chen', 'Sarah Johnson', 'Mike Rodriguez', 'Emma Wilson', 'David Kim'][(baseIndex + i) % 5],
      avatar: '/placeholder-user.jpg'
    },
    publishedAt: new Date(Date.now() - (baseIndex + i) * 24 * 60 * 60 * 1000).toISOString(),
    readTime: Math.floor(Math.random() * 8) + 3,
    views: Math.floor(Math.random() * 50000) + 1000,
    featured: i === 0 && page === 1,
    createdAt: new Date(Date.now() - (baseIndex + i) * 24 * 60 * 60 * 1000).toISOString()
  })).slice(0, 12)
}

export function HomePageClient() {
  const [articles, setArticles] = useState<Article[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAllArticles, setShowAllArticles] = useState(false)
  const allArticlesRef = useRef<HTMLElement>(null)

  const fetchArticles = useCallback(async (pageNum: number, reset = false) => {
    if (loading) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles?page=${pageNum}&limit=12&published=true`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles')
      }
      
      const data = await response.json()
      
      if (data.articles && data.articles.length > 0) {
        if (reset || pageNum === 1) {
          setArticles(data.articles)
        } else {
          setArticles(prev => [...prev, ...data.articles])
        }
        setHasMore(data.pagination.page < data.pagination.pages)
      } else {
        // Generate more fallback articles for pagination
        const newFallbackArticles = generateFallbackArticles(pageNum)
        if (reset || pageNum === 1) {
          setArticles(newFallbackArticles)
        } else {
          setArticles(prev => [...prev, ...newFallbackArticles])
        }
        setHasMore(pageNum < 5) // Allow up to 5 pages of fallback articles
        if (pageNum === 1) {
          setError('Using sample articles - database connection failed')
        }
      }
    } catch (err) {
      console.error('Error fetching articles:', err)
      const newFallbackArticles = generateFallbackArticles(pageNum)
      if (reset || pageNum === 1) {
        setArticles(newFallbackArticles)
        setError('Using sample articles - database connection failed')
      } else {
        setArticles(prev => [...prev, ...newFallbackArticles])
      }
      setHasMore(pageNum < 5)
    } finally {
      setLoading(false)
    }
  }, [loading])

  useEffect(() => {
    fetchArticles(1, true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight
      
      // Show all articles section when scrolled 60% down
      if (scrollTop > window.innerHeight * 0.6 && !showAllArticles) {
        setShowAllArticles(true)
      }
      
      // Load more articles
      if (!loading && hasMore && showAllArticles && scrollTop + clientHeight >= scrollHeight - 1000) {
        const nextPage = page + 1
        setPage(nextPage)
        fetchArticles(nextPage)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore, page, fetchArticles, showAllArticles])

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently'
    
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString()
  }

  const getCommentsCount = () => Math.floor(Math.random() * 50) + 5

  return (
    <div className="min-h-screen bg-black text-white">

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <BannerCarousel />
      </section>

      {error && (
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <div className="bg-yellow-900/20 border border-yellow-600 text-yellow-200 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      )}

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Featured Section */}
        {articles.length > 0 && articles.find(a => a.featured) && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Featured Article</h2>
            {(() => {
              const featuredArticle = articles.find(a => a.featured) || articles[0]
              return (
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
                  <Link href={`/article/${featuredArticle.category.slug}/${featuredArticle.slug}`}>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg overflow-hidden">
                        {featuredArticle.featuredImage ? (
                          <CloudinaryImage
                            src={featuredArticle.featuredImage}
                            alt={featuredArticle.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            fallback={
                              <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                                Featured Image
                              </div>
                            }
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                            Featured Image
                          </div>
                        )}
                      </div>
                      <div>
                        <Badge className="bg-red-600 text-white mb-3">Featured</Badge>
                        <h3 className="text-2xl font-bold mb-3 text-white hover:text-blue-400 transition-colors">{featuredArticle.title}</h3>
                        <p className="text-gray-400 mb-4">{featuredArticle.excerpt || 'Read this featured article for the latest insights and updates.'}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{featuredArticle.author.name || 'Anonymous'}</span>
                          <span>{formatDate(featuredArticle.publishedAt)}</span>
                          <span>{featuredArticle.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })()}
          </section>
        )}

        {/* Latest News Section */}
        <section className="mb-12 group relative">
          <ArticleCarousel 
            articles={articles.filter(a => a.category.name === 'News' || a.category.slug === 'news')}
            title="Latest News"
            category="news"
          />
        </section>

        {/* Reviews Section */}
        <section className="mb-12 group relative">
          <ArticleCarousel 
            articles={articles.filter(a => a.category.name === 'Reviews' || a.category.slug === 'reviews')}
            title="Latest Reviews"
            category="reviews"
          />
        </section>

        {/* Gaming Section */}
        <section className="mb-12 group relative">
          <ArticleCarousel 
            articles={articles.filter(a => a.category.name === 'Gaming' || a.category.slug === 'gaming')}
            title="Gaming Content"
            category="gaming"
          />
        </section>

        {/* Tech Section */}
        <section className="mb-12 group relative">
          <ArticleCarousel 
            articles={articles.filter(a => a.category.name === 'Tech' || a.category.slug === 'tech')}
            title="Tech Updates"
            category="tech"
          />
        </section>

        {/* All Articles Section */}
        <section ref={allArticlesRef} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {articles.map((article, index) => (
              <Link key={`all-${article.id}`} href={`/article/${article.category.slug}/${article.slug}`}>
              <Card 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-gray-700 hover:border-gray-600 bg-gray-900 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 relative overflow-hidden">
                  {article.featuredImage ? (
                    <CloudinaryImage
                      src={article.featuredImage}
                      alt={article.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-gray-400 font-medium">Article Image</span>
                        </div>
                      }
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-gray-400 font-medium">Article Image</span>
                    </div>
                  )}
                  {article.featured && (
                    <Badge className="absolute top-3 left-3 bg-red-600 text-white">Featured</Badge>
                  )}
                  <Badge 
                    className="absolute top-3 right-3 text-white text-xs"
                    style={{ backgroundColor: article.category.color || '#6366f1' }}
                  >
                    {article.category.name}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt || 'Click to read more about this article.'}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="font-medium">{article.author.name || 'Anonymous'}</span>
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{getCommentsCount()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </section>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-400">Loading more articles...</p>
          </div>
        )}

        {!hasMore && articles.length > 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">You've reached the end of our articles!</p>
          </div>
        )}

        {articles.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found. Check back later!</p>
          </div>
        )}
      </div>
      

    </div>
  )
}