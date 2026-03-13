import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

// Der Typ muss nun ein Promise sein
type paramsType = { params: Promise<{ id: string }> }

export async function PUT(req: Request, { params }: paramsType) {
  const { message } = await req.json();

  // WICHTIG: params muss erst awaitet werden
  const { id } = await params;

  try {
    await prisma.comment.update({
      where: { id },
      data: { message }
    });

    return NextResponse.json({ msg: "Comment updated successfully" });

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: paramsType) {
  // WICHTIG: params muss erst awaitet werden
  const { id } = await params;

  try {
    await prisma.comment.delete({
      where: {
        id
      }
    });

    return NextResponse.json({ msg: "Comment deleted successfully" });

  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
