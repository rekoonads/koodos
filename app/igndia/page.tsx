"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import ArticleCard from "@/components/article-card"
import FilterBar from "@/components/filter-bar"

const articles = [
  {
    id: "1",
    title: "Indian Gaming Industry Reaches New Heights in 2024",
    excerpt: "The Indian gaming market has shown unprecedented growth with mobile gaming leading the charge.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industry",
    author: "Rajesh Kumar",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Top 10 Indian Game Developers to Watch",
    excerpt: "These homegrown studios are making waves in the global gaming scene with innovative titles.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Developers",
    author: "Priya Sharma",
    publishedAt: "4 hours ago",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Esports in India: The Rise of Professional Gaming",
    excerpt: "From PUBG Mobile to Valorant, Indian esports is gaining international recognition.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Esports",
    author: "Arjun Patel",
    publishedAt: "6 hours ago",
    readTime: "6 min read",
  },
]

const categories = ["Industry", "Developers", "Esports", "Mobile Gaming", "PC Gaming"]

export default function IGNdiaPage() {
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const handleSearch = (query: string) => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredArticles(filtered)
  }

  const handleCategoryFilter = (category: string) => {
    if (category === "all") {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter((article) => article.category === category)
      setFilteredArticles(filtered)
    }
  }

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredArticles].sort((a, b) => {
      switch (sort) {
        case "latest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case "popular":
          return Math.random() - 0.5 // Placeholder for actual popularity sorting
        default:
          return 0
      }
    })
    setFilteredArticles(sorted)
  }

  return (
    <PageLayout title="KOODOS India" description="Gaming news and content focused on the Indian gaming community">
      <FilterBar
        categories={categories}
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        onSortChange={handleSortChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </PageLayout>
  )
}
