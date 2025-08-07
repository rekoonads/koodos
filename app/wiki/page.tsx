"use client"

import type React from "react"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Book, Users, Calendar } from "lucide-react"
import Link from "next/link"

interface WikiEntryProps {
  id: string
  title: string
  summary: string
  category: string
  lastUpdated: string
  contributors: number
}

function WikiEntry({ id, title, summary, category, lastUpdated, contributors }: WikiEntryProps) {
  return (
    <Link href={`/wiki/${id}`}>
      <article className="group cursor-pointer bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors border-l-4 border-red-600">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">{title}</h3>
          <span className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded">{category}</span>
        </div>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{summary}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>Updated {lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{contributors} contributors</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

const wikiEntries = [
  {
    id: "1",
    title: "The Legend of Zelda: Tears of the Kingdom",
    summary: "Comprehensive guide covering story, gameplay mechanics, shrines, and collectibles.",
    category: "Games",
    lastUpdated: "2 days ago",
    contributors: 45,
  },
  {
    id: "2",
    title: "PlayStation 5 Console",
    summary: "Technical specifications, features, games library, and troubleshooting guide.",
    category: "Hardware",
    lastUpdated: "1 week ago",
    contributors: 23,
  },
  {
    id: "3",
    title: "Hideo Kojima",
    summary: "Biography and complete works of the legendary game designer and director.",
    category: "People",
    lastUpdated: "3 days ago",
    contributors: 12,
  },
]

export default function WikiPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <PageLayout title="Wiki" description="Community-driven knowledge base for gaming information">
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search the wiki..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          <Button type="submit" className="bg-red-600 hover:bg-red-700">
            Search
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <Book className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-white font-bold text-xl mb-2">1,247 Articles</h3>
          <p className="text-gray-400">Comprehensive gaming knowledge</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-white font-bold text-xl mb-2">892 Contributors</h3>
          <p className="text-gray-400">Community-driven content</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Updates</h2>
        {wikiEntries.map((entry) => (
          <WikiEntry key={entry.id} {...entry} />
        ))}
      </div>
    </PageLayout>
  )
}
