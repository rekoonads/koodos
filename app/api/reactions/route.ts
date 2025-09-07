import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth()
    const body = await request.json()

    const { type, article_id } = body

    // Check if reaction already exists
    const existingReaction = await prisma.reaction.findUnique({
      where: {
        user_id_article_id: {
          user_id: user.id,
          article_id,
        },
      },
    })

    if (existingReaction) {
      // Update existing reaction
      const reaction = await prisma.reaction.update({
        where: { id: existingReaction.id },
        data: { type },
      })
      return NextResponse.json(reaction)
    } else {
      // Create new reaction
      const reaction = await prisma.reaction.create({
        data: {
          type,
          user_id: user.id,
          article_id,
        },
      })
      return NextResponse.json(reaction, { status: 201 })
    }
  } catch (error) {
    console.error("Error creating reaction:", error)
    return NextResponse.json({ error: "Failed to create reaction" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await requireAuth()
    const { searchParams } = new URL(request.url)
    const articleId = searchParams.get("articleId")

    if (!articleId) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 })
    }

    await prisma.reaction.deleteMany({
      where: {
        user_id: user.id,
        article_id: articleId,
      },
    })

    return NextResponse.json({ message: "Reaction removed" })
  } catch (error) {
    console.error("Error removing reaction:", error)
    return NextResponse.json({ error: "Failed to remove reaction" }, { status: 500 })
  }
}