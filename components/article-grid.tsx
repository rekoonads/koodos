import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Amazon Prime Day 2025: Best Deals on GPUs, CPUs, and Gaming Monitors",
    image: "/placeholder.svg?height=300&width=400",
    category: "Tech",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Superman Ending and Post-Credits Explained: Why It's Not About What's Next for the DCU",
    image: "/placeholder.svg?height=300&width=400",
    category: "Movies",
    gradient: "from-orange-600 to-yellow-600",
  },
  {
    id: 3,
    title: "Third-Party PS5 Games Price Drop Report",
    image: "/placeholder.svg?height=300&width=400",
    category: "Gaming",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: 4,
    title: "The Strange Evolution of Superman's Powers",
    image: "/placeholder.svg?height=300&width=400",
    category: "Comics",
    gradient: "from-red-600 to-blue-600",
  },
]

export default function ArticleGrid() {
  return (
    <section className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`}>
            <article className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-60`} />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xs text-white/80 uppercase tracking-wide mb-2">{article.category}</div>
                  <h3 className="text-white font-bold text-sm leading-tight">{article.title}</h3>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
