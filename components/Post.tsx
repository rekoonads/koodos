"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Eye, Share2, Heart, MessageCircle, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PostProps {
  id: string
  title: string
  content: string
  excerpt: string
  featuredImage: string
  author: {
    name: string
    avatar: string
    bio?: string
  }
  publishedAt: string
  category: string
  tags: string[]
  views: number
  likes: number
  comments: number
  slug: string
}

export default function Post({
  id,
  title,
  content,
  excerpt,
  featuredImage,
  author,
  publishedAt,
  category,
  tags,
  views,
  likes,
  comments,
  slug
}: PostProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className={`min-h-screen bg-black text-white transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <div className="border-b border-gray-800 p-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded">
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Image
              src={author.avatar}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{views.toLocaleString()} views</span>
          </div>
        </div>

        {/* Featured Image - Full Width */}
        <div className="mb-8 -mx-4">
          <Image
            src={featuredImage}
            alt={title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-[500px] object-cover"
          />
        </div>

        {/* Social Actions */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
          <Button 
            variant="outline" 
            size="sm" 
            className={`flex items-center gap-2 ${isLiked ? 'text-red-500 border-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            {likeCount}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            {comments}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleShare}>
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Tag className="w-4 h-4" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <Image
              src={author.avatar}
              alt={author.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
              <p className="text-gray-400 mb-4">
                {author.bio || "Gaming journalist and tech enthusiast with over 10 years of experience covering the latest trends in gaming and technology."}
              </p>
              <Button variant="outline" size="sm">
                Follow Author
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}