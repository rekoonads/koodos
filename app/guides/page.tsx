"use client"

import { useState, useEffect } from "react"
import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"

interface GuideCardProps {
  id: string
  title: string
  description: string
  thumbnail: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  estimatedTime: string
  game: string
  author: string
}

function GuideCard({ id, title, description, thumbnail, difficulty, estimatedTime, game, author, slug }: GuideCardProps & { slug?: string }) {
  const difficultyColors = {
    Beginner: "bg-green-600",
    Intermediate: "bg-yellow-600",
    Advanced: "bg-red-600",
  }

  return (
    <Link href={`/article/guide/${slug || id}`}>
      <article className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
        <div className="relative h-48">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-4 left-4">
            <span className={`text-white px-2 py-1 text-xs font-semibold rounded ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="text-red-400 text-sm font-medium mb-1">{game}</div>
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{author}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

async function fetchGuides() {
  try {
    const response = await fetch('https://admin.koodos.in/api/public/news?category=guides')
    const result = await response.json()
    
    if (result.success && result.data && result.data.articles) {
      return result.data.articles.map((article: any) => ({
        id: article.id,
        title: article.title,
        description: article.excerpt || article.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        thumbnail: article.featuredImage || '/placeholder.svg',
        difficulty: 'Beginner' as const,
        estimatedTime: '15 min read',
        game: 'Gaming',
        author: article.author,
        slug: article.slug
      }))
    }
    return []
  } catch (error) {
    console.error('Failed to fetch guides:', error)
    return []
  }
}

export default function GuidesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [guides, setGuides] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadGuides() {
      const data = await fetchGuides()
      setGuides(data)
      setLoading(false)
    }
    loadGuides()
  }, [])

  const filteredGuides =
    selectedDifficulty === "all"
      ? guides
      : guides.filter((guide) => guide.difficulty.toLowerCase() === selectedDifficulty)

  return (
    <PageLayout title="Guides" description="Comprehensive guides and tutorials for games and gaming">
      <div className="mb-6">
        <div className="flex gap-2 flex-wrap">
          {["all", "beginner", "intermediate", "advanced"].map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedDifficulty === difficulty
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {difficulty === "all" ? "All Guides" : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <GuideCard key={guide.id} {...guide} />
        ))}
      </div>
    </PageLayout>
  )
}
