"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Globe,
  Newspaper,
  Star,
  MessageSquare,
  FileText,
  List,
  MessageCircle,
  BookOpen,
  Search,
  Video,
  Gamepad2,
  Smartphone,
  Tv,
  Atom,
  BookMarked,
  Users,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { LogoutConfirmation } from "@/components/logout-confirmation"

const navigationItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Newspaper, label: "Latest News", href: "/article/news" },
  { icon: Star, label: "Game Reviews", href: "/article/review", hasSubmenu: true },
  { icon: Gamepad2, label: "Gaming Hub", href: "/gaming", hasSubmenu: true },
  { icon: Smartphone, label: "Tech Zone", href: "/tech" },
  { icon: Video, label: "Video Content", href: "/article/video" },
  { icon: Tv, label: "Anime Corner", href: "/anime", hasSubmenu: true },
  { icon: MessageSquare, label: "Discussions", href: "/article/interview" },
  { icon: FileText, label: "Deep Dives", href: "/article/feature" },
  { icon: BookOpen, label: "Game Guides", href: "/article/guide" },
  { icon: List, label: "Top Lists", href: "/article/lists" },
  { icon: MessageCircle, label: "Community", href: "/article/opinion" },
  { icon: BookMarked, label: "Comics Hub", href: "/comics" },
  { icon: Users, label: "Social", href: "/follow", hasSubmenu: true },
]

interface AnimatedSidebarProps {
  onCollapseChange?: (collapsed: boolean) => void
}

