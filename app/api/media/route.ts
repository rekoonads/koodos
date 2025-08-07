import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const altText = formData.get('altText') as string
    const articleId = formData.get('articleId') as string

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Sanitize inputs to prevent XSS
    const sanitizeInput = (str: string) => {
      if (!str) return str;
      return str.replace(/[<>"'&]/g, (match) => {
        const entities: { [key: string]: string } = {
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '&': '&amp;'
        };
        return entities[match] || match;
      });
    };

    // Sanitize filename to prevent path traversal
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileUrl = `/uploads/${Date.now()}-${sanitizedFileName}`;
    
    const media = await prisma.media.create({
      data: {
        url: fileUrl,
        type: file.type.startsWith('image/') ? 'IMAGE' : 'VIDEO',
        alt: sanitizeInput(altText),
        articleId
      }
    })

    return NextResponse.json({ media }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const media = await prisma.media.findMany({
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        article: { select: { title: true } }
      }
    })

    return NextResponse.json({ media, page, limit })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 })
  }
}