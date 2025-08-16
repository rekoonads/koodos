"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface DynamicGridProps {
  children: ReactNode[]
  className?: string
  minItemWidth?: number
  gap?: number
}

export function DynamicGrid({ children, className = "", minItemWidth = 300, gap = 24 }: DynamicGridProps) {
  const [columns, setColumns] = useState(1)

  useEffect(() => {
    const updateColumns = () => {
      const containerWidth = window.innerWidth - 320 // Account for sidebar
      const availableWidth = containerWidth - gap * 2 // Account for padding
      const itemsPerRow = Math.floor((availableWidth + gap) / (minItemWidth + gap))
      setColumns(Math.max(1, Math.min(itemsPerRow, children.length)))
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [children.length, minItemWidth, gap])

  return (
    <motion.div
      className={`grid gap-${gap / 4} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
      layout
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          layout
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
