"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
import { RxCode } from "react-icons/rx";
import { TbHome, TbMessage, TbUser } from "react-icons/tb";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <TbHome
          className={`h-4 w-4 ${pathname === "/" ? "text-blue-500" : "text-white"}`}
        />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <TbUser
          className={`h-4 w-4 ${pathname === "/about" ? "text-blue-500" : "text-white"}`}
        />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <RxCode
          className={`h-4 w-4 ${pathname === "/projects" ? "text-blue-500" : "text-white"}`}
        />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <TbMessage
          className={`h-4 w-4 ${pathname === "/contact" ? "text-blue-500" : "text-white"}`}
        />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
