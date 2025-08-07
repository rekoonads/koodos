import PageLayout from "@/components/page-layout"
import ArticleCard from "@/components/article-card"

const scienceArticles = [
  {
    id: "1",
    title: "The Science Behind Ray Tracing in Games",
    excerpt: "Understanding the physics and mathematics that make realistic lighting possible.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Technology",
    author: "Science Writer",
    publishedAt: "2 days ago",
    readTime: "15 min read",
  },
  {
    id: "2",
    title: "How AI is Revolutionizing Game Development",
    excerpt: "Machine learning applications in procedural generation and NPC behavior.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Artificial Intelligence",
    author: "AI Researcher",
    publishedAt: "1 week ago",
    readTime: "18 min read",
  },
  {
    id: "3",
    title: "The Psychology of Gaming Addiction",
    excerpt: "Scientific research into gaming habits and their effects on the brain.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Psychology",
    author: "Behavioral Scientist",
    publishedAt: "4 days ago",
    readTime: "12 min read",
  },
]

export default function SciencePage() {
  return (
    <PageLayout title="Science" description="Exploring the science and technology behind gaming">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scienceArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </PageLayout>
  )
}
