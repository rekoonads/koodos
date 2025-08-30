"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Search, Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function IGNNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
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
  }, [lastScrollY])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Reviews", href: "/reviews", hasDropdown: true },
    { name: "News", href: "/latest-updates" },
    { name: "Guides", href: "/guides" },
    { name: "Videos", href: "/videos" },
    { name: "Gaming", href: "/gaming", hasDropdown: true },
    { name: "Tech", href: "/tech" },
    { name: "Anime", href: "/anime-manga" },
    { name: "More", href: "/more", hasDropdown: true }
  ]

  return (
    <nav className={`bg-black text-white border-b border-gray-800 z-40 sticky top-0 transition-transform duration-300 ${isCollapsed ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold">KOODOS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name === "Reviews" && (
                      <>
                        <Link href="/reviews" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">All Reviews</Link>
                        <Link href="/reviews/games" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">Game Reviews</Link>
                        <Link href="/reviews/movies" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">Movie Reviews</Link>
                        <Link href="/reviews/tech" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">Tech Reviews</Link>
                      </>
                    )}
                    {item.name === "Gaming" && (
                      <>
                        <Link href="/gaming/pc" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">PC Gaming</Link>
                        <Link href="/gaming/playstation" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">PlayStation</Link>
                        <Link href="/gaming/xbox" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">Xbox</Link>
                        <Link href="/gaming/nintendo" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">Nintendo</Link>
                      </>
                    )}
                    {item.name === "More" && (
                      <>
                        <Link href="/about" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">About</Link>
                        <Link href="/contact" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">Contact</Link>
                        <Link href="/careers" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">Careers</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
              onClick={() => {
                document.documentElement.classList.toggle('dark')
              }}
            >
              <Sun className="w-4 h-4 dark:hidden" />
              <Moon className="w-4 h-4 hidden dark:block" />
            </Button>
            <div className="hidden md:block relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, reviews..."
                  className="w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                />
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="md:hidden text-gray-300 hover:text-white">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="space-y-2 mb-4">
              <div className="px-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, reviews..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}