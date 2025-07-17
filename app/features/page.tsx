import PageLayout from "@/components/page-layout"
import ArticleCard from "@/components/article-card"

const features = [
  {
    id: "1",
    title: "The Evolution of Open World Games",
    excerpt: "A deep dive into how open world design has changed over the decades.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Analysis",
    author: "Game Analyst",
    publishedAt: "2 days ago",
    readTime: "20 min read",
  },
  {
    id: "2",
    title: "Behind the Scenes: AAA Game Development",
    excerpt: "What it really takes to create a blockbuster video game in today's industry.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industry",
    author: "Industry Expert",
    publishedAt: "1 week ago",
    readTime: "18 min read",
  },
  {
    id: "3",
    title: "The Art of Video Game Music",
    excerpt: "How composers create memorable soundtracks that enhance gameplay.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Culture",
    author: "Music Critic",
    publishedAt: "4 days ago",
    readTime: "14 min read",
  },
]

export default function FeaturesPage() {
  return (
    <PageLayout title="Features" description="In-depth articles and analysis on gaming culture and industry">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <ArticleCard key={feature.id} {...feature} />
        ))}
      </div>
    </PageLayout>
  )
}
