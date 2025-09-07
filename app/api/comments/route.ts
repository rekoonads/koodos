import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const articleId = searchParams.get("articleId")

    if (!articleId) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 })
    }

    const comments = await prisma.comment.findMany({
      where: {
        article_id: articleId,
        parent_id: null,
      },
      include: {
        author: {
          select: { id: true, email: true, avatar: true },
        },
        replies: {
          include: {
            author: {
              select: { id: true, email: true, avatar: true },
            },
          },
        },
      },
      orderBy: { created_at: "desc" },
    })

    return NextResponse.json(comments)
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth()
    const body = await request.json()

    const { content, article_id, parent_id } = body

    const comment = await prisma.comment.create({
      data: {
        content,
        article_id,
        parent_id,
        author_id: user.id,
      },
      include: {
        author: {
          select: { id: true, email: true, avatar: true },
        },
      },
    })

    return NextResponse.json(comment, { status: 201 })
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 })
  }
}