import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = ['https://koodos.in', 'https://admin.koodos.in'];

function getCorsHeaders(origin?: string) {
  const isAllowed = origin && allowedOrigins.includes(origin);
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : 'https://koodos.in',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  return new Response(null, { status: 200, headers: getCorsHeaders(origin) })
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  try {
    const data = await request.json()
    console.log('Analytics data:', data)
    return NextResponse.json({ success: true }, { headers: getCorsHeaders(origin) })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process analytics' }, { status: 500, headers: getCorsHeaders(origin) })
  }
}

export async function GET(request: NextRequest) {
  const origin = request.headers.get('origin');
  return NextResponse.json({ message: 'Analytics endpoint' }, { headers: getCorsHeaders(origin) })
}