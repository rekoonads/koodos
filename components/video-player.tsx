"use client"

import { useEffect, useRef } from "react"
import Plyr from "plyr"
import "plyr/dist/plyr.css"

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  className?: string
}

export function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<Plyr | null>(null)

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "duration",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["quality", "speed"],
        quality: {
          default: 720,
          options: [1080, 720, 480, 360],
        },
        speed: {
          selected: 1,
          options: [0.5, 0.75, 1, 1.25, 1.5, 2],
        },
        keyboard: {
          focused: true,
          global: false,
        },
        tooltips: {
          controls: true,
          seek: true,
        },
        captions: {
          active: false,
          language: "auto",
          update: false,
        },
      })

      // Custom styling for gaming theme
      const player = playerRef.current
      if (player.elements?.container) {
        player.elements.container.style.setProperty("--plyr-color-main", "#6c47ff")
        player.elements.container.style.setProperty("--plyr-video-background", "#000")
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [])

  return (
    <div className={`video-player-wrapper ${className}`}>
      <video ref={videoRef} className="plyr-video" poster={poster} controls crossOrigin="anonymous" playsInline>
        <source src={src} type="video/mp4" />
        <p>Your browser doesn't support HTML video.</p>
      </video>
      {title && (
        <div className="mt-2">
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
      )}
    </div>
  )
}
