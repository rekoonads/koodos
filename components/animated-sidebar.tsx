"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SearchModal } from "@/components/search-modal"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { SignInButton, SignUpButton } from "@clerk/nextjs"
import {
  Home,
  Star,
  BookOpen,
  Gamepad2,
  Monitor,
  Search,
  User,
  MessageSquare,
  List,
  Phone,
  Share2,
  ChevronRight,
  Newspaper,
  Video,
  Lightbulb,
  MessageCircle,
  HelpCircle,
  Globe,
  Tv,
  Palette,
  Atom,
  Rss,
  Mail,
  Info,
  FileText,
  Shield,
  Cookie,
  Briefcase,
  Menu,
  X,
  ArrowLeft,

} from "lucide-react"

interface MenuItem {
  name: string
  href: string
  icon: any
  subItems?: MenuItem[]
}

export const menuStructure: MenuItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Latest Updates", href: "/latest-updates", icon: Newspaper },
  {
    name: "Reviews",
    href: "/reviews",
    icon: Star,
    subItems: [
      { name: "All Reviews", href: "/reviews", icon: Star },
      { name: "Game Reviews", href: "/reviews/games", icon: Gamepad2 },
      { name: "Movie Reviews", href: "/reviews/movies", icon: Video },
      { name: "TV Reviews", href: "/reviews/tv", icon: Tv },
      { name: "Comic Reviews", href: "/reviews/comics", icon: BookOpen },
      { name: "Tech Reviews", href: "/reviews/tech", icon: Monitor },
    ],
  },
  { name: "Interviews", href: "/interviews", icon: MessageCircle },
  { name: "Spotlights", href: "/spotlights", icon: Lightbulb },
  { name: "Top Lists", href: "/top-lists", icon: List },
  { name: "Opinions", href: "/opinions", icon: MessageSquare },
  { name: "Guides", href: "/guides", icon: HelpCircle },
  { name: "Wiki", href: "/wiki", icon: Globe },
  { name: "Videos", href: "/videos", icon: Video },
  {
    name: "Gaming",
    href: "/gaming",
    icon: Gamepad2,
    subItems: [
      { name: "Nintendo", href: "/gaming/nintendo", icon: Gamepad2 },
      { name: "Xbox", href: "/gaming/xbox", icon: Gamepad2 },
      { name: "PlayStation", href: "/gaming/playstation", icon: Gamepad2 },
      { name: "PC", href: "/gaming/pc", icon: Monitor },
      { name: "Mobile", href: "/gaming/mobile", icon: Phone },
    ],
  },
  { name: "Tech", href: "/tech", icon: Monitor },
  {
    name: "Anime & Manga",
    href: "/anime-manga",
    icon: Palette,
    subItems: [
      { name: "All Anime Coverage", href: "/anime-manga/anime", icon: Tv },
      { name: "Cosplay", href: "/anime-manga/cosplay", icon: Palette },
    ],
  },
  { name: "Science & Comics", href: "/science-comics", icon: Atom },
  {
    name: "Follow Koodos",
    href: "/follow",
    icon: Share2,
    subItems: [
      { name: "Social Media Links", href: "/follow/social", icon: Share2 },
      { name: "Newsletter", href: "/follow/newsletter", icon: Mail },
    ],
  },
  {
    name: "More",
    href: "/more",
    icon: Info,
    subItems: [
      { name: "About Koodos", href: "/more/about", icon: Info },
      { name: "Contact Editorial Team", href: "/more/contact", icon: Phone },
      { name: "Advertise With Us", href: "/more/advertise", icon: Briefcase },
      { name: "Press", href: "/more/press", icon: Newspaper },
      { name: "User Agreement", href: "/more/terms", icon: FileText },
      { name: "Privacy Policy", href: "/more/privacy", icon: Shield },
      { name: "Cookie Policy", href: "/more/cookies", icon: Cookie },
      { name: "RSS", href: "/more/rss", icon: Rss },
    ],
  },
]

