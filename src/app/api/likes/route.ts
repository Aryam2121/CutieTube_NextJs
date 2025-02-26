export async function POST(req) {
    const { userId, videoId } = await req.json();
  
    const like = await prisma.like.create({
      data: { userId, videoId },
    });
  
    return NextResponse.json(like);
  }
  
  export async function DELETE(req) {
    const { userId, videoId } = await req.json();
    await prisma.like.deleteMany({
      where: { userId, videoId },
    });
  
    return NextResponse.json({ message: "Like removed" });
  }
  