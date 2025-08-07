import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [articles, comments] = await Promise.all([
      prisma.article.findMany({ select: { status: true, views: true } }).catch(() => []),
      prisma.comment.findMany({ select: { id: true } }).catch(() => [])
    ])

    const totalArticles = articles.length
    const publishedArticles = articles.filter((a: any) => a.status === 'PUBLISHED').length
    const draftArticles = articles.filter((a: any) => a.status === 'DRAFT').length
    const totalViews = articles.reduce((sum: number, a: any) => sum + (a.views || 0), 0)

    return NextResponse.json({
      totalArticles,
      publishedArticles,
      draftArticles,
      totalComments: comments.length,
      totalViews
    })
  } catch (error) {
    console.error('Stats API error:', error)
    return NextResponse.json({
      totalArticles: 0,
      publishedArticles: 0,
      draftArticles: 0,
      totalComments: 0,
      totalViews: 0
    })
  }
}