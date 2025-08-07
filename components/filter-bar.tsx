"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

interface FilterBarProps {
  categories: string[]
  onSearch: (query: string) => void
  onCategoryFilter: (category: string) => void
  onSortChange: (sort: string) => void
}

export default function FilterBar({ categories, onSearch, onCategoryFilter, onSortChange }: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <Button type="submit" className="bg-red-600 hover:bg-red-700">
            Search
          </Button>
        </form>

        <div className="flex gap-2 items-center">
          <Filter className="w-4 h-4 text-gray-400" />
          <Select onValueChange={onCategoryFilter}>
            <SelectTrigger className="w-40 bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={onSortChange}>
            <SelectTrigger className="w-32 bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
