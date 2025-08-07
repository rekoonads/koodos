"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Eye, Heart, MessageCircle } from "lucide-react"

interface PostCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  views?: number
  likes?: number
  comments?: number
  slug: string
}

export default function PostCard({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  views = 0,
  likes = 0,
  comments = 0,
  slug
}: PostCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Link href={`/post/${slug}`}>
      <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute top-2 left-2">
            <span className="bg-black text-white px-2 py-1 text-xs font-semibold rounded">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-lg leading-tight mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-2">
              <User className="w-3 h-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              <span>{publishedAt}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-3 h-3" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}