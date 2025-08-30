export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string | null
  imageAlt: string | null
  published: boolean
  featured: boolean
  views: number
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  category: {
    id: string
    name: string
    slug: string
    color: string
  }
  author: {
    id: string
    name: string | null
    avatar: string | null
  }
  tags: Array<{
    id: string
    name: string
    slug: string
  }>
  likes?: number
  comments?: number
}

export interface Review {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string | null
  imageAlt: string | null
  gameTitle: string
  platform: string[]
  rating: number
  pros: string[]
  cons: string[]
  published: boolean
  featured: boolean
  views: number
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  category: {
    id: string
    name: string
    slug: string
    color: string
  }
  author: {
    id: string
    name: string | null
    avatar: string | null
  }
  tags: Array<{
    id: string
    name: string
    slug: string
  }>
  likes?: number
  comments?: number
}

export interface ApiResponse<T> {
  data?: T
  articles?: Article[]
  reviews?: Review[]
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
  error?: string
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Expansion Launches with Massive Updates",
    slug: "cyberpunk-2077-phantom-liberty-expansion",
    excerpt:
      "CD Projekt RED delivers on their promise with the highly anticipated expansion that transforms Night City.",
    content: "Full article content here...",
    featuredImage: "/cyberpunk-phantom-liberty.png",
    imageAlt: "Cyberpunk 2077 Phantom Liberty",
    published: true,
    featured: false,
    views: 15420,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    category: { id: "1", name: "PC Gaming", slug: "pc-gaming", color: "#8B5CF6" },
    author: { id: "1", name: "Alex Chen", avatar: "/diverse-gaming-avatars.png" },
    tags: [{ id: "1", name: "RPG", slug: "rpg" }],
    likes: 892,
    comments: 156,
  },
  {
    id: "2",
    title: "Spider-Man 2 PS5 Exclusive: Web-Swinging Into Gaming History",
    slug: "spider-man-2-ps5-exclusive",
    excerpt: "Insomniac Games raises the bar once again with their latest superhero masterpiece.",
    content: "Full article content here...",
    featuredImage: "/spider-man-2-gameplay.png",
    imageAlt: "Spider-Man 2 PS5",
    published: true,
    featured: false,
    views: 23100,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    category: { id: "2", name: "Console Gaming", slug: "console-gaming", color: "#EC4899" },
    author: { id: "2", name: "Sarah Johnson", avatar: "/diverse-gaming-avatars.png" },
    tags: [{ id: "2", name: "Action", slug: "action" }],
    likes: 1240,
    comments: 203,
  },
  {
    id: "3",
    title: "Baldur's Gate 3 Wins Game of the Year at The Game Awards 2023",
    slug: "baldurs-gate-3-game-of-the-year",
    excerpt: "Larian Studios' epic RPG takes home the biggest prize in gaming, beating fierce competition.",
    content: "Full article content here...",
    featuredImage: "/baldurs-gate-3-tga.png",
    imageAlt: "Baldur's Gate 3 Game Awards",
    published: true,
    featured: true,
    views: 45600,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    category: { id: "3", name: "Industry News", slug: "industry-news", color: "#10B981" },
    author: { id: "3", name: "Mike Rodriguez", avatar: "/diverse-gaming-avatars.png" },
    tags: [{ id: "3", name: "Awards", slug: "awards" }],
    likes: 2100,
    comments: 567,
  },
  {
    id: "4",
    title: "Nintendo Direct 2024: Mario's Next Adventure Revealed",
    slug: "nintendo-direct-2024-mario",
    excerpt: "Nintendo surprises fans with an unexpected announcement during their latest Direct presentation.",
    content: "Full article content here...",
    featuredImage: "/mario-nintendo-2024.png",
    imageAlt: "Nintendo Direct Mario",
    published: true,
    featured: false,
    views: 31200,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    category: { id: "4", name: "Nintendo", slug: "nintendo", color: "#F59E0B" },
    author: { id: "4", name: "Emma Wilson", avatar: "/diverse-gaming-avatars.png" },
    tags: [{ id: "4", name: "Nintendo", slug: "nintendo" }],
    likes: 1680,
    comments: 289,
  },
]

