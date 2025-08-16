import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function getCurrentUser() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    console.log("[v0] Clerk not configured, returning mock user")
    return {
      id: "mock-user",
      clerkId: "mock-clerk-id",
      email: "demo@example.com",
      name: "Demo User",
      role: "ADMIN",
      avatar: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

  const { userId } = await auth()

  if (!userId) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  })

  return user
}

export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  return user
}

export async function requireRole(allowedRoles: string[]) {
  const user = await requireAuth()

  if (!allowedRoles.includes(user.role)) {
    throw new Error("Insufficient permissions")
  }

  return user
}
