"use client"

import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import { Loader2 } from "lucide-react"

interface Post {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  views: number
  likes: number
  comments: number
  slug: string
}

interface PostsListProps {
  category?: string
  limit?: number
  className?: string
}

export default function PostsList({ category, limit = 12, className = "" }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mock data - replace with actual API call
  const mockPosts: Post[] = [
    {
      id: "1",
      title: "The Future of Gaming: AI and Machine Learning Revolution",
      excerpt: "How artificial intelligence is transforming game development and player experiences in unprecedented ways.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Technology",
      author: "Tech Expert",
      publishedAt: "2 hours ago",
      views: 1250,
      likes: 89,
      comments: 23,
      slug: "future-of-gaming-ai-revolution"
    },
    {
      id: "2",
      title: "Indie Game Spotlight: Hidden Gems You Need to Play",
      excerpt: "Discover amazing independent games that are pushing creative boundaries and redefining what games can be.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Indie",
      author: "Indie Curator",
      publishedAt: "4 hours ago",
      views: 890,
      likes: 67,
      comments: 15,
      slug: "indie-game-hidden-gems"
    },
    {
      id: "3",
      title: "Esports in India: The Rise of Professional Gaming",
      excerpt: "From PUBG Mobile to Valorant, Indian esports is gaining international recognition and massive viewership.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Esports",
      author: "Esports Reporter",
      publishedAt: "6 hours ago",
      views: 2100,
      likes: 156,
      comments: 42,
      slug: "esports-india-professional-gaming"
    },
    {
      id: "4",
      title: "Next-Gen Console Wars: Performance Analysis",
      excerpt: "Comparing the latest gaming consoles and their impact on the industry landscape.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Hardware",
      author: "Hardware Reviewer",
      publishedAt: "8 hours ago",
      views: 1680,
      likes: 124,
      comments: 38,
      slug: "next-gen-console-wars-analysis"
    }
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Filter by category if specified
        let filteredPosts = mockPosts
        if (category) {
          filteredPosts = mockPosts.filter(post => 
            post.category.toLowerCase() === category.toLowerCase()
          )
        }
        
        // Apply limit
        const limitedPosts = filteredPosts.slice(0, limit)
        
        setPosts(limitedPosts)
        setError(null)
      } catch (err) {
        setError("Failed to load posts")
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [category, limit])

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
        <span className="ml-2 text-gray-600">Loading posts...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-600 mb-4">No posts found</p>
        {category && (
          <p className="text-sm text-gray-500">
            No posts available in the "{category}" category
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {posts.map((post, index) => (
        <div
          key={post.id}
          style={{
            animationDelay: `${index * 100}ms`
          }}
          className="animate-fade-in-up"
        >
          <PostCard {...post} />
        </div>
      ))}
    </div>
  )
}