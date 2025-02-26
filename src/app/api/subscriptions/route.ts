import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension"; // Ensure the correct import path

export async function POST(req: NextRequest) {
    const { userId, channelId } = await req.json();

    const subscription = await PrismaClient.subscription.create({
      data: { userId, channelId },
    });

    return NextResponse.json(subscription);
}

export async function DELETE(req: NextRequest) {
    const { userId, channelId } = await req.json();

    await PrismaClient.subscription.deleteMany({
      where: { userId, channelId },
    });

    return NextResponse.json({ message: "Unsubscribed" });
}
