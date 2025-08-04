import Sidebar from "@/components/sidebar"
import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "lucide-react"

const mobileArticles = [
  {
    id: "1",
    title: "Best Mobile Games of 2024: iOS and Android Picks",
    excerpt: "The top mobile games that are worth your time and storage space.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile Games",
    author: "Mobile Expert",
    publishedAt: "1 day ago",
    readTime: "10 min read",
  },
  {
    id: "2",
    title: "PUBG Mobile vs Free Fire: Battle Royale Showdown",
    excerpt: "Comparing the two most popular mobile battle royale games.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Battle Royale",
    author: "Mobile Gaming",
    publishedAt: "3 days ago",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Gaming Phone Buying Guide 2024",
    excerpt: "The best smartphones optimized for mobile gaming performance.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Hardware",
    author: "Phone Reviewer",
    publishedAt: "5 days ago",
    readTime: "12 min read",
  },
]

export default function MobilePage() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Mobile Gaming</h1>
            <p className="text-gray-400 text-lg">Mobile games, reviews, and gaming phone coverage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileArticles.map((article) => (
              <Link key={article.id} href={`/article/${article.id}`}>
                <article className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-2 py-1 text-xs font-semibold rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
