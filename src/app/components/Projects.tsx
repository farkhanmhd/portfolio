"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./Card";
import { isElementInViewport } from "@/app/utils/utils";
import SectionHeader from "./ui/SectionHeader";

export default function Projects() {
  const projectRef = useRef<any>(null);

  useEffect(() => {
    function revealOnScroll() {
      const projects: HTMLElement = projectRef.current;
      if (isElementInViewport(projects)) {
        projects.classList.replace("opacity-0", "opacity-100");
      }
    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  const projects = [
    {
      title: "SocialHub",
      link: "https://social-hub-farkhan.vercel.app",
      thumbnail: "/Images/socialhub.png",
      subtitle: "A clone of threads by instagram",
    },
    {
      title: "TrailerHub",
      link: "https://trailer-hub-farkhan.vercel.app",
      thumbnail: "/Images/trailerhub.png",
      subtitle: "A clone of Netflix but only Trailers",
    },
    {
      title: "NotesApp",
      link: "https://notes-app-farkhan.vercel.app/",
      thumbnail: "/Images/notes-app.png",
      subtitle: "A simple note taking app",
    },
  ];

  return (
    <div
      className="projects-bg relative min-h-screen w-screen pb-10 opacity-0 duration-[1500ms]"
      id="projects"
      ref={projectRef}
    >
      <div id="project-content" className="z-[990]">
        <SectionHeader
          title="My Projects"
          subtitle="Here are the projects I have worked on."
        />
        <ul className="mx-auto flex w-[80%] flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
