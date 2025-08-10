"use client"

import { useEffect, useRef, useState } from "react"

interface VideoPlayerProps {
  src: string
  poster?: string
  thumbnail?: string
  className?: string
}

export default function VideoPlayer({ src, poster, thumbnail, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const [isClient, setIsClient] = useState(false)
  
  // Extract video ID from YouTube/Vimeo URLs
  const getVideoInfo = (url: string) => {
    if (!url) return { type: 'video', id: '', embedUrl: '' };
    
    // YouTube patterns
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) {
      return {
        type: 'youtube',
        id: youtubeMatch[1],
        embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}`
      };
    }
    
    // Vimeo patterns
    const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch) {
      return {
        type: 'vimeo',
        id: vimeoMatch[1],
        embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`
      };
    }
    
    // Direct video file
    return {
      type: 'video',
      id: '',
      embedUrl: url
    };
  };
  
  const videoInfo = getVideoInfo(src);

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && videoRef.current && !playerRef.current && videoInfo.id) {
      import('plyr').then((Plyr) => {
        const config = {
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
          youtube: {
            noCookie: false,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1
          },
          vimeo: {
            byline: false,
            portrait: false,
            title: false,
            speed: true,
            transparent: false
          }
        };
        
        playerRef.current = new Plyr.default(videoRef.current!, config)
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [isClient, videoInfo.id])

  if (!isClient) {
    return (
      <div className={`bg-gray-900 rounded-lg aspect-video flex items-center justify-center ${className}`}>
        <div className="text-white">Loading player...</div>
      </div>
    )
  }

  return (
    <div className={`plyr-container ${className}`}>
      {videoInfo.type === 'youtube' && (
        <div
          ref={videoRef}
          data-plyr-provider="youtube"
          data-plyr-embed-id={videoInfo.id}
          data-plyr-poster={thumbnail || poster || ''}
        />
      )}
      {videoInfo.type === 'vimeo' && (
        <div
          ref={videoRef}
          data-plyr-provider="vimeo"
          data-plyr-embed-id={videoInfo.id}
          data-plyr-poster={thumbnail || poster || ''}
        />
      )}
      {videoInfo.type === 'video' && (
        <video
          ref={videoRef as any}
          className="plyr-video"
          poster={thumbnail || poster}
          controls
          crossOrigin="anonymous"
        >
          <source src={videoInfo.embedUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      <style jsx global>{`
        @import url('https://cdn.plyr.io/3.7.8/plyr.css');
        
        .plyr-container {
          --plyr-color-main: #000000;
          --plyr-video-background: #000000;
          --plyr-menu-background: rgba(0, 0, 0, 0.95);
          --plyr-menu-color: #ffffff;
          --plyr-control-icon-size: 20px;
          --plyr-control-spacing: 12px;
          --plyr-progress-loading-background: rgba(255, 255, 255, 0.2);
          --plyr-progress-buffer-background: rgba(255, 255, 255, 0.3);
          --plyr-progress-played-background: #000000;
          --plyr-range-thumb-background: #000000;
          --plyr-range-track-background: rgba(255, 255, 255, 0.2);
          --plyr-range-fill-background: #000000;
        }
        
        .plyr {
          border-radius: 12px;
          overflow: hidden;
        }
        
        .plyr__controls {
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          border-radius: 0 0 12px 12px;
        }
        
        .plyr__control {
          color: #ffffff;
          background: transparent;
        }
        
        .plyr__control:hover {
          background: rgba(0, 0, 0, 0.7);
          color: #ffffff;
        }
        
        .plyr__control--pressed {
          background: #000000;
          color: #ffffff;
        }
        
        .plyr__control[data-plyr="play"] {
          background: #000000 !important;
          border-radius: 50%;
          width: 48px;
          height: 48px;
        }
        
        .plyr__control[data-plyr="play"]:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          transform: scale(1.05);
        }
        
        .plyr__control--playing[data-plyr="play"] {
          background: #000000 !important;
        }
        
        .plyr__control--overlaid {
          background: #000000 !important;
          border: 3px solid #ffffff;
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }
        
        .plyr__control--overlaid:hover {
          background: rgba(0, 0, 0, 0.9) !important;
          transform: scale(1.1);
        }
        
        .plyr__menu {
          background: rgba(0, 0, 0, 0.95);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .plyr__tooltip {
          background: #000000;
          border-radius: 6px;
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}