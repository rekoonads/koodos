import Sidebar from "@/components/sidebar"
import Image from "next/image"
import Link from "next/link"
import { Clock, User, Heart } from "lucide-react"

const cosplayArticles = [
  {
    id: "1",
    title: "Amazing Genshin Impact Cosplays from Comic Con 2024",
    excerpt: "The most impressive character recreations from this year's convention.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Convention",
    author: "Cosplay Expert",
    publishedAt: "2 days ago",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "DIY Cosplay Tutorial: Creating Armor Props on a Budget",
    excerpt: "Step-by-step guide to making professional-looking armor without breaking the bank.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Tutorial",
    author: "Prop Maker",
    publishedAt: "1 week ago",
    readTime: "20 min read",
  },
  {
    id: "3",
    title: "Spotlight: Indian Cosplayers Making Waves Internationally",
    excerpt: "Meet the talented Indian cosplayers gaining recognition on the global stage.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Spotlight",
    author: "Community Writer",
    publishedAt: "4 days ago",
    readTime: "12 min read",
  },
]

export default function CosplayPage() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-pink-500" />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Cosplay</h1>
              <p className="text-gray-400 text-lg">Cosplay showcases, tutorials, and community highlights</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cosplayArticles.map((article) => (
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
                      <span className="bg-pink-600 text-white px-2 py-1 text-xs font-semibold rounded">
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
