"use client"

import type { ReactNode } from "react"

interface ResponsiveWrapperProps {
  children: ReactNode
  className?: string
}

export function ResponsiveWrapper({ children, className = "" }: ResponsiveWrapperProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">{children}</div>
    </div>
  )
}
