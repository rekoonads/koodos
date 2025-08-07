import { NextResponse } from 'next/server'

export async function GET() {
  // Return mock stats data to avoid Prisma extension TypeScript issues
  // TODO: Implement actual database queries once Prisma extension issues are resolved
  return NextResponse.json({
    totalArticles: 25,
    publishedArticles: 18,
    draftArticles: 7,
    totalComments: 142,
    totalViews: 15420
  })
}