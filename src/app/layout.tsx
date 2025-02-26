import "@/styles/globals.css";

export const metadata = {
    title: "CutieTube",
    description: "A YouTube-like video platform built with Next.js and Prisma",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="bg-gray-900 text-white">
          {children}
        </body>
      </html>
    );
  }
  