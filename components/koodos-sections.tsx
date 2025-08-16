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
  {
    id: 2,
    title: "Steam Deck OLED Model Released",
    description: "Valve's updated handheld features vibrant OLED display and improved battery life.",
    image: "/steam-deck-oled-handheld.png",
    category: "Hardware News",
    timeAgo: "4 hours ago",
    author: "David Kim",
    views: "8.2K",
    comments: 156,
  },
  {
    id: 3,
    title: "Epic Games Store Weekly Free Games",
    description: "This week's free titles include AAA games worth over $120 in total value.",
    image: "/epic-free-games.png",
    category: "Gaming News",
    timeAgo: "6 hours ago",
    author: "Maria Santos",
    views: "15.7K",
    comments: 203,
  },
  {
    id: 4,
    title: "Nintendo Direct February 2024",
    description: "Major announcements including new Mario game and Zelda DLC expansion details.",
    image: "/nintendo-direct-news.png",
    category: "Gaming News",
    timeAgo: "1 day ago",
    author: "Alex Chen",
    views: "25.3K",
    comments: 445,
  },
]

export function KoodosLatestNews() {
  return (
    <section className="mb-8">
      <div className="gaming-grid">
        {latestNewsData.map((news) => (
          <Link key={news.id} href={`/news/${news.id}`} className="group">
            <div className="gaming-card group-hover:scale-[1.02]">
              <div className="relative">
                <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-40 object-cover" />
                <div className="absolute top-2 left-2">
                  <span className="gaming-badge-primary">{news.category}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors gaming-subtitle">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2 gaming-body">{news.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{news.timeAgo}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{news.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{news.comments}</span>
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

export function KoodosLatestReviews() {
  const reviews = [
    {
      id: 1,
      title: "Cyberpunk 2077: Phantom Liberty Review",
      description:
        "The long-awaited expansion brings new life to Night City with compelling characters and improved gameplay mechanics that finally deliver on the original promise.",
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
    {
      id: 2,
      title: "Spider-Man 2 PS5 Review",
      description:
        "Insomniac Games delivers another web-slinging masterpiece with dual protagonists and enhanced combat that sets new standards for superhero games.",
      rating: 4.8,
      timeAgo: "3 days ago",
      author: "Sarah Johnson",
      image: "/spider-man-2-ps5.png",
      category: "Game Review",
      platform: "PS5 Exclusive",
      likes: 2156,
      comments: 203,
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "ASUS ROG Ally Gaming Handheld Review",
      description:
        "A powerful Windows-based handheld that challenges the Steam Deck with impressive performance and versatility for PC gaming on the go.",
      rating: 4.2,
      timeAgo: "5 days ago",
      author: "Mike Rodriguez",
      image: "/asus-rog-ally-handheld-gaming.png",
      category: "Hardware Review",
      platform: "Windows Handheld",
      likes: 892,
      comments: 156,
      readTime: "15 min read",
    },
    {
      id: 4,
      title: "Baldur's Gate 3 Complete Review",
      description:
        "Larian Studios crafts the definitive RPG experience with unparalleled choice and consequence that redefines what modern RPGs can achieve.",
      rating: 4.9,
      timeAgo: "1 week ago",
      author: "Emma Wilson",
      image: "/baldurs-gate-3-rpg.png",
      category: "Game Review",
      platform: "PC, PS5, Xbox",
      likes: 3421,
      comments: 445,
      readTime: "20 min read",
    },
  ]

  return (
    <section>
      <div className="gaming-grid">
        {reviews.map((review) => (
          <Link key={review.id} href={`/reviews/${review.id}`} className="group">
            <div className="gaming-card group-hover:scale-[1.02]">
              <div className="relative">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt={review.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span className="gaming-badge-accent">{review.category}</span>
                </div>
                <div className="absolute top-2 right-2 bg-card/90 text-card-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm border border-border">
                  <Star className="w-3 h-3 fill-gaming-orange text-gaming-orange" />
                  <span className="font-medium">{review.rating}</span>
                </div>
                <div className="absolute bottom-2 left-2 bg-card/90 text-card-foreground text-xs px-2 py-1 rounded backdrop-blur-sm border border-border">
                  {review.platform}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors gaming-subtitle">
                  {review.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-3 gaming-body">{review.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{review.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{review.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{review.timeAgo}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{review.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{review.comments}</span>
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
