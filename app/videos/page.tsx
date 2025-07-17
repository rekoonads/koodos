"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
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
}

function VideoCard({ id, title, thumbnail, duration, views, publishedAt, category }: VideoCardProps) {
  return (
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
  )
}

const videos = [
  {
    id: "1",
    title: "Cyberpunk 2077 Phantom Liberty - Full Review",
    thumbnail: "/placeholder.svg?height=225&width=400",
    duration: "15:32",
    views: "125K views",
    publishedAt: "2 days ago",
    category: "Review",
  },
  {
    id: "2",
    title: "Top 10 Games of 2024 So Far",
    thumbnail: "/placeholder.svg?height=225&width=400",
    duration: "22:15",
    views: "89K views",
    publishedAt: "1 week ago",
    category: "Top 10",
  },
  {
    id: "3",
    title: "PlayStation 6 Rumors and Speculation",
    thumbnail: "/placeholder.svg?height=225&width=400",
    duration: "12:45",
    views: "67K views",
    publishedAt: "3 days ago",
    category: "News",
  },
]

export default function VideosPage() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </PageLayout>
  )
}
