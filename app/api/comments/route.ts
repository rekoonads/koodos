import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId');

  if (!articleId) {
    return NextResponse.json({ error: 'articleId is required' }, { status: 400 });
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { articleId },
      include: {
        author: true,
        reactions: true,
        replies: {
          include: {
            author: true,
            reactions: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { content, articleId, parentId } = body;

    if (!content || !articleId) {
      return NextResponse.json({ error: 'content and articleId are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        articleId,
        authorId: user.id,
        parentId,
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
  }
}
