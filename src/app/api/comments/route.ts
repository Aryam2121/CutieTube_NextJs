import { PrismaClient } from "@prisma/client/extension"; // Ensure correct import for Prisma
import { NextResponse } from "next/server";

interface PostRequestBody {
  content: string;
  userId: string;
  videoId: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { content, userId, videoId }: PostRequestBody = await req.json();

    // Validate input
    if (!content || !userId || !videoId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create comment
    const comment = await PrismaClient.comment.create({
      data: { content, userId, videoId },
    });

    return NextResponse.json({ message: "Comment added successfully", comment }, { status: 201 });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

interface DeleteRequestBody {
  id: string;
}

export async function DELETE(req: Request): Promise<Response> {
  try {
    const { id }: DeleteRequestBody = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Comment ID is required" }, { status: 400 });
    }

    // Check if comment exists
    const existingComment = await PrismaClient.comment.findUnique({ where: { id } });

    if (!existingComment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // Delete comment
    await PrismaClient.comment.delete({ where: { id } });

    return NextResponse.json({ message: "Comment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
