"use client";

import React, { useEffect, useRef } from "react";
import { isElementInViewport } from "@/app/utils/utils";
import Link from "next/link";

export default function Contact() {
  const contactRef = useRef<any>(null);
  useEffect(() => {
    const contact = contactRef.current;
    function revealOnScroll() {
      if (isElementInViewport(contact)) {
        contact.classList.replace("opacity-0", "opacity-100");
      }
    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const listItems = [
    {
      href: "https://instagram.com/farkhanmhd",
      content: "Instagram",
    },
    {
      href: "https://wa.me/+6282249246192",
      content: "Whatsapp",
    },
    {
      href: "https://www.linkedin.com/in/farkhanmhd/",
      content: "LinkedIn",
    },
    {
      href: "https://github.com/farkhanmhd",
      content: "Github",
    },
  ];

  return (
    <div
      id="contact"
      className="contact-bg relative flex h-screen w-screen flex-col items-center justify-center gap-y-20  px-10 py-24 text-white opacity-0 duration-[2500ms] lg:py-52"
      ref={contactRef}
    >
      <h2 className=" text-center text-3xl font-extralight uppercase md:text-5xl lg:text-7xl">
        {`Let's create something `}
        <span className="bg-gradient-to-br from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Awesome
        </span>
      </h2>
      <Link
        href="mailto:farkhanmuhammad@outlook.com"
        className="rounded-full border-2 border-white px-8 py-5 text-white duration-[250ms] hover:border-transparent hover:bg-white hover:text-black"
      >
        farkhanmuhammad@outlook.com
      </Link>
      <ul className="flex w-full justify-evenly text-sm lg:text-base xl:text-xl">
        {listItems.map((item) => (
          <li key={item.content}>
            <Link
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="uppercase duration-[250ms] hover:text-blue-500"
            >
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
