import Sidebar from "@/components/sidebar"
import Image from "next/image"
import Link from "next/link"
import { Clock, User, Atom } from "lucide-react"

const scienceArticles = [
  {
    id: "1",
    title: "The Science Behind Ray Tracing in Modern Games",
    excerpt: "Understanding the physics and mathematics that make realistic lighting possible in gaming.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Technology",
    author: "Science Writer",
    publishedAt: "2 days ago",
    readTime: "15 min read",
  },
  {
    id: "2",
    title: "How AI is Revolutionizing Game Development",
    excerpt: "Machine learning applications in procedural generation and NPC behavior systems.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Artificial Intelligence",
    author: "AI Researcher",
    publishedAt: "1 week ago",
    readTime: "18 min read",
  },
  {
    id: "3",
    title: "The Psychology of Gaming: Why We Play",
    excerpt: "Scientific research into gaming habits and their effects on human behavior and cognition.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Psychology",
    author: "Behavioral Scientist",
    publishedAt: "4 days ago",
    readTime: "12 min read",
  },
]

export default function SciencePage() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="mb-8 flex items-center gap-3">
            <Atom className="w-8 h-8 text-blue-500" />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Science</h1>
              <p className="text-gray-400 text-lg">Exploring the science and technology behind gaming</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scienceArticles.map((article) => (
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
                      <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">
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
