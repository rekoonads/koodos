import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  var __prisma: any
}

export const prisma = globalThis.__prisma ?? new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalThis.__prisma = prisma as any