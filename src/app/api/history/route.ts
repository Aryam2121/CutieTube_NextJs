export async function POST(req) {
    const { userId, videoId } = await req.json();
  
    const history = await prisma.history.create({
      data: { userId, videoId },
    });
  
    return NextResponse.json(history);
  }
  
  export async function GET(req) {
    const { userId } = req.query;
  
    const history = await prisma.history.findMany({
      where: { userId },
      include: { video: true },
    });
  
    return NextResponse.json(history);
  }
  