export function AnimatedSidebar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [dynamicMenuStructure, setDynamicMenuStructure] = useState<MenuItem[]>(menuStructure)


  useEffect(() => {
    // Fetch menu structure from admin API
    const fetchMenuStructure = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu?location=navbar`)
        if (response.ok) {
          const data = await response.json()
          if (data.success && data.data) {
            // Transform API data to match frontend structure
            const transformedMenu = data.data.map((item: any) => ({
              name: item.name,
              href: item.href,
              icon: getIconComponent(item.icon),
              subItems: item.children?.map((child: any) => ({
                name: child.name,
                href: child.href,
                icon: getIconComponent(child.icon)
              }))
            }))
            setDynamicMenuStructure(transformedMenu)
          }
        }
      } catch (error) {
        console.log('Using default menu structure')
      }
    }

    fetchMenuStructure()
  }, [])



  const getIconComponent = (iconName?: string) => {
    const iconMap: { [key: string]: any } = {
      Home, Star, BookOpen, Gamepad2, Monitor, Search, User, MessageSquare,
      List, Phone, Share2, ChevronRight, Newspaper, Video, Lightbulb,
      MessageCircle, HelpCircle, Globe, Tv, Palette, Atom, Rss, Mail,
      Info, FileText, Shield, Cookie, Briefcase, Menu, X, ArrowLeft
    }
    return iconMap[iconName || 'Home'] || Home
  }

  const openSubmenuPage = (menuName: string) => {
    setCurrentPage(menuName)
  }

  const goBackToMainMenu = () => {
    setCurrentPage(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setCurrentPage(null)
  }

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      closeMobileMenu()
    }
  }

  const pageVariants = {
    initial: {
      x: "100%",
      rotateY: -90,
    },
    animate: {
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      x: "100%",
      rotateY: -90,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const mainMenuVariants = {
    initial: {
      x: 0,
      rotateY: 0,
    },
    exit: {
      x: "-100%",
      rotateY: 90,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    animate: {
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const SubmenuPage = ({ menuName }: { menuName: string }) => {
    const menuItem = dynamicMenuStructure.find((item) => item.name === menuName)
    if (!menuItem || !menuItem.subItems) return null

    return (
      <motion.div
        initial={{ x: "100%", rotateY: -90 }}
        animate={{ x: 0, rotateY: 0 }}
        exit={{ x: "100%", rotateY: -90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-black flex flex-col"
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="p-6 flex-shrink-0">
            <button
              onClick={goBackToMainMenu}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-sidebar-accent/30"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Menu</span>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-sidebar-accent/50 rounded-lg">
                <menuItem.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white font-semibold text-lg">{menuItem.name}</h2>
            </div>

            <nav className="space-y-1 mb-8">
              {menuItem.subItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-sidebar-accent/50 rounded-xl transition-all duration-200 group"
                  onClick={handleLinkClick}
                >
                  <div className="p-1.5 bg-sidebar-accent/30 rounded-lg group-hover:bg-sidebar-accent/50 transition-colors">
                    <subItem.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{subItem.name}</span>
                </Link>
              ))}
            </nav>
            
              </div>

              {/* User Profile Section - Fixed at Bottom */}
              <div className="px-6 pb-6 flex-shrink-0">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold">Join KOODOS</h3>
                      <p className="text-gray-400 text-xs">Gaming community</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <SignInButton mode="modal">
                      <button className="flex-1 bg-white text-black hover:bg-gray-100 text-xs py-2.5 rounded-lg font-medium transition-colors">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="flex-1 bg-transparent border border-gray-600 text-white hover:bg-gray-800 text-xs py-2.5 rounded-lg font-medium transition-colors">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </div>
              </div>
        </div>
      </motion.div>
    )
  }

  const SidebarContent = () => (
    <div className="relative h-full overflow-hidden" suppressHydrationWarning>
      <AnimatePresence mode="wait">
        {!currentPage ? (
          <motion.div
            key="main-menu"
            initial={{ x: 0, rotateY: 0 }}
            animate={{ x: 0, rotateY: 0 }}
            exit={{ x: "-100%", rotateY: 90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="flex flex-col h-full overflow-hidden">


              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 pt-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {/* Search Integration */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search on KOODOS"
                    className="w-full pl-10 pr-4 py-3 bg-sidebar-accent/30 border border-sidebar-border/30 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gaming-cyan focus:border-gaming-cyan transition-all duration-200"
                    onClick={() => setIsSearchOpen(true)}
                  />
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                  {dynamicMenuStructure.map((item) => (
                    <div key={item.name}>
                      {item.subItems &&
                      ["Reviews", "Gaming", "Anime & Manga", "Follow Koodos", "More"].includes(item.name) ? (
                        <button
                          onClick={() => openSubmenuPage(item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-sidebar-accent/50 rounded-xl text-sm font-medium group transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-sidebar-accent/30 rounded-lg group-hover:bg-sidebar-accent/50 transition-colors flex items-center justify-center min-w-[32px] min-h-[32px]">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <span>{item.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-sidebar-accent/50 rounded-xl text-sm font-medium group transition-all duration-200"
                          onClick={handleLinkClick}
                        >
                          <div className="p-1.5 bg-sidebar-accent/30 rounded-lg group-hover:bg-sidebar-accent/50 transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Fixed User Profile Section */}
              <div className="px-6 pb-6 flex-shrink-0">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold">Join KOODOS</h3>
                      <p className="text-gray-400 text-xs">Gaming community</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <SignInButton mode="modal">
                      <button className="flex-1 bg-white text-black hover:bg-gray-100 text-xs py-2.5 rounded-lg font-medium transition-colors">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="flex-1 bg-transparent border border-gray-600 text-white hover:bg-gray-800 text-xs py-2.5 rounded-lg font-medium transition-colors">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <SubmenuPage key={currentPage} menuName={currentPage} />
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden bg-black/80 text-white hover:bg-black/90 backdrop-blur-sm border border-gray-700 shadow-lg"
        onClick={toggleMobileMenu}
      >
        <Menu className="w-5 h-5" />
      </Button>

      <div className="sidebar-container fixed left-0 top-0 h-full w-72 bg-black border-r border-gray-700 z-40 flex flex-col hidden lg:flex">
        <SidebarContent />
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 h-full w-[85vw] max-w-80 bg-black border-r border-gray-700 z-50 flex flex-col lg:hidden shadow-2xl"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
