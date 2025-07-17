"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Eye, Share2, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PostPage() {
  const params = useParams()
  const slug = params.slug as string

  // Mock post data - replace with actual data fetching
  const post = {
    id: 1,
    title: "The Future of Gaming: What to Expect in 2024",
    slug: "future-of-gaming-2024",
    content: `
      <p>Gaming has evolved tremendously over the past decade, and 2024 promises to be another groundbreaking year for the industry. From revolutionary hardware to innovative gameplay mechanics, here's what we can expect.</p>
      
      <h2>Next-Generation Graphics</h2>
      <p>With the continued advancement of ray tracing technology and AI-powered upscaling, games are becoming more visually stunning than ever before. The line between reality and virtual worlds continues to blur.</p>
      
      <h2>Cloud Gaming Revolution</h2>
      <p>Cloud gaming services are finally reaching maturity, offering console-quality gaming experiences on any device. This shift is democratizing gaming access worldwide.</p>
      
      <h2>Virtual Reality Mainstream Adoption</h2>
      <p>VR technology has reached a tipping point where it's becoming accessible to mainstream audiences. New headsets are lighter, more affordable, and offer incredible experiences.</p>
      
      <h2>AI-Powered Game Development</h2>
      <p>Artificial intelligence is revolutionizing how games are created, from procedural content generation to intelligent NPCs that adapt to player behavior.</p>
    `,
    excerpt: "Gaming has evolved tremendously over the past decade, and 2024 promises to be another groundbreaking year for the industry.",
    featuredImage: "/placeholder.svg?height=400&width=800",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    publishedAt: "2024-01-15",
    category: "Gaming",
    tags: ["Gaming", "Technology", "Future", "VR", "AI"],
    views: 1250,
    likes: 89,
    comments: 23
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{post.views.toLocaleString()} views</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 -mx-4">
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-[500px] object-cover"
          />
        </div>

        {/* Social Actions */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            {post.likes}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            {post.comments}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
              <p className="text-gray-400 mb-4">
                Gaming journalist and tech enthusiast with over 10 years of experience covering the latest trends in gaming and technology.
              </p>
              <Button variant="outline" size="sm">
                Follow Author
              </Button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Link key={i} href={`/post/related-post-${i}`} className="group">
                <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Related Post ${i}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 group-hover:text-red-400 transition-colors">
                      Related Gaming Article {i}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Brief description of the related article content...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}