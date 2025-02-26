import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const videos = await prisma.video.findMany({
    include: { user: true },
  });
  return NextResponse.json(videos);
}

export async function POST(req: NextRequest) {
  const { title, description, videoUrl, thumbnail, userId } = await req.json();

  const video = await prisma.video.create({
    data: { title, description, videoUrl, thumbnail, userId },
  });

  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  
  await prisma.video.delete({ where: { id } });

  return NextResponse.json({ message: "Video deleted" });
}
