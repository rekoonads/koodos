"use client"

import type { ReactNode } from "react"

interface ResponsiveTextProps {
  children: ReactNode
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption"
  className?: string
}

export function ResponsiveText({ children, variant = "body", className = "" }: ResponsiveTextProps) {
  const variants = {
    h1: "text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold",
    h2: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold",
    h3: "text-xl sm:text-2xl lg:text-3xl font-bold",
    h4: "text-lg sm:text-xl lg:text-2xl font-semibold",
    body: "text-sm sm:text-base lg:text-lg",
    caption: "text-xs sm:text-sm",
  }

  return <div className={`${variants[variant]} ${className}`}>{children}</div>
}
