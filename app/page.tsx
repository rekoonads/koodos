import { BannerCarousel } from "@/components/banner-carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"
import { getArticleImageUrl } from "@/lib/cloudinary"
import { getPageMeta, generateMetaTags } from "@/lib/seo-meta"
import { ArticleCarousel } from "@/components/article-carousel"
import { HomePageClient } from "@/components/home-page-client"
import { Metadata } from "next"

// Mock data for demonstration
const generateMockArticles = (page: number) => {
  const categories = ['Gaming', 'Reviews', 'Tech', 'News', 'Guides']
  const titles = [
    'Breaking Gaming Industry News',
    'In-Depth Game Analysis',
    'Latest Tech Innovations',
    'Gaming Market Trends',
    'Pro Gaming Strategies',
    'Hardware Review Roundup',
    'Indie Game Spotlight',
    'Esports Tournament Coverage',
    'Gaming Culture Deep Dive',
    'Future of Gaming Technology'
  ]
  
  const baseId = page * 10
  return Array.from({ length: 10 }, (_, i) => ({
    id: `article-${baseId + i}`,
    title: `${titles[i]} - ${new Date().getFullYear() - Math.floor(Math.random() * 2)}`,
    excerpt: `Detailed coverage and analysis of ${categories[i % categories.length].toLowerCase()} topics with expert insights and community perspectives.`,
    category: categories[i % categories.length],
    author: ['Alex Chen', 'Sarah Johnson', 'Mike Rodriguez', 'Emma Wilson', 'David Kim'][i % 5],
    publishedAt: new Date(Date.now() - (baseId + i) * 24 * 60 * 60 * 1000).toISOString(),
    readTime: Math.floor(Math.random() * 8) + 3,
    views: Math.floor(Math.random() * 50000) + 1000,
    comments: Math.floor(Math.random() * 200) + 5,
    slug: `article-${baseId + i}-${titles[i].toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    featured: i === 0 && page === 0
  }))
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getPageMeta('home')
  return generateMetaTags(meta) || {
    title: 'Koodos - Gaming News, Reviews & Guides',
    description: 'Your ultimate destination for gaming news, reviews, guides, and entertainment content.'
  }
}

export default function HomePage() {
  return <HomePageClient />
}