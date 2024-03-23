"use client";

import React, { useEffect, useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiJest,
  SiCypress,
  SiNextdotjs,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { isElementInViewport } from "../utils/utils";

export default function Skills() {
  const skillRef = useRef<any>(null);

  useEffect(() => {
    function revealOnScroll() {
      const skills: HTMLElement = skillRef.current;
      if (isElementInViewport(skills)) {
        skills.classList.replace("opacity-0", "opacity-100");
      }
    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  const skills = [
    { content: <IoLogoHtml5 />, title: "HTML" },
    { content: <IoLogoCss3 />, title: "CSS" },
    { content: <SiJavascript />, title: "JAVASCRIPT" },
    { content: <FaSass />, title: "SASS" },
    { content: <SiTailwindcss />, title: "TAILWIND" },
    { content: <FaReact />, title: "REACT" },
    { content: <SiRedux />, title: "REDUX" },
    { content: <SiNextdotjs />, title: "NEXT.JS" },
    { content: <SiTypescript />, title: "TYPESCRIPT" },
    { content: <SiGithub />, title: "GITHUB" },
    { content: <SiJest />, title: "JEST" },
    { content: <SiCypress />, title: "CYPRESS" },
  ];

  return (
    <div
      className="skills-bg min-h-screen w-screen opacity-0 duration-[2000ms]"
      ref={skillRef}
    >
      <SectionHeader title="My Skills" subtitle="" />
      <div className="mx-auto flex w-[50%] flex-wrap justify-center gap-10 text-5xl">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="m-3 flex w-1/4 items-center gap-3 text-center"
          >
            {skill.content}
            <p className="hidden text-xl sm:block">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
