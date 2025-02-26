export async function POST(req) {
    const { userId, channelId } = await req.json();
  
    const subscription = await prisma.subscription.create({
      data: { userId, channelId },
    });
  
    return NextResponse.json(subscription);
  }
  
  export async function DELETE(req) {
    const { userId, channelId } = await req.json();
    await prisma.subscription.deleteMany({
      where: { userId, channelId },
    });
  
    return NextResponse.json({ message: "Unsubscribed" });
  }
  