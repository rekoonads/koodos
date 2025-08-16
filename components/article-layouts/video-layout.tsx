import { Badge } from "@/components/ui/badge"
import { Play, Clock, Eye, Calendar } from "lucide-react"

interface VideoLayoutProps {
  article: any
  videoData?: any
  theme: any
}

export function VideoLayout({ article, videoData, theme }: VideoLayoutProps) {
  const mockVideoData = {
    duration: "12:34",
    views: "1.2M",
    videoUrl: "https://example.com/video.mp4",
    thumbnails: ["/video-thumbnail-1.png", "/video-thumbnail-2.png", "/video-thumbnail-3.png"],
  }

  const data = videoData || mockVideoData

  return (
    <div className="video-layout">
      {/* Video Header */}
      <div
        className={`relative bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} text-white rounded-xl p-8 mb-8`}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        <div className="relative">
          <Badge className={`${theme.accentColor} text-white mb-4`}>Video Content</Badge>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <Clock className="w-6 h-6 mb-2" />
              <h4 className="font-semibold">Duration</h4>
              <p className="text-sm opacity-90">{data.duration}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Eye className="w-6 h-6 mb-2" />
              <h4 className="font-semibold">Views</h4>
              <p className="text-sm opacity-90">{data.views}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Calendar className="w-6 h-6 mb-2" />
              <h4 className="font-semibold">Published</h4>
              <p className="text-sm opacity-90">{new Date(article.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="bg-black rounded-lg mb-8 aspect-video flex items-center justify-center">
        <div className="text-center text-white">
          <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <p className="text-lg">Video Player</p>
          <p className="text-sm opacity-70">Click to play video content</p>
        </div>
      </div>

      {/* Video Thumbnails */}
      <div
        className={`${theme.bgColor} rounded-lg p-6 mb-8 border-l-4 ${theme.borderColor.replace("border-", "border-l-")}`}
      >
        <h3 className={`text-lg font-bold ${theme.textColor} mb-3`}>Video Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.thumbnails.map((thumbnail: string, index: number) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="w-full h-24 bg-gray-300 rounded mb-2"></div>
              <p className="text-sm font-medium">Highlight {index + 1}</p>
              <p className="text-xs text-gray-600">Key moment from the video</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
