"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, Heart, Bookmark, Filter } from "lucide-react"
import { fetchArticles, type Article, formatTimeAgo } from "@/lib/api"
import { GameCardOverlay } from "@/components/graphics/game-card-overlay"
import { AnimatedBackground } from "@/components/graphics/animated-background"
import { GamingIcons } from "@/components/graphics/gaming-icons"

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Expansion Launches with Massive Updates",
    excerpt:
      "CD Projekt RED delivers on their promise with the highly anticipated expansion that transforms Night City.",
    featuredImage: "/cyberpunk-phantom-liberty.png",
    imageAlt: "Cyberpunk 2077 Phantom Liberty",
    category: { name: "PC Gaming", color: "#8B5CF6" },
    author: { name: "Alex Chen", avatar: "/diverse-gaming-avatars.png" },
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    views: 15420,
    likes: 892,
    comments: 156,
    tags: ["Cyberpunk 2077", "PC Gaming", "RPG", "CD Projekt RED"],
  },
  {
    id: "2",
    title: "Spider-Man 2 PS5 Exclusive: Web-Swinging Into Gaming History",
    excerpt: "Insomniac Games raises the bar once again with their latest superhero masterpiece.",
    featuredImage: "/spider-man-2-gameplay.png",
    imageAlt: "Spider-Man 2 PS5",
    category: { name: "Console Gaming", color: "#EC4899" },
    author: { name: "Sarah Johnson", avatar: "/diverse-gaming-avatars.png" },
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    views: 23100,
    likes: 1240,
    comments: 203,
    tags: ["Spider-Man", "PlayStation", "Action", "Insomniac Games"],
  },
  {
    id: "3",
    title: "Baldur's Gate 3 Wins Game of the Year at The Game Awards 2023",
    excerpt: "Larian Studios' epic RPG takes home the biggest prize in gaming, beating fierce competition.",
    featuredImage: "/baldurs-gate-3-tga.png",
    imageAlt: "Baldur's Gate 3 Game Awards",
    category: { name: "Industry News", color: "#10B981" },
    author: { name: "Mike Rodriguez", avatar: "/diverse-gaming-avatars.png" },
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    views: 45600,
    likes: 2100,
    comments: 567,
    tags: ["Baldur's Gate 3", "Game Awards", "RPG", "Larian Studios"],
  },
  {
    id: "4",
    title: "Nintendo Direct 2024: Mario's Next Adventure Revealed",
    excerpt: "Nintendo surprises fans with an unexpected announcement during their latest Direct presentation.",
    featuredImage: "/mario-nintendo-2024.png",
    imageAlt: "Nintendo Direct Mario",
    category: { name: "Nintendo", color: "#F59E0B" },
    author: { name: "Emma Wilson", avatar: "/diverse-gaming-avatars.png" },
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    views: 31200,
    likes: 1680,
    comments: 289,
    tags: ["Mario", "Nintendo", "Platform", "Nintendo Direct"],
  },
]

export function LatestNews() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [likedArticles, setLikedArticles] = useState<Set<string>>(new Set())
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Set<string>>(new Set())
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetchArticles({
          limit: 6,
          featured: false,
        })

        if (response.error) {
          setArticles(mockArticles)
        } else {
          setArticles(response.articles || mockArticles)
        }
      } catch (err) {
        setArticles(mockArticles)
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [])

  const handleLike = (articleId: string) => {
    setLikedArticles((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(articleId)) {
        newSet.delete(articleId)
      } else {
        newSet.add(articleId)
      }
      return newSet
    })
  }

  const handleBookmark = (articleId: string) => {
    setBookmarkedArticles((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(articleId)) {
        newSet.delete(articleId)
      } else {
        newSet.add(articleId)
      }
      return newSet
    })
  }

  const filteredArticles = selectedTag
    ? articles.filter((article) => {
        return article.tags?.some((tag) => (typeof tag === "string" ? tag === selectedTag : tag.name === selectedTag))
      })
    : articles

  const allTags = Array.from(
    new Set(
      articles.flatMap((article) => (article.tags || []).map((tag) => (typeof tag === "string" ? tag : tag.name))),
    ),
  )

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="border-b border-gray-300 pb-2">
          <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-48 animate-pulse" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6 relative">
      <AnimatedBackground />
      <div className="border-b-2 border-blue-600 pb-2 inline-block relative z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">Latest News</h2>
          <GamingIcons />
        </div>
      </div>

      <div className="flex items-center gap-2 relative z-10">
        <Filter className="w-4 h-4 text-gray-400" />
        <Button
          variant={selectedTag === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedTag(null)}
          className="text-xs"
        >
          All
        </Button>
        {allTags.slice(0, 6).map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(tag)}
            className="text-xs"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {filteredArticles.slice(0, 4).map((article, index) => (
          <Card
            key={article.id}
            className="bg-gray-800 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer group overflow-hidden"
          >
            <div className="relative aspect-video bg-gray-700 rounded-t-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Game Image</span>
              </div>
              <GameCardOverlay type="news" category={article.category?.name} />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-base line-clamp-2 font-semibold group-hover:text-purple-300 transition-colors">
                <Link href={`/articles/${article.id}`}>{article.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-300 text-sm line-clamp-2 mb-3">{article.excerpt}</p>

              {article.tags && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {article.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs text-gray-400 border-gray-600">
                      {typeof tag === "string" ? tag : tag.name}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatTimeAgo(article.createdAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{article.views?.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      handleLike(article.id)
                    }}
                    className={`flex items-center gap-1 text-xs transition-colors ${
                      likedArticles.has(article.id) ? "text-red-400" : "text-gray-400 hover:text-red-400"
                    }`}
                  >
                    <Heart className={`w-3 h-3 ${likedArticles.has(article.id) ? "fill-current" : ""}`} />
                    <span>{(article.likes || 0) + (likedArticles.has(article.id) ? 1 : 0)}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      handleBookmark(article.id)
                    }}
                    className={`flex items-center gap-1 text-xs transition-colors ${
                      bookmarkedArticles.has(article.id) ? "text-blue-400" : "text-gray-400 hover:text-blue-400"
                    }`}
                  >
                    <Bookmark className={`w-3 h-3 ${bookmarkedArticles.has(article.id) ? "fill-current" : ""}`} />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
