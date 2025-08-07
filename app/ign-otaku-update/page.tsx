import Sidebar from "@/components/sidebar"
import Image from "next/image"
import Link from "next/link"
import { Clock, User, Tv } from "lucide-react"

const otakuArticles = [
  {
    id: "1",
    title: "Weekly Anime Roundup: New Releases and Updates",
    excerpt: "Your weekly dose of anime news, episode reviews, and upcoming releases.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Weekly Update",
    author: "Otaku Editor",
    publishedAt: "1 day ago",
    readTime: "15 min read",
  },
  {
    id: "2",
    title: "Manga Recommendations: Hidden Gems You Should Read",
    excerpt: "Discover lesser-known manga series that deserve your attention.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Recommendations",
    author: "Manga Curator",
    publishedAt: "3 days ago",
    readTime: "10 min read",
  },
  {
    id: "3",
    title: "Anime Industry News: Studio Updates and Announcements",
    excerpt: "Latest news from major anime studios and upcoming project announcements.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industry News",
    author: "Industry Reporter",
    publishedAt: "5 days ago",
    readTime: "12 min read",
  },
]

export default function IGNOtakuUpdatePage() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="mb-8 flex items-center gap-3">
            <Tv className="w-8 h-8 text-orange-500" />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">KOODOS Otaku Update</h1>
              <p className="text-gray-400 text-lg">Weekly anime and manga updates for otaku culture</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otakuArticles.map((article) => (
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
                      <span className="bg-orange-600 text-white px-2 py-1 text-xs font-semibold rounded">
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
