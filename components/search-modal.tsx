"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Clock, TrendingUp } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const recentSearches = ["Cyberpunk 2077 review", "Best gaming laptops 2024", "Baldur's Gate 3 guide"]

  const trendingSearches = ["Spider-Man 2 PS5", "ASUS ROG Ally", "Gaming headsets", "RTX 4090 review"]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white">Search KOODOS</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for games, reviews, news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              autoFocus
            />
          </div>

          {!searchQuery && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </h3>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 text-sm"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {trendingSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start text-gray-400 hover:text-white border-gray-600 hover:bg-gray-800 text-sm bg-transparent"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {searchQuery && (
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Search results for "{searchQuery}"</p>
              <div className="space-y-2">
                <div className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
                  <h4 className="text-white font-medium">Cyberpunk 2077: Phantom Liberty Review</h4>
                  <p className="text-gray-400 text-sm">Game Review • 4.5 rating • 1 day ago</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
                  <h4 className="text-white font-medium">Best Gaming Setup for 2024</h4>
                  <p className="text-gray-400 text-sm">PC Gaming Guide • 3 days ago</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
