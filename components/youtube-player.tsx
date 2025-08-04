"use client"

interface YouTubePlayerProps {
  url: string
  className?: string
}

function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export default function YouTubePlayer({ url, className = "" }: YouTubePlayerProps) {
  const videoId = extractYouTubeVideoId(url)
  
  if (!videoId) {
    return (
      <div className={`bg-gray-900 rounded-lg aspect-video flex items-center justify-center ${className}`}>
        <div className="text-white">Invalid YouTube URL</div>
      </div>
    )
  }

  return (
    <div className={`relative aspect-video rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}