"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Star, Clock, User, Pause, Play } from "lucide-react"
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  rating?: number
  author: string
  publishedAt: string
  slug: string
}

interface HorizontalArticleGalleryProps {
  articles: Article[]
  title: string
  onLoadMore?: () => void
  hasMore?: boolean
  loading?: boolean
}

export function HorizontalArticleGallery({
  articles = [],
  title,
  onLoadMore,
  hasMore = false,
  loading = false,
}: HorizontalArticleGalleryProps) {
  // Safety check for empty articles
  if (!articles || articles.length === 0) {
    return (
      <div className="w-full p-8 text-center">
        <p className="text-muted-foreground">No articles available</p>
      </div>
    )
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const x = useMotionValue(0)
  const dragConstraints = useRef({ left: 0, right: 0 })
  const scaleX = useTransform(x, [dragConstraints.current.left, 0], [1, 0])

  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 320
    if (window.innerWidth < 640) return 280 // Mobile
    if (window.innerWidth < 1024) return 320 // Tablet
    return 360 // Desktop
  }, [])

  const getVisibleCards = useCallback(() => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth < 640) return 1.2 // Mobile - show partial next card
    if (window.innerWidth < 1024) return 2.5 // Tablet
    return 3.5 // Desktop
  }, [])

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
    }
    
    autoPlayIntervalRef.current = setInterval(() => {
      if (!isDragging && isAutoPlaying && articles && articles.length > 0) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % Math.max(1, articles.length - Math.floor(getVisibleCards()) + 1)
          return nextIndex
        })
      }
    }, 3000) // Auto-play every 3 seconds
  }, [isDragging, isAutoPlaying, articles, getVisibleCards])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
      autoPlayIntervalRef.current = null
    }
  }, [])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current
        const newContainerWidth = container.offsetWidth
        const cardWidth = getCardWidth()
        const gap = 16
        const newContentWidth = (articles?.length || 0) * (cardWidth + gap) - gap

        setContainerWidth(newContainerWidth)
        setContentWidth(newContentWidth)

        // Update drag constraints
        const maxDrag = Math.max(0, newContentWidth - newContainerWidth)
        dragConstraints.current = { left: -maxDrag, right: 0 }

        // Reset position if needed
        const currentX = x.get()
        if (currentX < -maxDrag) {
          x.set(-maxDrag)
        }
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
      }, [articles, x, getCardWidth])

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlaying && articles && articles.length > 0) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => stopAutoPlay()
      }, [isAutoPlaying, articles, startAutoPlay, stopAutoPlay])

  // Update position when currentIndex changes
  useEffect(() => {
    if (articles && articles.length > 0 && containerWidth > 0) {
      const cardWidth = getCardWidth()
      const gap = 16
      const targetX = -(currentIndex * (cardWidth + gap))
      const maxDrag = Math.max(0, contentWidth - containerWidth)
      const clampedX = Math.max(-maxDrag, Math.min(0, targetX))
      x.set(clampedX)
    }
      }, [currentIndex, articles, containerWidth, contentWidth, getCardWidth, x])

  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(false)

      // Update current index based on final position
      const currentX = x.get()
      const cardWidth = getCardWidth()
      const gap = 16
      const newIndex = Math.round(Math.abs(currentX) / (cardWidth + gap))
      setCurrentIndex(Math.min(newIndex, (articles?.length || 0) - Math.floor(getVisibleCards())))

      // Check if we're near the end and should load more
      if (hasMore && !loading && onLoadMore) {
        const threshold = contentWidth * 0.8 // Load when 80% scrolled
        if (Math.abs(currentX) >= threshold) {
          onLoadMore()
        }
      }
    },
    [hasMore, loading, onLoadMore, contentWidth, x, getCardWidth, articles.length, getVisibleCards],
  )

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      const currentX = x.get()
      const newX = Math.max(
        dragConstraints.current.left,
        Math.min(dragConstraints.current.right, currentX - e.deltaY * 0.5),
      )
      x.set(newX)
      
      // Update current index based on wheel scroll
      const cardWidth = getCardWidth()
      const gap = 16
      const newIndex = Math.round(Math.abs(newX) / (cardWidth + gap))
      setCurrentIndex(Math.min(newIndex, (articles?.length || 0) - Math.floor(getVisibleCards())))
    },
    [x, getCardWidth, articles, getVisibleCards],
  )

  if (!articles.length) return null

  return (
    <div className="w-full py-6">
      {title && (
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl lg:text-3xl font-bold gaming-title gaming-gradient-text border-b-2 border-primary pb-2 inline-block">
            {title}
          </h2>
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-4 py-2 gaming-button rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span className="text-sm font-medium">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Play</span>
              </>
            )}
          </button>
        </div>
      )}

      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseEnter={() => {
          if (isAutoPlaying) {
            stopAutoPlay()
          }
        }}
        onMouseLeave={() => {
          if (isAutoPlaying) {
            startAutoPlay()
          }
        }}
      >
        <motion.div
          className="flex gap-4"
          style={{ x }}
          drag="x"
          dragConstraints={dragConstraints.current}
          dragElastic={0.1}
          dragMomentum={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="flex-shrink-0"
              style={{
                width: getCardWidth(),
                minWidth: getCardWidth(),
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/articles/${article.slug}`}
                onClick={(e) => {
                  // Prevent navigation if dragging
                  if (isDragging) {
                    e.preventDefault()
                  }
                }}
              >
                <div className="gaming-card h-full group">
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="gaming-badge-primary shadow-lg backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>

                    {article.rating && (
                      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm text-card-foreground px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-border">
                        <Star className="w-3.5 h-3.5 fill-gaming-orange text-gaming-orange" />
                        <span className="text-sm font-bold">{article.rating}</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 lg:p-6">
                    <h3 className="font-bold text-card-foreground mb-3 line-clamp-2 text-lg lg:text-xl leading-tight group-hover:text-primary transition-colors gaming-subtitle">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm lg:text-base mb-4 line-clamp-3 leading-relaxed gaming-body">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs lg:text-sm text-muted-foreground pt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {loading && (
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width: getCardWidth() }}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-full w-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="mt-4 flex justify-center items-center gap-4">
        <div className="bg-muted rounded-full h-1 w-32 overflow-hidden">
          <motion.div
            className="gaming-gradient h-full rounded-full"
            style={{
              scaleX,
              originX: 1,
            }}
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{Math.max(1, (articles?.length || 0) - Math.floor(getVisibleCards()) + 1)}</span>
        </div>
      </div>
    </div>
  )
}

export const enhancedSampleArticles: Article[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    excerpt:
      "The expansion that finally delivers on the original promise with incredible storytelling, improved gameplay mechanics, and stunning visual upgrades that make Night City feel truly alive.",
    category: "Game Review",
    image: "/cyberpunk-phantom-liberty.png",
    rating: 4.5,
    author: "Alex Chen",
    publishedAt: "2 days ago",
    slug: "cyberpunk-2077-phantom-liberty-review",
  },
  {
    id: "2",
    title: "Spider-Man 2 PS5 Review",
    excerpt:
      "Insomniac Games delivers another web-slinging masterpiece with improved combat, dual protagonist gameplay, and the most stunning recreation of New York City we've ever seen.",
    category: "Game Review",
    image: "/spider-man-2-ps5.png",
    rating: 4.8,
    author: "Sarah Johnson",
    publishedAt: "1 week ago",
    slug: "spider-man-2-ps5-review",
  },
  {
    id: "3",
    title: "Nintendo Direct September 2024: All Announcements",
    excerpt:
      "From surprise sequels to indie darlings, Nintendo's latest Direct presentation packed more excitement than we could have imagined. Here's everything you need to know.",
    category: "Gaming News",
    image: "/nintendo-direct-news.png",
    author: "Mike Rodriguez",
    publishedAt: "3 days ago",
    slug: "nintendo-direct-september-2024",
  },
  {
    id: "4",
    title: "PlayStation 5 Pro: The Future of Console Gaming",
    excerpt:
      "Sony's mid-generation refresh promises 8K gaming, enhanced ray tracing, and AI-powered upscaling. But is it worth the premium price tag?",
    category: "Hardware Review",
    image: "/playstation-5-pro.png",
    author: "Emma Wilson",
    publishedAt: "1 day ago",
    slug: "playstation-5-pro-announced",
  },
  {
    id: "5",
    title: "Baldur's Gate 3: Why It's Still Game of the Year",
    excerpt:
      "Six months after release, Larian Studios' RPG masterpiece continues to set the gold standard for storytelling, character development, and player choice in gaming.",
    category: "Game Review",
    image: "/baldurs-gate-3-rpg.png",
    rating: 4.9,
    author: "David Kim",
    publishedAt: "5 days ago",
    slug: "baldurs-gate-3-game-of-the-year",
  },
  {
    id: "6",
    title: "Steam Deck OLED: Handheld Gaming Perfected",
    excerpt:
      "Valve's updated handheld delivers everything we wanted: better battery life, a gorgeous OLED screen, and the same incredible game compatibility.",
    category: "Hardware Review",
    image: "/steam-deck-oled-handheld.png",
    rating: 4.6,
    author: "Tom Anderson",
    publishedAt: "4 days ago",
    slug: "steam-deck-oled-review",
  },
]
