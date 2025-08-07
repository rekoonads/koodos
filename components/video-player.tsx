"use client"

import { useEffect, useRef, useState } from "react"

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

export default function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && videoRef.current && !playerRef.current) {
      import('plyr').then((Plyr) => {
        playerRef.current = new Plyr.default(videoRef.current!, {
          controls: [
            'play-large',
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'settings',
            'fullscreen'
          ],
          settings: ['quality', 'speed'],
          quality: {
            default: 720,
            options: [1080, 720, 480, 360]
          },
          speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 2]
          }
        })
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [isClient])

  if (!isClient) {
    return (
      <div className={`bg-gray-900 rounded-lg aspect-video flex items-center justify-center ${className}`}>
        <div className="text-white">Loading player...</div>
      </div>
    )
  }

  return (
    <div className={`plyr-container ${className}`}>
      <video
        ref={videoRef}
        className="plyr-video"
        poster={poster}
        controls
        crossOrigin="anonymous"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <style jsx global>{`
        @import url('https://cdn.plyr.io/3.7.8/plyr.css');
        
        .plyr-container {
          --plyr-color-main: #000000;
          --plyr-video-background: #000000;
          --plyr-menu-background: rgba(0, 0, 0, 0.9);
          --plyr-menu-color: #ffffff;
          --plyr-control-icon-size: 18px;
          --plyr-control-spacing: 10px;
          --plyr-progress-loading-background: rgba(255, 255, 255, 0.25);
          --plyr-progress-buffer-background: rgba(255, 255, 255, 0.25);
          --plyr-progress-played-background: #000000;
          --plyr-range-thumb-background: #000000;
          --plyr-range-track-background: rgba(255, 255, 255, 0.25);
          --plyr-range-fill-background: #000000;
        }
        
        .plyr {
          border-radius: 8px;
          overflow: hidden;
        }
        
        .plyr__controls {
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
          border-radius: 0 0 8px 8px;
        }
        
        .plyr__control:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        
        .plyr__control--pressed {
          background: rgba(0, 0, 0, 0.9);
          color: #ffffff;
        }
        
        .plyr__menu {
          border-radius: 8px;
        }
        
        .plyr__tooltip {
          background: rgba(0, 0, 0, 0.9);
          border-radius: 4px;
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}