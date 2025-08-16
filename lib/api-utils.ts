import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/database"

export interface ApiError {
  message: string
  status: number
  code?: string
}

export class ApiException extends Error {
  status: number
  code?: string

  constructor(message: string, status = 500, code?: string) {
    super(message)
    this.status = status
    this.code = code
  }
}

export function createApiResponse<T>(data: T, status = 200, headers?: Record<string, string>): NextResponse {
  return NextResponse.json(data, { status, headers })
}

export function createErrorResponse(error: string | ApiError, status = 500): NextResponse {
  const errorData = typeof error === "string" ? { message: error, status } : error

  return NextResponse.json({ error: errorData }, { status: errorData.status || status })
}

export async function withAuth(
  handler: (req: NextRequest, userId: string) => Promise<NextResponse>,
  requiredRole?: "ADMIN" | "EDITOR" | "AUTHOR",
) {
  return async (req: NextRequest) => {
    try {
      const { userId } = auth()

      if (!userId) {
        return createErrorResponse("Unauthorized", 401)
      }

      if (requiredRole) {
        const user = await prisma.user.findUnique({
          where: { clerkId: userId },
          select: { role: true },
        })

        if (!user) {
          return createErrorResponse("User not found", 404)
        }

        const roleHierarchy = { AUTHOR: 1, EDITOR: 2, ADMIN: 3 }
        const userLevel = roleHierarchy[user.role]
        const requiredLevel = roleHierarchy[requiredRole]

        if (userLevel < requiredLevel) {
          return createErrorResponse("Insufficient permissions", 403)
        }
      }

      return await handler(req, userId)
    } catch (error) {
      console.error("API Error:", error)

      if (error instanceof ApiException) {
        return createErrorResponse(
          {
            message: error.message,
            status: error.status,
            code: error.code,
          },
          error.status,
        )
      }

      return createErrorResponse("Internal server error", 500)
    }
  }
}

export function validatePagination(searchParams: URLSearchParams) {
  const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1"))
  const limit = Math.min(50, Math.max(1, Number.parseInt(searchParams.get("limit") || "10")))

  return { page, limit }
}

export function parseSearchParams(searchParams: URLSearchParams) {
  const { page, limit } = validatePagination(searchParams)

  return {
    page,
    limit,
    category: searchParams.get("category") || undefined,
    featured: searchParams.get("featured") === "true" ? true : undefined,
    search: searchParams.get("search") || undefined,
    sort: searchParams.get("sort") || "publishedAt",
    order: searchParams.get("order") === "asc" ? "asc" : "desc",
  }
}

export async function handleApiRequest<T>(handler: () => Promise<T>): Promise<NextResponse> {
  try {
    const result = await handler()
    return createApiResponse(result)
  } catch (error) {
    console.error("API Request Error:", error)

    if (error instanceof ApiException) {
      return createErrorResponse(
        {
          message: error.message,
          status: error.status,
          code: error.code,
        },
        error.status,
      )
    }

    return createErrorResponse("Internal server error", 500)
  }
}
