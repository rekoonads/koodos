import PageLayout from "@/components/page-layout"
import ArticleCard from "@/components/article-card"

const interviews = [
  {
    id: "1",
    title: "Exclusive: Hideo Kojima on Death Stranding 2",
    excerpt: "The legendary game designer discusses his upcoming sequel and creative process.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Developer Interview",
    author: "Senior Editor",
    publishedAt: "1 day ago",
    readTime: "15 min read",
  },
  {
    id: "2",
    title: "Marvel Studios President on Gaming Adaptations",
    excerpt: "Kevin Feige talks about bringing Marvel characters to interactive entertainment.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industry Interview",
    author: "Entertainment Reporter",
    publishedAt: "3 days ago",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "Indie Developer Success Story",
    excerpt: "How a small team created one of the year's most beloved indie games.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Indie Interview",
    author: "Indie Specialist",
    publishedAt: "1 week ago",
    readTime: "10 min read",
  },
]

export default function InterviewsPage() {
  return (
    <PageLayout title="Interviews" description="Exclusive interviews with developers, creators, and industry leaders">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interviews.map((interview) => (
          <ArticleCard key={interview.id} {...interview} />
        ))}
      </div>
    </PageLayout>
  )
}
