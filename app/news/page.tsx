"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import ArticleCard from "@/components/article-card"
import FilterBar from "@/components/filter-bar"

const newsArticles = [
  {
    id: "1",
    title: "PlayStation 6 Rumors: What We Know So Far",
    excerpt: "Latest leaks suggest Sony's next-generation console could arrive sooner than expected.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Console",
    author: "Gaming Insider",
    publishedAt: "1 hour ago",
    readTime: "4 min read",
  },
  {
    id: "2",
    title: "Microsoft Acquires Major Gaming Studio",
    excerpt: "The tech giant continues its expansion in the gaming industry with another significant acquisition.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Business",
    author: "Tech Reporter",
    publishedAt: "3 hours ago",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "New AAA Title Announced at Gaming Conference",
    excerpt: "Developers reveal their most ambitious project yet with stunning gameplay footage.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Games",
    author: "Conference Reporter",
    publishedAt: "5 hours ago",
    readTime: "7 min read",
  },
]

const categories = ["Console", "PC", "Mobile", "Business", "Games", "Industry"]

export default function NewsPage() {
  const [filteredArticles, setFilteredArticles] = useState(newsArticles)

  const handleSearch = (query: string) => {
    const filtered = newsArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredArticles(filtered)
  }

  const handleCategoryFilter = (category: string) => {
    if (category === "all") {
      setFilteredArticles(newsArticles)
    } else {
      const filtered = newsArticles.filter((article) => article.category === category)
      setFilteredArticles(filtered)
    }
  }

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredArticles].sort((a, b) => {
      switch (sort) {
        case "latest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case "popular":
          return Math.random() - 0.5
        default:
          return 0
      }
    })
    setFilteredArticles(sorted)
  }

  return (
    <PageLayout title="News" description="Latest gaming and entertainment news from around the world">
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
