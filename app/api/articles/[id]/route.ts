import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, display_name: true, avatar: true },
        },
        category: {
          select: { id: true, name: true, slug: true, color: true },
        },
      },
    })

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    // Increment view count
    await prisma.article.update({
      where: { id },
      data: { views_count: { increment: 1 } },
    })

    return NextResponse.json(article)
  } catch (error) {
    console.error("Error fetching article:", error)
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const user = await requireAuth()
    const body = await request.json()

    const { title, content, excerpt, featured_image, category_id, tags, status } = body

    // Check if user owns the article or has admin/editor role
    const existingArticle = await prisma.article.findUnique({
      where: { id },
    })

    if (!existingArticle) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    if (existingArticle.author_id !== user.id && !["ADMIN", "EDITOR"].includes(user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const article = await prisma.article.update({
      where: { id },
      data: {
        title,
        content,
        excerpt,
        featured_image,
        category_id,
        status,
        tags,
        published_at: status === "PUBLISHED" && existingArticle.status !== "PUBLISHED" ? new Date() : existingArticle.published_at,
      },
      include: {
        author: {
          select: { id: true, display_name: true, avatar: true },
        },
        category: {
          select: { id: true, name: true, slug: true, color: true },
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

    if (existingArticle.author_id !== user.id && user.role !== "ADMIN") {
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
