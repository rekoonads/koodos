"use client"

import { useEffect, useRef } from "react"
import Plyr from "plyr"
import "plyr/dist/plyr.css"

interface VideoPlayerProps {
  src: string
  poster?: string
  title: string
  className?: string
}

export default function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<Plyr | null>(null)

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        settings: ['quality', 'speed'],
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [])

  return (
    <div className={`${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full"
        poster={poster}
        data-plyr-config='{"title": "' + title + '"}'
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}