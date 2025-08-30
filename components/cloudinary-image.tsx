"use client"

import { useState } from 'react'
import Image from 'next/image'

interface CloudinaryImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallback?: React.ReactNode
  transformations?: string
}

export function CloudinaryImage({
  src,
  alt,
  width = 400,
  height = 225,
  className = "",
  fallback,
  transformations = "c_fill"
}: CloudinaryImageProps) {
  const [imageError, setImageError] = useState(false)
  
  // Check if it's a local image or already a full URL
  let imageUrl = src
  
  if (src.startsWith('/') || src.startsWith('./')) {
    // Local image - use as is
    imageUrl = src
  } else if (src.startsWith('http')) {
    // Already a full URL - use as is
    imageUrl = src
  } else {
    // Build Cloudinary URL with transformations
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dpz9k4md5'
    imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformations},w_${width},h_${height}/v1/${src}`
  }

  if (imageError && fallback) {
    return <>{fallback}</>
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
      priority={false}
    />
  )
}