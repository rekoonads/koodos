import type { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TagFilters } from "@/components/tag-filters"
import { Star, Clock, Eye, TagIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface TagPageProps {
  params: {
    tag: string
  }
}

// Mock function to get articles by tag
const getArticlesByTag = async (tag: string) => {
  const allArticles = [
    {
      id: "1",
      title: "The Future of Gaming: What to Expect in 2024",
      slug: "future-of-gaming-2024",
      excerpt: "Exploring the latest trends and innovations shaping the gaming industry",
      image: "/futuristic-gaming-setup.png",
      category: "News",
      tags: ["Gaming Industry", "Technology", "Future", "Hardware"],
      author: "Alex Chen",
      publishedAt: "2024-01-15T10:00:00Z",
      readTime: "5 min read",
      views: 12500,
      type: "article",
    },
    {
      id: "2",
      title: "Cyberpunk 2077: Phantom Liberty Review",
      slug: "cyberpunk-2077-phantom-liberty-review",
      excerpt: "CD Projekt RED's ambitious expansion finally delivers on the promise",
      image: "/cyberpunk-phantom-liberty.png",
      category: "Reviews",
      tags: ["RPG", "Cyberpunk", "CD Projekt RED", "PC Gaming"],
      author: "Sarah Martinez",
      publishedAt: "2024-01-10T14:00:00Z",
      readTime: "8 min read",
      views: 25000,
      rating: 4.5,
      type: "review",
    },
    {
      id: "3",
      title: "Best Gaming Laptops of 2024",
      slug: "best-gaming-laptops-2024",
      excerpt: "Complete buyer's guide for gaming laptops",
      image: "/gaming-laptop.png",
      category: "Hardware",
      tags: ["Hardware", "Gaming Laptops", "Buying Guide", "Technology"],
      author: "Mike Johnson",
      publishedAt: "2024-01-12T10:00:00Z",
      readTime: "12 min read",
      views: 18000,
      type: "article",
    },
  ]

  const decodedTag = decodeURIComponent(tag).replace(/-/g, " ")
  return allArticles.filter((article) =>
    article.tags.some((articleTag) => articleTag.toLowerCase().includes(decodedTag.toLowerCase())),
  )
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag).replace(/-/g, " ")

  return {
    title: `${tag} Articles & Reviews | KOODOS`,
    description: `Browse all articles and reviews tagged with ${tag} on KOODOS gaming hub`,
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const articles = await getArticlesByTag(params.tag)
  const tagName = decodeURIComponent(params.tag).replace(/-/g, " ")

  return (
    <div className="min-h-screen bg-black">
      <Sidebar />

      <main className="ml-64 bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <TagIcon className="w-8 h-8 text-white" />
              <h1 className="text-4xl font-bold text-white capitalize">{tagName}</h1>
            </div>
            <p className="text-blue-100 text-lg">
              {articles.length} article{articles.length !== 1 ? "s" : ""} and review{articles.length !== 1 ? "s" : ""}{" "}
              tagged with "{tagName}"
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <TagFilters currentTag={tagName} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 text-gray-800">
                      {article.category}
                    </Badge>
                    {article.type === "review" && article.rating && (
                      <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold">
                        <Star className="w-3 h-3 inline mr-1" />
                        {article.rating}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <CardTitle className="mb-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/${article.type === "review" ? "reviews" : "articles"}/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Link key={tag} href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge variant="outline" className="text-xs hover:bg-blue-50 cursor-pointer">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                    {article.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{article.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>By {article.author}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-12">
              <TagIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">There are no articles or reviews tagged with "{tagName}" yet.</p>
              <Button asChild>
                <Link href="/">Browse All Articles</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
