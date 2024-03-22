"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef<any>(null);
  useEffect(() => {
    let lastScrollTop = 0;
    const header = headerRef.current;

    setTimeout(() => {
      header.classList.replace("-top-32", "top-0");
    }, 0);

    window.addEventListener("scroll", function () {
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
      className="fixed -top-32 z-[999] w-screen bg-black/70 backdrop-blur-md duration-500"
      ref={headerRef}
    >
      <div
        id="header-item-container"
        className="mx-auto flex w-[80%] items-center justify-between py-8"
      >
        <div id="logo">
          <h3 className="text-xl ">
            <Link href="/">FM</Link>
          </h3>
        </div>
        <nav>
          <ul className="flex gap-x-10 text-xl">
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
