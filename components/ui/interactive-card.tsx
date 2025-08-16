"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  clickScale?: number
  glowColor?: string
}

export function InteractiveCard({
  children,
  className = "",
  hoverScale = 1.02,
  clickScale = 0.98,
  glowColor = "#6c47ff",
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: hoverScale, y: -4 }}
      whileTap={{ scale: clickScale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card className={`transition-all duration-300 ${className}`}>{children}</Card>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glowColor}20, transparent)`,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
