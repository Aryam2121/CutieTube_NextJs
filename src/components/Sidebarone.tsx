"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/SideBar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconHome,
  IconCategory,
  IconTrendingUp,
  IconLibrary,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export function SidebarDemo() {
  const { isSignedIn } = useUser();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#", icon: <IconHome className="icon" /> },
    { label: "Trending", href: "#", icon: <IconTrendingUp className="icon" /> },
    { label: "Categories", href: "#", icon: <IconCategory className="icon" /> },
    { label: "Subscriptions", href: "#", icon: <IconUsers className="icon" /> },
    { label: "Library", href: "#", icon: <IconLibrary className="icon" /> },
    { label: "Profile", href: "#", icon: <IconUserBolt className="icon" /> },
    { label: "Settings", href: "#", icon: <IconSettings className="icon" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="icon" /> },
  ];

  return (
    <div className={cn("h-screen flex", "bg-gray-100 dark:bg-neutral-800 w-full ")}> 
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          <div className="sidebar-content">
            {open ? <Logo /> : <LogoIcon />}
            <div className="menu-links">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="auth-section">
            {isSignedIn ? <UserButton /> : <SignInButton><button className="login-btn">Sign In</button></SignInButton>}
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => (
  <Link href="#" className="flex items-center space-x-2">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-black dark:text-white">
      CutieTube
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href="#" className="flex items-center">
    <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
  </Link>
);

const Dashboard = () => (
  <div className="flex-1 p-4 md:p-10 bg-white dark:bg-neutral-900">
    <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Welcome to CutieTube</h1>
  </div>
);