const mockReviews: Review[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Review",
    slug: "cyberpunk-2077-phantom-liberty-review",
    excerpt: "A redemption story that finally delivers on the original promise of Night City.",
    content: "Full review content here...",
    featuredImage: "/cyberpunk-phantom-liberty-review.png",
    imageAlt: "Cyberpunk 2077 Phantom Liberty Review",
    gameTitle: "Cyberpunk 2077: Phantom Liberty",
    platform: ["PC", "PS5", "Xbox Series X"],
    rating: 8.5,
    pros: ["Excellent story", "Improved gameplay", "Great visuals"],
    cons: ["Still some bugs", "Performance issues"],
    published: true,
    featured: false,
    views: 12300,
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    category: { id: "1", name: "RPG", slug: "rpg", color: "#8B5CF6" },
    author: { id: "1", name: "Alex Chen", avatar: "/diverse-gaming-avatars.png" },
    tags: [{ id: "1", name: "RPG", slug: "rpg" }],
    likes: 756,
    comments: 89,
  },
  {
    id: "2",
    title: "Spider-Man 2 PS5 Review: Web-Slinging Perfection",
    slug: "spider-man-2-ps5-review",
    excerpt: "Insomniac Games delivers the definitive superhero gaming experience.",
    content: "Full review content here...",
    featuredImage: "/spider-man-2-ps5-review.png",
    imageAlt: "Spider-Man 2 PS5 Review",
    gameTitle: "Marvel's Spider-Man 2",
    platform: ["PS5"],
    rating: 9.2,
    pros: ["Amazing graphics", "Fluid combat", "Great story"],
    cons: ["Short campaign", "Limited replay value"],
    published: true,
    featured: true,
    views: 18700,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    category: { id: "2", name: "Action", slug: "action", color: "#EC4899" },
    author: { id: "2", name: "Sarah Johnson", avatar: "/diverse-gaming-avatars.png" },
    tags: [{ id: "2", name: "Action", slug: "action" }],
    likes: 1240,
    comments: 156,
  },
  {
    id: "3",
    title: "Baldur's Gate 3 Complete Review",
    slug: "baldurs-gate-3-complete-review",
    excerpt: "Larian Studios crafts the ultimate D&D experience in digital form.",
    content: "Full review content here...",
    featuredImage: "/baldurs-gate-3-tga.png",
    imageAlt: "Baldur's Gate 3 Review",
    gameTitle: "Baldur's Gate 3",
    platform: ["PC", "PS5", "Xbox Series X"],
    rating: 9.8,
    pros: ["Incredible depth", "Amazing story", "Great characters"],
    cons: ["Complex for newcomers", "Long loading times"],
    published: true,
    featured: true,
    views: 34500,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    category: { id: "3", name: "RPG", slug: "rpg", color: "#10B981" },
    author: { id: "3", name: "Mike Rodriguez", avatar: "/diverse-gaming-avatars.png" },
    tags: [{ id: "3", name: "RPG", slug: "rpg" }],
    likes: 2100,
    comments: 423,
  },
]

export async function fetchArticles(params?: {
  page?: number
  limit?: number
  category?: string
  featured?: boolean
}): Promise<ApiResponse<Article[]>> {
  try {
    const searchParams = new URLSearchParams()
    if (params?.page) searchParams.set("page", params.page.toString())
    if (params?.limit) searchParams.set("limit", params.limit.toString())
    if (params?.category) searchParams.set("category", params.category)
    if (params?.featured) searchParams.set("featured", "true")

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const response = await fetch(`${apiUrl}/public/articles?${searchParams.toString()}`)

    if (!response.ok) {
      throw new Error("Failed to fetch articles")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("[v0] API unavailable, using mock articles data")

    let filteredArticles = [...mockArticles]

    if (params?.featured !== undefined) {
      filteredArticles = filteredArticles.filter((article) => article.featured === params.featured)
    }

    if (params?.limit) {
      filteredArticles = filteredArticles.slice(0, params.limit)
    }

    return {
      articles: filteredArticles,
      pagination: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        total: filteredArticles.length,
        pages: Math.ceil(filteredArticles.length / (params?.limit || 10)),
      },
    }
  }
}

export async function fetchReviews(params?: {
  page?: number
  limit?: number
  category?: string
  featured?: boolean
}): Promise<ApiResponse<Review[]>> {
  try {
    const searchParams = new URLSearchParams()
    if (params?.page) searchParams.set("page", params.page.toString())
    if (params?.limit) searchParams.set("limit", params.limit.toString())
    if (params?.category) searchParams.set("category", params.category)
    if (params?.featured) searchParams.set("featured", "true")

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews?${searchParams.toString()}`)

    if (!response.ok) {
      throw new Error("Failed to fetch reviews")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("[v0] API unavailable, using mock reviews data")

    let filteredReviews = [...mockReviews]

    if (params?.featured !== undefined) {
      filteredReviews = filteredReviews.filter((review) => review.featured === params.featured)
    }

    if (params?.limit) {
      filteredReviews = filteredReviews.slice(0, params.limit)
    }

    return {
      reviews: filteredReviews,
      pagination: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        total: filteredReviews.length,
        pages: Math.ceil(filteredReviews.length / (params?.limit || 10)),
      },
    }
  }
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return "Just now"
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`

  return date.toLocaleDateString()
}
