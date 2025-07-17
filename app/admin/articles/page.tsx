"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Article {
  id: string
  title: string
  slug: string
  status: string
  created_at: string
  views: number
  author: { username: string }
  category: { name: string }
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('articles')
      .select(`
        id, title, slug, status, created_at, views,
        author:users(username),
        category:categories(name)
      `)
      .order('created_at', { ascending: false })

    if (data) {
      setArticles(data)
    }
    setLoading(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      case 'archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return <div className="p-8">Loading articles...</div>
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Articles</h1>
          <p className="text-gray-600">Manage your content</p>
        </div>
        <Link href="/admin/articles/new">
          <Button>Create New Article</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    by {article.author?.username} • {article.category?.name}
                  </p>
                </div>
                <Badge className={getStatusColor(article.status)}>
                  {article.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Created: {new Date(article.created_at).toLocaleDateString()} • 
                  Views: {article.views || 0}
                </div>
                <div className="space-x-2">
                  <Link href={`/admin/articles/${article.id}/edit`}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </Link>
                  <Link href={`/article/${article.slug}`} target="_blank">
                    <Button variant="outline" size="sm">View</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No articles found</p>
          <Link href="/admin/articles/new">
            <Button>Create Your First Article</Button>
          </Link>
        </div>
      )}
    </div>
  )
}