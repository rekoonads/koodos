"use client"

import { useCallback, useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CloudinaryImage } from '@/components/cloudinary-image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Article {
  id: string
  title: string
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
  slug: string
  views: number
  featured: boolean
}

interface ArticleCarouselProps {
  articles: Article[]
  title: string
  category?: string
}

export function ArticleCarousel({ articles, title, category }: ArticleCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!containerRef) return
    
    const scrollAmount = 320 // width of one card + gap
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : scrollPosition + scrollAmount
    
    containerRef.scrollTo({ left: newPosition, behavior: 'smooth' })
    setScrollPosition(newPosition)
  }, [containerRef, scrollPosition])

  const updateScrollButtons = useCallback(() => {
    if (!containerRef) return
    
    const { scrollLeft, scrollWidth, clientWidth } = containerRef
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    setScrollPosition(scrollLeft)
  }, [containerRef])

  useEffect(() => {
    if (containerRef) {
      containerRef.addEventListener('scroll', updateScrollButtons)
      updateScrollButtons()
      return () => containerRef.removeEventListener('scroll', updateScrollButtons)
    }
  }, [containerRef, updateScrollButtons])

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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      <div className="relative group/carousel">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/80 hover:bg-black disabled:opacity-30 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/80 hover:bg-black disabled:opacity-30 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
        <div 
          ref={setContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.slice(0, 5).map((article) => (
            <div 
              key={article.id} 
              className="flex-shrink-0 w-80"
            >
              <Link href={`/article/${category || article.category.slug}/${article.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full bg-gray-900 border-gray-700 hover:border-gray-600">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 relative overflow-hidden">
                    {article.featuredImage ? (
                      <CloudinaryImage
                        src={article.featuredImage}
                        alt={article.title}
                        width={300}
                        height={169}
                        className="w-full h-full object-cover"
                        fallback={
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                            Article Image
                          </div>
                        }
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                        Article Image
                      </div>
                    )}
                    <Badge 
                      className="absolute top-2 right-2 text-white text-xs"
                      style={{ backgroundColor: article.category.color || '#6366f1' }}
                    >
                      {article.category.name}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                      {article.excerpt || 'Click to read more about this article.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{article.author.name || 'Anonymous'}</span>
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}