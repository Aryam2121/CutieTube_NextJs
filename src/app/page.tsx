import { NavbarDemo } from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { ThreeDCardDemo } from "@/components/ThreedCard";
import { SidebarProvider } from "@/components/ui/SideBar";
import VideoCard from "@/components/VideoCard";
export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to CutieTube</h1>
        <p className="mt-4">A YouTube-like platform built with Next.js and Prisma</p>

        {/* Sidebar links should be inside SidebarProvider */}
        {/* <SidebarLink link={{ href: "/", label: "Home", icon: <span>🏠</span> }} />
        <SidebarLink link={{ href: "/videos", label: "Videos", icon: <span>🎥</span> }} /> */}

        <NavbarDemo />
        <VideoCard title="Video Title" thumbnail="/Video1.jpg" />
        <ThreeDCardDemo />
        <Spotlight />
      </div>
    </SidebarProvider>
  );
}
