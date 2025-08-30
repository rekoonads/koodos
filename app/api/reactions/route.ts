import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { commentId, type } = body;

    if (!commentId || !type) {
      return NextResponse.json({ error: 'commentId and type are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const existingReaction = await prisma.reaction.findFirst({
      where: {
        commentId,
        userId: user.id,
        type,
      },
    });

    if (existingReaction) {
      await prisma.reaction.delete({
        where: {
          id: existingReaction.id,
        },
      });
      return NextResponse.json({ success: true, action: 'removed' });
    } else {
      const reaction = await prisma.reaction.create({
        data: {
          commentId,
          userId: user.id,
          type,
        },
      });
      return NextResponse.json(reaction);
    }
  } catch (error) {
    console.error('Error creating reaction:', error);
    return NextResponse.json({ error: 'Failed to create reaction' }, { status: 500 });
  }
}
