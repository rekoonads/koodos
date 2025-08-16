"use client"

interface StatItem {
  value: string
  label: string
  color?: string
}

interface ResponsiveStatsProps {
  stats: StatItem[]
  className?: string
}

export function ResponsiveStats({ stats, className = "" }: ResponsiveStatsProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 ${stat.color || "text-blue-400"}`}
          >
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
