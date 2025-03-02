import { GlowingEffect } from "./ui/glowing-effect";
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail }) => {
  return (
    <div className="relative group p-2">
      <GlowingEffect glow={true} proximity={50} spread={30} disabled={false} />
      <Image
        src={thumbnail}
        alt={title}
        width={500}
        height={208}
        className="w-full h-52 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
      />
      <h3 className="mt-2 text-white text-sm font-semibold">{title}</h3>
    </div>
  );
};

export default VideoCard;
