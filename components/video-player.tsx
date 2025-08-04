"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  title?: string
}

function getVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  return match ? match[1] : null
}

export default function VideoPlayer({ src, poster, className = "", title }: VideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be')
  const videoId = isYouTube ? getVideoId(src) : null

  const handlePlay = () => {
    if (iframeRef.current && videoId) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      )
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (iframeRef.current && videoId) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      )
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (iframeRef.current && videoId) {
      const command = isMuted ? 'unMute' : 'mute'
      iframeRef.current.contentWindow?.postMessage(
        `{"event":"command","func":"${command}","args":""}`,
        '*'
      )
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        containerRef.current.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  if (!isYouTube || !videoId) {
    return (
      <div className={`bg-gray-900 rounded-lg aspect-video flex items-center justify-center ${className}`}>
        <video
          className="w-full h-full object-cover rounded-lg"
          controls
          poster={poster}
          src={src}
        />
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`relative bg-black rounded-lg overflow-hidden aspect-video ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
        title={title || 'Video'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}
      />
      
      {/* Custom Controls Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Play/Pause Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            className="bg-black/70 hover:bg-black/90 rounded-full p-4 transition-all duration-200 transform hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white fill-white" />
            ) : (
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            )}
          </button>
        </div>
        
        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={isPlaying ? handlePause : handlePlay}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-white" />
                ) : (
                  <Play className="w-5 h-5 fill-white" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
            
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {title && (
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
          {title}
        </div>
      )}
    </div>
  )
}