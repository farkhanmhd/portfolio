"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { isElementAtTop } from "@/app/utils/utils";

export default function Header() {
  const headerRef = useRef<any>(null);
  useEffect(() => {
    let lastScrollTop = 0;
    const header = headerRef.current;

    setTimeout(() => {
      header.classList.replace("-top-32", "top-0");
    }, 0);

    window.addEventListener("scroll", function () {
      if (isElementAtTop(header)) {
        header.classList.replace("bg-black/70", "bg-black/0");
      } else {
        header.classList.replace("bg-black/0", "bg-black/70");
      }

      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        header.classList.replace("top-0", "-top-32");
      } else {
        header.classList.replace("-top-32", "top-0");
      }

      lastScrollTop = currentScrollTop;

      return () => {
        window.removeEventListener("scroll", function () {});
      };
    });
  }, []);

  const navItems: { href: string; textContent: string }[] = [
    {
      href: "/about",
      textContent: "About",
    },
    {
      href: "/projects",
      textContent: "Projects",
    },
    {
      href: "/contact",
      textContent: "Contact",
    },
  ];
  return (
    <header
      className="fixed -top-32 z-[999] w-screen bg-black/0 backdrop-blur-md duration-500"
      ref={headerRef}
    >
      <div
        id="header-item-container"
        className="mx-auto flex w-[80%] items-center justify-between py-8"
      >
        <div id="logo" className="hidden rounded-lg bg-white p-2 md:block">
          <h3 className="text-xl font-extrabold text-black">
            <Link href="/">FM</Link>
          </h3>
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex justify-between gap-x-10 text-xl">
            {navItems.map((navItem: { href: string; textContent: string }) => (
              <li key={navItem.textContent}>
                <Link href={navItem.href}>
                  {navItem.textContent.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
