"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DashboardStats {
  totalArticles: number
  publishedArticles: number
  draftArticles: number
  totalComments: number
  totalViews: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
    totalComments: 0,
    totalViews: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    const supabase = createClient()
    
    try {
      // Get article stats
      const { data: articles } = await supabase.from('articles').select('status, views')
      const { data: comments } = await supabase.from('comments').select('id')
      
      if (articles) {
        const totalArticles = articles.length
        const publishedArticles = articles.filter(a => a.status === 'published').length
        const draftArticles = articles.filter(a => a.status === 'draft').length
        const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0)
        
        setStats({
          totalArticles,
          publishedArticles,
          draftArticles,
          totalComments: comments?.length || 0,
          totalViews
        })
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="p-8">Loading dashboard...</div>
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your KOODOS content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalArticles}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.publishedArticles}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.draftArticles}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalViews}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Articles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/articles">
              <Button className="w-full">Manage Articles</Button>
            </Link>
            <Link href="/admin/articles/new">
              <Button variant="outline" className="w-full">Create New Article</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Media</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/admin/media">
              <Button className="w-full">Media Library</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 mb-2">{stats.totalComments} total comments</div>
            <Button className="w-full">Moderate Comments</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}