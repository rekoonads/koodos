import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye } from "lucide-react"

interface RelatedArticlesProps {
  currentSlug: string
  category: string
}

export function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  // Mock related articles - in real app, fetch from API
  const relatedArticles = [
    {
      slug: "best-gaming-laptops-2024",
      title: "Best Gaming Laptops of 2024: Complete Buyer's Guide",
      excerpt: "Discover the top gaming laptops that deliver exceptional performance",
      image: "/gaming-laptop.png",
      category: "Hardware",
      readTime: "6 min read",
      views: 8500,
      publishedAt: "2024-01-12T10:00:00Z",
    },
    {
      slug: "steam-deck-vs-rog-ally",
      title: "Steam Deck vs ROG Ally: Which Handheld Reigns Supreme?",
      excerpt: "Comprehensive comparison of the two leading gaming handhelds",
      image: "/handheld-gaming.png",
      category: "Reviews",
      readTime: "10 min read",
      views: 15200,
      publishedAt: "2024-01-08T14:00:00Z",
    },
    {
      slug: "upcoming-games-2024",
      title: "Most Anticipated Games of 2024",
      excerpt: "The biggest releases coming this year that you won't want to miss",
      image: "/upcoming-games.png",
      category: "News",
      readTime: "7 min read",
      views: 22000,
      publishedAt: "2024-01-05T09:00:00Z",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 text-gray-800">
                {article.category}
              </Badge>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
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
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
