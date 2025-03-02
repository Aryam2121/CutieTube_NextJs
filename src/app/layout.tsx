// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import UserAuthStatus from "@/components/UserAuthStatus";
import { SidebarProvider } from "@/components/ui/SideBar";

export const metadata = {
  title: "CutieTube",
  description: "A CutieTube video platform built with Next.js and Prisma",
  icons: { icon: "/CutieTube.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark overflow-hidden">
        <body className="bg-gray-900 text-white">
          <UserAuthStatus />
          {/* SidebarProvider should wrap only necessary content */}
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
