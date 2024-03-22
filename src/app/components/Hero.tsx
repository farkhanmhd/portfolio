"use client";
import React, { useEffect, useRef } from "react";
import { SparklesCore } from "./ui/Sparkles";
import { isElementInViewport } from "../utils/utils";

export default function Hero() {
  const heroRef = useRef<any>(null);
  useEffect(() => {
    function revealOnScroll() {
      const hero: HTMLElement = heroRef.current;
      if (isElementInViewport(hero)) {
        hero.classList.replace("opacity-0", "opacity-100");
      }
    }

    revealOnScroll();
  }, []);
  return (
    <div
      className="hero-bg flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-10 uppercase opacity-0 duration-1000"
      ref={heroRef}
    >
      <h1 className="relative z-20 mb-4 text-center text-3xl font-bold text-white md:text-5xl lg:text-8xl">
        {`Hi, I'm Farkhan,`}
      </h1>
      <p className="mb-4 text-center text-xl text-white ">
        a Frontend Web Developer dedicated to crafting engaging digital
        experiences.
      </p>
      <div className="relative h-40 w-[40rem]">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
