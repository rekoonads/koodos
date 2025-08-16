"use client"

import type { ReactNode } from "react"

interface ResponsiveGridProps {
  children: ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: string
  className?: string
}

export function ResponsiveGrid({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-6 lg:gap-8",
  className = "",
}: ResponsiveGridProps) {
  const getGridClasses = () => {
    const mobile = columns.mobile || 1
    const tablet = columns.tablet || 2
    const desktop = columns.desktop || 3

    const mobileClass =
      mobile === 1
        ? "grid-cols-1"
        : mobile === 2
          ? "grid-cols-2"
          : mobile === 3
            ? "grid-cols-3"
            : mobile === 4
              ? "grid-cols-4"
              : "grid-cols-1"

    const tabletClass =
      tablet === 1
        ? "md:grid-cols-1"
        : tablet === 2
          ? "md:grid-cols-2"
          : tablet === 3
            ? "md:grid-cols-3"
            : tablet === 4
              ? "md:grid-cols-4"
              : tablet === 5
                ? "md:grid-cols-5"
                : tablet === 6
                  ? "md:grid-cols-6"
                  : "md:grid-cols-2"

    const desktopClass =
      desktop === 1
        ? "lg:grid-cols-1"
        : desktop === 2
          ? "lg:grid-cols-2"
          : desktop === 3
            ? "lg:grid-cols-3"
            : desktop === 4
              ? "lg:grid-cols-4"
              : desktop === 5
                ? "lg:grid-cols-5"
                : desktop === 6
                  ? "lg:grid-cols-6"
                  : "lg:grid-cols-3"

    return `${mobileClass} ${tabletClass} ${desktopClass}`
  }

  return <div className={`grid ${getGridClasses()} ${gap} ${className}`}>{children}</div>
}
