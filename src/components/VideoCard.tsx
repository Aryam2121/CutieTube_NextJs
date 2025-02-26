import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ video }) => {
  return (
    <Link href={`/video/${video.id}`}>
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition">
        <Image src={video.thumbnail} alt={video.title} width={300} height={200} className="rounded-lg" />
        <h3 className="text-white text-lg font-semibold mt-2">{video.title}</h3>
      </div>
    </Link>
  );
};

export default VideoCard;
