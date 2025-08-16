"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Search, User, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { SearchModal } from "@/components/search-modal"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { navigationItems } from "@/components/sidebar"

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const toggleSubmenu = (menuName: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuName) ? prev.filter((name) => name !== menuName) : [...prev, menuName],
    )
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="fixed top-4 left-4 z-50 lg:hidden bg-black/80 text-white hover:bg-black/90"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-black border-gray-800 p-0">
          <div className="flex flex-col h-full">
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold text-sm">K</span>
                  </div>
                  <h1 className="text-white font-bold text-lg">KOODOS</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <DarkModeToggle />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className="flex items-center justify-between w-full px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md transition-colors text-sm"
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                          </div>
                          {expandedMenus.includes(item.name) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>

                        {expandedMenus.includes(item.name) && (
                          <div className="ml-6 mt-1 space-y-1">
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors text-sm"
                            >
                              All {item.name}
                            </Link>
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors text-sm"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md transition-colors text-sm"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-gray-800">
              <div className="space-y-2 mb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-900 text-sm"
                  onClick={() => {
                    setIsSearchOpen(true)
                    setIsOpen(false)
                  }}
                >
                  <Search className="w-4 h-4 mr-3" />
                  Search on KOODOS
                </Button>
              </div>

              <div className="bg-gray-900 rounded-lg p-3">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">Join KOODOS</p>
                    <p className="text-gray-400 text-xs">Pro Gamer</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5">Sign In</Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 text-xs py-1.5 bg-transparent"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
