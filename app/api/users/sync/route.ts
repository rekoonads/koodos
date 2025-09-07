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
    const { email, first_name, last_name, avatar } = body

    const user = await prisma.user.upsert({
      where: { clerk_id: userId },
      update: {
        email,
        first_name,
        last_name,
        avatar,
      },
      create: {
        clerk_id: userId,
        email,
        first_name,
        last_name,
        avatar,
        role: "USER", // Default role
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error("Error syncing user:", error)
    return NextResponse.json({ error: "Failed to sync user" }, { status: 500 })
  }
}