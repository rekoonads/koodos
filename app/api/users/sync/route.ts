import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { email, name, avatar } = body

    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      update: {
        email,
        name,
        avatar,
      },
      create: {
        clerkId: userId,
        email,
        name,
        avatar,
        role: "AUTHOR", // Default role
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error("Error syncing user:", error)
    return NextResponse.json({ error: "Failed to sync user" }, { status: 500 })
  }
}
