
    slug: string

// Fetch article from backend API

        notFound()
      throw new Error('Failed to fetch article')

    const article = await response.json()
    return article
    console.error('Error fetching article:', error)
    notFound()

// Fetch related articles
    const response = await fetch(
    )

      return []

    const data = await response.json()
    return data.articles.filter((article: any) => article.slug !== currentSlug)
    console.error('Error fetching related articles:', error)
    return []

  const article = await getArticle(params.slug)

    description: article.excerpt || article.metaDescription,
      title: article.title,
      description: article.excerpt || article.metaDescription,
      images: article.featuredImage ? [article.featuredImage] : [],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      tags: article.tags?.map((tag: any) => tag.name) || [],
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.metaDescription,
      images: article.featuredImage ? [article.featuredImage] : [],
    keywords: article.metaKeywords || article.tags?.map((tag: any) => tag.name).join(', '),

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
                <Badge 
                  variant="secondary" 
                  className="mb-4"
                >
                </Badge>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                </p>

                <div className="mb-6">
                  <Image
                    className="w-full h-auto rounded-lg"
                </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                  </span>
                </div>
                <div className="flex items-center gap-2">
                </div>
                <div className="flex items-center gap-2">
                </div>
              </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    </Badge>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
            </div>


          </div>

          <div className="lg:col-span-1">
            
          </div>
        </div>
      </div>
    </div>
  )
