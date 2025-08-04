"use client"

import { useState, useEffect } from "react"
import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Play, Clock, Eye } from "lucide-react"
import VideoPlayer from "@/components/video-player"

interface VideoCardProps {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
  publishedAt: string
  category: string
  slug?: string
}

function VideoCard({ id, title, thumbnail, duration, views, publishedAt, category, slug }: VideoCardProps) {
  return (
    <Link href={`/article/video/${slug || id}`}>
      <div className="group cursor-pointer">
      <div className="relative rounded-lg overflow-hidden mb-3">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">{duration}</div>
        <div className="absolute top-2 left-2">
          <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">{category}</span>
        </div>
      </div>
      <h3 className="text-white font-semibold mb-2 group-hover:text-red-400 transition-colors">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{views}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{publishedAt}</span>
        </div>
      </div>
      </div>
    </Link>
  )
}

async function fetchVideos() {
  try {
    const response = await fetch('https://admin.koodos.in/api/public/news?category=videos')
    const result = await response.json()
    
    if (result.success && result.data && result.data.articles) {
      return result.data.articles.map((article: any) => ({
        id: article.id,
        title: article.title,
        thumbnail: article.featuredImage || '/placeholder.svg',
        duration: '10:00',
        views: `${article.views || 0} views`,
        publishedAt: new Date(article.createdAt).toLocaleDateString(),
        category: 'Video',
        slug: article.slug
      }))
    }
    return []
  } catch (error) {
    console.error('Failed to fetch videos:', error)
    return []
  }
}

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadVideos() {
      const data = await fetchVideos()
      setVideos(data)
      setLoading(false)
    }
    loadVideos()
  }, [])

  return (
    <PageLayout title="Videos" description="Watch the latest gaming videos, reviews, and gameplay footage">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Featured Video</h2>
        <VideoPlayer 
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          className="w-full max-w-4xl mx-auto"
        />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-white">More Videos</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-300 h-48 rounded-lg mb-3" />
              <div className="h-4 bg-gray-300 rounded mb-2" />
              <div className="h-3 bg-gray-300 rounded w-3/4" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      )}
    </PageLayout>
  )
}
