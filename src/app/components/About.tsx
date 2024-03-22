"use client";

import React, { useRef, useEffect } from "react";
import SectionHeader from "./ui/SectionHeader";
import { isElementInViewport } from "../utils/utils";
import TextGenerateEffect from "./ui/TextGenerate";
import Image from "next/image";

export default function About() {
  const aboutRef = useRef<any>(null);

  useEffect(() => {
    function reveal() {
      const about: HTMLElement = aboutRef.current;
      if (isElementInViewport(about)) {
        about.classList.replace("opacity-0", "opacity-100");
      }
    }

    reveal();
  }, []);

  const words: string =
    "Hello, I'm Farkhan Muhammad, a Frontend Web Developer currently studying at Universitas Mikroskil in Medan, Indonesia. My primary expertise lies in ReactJS, and I'm enthusiastic about crafting streamlined and user-friendly web interfaces. Embracing a commitment to continuous learning, I strive to stay at the forefront of industry trends, ensuring that I bring innovative solutions to the ever-evolving landscape of web development. Whether it's optimizing performance, collaborating on creative projects, or integrating the latest React features, I approach each task with passion and a dedication to delivering high-quality results.";

  return (
    <div
      className="about-bg relative min-h-screen w-screen pb-10 opacity-0 duration-[1500ms]"
      id="projects"
      ref={aboutRef}
    >
      <div id="about-content" className="z-[990] mt-10 md:mt-0">
        <SectionHeader title="About me" subtitle="" />
        <div className="mx-auto flex h-full w-[80%] flex-col items-center justify-between gap-20 md:flex-row">
          <div className="order-2 flex-1 text-justify text-lg uppercase leading-relaxed md:order-1 md:text-start md:text-2xl">
            <TextGenerateEffect words={words} />
          </div>
          <div className="order-1 flex max-h-[400px] flex-1 items-center justify-center md:order-2">
            <Image
              src="/Images/farkhan.jpg"
              alt="farkhan"
              width={400}
              height={400}
              className="aspect-square rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
