"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, User, Eye } from "lucide-react"

interface AnimatedArticleCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime?: string
  views?: string
  index?: number
}

export default function AnimatedArticleCard({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  readTime,
  views,
  index = 0,
}: AnimatedArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/article/${id}`}>
        <article className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700 hover:shadow-2xl">
          <div className="relative h-40 lg:h-48 overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="absolute top-3 left-3 lg:top-4 lg:left-4"
            >
              <span className="bg-white text-black px-2 lg:px-3 py-1 text-xs font-bold rounded-full">{category}</span>
            </motion.div>

            {/* Views (if provided) */}
            {views && (
              <div className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{views}</span>
              </div>
            )}
          </div>

          <div className="p-4 lg:p-6">
            <motion.h3
              className="text-white font-bold text-sm lg:text-lg mb-2 lg:mb-3 group-hover:text-gray-300 transition-colors line-clamp-2"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>

            <p className="text-gray-400 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2 leading-relaxed">{excerpt}</p>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-0 text-xs text-gray-500">
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span className="truncate">{author}</span>
                </div>
                {readTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{readTime}</span>
                  </div>
                )}
              </div>
              <span className="text-xs">{publishedAt}</span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
