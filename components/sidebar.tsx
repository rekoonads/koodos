"use client"

import { useState } from "react"
import Link from "next/link"
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
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const navigationItems = [
  { icon: Home, label: "Home", href: "/", active: true },
  { icon: Globe, label: "IGNdia", href: "/india" },
  { icon: Newspaper, label: "News", href: "/article/news" },
  { icon: Star, label: "Reviews", href: "/article/review", hasSubmenu: true },
  { icon: MessageSquare, label: "Interviews", href: "/article/interview" },
  { icon: FileText, label: "Features", href: "/article/feature" },
  { icon: List, label: "Lists", href: "/article/lists" },
  { icon: MessageCircle, label: "Opinions & Columns", href: "/article/opinion" },
  { icon: BookOpen, label: "Guides", href: "/article/guide" },
  { icon: Search, label: "Wiki", href: "/article/wiki" },
  { icon: Video, label: "Videos", href: "/article/video" },
  { icon: Gamepad2, label: "Gaming", href: "/gaming", hasSubmenu: true },
  { icon: Smartphone, label: "Tech", href: "/tech" },
  { icon: Tv, label: "Anime and Manga", href: "/anime", hasSubmenu: true },
  { icon: Atom, label: "Science", href: "/science-1" },
  { icon: BookMarked, label: "Comics", href: "/comics" },
  { icon: Users, label: "Follow IGN India", href: "/follow", hasSubmenu: true },
  { icon: MoreHorizontal, label: "More", href: "/more", hasSubmenu: true },
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

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
        { label: "IGN Otaku Update", href: "/ign-otaku-update" },
      ],
      "Follow IGN India": [
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

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">IGN</span>
          </div>
          <span className="text-white font-semibold">India</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-2">
        {navigationItems.map((item) => (
          <div key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1">{item.label}</span>
              {item.hasSubmenu && (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    toggleExpanded(item.label)
                  }}
                  className="p-1"
                >
                  {expandedItems.includes(item.label) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              )}
            </Link>
            {item.hasSubmenu && expandedItems.includes(item.label) && (
              <div className="ml-6 mt-1 space-y-1">
                {getSubmenuItems(item.label).map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Search */}
      <div className="p-4 border-t border-gray-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search on IGN India"
            className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Region Selector */}
      <div className="p-4">
        <Select defaultValue="india">
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Change Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Auth Buttons */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <Button variant="ghost" className="flex-1 text-gray-300 hover:text-white">
            Login
          </Button>
          <Button className="flex-1 bg-white text-black hover:bg-gray-200">Register</Button>
        </div>
      </div>
    </div>
  )
}
