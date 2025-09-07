import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { requireAuth } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category")
    const status = searchParams.get("status") || "PUBLISHED"

    const skip = (page - 1) * limit

    const where = {
      status: status as any,
      ...(category && { category: { slug: category } }),
    }

    const [reviews, total] = await Promise.all([
      prisma.review.findMany({
        where,
        include: {
          author: {
            select: { id: true, email: true, avatar: true },
          },
          category: {
            select: { id: true, name: true, slug: true, color: true },
          },
        },
        orderBy: { created_at: "desc" },
        skip,
        take: limit,
      }),
      prisma.review.count({ where }),
    ])

    return NextResponse.json({
      reviews,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth()
    const body = await request.json()

    const {
      title,
      content,
      excerpt,
      featured_image,
      game_title,
      platforms,
      rating,
      pros,
      cons,
      category_id,
      tags,
      status = "DRAFT",
    } = body

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    const review = await prisma.review.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        featured_image,
        game_title,
        platforms: platforms || [],
        review_score: rating || 0,
        pros: pros || [],
        cons: cons || [],
        status,
        published_at: status === "PUBLISHED" ? new Date() : null,
        category_id,
        author_id: user.id,
        tags: tags || [],
      },
      include: {
        author: {
          select: { id: true, email: true, avatar: true },
        },
        category: {
          select: { id: true, name: true, slug: true, color: true },
        },
      },
    })

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error("Error creating review:", error)
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 })
  }
}