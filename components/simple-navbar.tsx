"use client"

import { useState, useEffect } from "react"
import { Search, Pin, PinOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SimpleNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (isPinned) return
      
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsCollapsed(true)
      } else if (currentScrollY < lastScrollY) {
        setIsCollapsed(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isPinned])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Reviews", href: "/reviews" },
    { name: "News", href: "/latest-updates" },
    { name: "Gaming", href: "/gaming" },
    { name: "Tech", href: "/tech" },
    { name: "Anime", href: "/anime-manga" }
  ]

  return (
    <nav className={`bg-gray-900 text-white border-b border-gray-700 sticky top-0 z-50 transition-transform duration-300 ${isCollapsed ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-14">
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and Pin */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-48 pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPinned(!isPinned)}
              className={`text-gray-300 hover:text-white ${isPinned ? 'text-blue-400' : ''}`}
            >
              {isPinned ? <Pin className="w-4 h-4" /> : <PinOff className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}