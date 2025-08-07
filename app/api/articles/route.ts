import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const category = searchParams.get('category')
  const status = searchParams.get('status') || 'PUBLISHED'
  
  try {
    const articles = await prisma.article.findMany({
      where: {
        status: status as any,
        ...(category && { category: { slug: category } })
      },
      include: {
        author: { select: { name: true, email: true } },
        category: { select: { name: true, slug: true } },
        tags: { select: { name: true, slug: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit
    })

    return NextResponse.json({ articles, page, limit })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, excerpt, categoryId, status = 'DRAFT', authorId } = body

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        categoryId,
        status: status as any,
        authorId
      },
      include: {
        author: { select: { name: true, email: true } },
        category: { select: { name: true, slug: true } }
      }
    })

    return NextResponse.json({ article }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}