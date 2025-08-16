import { PrismaClient } from "@prisma/client"

declare global {
  var prismaGlobal: PrismaClient | undefined
}

export const prisma = globalThis.prismaGlobal || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma
}

// Database utility functions
export async function connectToDatabase() {
  try {
    await prisma.$connect()
    console.log("Connected to database")
  } catch (error) {
    console.error("Database connection error:", error)
    throw error
  }
}

export async function disconnectFromDatabase() {
  await prisma.$disconnect()
}

// Content management utilities
export async function getPublishedArticles(params: {
  page?: number
  limit?: number
  categorySlug?: string
  featured?: boolean
  search?: string
}) {
  const { page = 1, limit = 10, categorySlug, featured, search } = params
  const skip = (page - 1) * limit

  const where: any = {
    published: true,
  }

  if (categorySlug) {
    where.category = { slug: categorySlug }
  }

  if (featured !== undefined) {
    where.featured = featured
  }

  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { excerpt: { contains: search, mode: "insensitive" } },
      { content: { contains: search, mode: "insensitive" } },
    ]
  }

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      include: {
        category: true,
        author: true,
        tags: true,
        _count: {
          select: { comments: true },
        },
      },
      orderBy: { publishedAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.article.count({ where }),
  ])

  return {
    articles,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  }
}

export async function getPublishedReviews(params: {
  page?: number
  limit?: number
  categorySlug?: string
  featured?: boolean
  search?: string
}) {
  const { page = 1, limit = 10, categorySlug, featured, search } = params
  const skip = (page - 1) * limit

  const where: any = {
    published: true,
  }

  if (categorySlug) {
    where.category = { slug: categorySlug }
  }

  if (featured !== undefined) {
    where.featured = featured
  }

  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { gameTitle: { contains: search, mode: "insensitive" } },
      { excerpt: { contains: search, mode: "insensitive" } },
    ]
  }

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where,
      include: {
        category: true,
        author: true,
        tags: true,
        _count: {
          select: { comments: true },
        },
      },
      orderBy: { publishedAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.review.count({ where }),
  ])

  return {
    reviews,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  }
}

export async function incrementViews(type: "article" | "review", id: string) {
  if (type === "article") {
    await prisma.article.update({
      where: { id },
      data: { views: { increment: 1 } },
    })
  } else {
    await prisma.review.update({
      where: { id },
      data: { views: { increment: 1 } },
    })
  }
}

export async function getOrCreateUser(clerkUser: {
  id: string
  emailAddresses: Array<{ emailAddress: string }>
  firstName?: string | null
  lastName?: string | null
  imageUrl?: string
}) {
  const email = clerkUser.emailAddresses[0]?.emailAddress
  const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || null

  return await prisma.user.upsert({
    where: { clerkId: clerkUser.id },
    update: {
      email,
      name,
      avatar: clerkUser.imageUrl,
    },
    create: {
      clerkId: clerkUser.id,
      email,
      name,
      avatar: clerkUser.imageUrl,
    },
  })
}
