import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Clock, Calendar, User } from 'lucide-react'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

async function getArticle(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${slug}`)
    if (!response.ok) {
      notFound()
    }
    const article = await response.json()
    return article
  } catch (error) {
    console.error('Error fetching article:', error)
    notFound()
  }
}

async function getRelatedArticles(categorySlug: string, currentSlug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?category=${categorySlug}&limit=3`)
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return {
      title: 'Article not found',
    }
  }

  return {
    title: article.title,
    description: article.excerpt || article.metaDescription,
    keywords: article.metaKeywords || article.tags?.map((tag: any) => tag.name).join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt || article.metaDescription,
      images: article.featuredImage ? [article.featuredImage] : [],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      tags: article.tags?.map((tag: any) => tag.name) || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.metaDescription,
      images: article.featuredImage ? [article.featuredImage] : [],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle(params.slug)
  const relatedArticles = await getRelatedArticles(article.category?.slug || '', params.slug)

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = article.content?.split(/\s+/).length || 0
  const readTime = Math.ceil(wordCount / 200)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
              {article.category && (
                <Badge
                  variant="secondary"
                  className="mb-4"
                >
                  {article.category.name}
                </Badge>
              )}

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {article.excerpt}
                </p>
              )}

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

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={article.author?.avatar} />
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                  <span>
                    {article.author?.name || 'Anonymous'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar />
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock />
                  <span>{readTime} min read</span>
                </div>
              </div>

              {article.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag: any) => (
                    <Badge key={tag.id}>{tag.name}</Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <div
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

          </div>

          <div className="lg:col-span-1">
            {/* Related Articles Sidebar can go here */}
          </div>
        </div>
      </div>
    </div>
  )
}