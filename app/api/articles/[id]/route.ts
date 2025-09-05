import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"

/*
export async function GET(request: NextRequest, { params: { id } }: { params: { id: string } }) {
  try {
    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, avatar: true },
        },
        category: {
          select: { id: true, name: true, slug: true, color: true },
        },
        tags: {
          select: { id: true, name: true, slug: true },
        },
      },
    })

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    // Increment view count
    await prisma.article.update({
      where: { id },
      data: { views: { increment: 1 } },
    })

    return NextResponse.json(article)
  } catch (error) {
    console.error("Error fetching article:", error)
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 })
  }
}
*/

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const user = await requireAuth()
    const body = await request.json()

    const { title, content, excerpt, featuredImage, imageAlt, categoryId, tagIds, published, featured } = body

    // Check if user owns the article or has admin/editor role
    const existingArticle = await prisma.article.findUnique({
      where: { id },
    })

    if (!existingArticle) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    if (existingArticle.authorId !== user.id && !["ADMIN", "EDITOR"].includes(user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const article = await prisma.article.update({
      where: { id },
      data: {
        title,
        content,
        excerpt,
        featuredImage,
        imageAlt,
        published,
        featured,
        publishedAt: published && !existingArticle.published ? new Date() : existingArticle.publishedAt,
        categoryId,
        tags: {
          set: [],
          connect: tagIds?.map((id: string) => ({ id })) || [],
        },
      },
      include: {
        author: {
          select: { id: true, name: true, avatar: true },
        },
        category: {
          select: { id: true, name: true, slug: true, color: true },
        },
        tags: {
          select: { id: true, name: true, slug: true },
        },
      },
    })

    return NextResponse.json(article)
  } catch (error) {
    console.error("Error updating article:", error)
    return NextResponse.json({ error: "Failed to update article" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const user = await requireAuth()

    // Check if user owns the article or has admin role
    const existingArticle = await prisma.article.findUnique({
      where: { id },
    })

    if (!existingArticle) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    if (existingArticle.authorId !== user.id && user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    await prisma.article.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Article deleted successfully" })
  } catch (error) {
    console.error("Error deleting article:", error)
    return NextResponse.json({ error: "Failed to delete article" }, { status: 500 })
  }
}
