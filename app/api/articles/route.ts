import { type NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")

    // Return empty result to trigger fallback articles
    return NextResponse.json({
      articles: [],
      pagination: {
        page,
        limit,
        total: 0,
        pages: 0,
      },
    })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 })
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
      featuredImage,
      imageAlt,
      categoryId,
      tagIds,
      published = false,
      featured = false,
    } = body

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        featuredImage,
        imageAlt,
        published,
        featured,
        publishedAt: published ? new Date() : null,
        categoryId,
        authorId: user.id,
        tags: {
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

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    console.error("Error creating article:", error)
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 })
  }
}
