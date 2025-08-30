import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { CloudinaryImage } from '@/components/cloudinary-image'
import { Clock, Eye, Calendar } from 'lucide-react'

interface ArticlePageProps {
  params: {
    category: string
    slug: string
  }
}

// Mock article data for fallback
const getMockArticle = (slug: string) => {
  const articles = [
    { title: 'Cyberpunk 2077: Phantom Liberty Review', image: '/cyberpunk-phantom-liberty.png', category: 'Reviews' },
    { title: 'Spider-Man 2 PS5 Complete Review', image: '/spider-man-2-ps5.png', category: 'Reviews' },
    { title: 'Baldur\'s Gate 3 RPG Guide', image: '/baldurs-gate-3-rpg.png', category: 'Guides' },
    { title: 'PlayStation 5 Pro Announcement', image: '/playstation-5-pro.png', category: 'News' },
    { title: 'Nintendo Direct Latest News', image: '/nintendo-direct.png', category: 'News' },
  ]
  
  const article = articles.find(a => slug.includes(a.title.toLowerCase().replace(/[^a-z0-9]/g, '-'))) || articles[0]
  
  return {
    id: slug,
    title: article.title,
    excerpt: `Comprehensive coverage and analysis of ${article.category.toLowerCase()} with expert insights and detailed information.`,
    content: `<h2>Introduction</h2><p>This is a detailed article about ${article.title}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h2>Key Points</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><h2>Conclusion</h2><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    featuredImage: article.image,
    category: { name: article.category, slug: article.category.toLowerCase() },
    author: { name: 'Gaming Expert' },
    publishedAt: new Date().toISOString(),
    readTime: 5,
    views: Math.floor(Math.random() * 10000) + 1000
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getMockArticle(params.slug)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge className="mb-4" style={{ backgroundColor: '#6366f1' }}>
              {article.category.name}
            </Badge>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {article.title}
            </h1>
            
            <p className="text-lg text-gray-400 mb-6">
              {article.excerpt}
            </p>
            
            <div className="aspect-video mb-6 rounded-lg overflow-hidden">
              <CloudinaryImage
                src={article.featuredImage}
                alt={article.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                fallback={
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-400">Article Image</span>
                  </div>
                }
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <span>By {article.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{article.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none prose-invert">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </div>
    </div>
  )
}