"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, X } from "lucide-react"
import Link from "next/link"

interface TagFiltersProps {
  currentTag?: string
}

export function TagFilters({ currentTag }: TagFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Mock popular tags data
  const popularTags = [
    { name: "RPG", count: 45, category: "Genre" },
    { name: "PC Gaming", count: 38, category: "Platform" },
    { name: "Hardware", count: 32, category: "Category" },
    { name: "Reviews", count: 28, category: "Type" },
    { name: "Gaming Industry", count: 25, category: "Topic" },
    { name: "Technology", count: 22, category: "Topic" },
    { name: "Esports", count: 20, category: "Category" },
    { name: "Indie Games", count: 18, category: "Genre" },
    { name: "PlayStation", count: 16, category: "Platform" },
    { name: "Xbox", count: 15, category: "Platform" },
    { name: "Nintendo", count: 14, category: "Platform" },
    { name: "Mobile Gaming", count: 12, category: "Platform" },
  ]

  const categories = ["All", "Genre", "Platform", "Category", "Type", "Topic"]

  const filteredTags = popularTags.filter((tag) => {
    const matchesSearch = tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === "All" || tag.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-white rounded-lg p-6 mb-8 border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Browse by Tags
        </h2>

        {currentTag && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Current tag:</span>
            <Badge variant="default" className="bg-blue-600">
              {currentTag}
              <Link href="/tags" className="ml-2 hover:text-blue-200">
                <X className="w-3 h-3" />
              </Link>
            </Badge>
          </div>
        )}
      </div>

      {/* Search Tags */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category === "All" ? null : category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Popular Tags */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {filteredTags.map((tag) => (
            <Link key={tag.name} href={`/tags/${tag.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <Badge
                variant="outline"
                className={`hover:bg-blue-50 cursor-pointer transition-colors ${
                  currentTag?.toLowerCase() === tag.name.toLowerCase() ? "bg-blue-100 border-blue-300" : ""
                }`}
              >
                {tag.name}
                <span className="ml-1 text-xs text-gray-500">({tag.count})</span>
              </Badge>
            </Link>
          ))}
        </div>

        {filteredTags.length === 0 && searchTerm && (
          <p className="text-gray-500 text-sm">No tags found matching "{searchTerm}"</p>
        )}
      </div>
    </div>
  )
}
