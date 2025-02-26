import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension"; 

export async function POST(req: NextRequest) {
    const { userId, videoId } = await req.json();

    const history = await PrismaClient.history.create({
      data: { userId, videoId },
    });

    return NextResponse.json(history);
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const history = await PrismaClient.history.findMany({
      where: { userId },
      include: { video: true },
    });

    return NextResponse.json(history);
}
