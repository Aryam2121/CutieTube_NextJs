import { NavbarDemo } from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { ThreeDCardDemo } from "@/components/ThreedCard";
import { SidebarProvider } from "@/components/ui/SideBar";
import { SidebarDemo} from "@/components/Sidebarone";
import VideoCard from "@/components/VideoCard";
export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <SidebarDemo/>

       
    
      </div>
    </SidebarProvider>
  );
}
