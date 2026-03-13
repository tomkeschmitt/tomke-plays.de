import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

// 1. Typ auf Promise ändern
type paramsType = { params: Promise<{ id: string }> }

export async function GET(req: Request, { params }: paramsType) {
  // 2. WICHTIG: Die id erst awaiten!
  const { id } = await params;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      // ... dein restlicher Code (include etc.)
    });

    if (!post) return new NextResponse("Post not found", { status: 404 });

    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

// Falls du hier auch PUT oder DELETE hast, dort ebenfalls { params }: paramsType
// nutzen und const { id } = await params; einfügen!
