import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sidebar } from "@/components/sidebar"
import { RelatedArticles } from "@/components/related-articles"
import { Calendar, Clock, User, Tag, Eye } from "lucide-react"
import { SocialInteractions } from "@/components/social-interactions"
import { EnhancedCommentSection } from "@/components/enhanced-comment-section"
import { TemplateEngine } from "@/components/article-templates/template-engine"
import { notFound } from "next/navigation"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

// Fetch article from backend API
const getArticle = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002'}/api/public/articles/${slug}`, {
      next: { revalidate: 60 }, // Cache for 1 minute
    })

    if (!response.ok) {
      if (response.status === 404) {
        notFound()
      }
      throw new Error('Failed to fetch article')
    }

    const article = await response.json()
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    notFound()
  }
}

// Fetch related articles
const getRelatedArticles = async (categorySlug: string, currentSlug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3002'}/api/public/articles?category=${categorySlug}&limit=4`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    )

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.articles.filter((article: any) => article.slug !== currentSlug)
  } catch (error) {
    console.error('Error fetching related articles:', error)
    return []
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params.slug)

  return {
    title: `${article.title} | KOODOS`,
    description: article.excerpt || article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.metaDescription,
      images: article.featuredImage ? [article.featuredImage] : [],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author?.firstName && article.author?.lastName ? `${article.author.firstName} ${article.author.lastName}` : 'KOODOS'],
      tags: article.tags?.map((tag: any) => tag.name) || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.metaDescription,
      images: article.featuredImage ? [article.featuredImage] : [],
    },
    keywords: article.metaKeywords || article.tags?.map((tag: any) => tag.name).join(', '),
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug)
  const relatedArticles = await getRelatedArticles(article.category?.slug || '', params.slug)

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = article.content?.split(/\s+/).length || 0
  const readTime = Math.ceil(wordCount / 200)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
              {/* Category Badge */}
              {article.category && (
                <Badge 
                  variant="secondary" 
                  className="mb-4"
                  style={{ backgroundColor: article.category.color || '#3B82F6' }}
                >
                  {article.category.name}
                </Badge>
              )}

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {article.title}
              </h1>

              {/* Excerpt */}
              {article.excerpt && (
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {article.excerpt}
                </p>
              )}

              {/* Featured Image */}
              {article.featuredImage && (
                <div className="mb-6">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>
                    {article.author?.firstName} {article.author?.lastName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{article.views?.toLocaleString() || 0} views</span>
                </div>
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag: any) => (
                    <Badge key={tag.name} variant="outline">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Social Interactions */}
            <SocialInteractions article={article} />

            {/* Comments */}
            <EnhancedCommentSection articleId={article.id} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
            
            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <RelatedArticles articles={relatedArticles} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
