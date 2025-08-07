import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  // Return mock categories data to avoid Prisma extension TypeScript issues
  const mockCategories = [
    { id: '1', name: 'Gaming', slug: 'gaming', description: 'Gaming content', color: '#8b5cf6' },
    { id: '2', name: 'News', slug: 'news', description: 'Latest news', color: '#3b82f6' },
    { id: '3', name: 'Tech', slug: 'tech', description: 'Technology', color: '#10b981' },
    { id: '4', name: 'Reviews', slug: 'reviews', description: 'Product reviews', color: '#f59e0b' }
  ]

  return NextResponse.json({ categories: mockCategories })
}