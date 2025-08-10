import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    
    const where: any = {}
    if (status) where.status = status
    if (category) where.category = { slug: category }

    const articles = await (prisma.article as any).findMany({
      where,
      include: {
        author: { select: { name: true, email: true } },
        category: { select: { name: true, slug: true } }
      },
      orderBy: { publishedAt: 'desc' },
      take: limit
    })

    return NextResponse.json({ articles })
  } catch (error) {
    console.error('Database error:', error)
    // Return mock data as fallback
    const mockArticles = [
      {
        id: '1',
        title: 'Sample Gaming Article',
        slug: 'sample-gaming-article',
        excerpt: 'This is a sample gaming article from the database',
        image: '/placeholder.svg?height=200&width=300',
        status: 'PUBLISHED',
        author: { name: 'Admin', email: 'admin@koodos.com' },
        category: { name: 'Gaming', slug: 'gaming' },
        publishedAt: new Date().toISOString(),
        createdAt: new Date().toISOString()
      }
    ]
    return NextResponse.json({ articles: mockArticles })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, excerpt, categoryId, status = 'DRAFT', authorId } = body

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    const article = await (prisma.article as any).create({
      data: {
        title,
        slug,
        content,
        excerpt,
        categoryId,
        status: status as any,
        authorId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      },
      include: {
        author: { select: { name: true, email: true } },
        category: { select: { name: true, slug: true } }
      }
    })

    return NextResponse.json({ article }, { status: 201 })
  } catch (error) {
    console.error('Error creating article:', error)
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}