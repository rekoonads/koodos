export const dynamic = 'force-dynamic'

import VideoPlayer from '@/components/video-player'
import { Badge } from '@/components/ui/badge'
import { Calendar, Eye, User } from 'lucide-react'

async function getVideoArticles() {
  try {
    const response = await fetch('https://admin.koodos.in/api/articles?type=VIDEO&status=PUBLISHED', {
      cache: 'no-store'
    })
    
    if (!response.ok) return []
    const data = await response.json()
    return data.articles || []
  } catch (error) {
    console.error('Error fetching video articles:', error)
    return []
  }
}

export default async function VideoPage() {
  const articles = await getVideoArticles()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Gaming Videos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: any) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <VideoPlayer 
                  src={article.image || article.videoUrl || ''} 
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{article.category?.name || 'Video'}</Badge>
                  {article.platform && <Badge variant="outline">{article.platform}</Badge>}
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.views || 0} views</span>
                  <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No video content available yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}