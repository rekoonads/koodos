import PageLayout from "@/components/page-layout"
import ArticleCard from "@/components/article-card"

const opinions = [
  {
    id: "1",
    title: "Why Single-Player Games Still Matter",
    excerpt: "In an age of multiplayer dominance, single-player experiences remain crucial to gaming.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Opinion",
    author: "Gaming Philosopher",
    publishedAt: "2 days ago",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "The Problem with Modern Game Pricing",
    excerpt: "Are $70 games justified, or are publishers pushing too far?",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industry Analysis",
    author: "Economic Analyst",
    publishedAt: "4 days ago",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "Nostalgia vs. Innovation in Gaming",
    excerpt: "How the industry balances beloved classics with groundbreaking new ideas.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Culture",
    author: "Cultural Critic",
    publishedAt: "1 week ago",
    readTime: "10 min read",
  },
]

export default function OpinionsPage() {
  return (
    <PageLayout title="Opinions & Columns" description="Thoughtful commentary and analysis on gaming culture">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opinions.map((opinion) => (
          <ArticleCard key={opinion.id} {...opinion} />
        ))}
      </div>
    </PageLayout>
  )
}
