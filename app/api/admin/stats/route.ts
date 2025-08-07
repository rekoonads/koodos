import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [articles, comments] = await Promise.all([
      prisma.article.findMany({ select: { status: true, views: true } }),
      prisma.comment.findMany({ select: { id: true } })
    ])

    const totalArticles = articles.length
    const publishedArticles = articles.filter(a => a.status === 'PUBLISHED').length
    const draftArticles = articles.filter(a => a.status === 'DRAFT').length
    const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0)

    return NextResponse.json({
      totalArticles,
      publishedArticles,
      draftArticles,
      totalComments: comments.length,
      totalViews
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}