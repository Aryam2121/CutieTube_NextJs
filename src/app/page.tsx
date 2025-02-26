
import { NavbarDemo } from "@/components/Navbar";
import { SignupFormDemo } from "@/components/Signup";
export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to CutieTube</h1>
        <p className="mt-4">A YouTube-like platform built with Next.js and Prisma</p>
        <NavbarDemo />
        <SignupFormDemo />
      </div>
    );
  }
  