import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension"; // Ensure the correct import path

export async function POST(req: NextRequest) {
    const { userId, videoId } = await req.json();

    const like = await PrismaClient.like.create({
      data: { userId, videoId },
    });

    return NextResponse.json(like);
}

export async function DELETE(req: NextRequest) {
    const { userId, videoId } = await req.json();

    await PrismaClient.like.deleteMany({
      where: { userId, videoId },
    });

    return NextResponse.json({ message: "Like removed" });
}
