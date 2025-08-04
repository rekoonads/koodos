import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Skip middleware if environment variables are not set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.next()
  }

  // Admin routes protection - simplified for now
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // For now, allow access to admin routes
    // TODO: Add proper authentication check when Supabase is configured
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}