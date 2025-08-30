import { Star, Clock, User, Eye, MessageCircle, ThumbsUp } from "lucide-react"
import Link from "next/link"

const latestNewsData = [
  {
    id: 1,
    title: "PlayStation 5 Pro Officially Announced",
    description: "Sony reveals enhanced console with 8K gaming support and improved ray tracing capabilities.",
    image: "/playstation-5-pro.png",
    category: "Gaming News",
    timeAgo: "2 hours ago",
    author: "Jessica Park",
    views: "12.5K",
    comments: 89,
  },
]

export function KoodosLatestNews({ articles = [] }: { articles?: any[] }) {
  return (
    <section className="mb-8">
      <div className="gaming-grid">
        {(articles.length > 0 ? articles : latestNewsData).map((news) => (
          <Link key={news.id} href={`/news/${news.id}`} className="group">
            <div className="gaming-card group-hover:scale-[1.02]">
              <div className="relative">
                <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-40 object-cover" />
                <div className="absolute top-2 left-2">
                  <span className="gaming-badge-primary">{typeof news.category === 'string' ? news.category : news.category?.name || 'News'}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 gaming-subtitle">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2 gaming-body">{news.description || news.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{typeof news.author === 'string' ? news.author : news.author?.name || 'KOODOS'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{news.timeAgo || news.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function KoodosLatestReviews({ articles = [] }: { articles?: any[] }) {
  const reviews = [
    {
      id: 1,
      title: "Cyberpunk 2077: Phantom Liberty Review",
      description: "The long-awaited expansion brings new life to Night City.",
      rating: 4.5,
      timeAgo: "1 day ago",
      author: "Alex Chen",
      image: "/cyberpunk-phantom-liberty.png",
      category: "Game Review",
      platform: "PC, PS5, Xbox",
      likes: 1247,
      comments: 89,
      readTime: "8 min read",
    },
  ]

  return (
    <section>
      <div className="gaming-grid">
        {(articles.length > 0 ? articles : reviews).map((review) => (
          <Link key={review.id} href={`/reviews/${review.id}`} className="group">
            <div className="gaming-card group-hover:scale-[1.02]">
              <div className="relative">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="gaming-badge-accent">{typeof review.category === 'string' ? review.category : review.category?.name || 'Review'}</span>
                </div>
                {review.rating && (
                  <div className="absolute top-2 right-2 bg-card/90 text-card-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gaming-orange text-gaming-orange" />
                    <span className="font-medium">{review.rating}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 gaming-subtitle">
                  {review.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-3 gaming-body">{review.description || review.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{typeof review.author === 'string' ? review.author : review.author?.name || 'KOODOS'}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}