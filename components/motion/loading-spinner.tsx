"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: string
}

export function LoadingSpinner({ size = "md", color = "#6c47ff" }: LoadingSpinnerProps) {
  const sizes = {
    sm: 20,
    md: 40,
    lg: 60,
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        style={{
          width: sizes[size],
          height: sizes[size],
          border: `3px solid ${color}20`,
          borderTop: `3px solid ${color}`,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
