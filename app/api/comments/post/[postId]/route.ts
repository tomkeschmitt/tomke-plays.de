import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

import { getQueries } from '../../../utils';

// 1. Typ auf Promise ändern
type paramsType = { params: Promise<{ postId: string }> }

export async function GET(req: Request, { params }: paramsType) {
  const { skip, limit = 10 } = getQueries(req, ["limit", "skip"])

  // 2. WICHTIG: Die postId erst awaiten!
  const { postId } = await params

  try {
    const comments = await prisma.comment.findMany({
      skip: Number(skip),
      take: Number(limit),
      where: { postId },
      orderBy: { createdAt: "desc" },
      include: {
        user: {
            select: {
              name: true
            }
        }
      },
    })

    return NextResponse.json(comments)

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 })
  }
}
