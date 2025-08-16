"use client"

import { motion } from "framer-motion"
import { Play, Star, Trophy } from "lucide-react"

interface GameCardOverlayProps {
  type: "news" | "review" | "video"
  rating?: number
  category?: string
}

export function GameCardOverlay({ type, rating, category }: GameCardOverlayProps) {
  const getIcon = () => {
    switch (type) {
      case "video":
        return <Play className="w-6 h-6" />
      case "review":
        return <Star className="w-4 h-4" />
      default:
        return <Trophy className="w-4 h-4" />
    }
  }

  const getOverlayColor = () => {
    switch (type) {
      case "video":
        return "bg-red-600/90"
      case "review":
        return "bg-yellow-600/90"
      default:
        return "bg-blue-600/90"
    }
  }

  return (
    <motion.div
      className={`absolute top-2 left-2 ${getOverlayColor()} text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs font-semibold`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      {getIcon()}
      {rating && <span>{rating}/10</span>}
      {category && <span>{category}</span>}
    </motion.div>
  )
}
