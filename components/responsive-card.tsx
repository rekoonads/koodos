"use client"

import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ResponsiveCardProps {
  children: ReactNode
  hover?: boolean
  className?: string
}

export function ResponsiveCard({ children, hover = true, className = "" }: ResponsiveCardProps) {
  const hoverClasses = hover
    ? "hover:shadow-2xl hover:shadow-gray-500/10 hover:-translate-y-1 transition-all duration-500"
    : ""

  return (
    <Card className={`bg-white border border-gray-200 overflow-hidden ${hoverClasses} ${className}`}>
      <CardContent className="p-4 sm:p-6 lg:p-8">{children}</CardContent>
    </Card>
  )
}
