// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import UserAuthStatus from "@/components/UserAuthStatus";

export const metadata = {
  title: "CutieTube",
  description: "A CutieTube video platform built with Next.js and Prisma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-900 text-white">
          {/* Show the UserAuthStatus component */}
          <UserAuthStatus />
          {/* Render the app's main content */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
