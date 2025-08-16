"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  type: "article" | "review"
  category: string
  image?: string
  slug: string
}

export default function EnhancedSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: "1",
      title: "Cyberpunk 2077: Phantom Liberty Review",
      type: "review",
      category: "RPG",
      slug: "cyberpunk-2077-phantom-liberty-review",
    },
    {
      id: "2",
      title: "Best Gaming Laptops 2024",
      type: "article",
      category: "Hardware",
      slug: "best-gaming-laptops-2024",
    },
    {
      id: "3",
      title: "Baldur's Gate 3 Complete Guide",
      type: "article",
      category: "Guides",
      slug: "baldurs-gate-3-complete-guide",
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate API call delay
      const timer = setTimeout(() => {
        const filtered = mockResults.filter((result) => result.title.toLowerCase().includes(query.toLowerCase()))
        setResults(filtered)
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setResults([])
    }
  }, [query])

  const handleSearch = () => {
    setIsOpen(true)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="p-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, reviews, guides..."
                className="w-full bg-gray-800 text-white px-4 py-2 pr-10 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results */}
            {query.length > 2 && (
              <div className="mt-4 max-h-64 overflow-y-auto">
                {isLoading ? (
                  <div className="text-center py-4 text-gray-400">Searching...</div>
                ) : results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((result) => (
                      <a
                        key={result.id}
                        href={`/${result.type === "review" ? "reviews" : "articles"}/${result.slug}`}
                        className="block p-3 hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">{result.title}</h4>
                            <p className="text-gray-400 text-xs mt-1">
                              {result.category} • {result.type}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-gray-400">No results found</div>
                )}
              </div>
            )}

            {/* Popular Searches */}
            {query.length === 0 && (
              <div className="mt-4">
                <h4 className="text-gray-300 font-medium mb-2">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {["Cyberpunk 2077", "PS5 Games", "PC Gaming", "Reviews"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
