"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Clock, User } from "lucide-react"
import { motion } from "framer-motion"
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

interface ArticleCarouselProps {
  articles: Article[]
  title: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function ArticleCarousel({ articles, title, autoPlay = true, autoPlayInterval = 5000 }: ArticleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered || isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, articles.length - 2))
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, isDragging, articles.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, articles.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, articles.length - 2)) % Math.max(1, articles.length - 2))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const diff = e.clientX - dragStart
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientX - dragStart
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
  }

  if (!articles.length) return null

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            aria-label="Previous articles"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            aria-label="Next articles"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <motion.div
          className="flex gap-4"
          animate={{
            x: `-${currentIndex * (100 / 3)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            width: `${(articles.length * 100) / 3}%`,
          }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="flex-shrink-0 w-full"
              style={{ width: `${100 / articles.length}%` }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/articles/${article.slug}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded">
                        {article.category}
                      </span>
                    </div>
                    {article.rating && (
                      <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold">{article.rating}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.max(1, articles.length - 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export const sampleArticles: Article[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    excerpt:
      "The expansion that finally delivers on the original promise with incredible storytelling and improved gameplay mechanics.",
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
    excerpt: "Insomniac Games delivers another web-slinging masterpiece with improved combat and stunning visuals.",
    category: "Game Review",
    image: "/spider-man-2-ps5.png",
    rating: 4.8,
    author: "Sarah Johnson",
    publishedAt: "1 week ago",
    slug: "spider-man-2-ps5-review",
  },
  {
    id: "3",
    title: "Nintendo Direct September 2024",
    excerpt:
      "All the biggest announcements from Nintendo's latest Direct presentation including new games and updates.",
    category: "Gaming News",
    image: "/nintendo-direct-news.png",
    author: "Mike Rodriguez",
    publishedAt: "3 days ago",
    slug: "nintendo-direct-september-2024",
  },
  {
    id: "4",
    title: "PlayStation 5 Pro Announced",
    excerpt: "Sony reveals the PlayStation 5 Pro with enhanced performance and 8K gaming capabilities.",
    category: "Gaming News",
    image: "/playstation-5-pro.png",
    author: "Emma Wilson",
    publishedAt: "1 day ago",
    slug: "playstation-5-pro-announced",
  },
  {
    id: "5",
    title: "Baldur's Gate 3 Game of the Year",
    excerpt: "Larian Studios' RPG masterpiece continues to dominate gaming awards and player hearts worldwide.",
    category: "Game Review",
    image: "/baldurs-gate-3-rpg.png",
    rating: 4.9,
    author: "David Kim",
    publishedAt: "5 days ago",
    slug: "baldurs-gate-3-game-of-the-year",
  },
]
