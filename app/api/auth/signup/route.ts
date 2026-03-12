import { NextResponse } from "next/server";
import { genSalt, hash } from "bcryptjs";
import prisma from "@/prisma/client";

export async function POST(req: Request) {
  try {
    const { name, display, email, password, avatar } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Prüfen, ob User existiert
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 422 }
      );
    }

    // Passwort hashen
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // User erstellen
    const user = await prisma.user.create({
      data: {
        name,
        display,
        email,
        password: hashedPassword,
        avatar,
        friends: [],
      },
    });

    return NextResponse.json({ message: "User created successfully", user });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}