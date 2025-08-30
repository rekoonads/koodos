"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Star, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBannerImageUrl } from "@/lib/cloudinary"

interface BannerSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  category: string
  rating: number
  author: string
  publishedAt: string
  slug: string
  featured: boolean
}

const bannerSlides: BannerSlide[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty",
    subtitle: "The Ultimate Gaming Experience",
    description:
      "Dive into Night City's most dangerous district with new characters, storylines, and cutting-edge gameplay mechanics that redefine the RPG genre.",
    image: "/cyberpunk-phantom-liberty.png",
    category: "Game Review",
    rating: 4.8,
    author: "Alex Chen",
    publishedAt: "2 hours ago",
    slug: "cyberpunk-2077-phantom-liberty-review",
    featured: true,
  },
  {
    id: "2",
    title: "Spider-Man 2 PS5 Review",
    subtitle: "Web-Slinging Perfection",
    description:
      "Experience the most immersive Spider-Man adventure yet with dual protagonists, enhanced combat, and stunning visual fidelity on PlayStation 5.",
    image: "/spider-man-2-ps5.png",
    category: "Game Review",
    rating: 4.9,
    author: "Sarah Johnson",
    publishedAt: "5 hours ago",
    slug: "spider-man-2-ps5-review",
    featured: true,
  },
  {
    id: "3",
    title: "RTX 4090 vs RTX 4080",
    subtitle: "Ultimate GPU Showdown",
    description:
      "Comprehensive performance analysis of NVIDIA's flagship graphics cards across 4K gaming, ray tracing, and content creation workloads.",
    image: "/rtx-comparison.png",
    category: "Tech Review",
    rating: 4.7,
    author: "Mike Rodriguez",
    publishedAt: "1 day ago",
    slug: "rtx-4090-vs-4080-comparison",
    featured: true,
  },
  {
    id: "4",
    title: "Nintendo Direct Highlights",
    subtitle: "Upcoming Games Revealed",
    description:
      "Breaking down the biggest announcements from Nintendo's latest Direct presentation, including release dates and exclusive gameplay footage.",
    image: "/nintendo-direct.png",
    category: "Gaming News",
    rating: 4.6,
    author: "Emma Wilson",
    publishedAt: "3 hours ago",
    slug: "nintendo-direct-highlights-2024",
    featured: true,
  },
]

export function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const currentSlideData = bannerSlides[currentSlide]

  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-900 to-black shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={currentSlideData.image || "/placeholder.svg"}
              alt={currentSlideData.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl lg:max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
                >
                  <span className="px-2 py-1 sm:px-3 bg-red-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                    {currentSlideData.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <span className="text-white font-medium text-sm sm:text-base">{currentSlideData.rating}</span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 leading-tight"
                >
                  {currentSlideData.title}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 font-medium"
                >
                  {currentSlideData.subtitle}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-gray-200 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed max-w-lg lg:max-w-xl line-clamp-3 sm:line-clamp-none"
                >
                  {currentSlideData.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8"
                >
                  <div className="flex items-center gap-2 text-gray-300">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{currentSlideData.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{currentSlideData.publishedAt}</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Link
                    href={`/articles/${currentSlideData.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                    Read Full Article
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base">
                    Watch Video
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-black/30">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          key={currentSlide}
        />
      </div>
    </div>
  )
}
