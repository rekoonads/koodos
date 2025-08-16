"use client"

import type { ReactNode } from "react"

interface ResponsiveHeroProps {
  children: ReactNode
  backgroundGradient?: string
  className?: string
}

export function ResponsiveHero({
  children,
  backgroundGradient = "from-slate-900 via-gray-800 to-blue-900",
  className = "",
}: ResponsiveHeroProps) {
  return (
    <div className={`relative bg-gradient-to-br ${backgroundGradient} text-white overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 sm:w-40 h-20 sm:h-40 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  )
}