export default function AnimatedSidebar({ onCollapseChange }: AnimatedSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    onCollapseChange?.(isCollapsed)
  }, [isCollapsed, onCollapseChange])

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const getSubmenuItems = (parentLabel: string) => {
    const submenuMap: Record<string, Array<{ label: string; href: string }>> = {
      Reviews: [
        { label: "Game Reviews", href: "/article/review?keyword__type=game" },
        { label: "Movie Reviews", href: "/article/review?keyword__type=movie" },
        { label: "TV Reviews", href: "/article/review?keyword__type=tv" },
        { label: "Comics Reviews", href: "/article/review?keyword__type=comics" },
        { label: "Tech Reviews", href: "/article/review?keyword__type=tech" },
      ],
      Gaming: [
        { label: "PC Gaming", href: "/pc" },
        { label: "PlayStation 5", href: "/ps5" },
        { label: "Xbox", href: "/xbox" },
        { label: "Mobile Gaming", href: "/mobile" },
        { label: "Nintendo Switch", href: "/nintendo-switch" },
        { label: "Esports", href: "/esports" },
      ],
      "Anime and Manga": [
        { label: "Anime", href: "/anime" },
        { label: "Cosplay", href: "/cosplay" },
        { label: "KOODOS Otaku Update", href: "/ign-otaku-update" },
      ],
      "Follow KOODOS": [
        { label: "Twitter", href: "/follow/twitter" },
        { label: "Facebook", href: "/follow/facebook" },
        { label: "YouTube", href: "/follow/youtube" },
        { label: "Instagram", href: "/follow/instagram" },
      ],
      More: [
        { label: "Podcasts", href: "/more/podcasts" },
        { label: "Store", href: "/more/store" },
        { label: "Deals", href: "/more/deals" },
        { label: "Community", href: "/more/community" },
      ],
    }
    return submenuMap[parentLabel] || []
  }

  if (!mounted) return null

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Desktop Sidebar */}
      <motion.div
        initial={false}
        animate={{ 
          width: isCollapsed ? 64 : 256
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:bg-black lg:border-r lg:border-gray-800 lg:overflow-y-auto lg:z-50 lg:shadow-xl lg:block"
        onMouseEnter={() => isCollapsed && setIsCollapsed(false)}
        onMouseLeave={() => !isCollapsed && setIsCollapsed(true)}
      >
        {/* Desktop Toggle Button */}
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-4 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-[60]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className={`w-3 h-3 transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`} />
        </motion.button>
        
        {/* Collapsed Icons */}
        {isCollapsed && (
          <div className="p-2 space-y-2">
            <div className="flex justify-center mb-4 pt-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">K</span>
              </div>
            </div>
            {navigationItems.slice(0, 8).map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-center w-12 h-12 rounded-md transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        )}
        
        {/* Expanded Content */}
        <div className={`${isCollapsed ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'} transition-opacity duration-300`}>
          {/* Desktop Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-4 border-b border-gray-800"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-8 h-8 bg-white rounded flex items-center justify-center"
              >
                <span className="text-black font-bold text-sm">K</span>
              </motion.div>
              <span className="text-white font-bold text-lg group-hover:text-gray-300 transition-colors">KOODOS</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="p-2">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-white text-black shadow-lg"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    <span className="flex-1">{item.label}</span>
                    {item.hasSubmenu && (
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault()
                          toggleExpanded(item.label)
                        }}
                        className="p-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          animate={{ rotate: expandedItems.includes(item.label) ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                    )}
                  </Link>
                </motion.div>

                <AnimatePresence>
                  {item.hasSubmenu && expandedItems.includes(item.label) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-6 mt-1 space-y-1 overflow-hidden"
                    >
                      {getSubmenuItems(item.label).map((subItem, subIndex) => (
                        <motion.div
                          key={subItem.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                        >
                          <Link
                            href={subItem.href}
                            className={`block px-3 py-1 text-sm rounded transition-all duration-200 ${
                              pathname === subItem.href
                                ? "text-black bg-white"
                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-4 border-t border-gray-800"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search on KOODOS"
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-white transition-colors"
              />
            </div>
          </motion.div>

          {/* Desktop Region Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-4"
          >
            <Select defaultValue="india">
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Change Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>


        </div>
      </motion.div>
      
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 top-0 h-full w-80 bg-black border-r border-gray-800 overflow-y-auto z-[60] shadow-xl lg:hidden"
          >
            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute right-4 top-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors z-[60]"
            >
              ×
            </button>
            
            {/* Mobile Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-4 border-b border-gray-800"
            >
              <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-8 h-8 bg-white rounded flex items-center justify-center"
                >
                  <span className="text-black font-bold text-sm">K</span>
                </motion.div>
                <span className="text-white font-bold text-lg group-hover:text-gray-300 transition-colors">KOODOS</span>
              </Link>
            </motion.div>

            {/* Mobile Navigation */}
            <nav className="p-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-white text-black shadow-lg"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                        <item.icon className="w-4 h-4" />
                      </motion.div>
                      <span className="flex-1">{item.label}</span>
                      {item.hasSubmenu && (
                        <motion.button
                          onClick={(e) => {
                            e.preventDefault()
                            toggleExpanded(item.label)
                          }}
                          className="p-1"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            animate={{ rotate: expandedItems.includes(item.label) ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        </motion.button>
                      )}
                    </Link>
                  </motion.div>

                  <AnimatePresence>
                    {item.hasSubmenu && expandedItems.includes(item.label) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-6 mt-1 space-y-1 overflow-hidden"
                      >
                        {getSubmenuItems(item.label).map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                          >
                            <Link
                              href={subItem.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={`block px-3 py-1 text-sm rounded transition-all duration-200 ${
                                pathname === subItem.href
                                  ? "text-black bg-white"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-4 border-t border-gray-800"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search on KOODOS"
                  className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-white transition-colors"
                />
              </div>
            </motion.div>

            {/* Mobile Region Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-4"
            >
              <Select defaultValue="india">
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Change Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Mobile Auth Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="p-4 border-t border-gray-800"
            >
              <SignedOut>
                <div className="flex gap-2">
                  <SignInButton mode="modal">
                    <div className="flex-1 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors cursor-pointer text-center">
                      Login
                    </div>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <div className="flex-1 px-4 py-2 bg-white text-black hover:bg-gray-200 rounded transition-colors cursor-pointer text-center">
                      Register
                    </div>
                  </SignUpButton>
                </div>
              </SignedOut>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Menu Button - Fixed position */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-[70] lg:hidden"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <LogoutConfirmation 
        isOpen={showLogoutConfirm} 
        onClose={() => setShowLogoutConfirm(false)} 
      />
    </>
  )
}