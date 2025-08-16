"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SearchModal } from "@/components/search-modal"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
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
      transformOrigin: "left center",
    },
    animate: {
      x: 0,
      rotateY: 0,
      transformOrigin: "left center",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100%",
      rotateY: -90,
      transformOrigin: "left center",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
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
      transformOrigin: "right center",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    animate: {
      x: 0,
      rotateY: 0,
      transformOrigin: "right center",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  const SubmenuPage = ({ menuName }: { menuName: string }) => {
    const menuItem = menuStructure.find((item) => item.name === menuName)
    if (!menuItem || !menuItem.subItems) return null

    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute inset-0 bg-black flex flex-col"
        style={{ perspective: "1000px" }}
      >
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">K</span>
              </div>
              <h1 className="text-white font-bold text-lg">KOODOS</h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-gray-800"
              onClick={closeMobileMenu}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <button
            onClick={goBackToMainMenu}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Menu</span>
          </button>
        </div>

        <div className="p-4 flex-1">
          <div className="flex items-center space-x-3 mb-6">
            <menuItem.icon className="w-6 h-6 text-white" />
            <h2 className="text-white font-semibold text-lg">{menuItem.name}</h2>
          </div>

          <nav className="space-y-2">
            {menuItem.subItems.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <subItem.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{subItem.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    )
  }

  const SidebarContent = () => (
    <div className="relative h-full overflow-hidden" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="wait">
        {!currentPage ? (
          <motion.div
            key="main-menu"
            variants={mainMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex flex-col"
          >
            <div className="p-6 flex-1 overflow-y-auto">
              {/* Modern Gaming Header */}
                          <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 gaming-gradient rounded-xl flex items-center justify-center neon-glow">
                    <span className="text-white font-black text-xl gaming-title">K</span>
                  </div>
                  <div className="absolute -inset-1 gaming-gradient rounded-xl opacity-20 blur-sm"></div>
                </div>
                <div>
                  <h1 className="text-white font-black text-xl gaming-title">KOODOS</h1>
                  <p className="text-gaming-cyan text-xs font-semibold">Gaming Hub</p>
                </div>
              </div>
                <div className="flex items-center gap-2">
                  <DarkModeToggle />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden text-white hover:bg-sidebar-accent rounded-lg"
                    onClick={closeMobileMenu}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <nav className="space-y-2">
                {menuStructure.map((item) => (
                  <div key={item.name}>
                    {item.subItems &&
                    ["Reviews", "Gaming", "Anime & Manga", "Follow Koodos", "More"].includes(item.name) ? (
                      <button
                        onClick={() => openSubmenuPage(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-sidebar-accent rounded-xl transition-all duration-200 text-sm gaming-subtitle group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 bg-sidebar-accent rounded-lg group-hover:bg-sidebar-primary transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-sidebar-accent rounded-xl transition-all duration-200 text-sm gaming-subtitle group"
                        onClick={handleLinkClick}
                      >
                        <div className="p-1.5 bg-sidebar-accent rounded-lg group-hover:bg-sidebar-primary transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="p-6 border-t border-sidebar-border">
              <div className="space-y-3 mb-6">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent rounded-xl text-sm gaming-subtitle group"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <div className="p-1.5 bg-sidebar-accent rounded-lg group-hover:bg-sidebar-primary transition-colors mr-3">
                    <Search className="w-4 h-4" />
                  </div>
                  Search on KOODOS
                </Button>
              </div>

              <div className="bg-sidebar-accent rounded-xl p-4 border border-sidebar-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 gaming-gradient rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold gaming-subtitle">Join KOODOS</p>
                    <p className="text-gaming-cyan text-xs font-medium">Pro Gamer</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full gaming-button text-xs py-2">Sign In</Button>
                  <Button
                    variant="outline"
                    className="w-full border-sidebar-border text-sidebar-foreground hover:bg-sidebar-primary hover:text-white text-xs py-2 bg-transparent rounded-xl"
                  >
                    Sign Up
                  </Button>
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

      <div className="fixed left-0 top-0 h-full w-64 bg-black border-r border-gray-800 z-40 flex flex-col hidden lg:flex">
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
              variants={mainMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 h-full w-[85vw] max-w-80 bg-black border-r border-gray-800 z-50 flex flex-col lg:hidden shadow-2xl"
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
