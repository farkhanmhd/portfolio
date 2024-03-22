"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "../Card/Card";
import isElementInViewport from "@/app/utils/isElementInViewPort";

export default function Projects() {
  const projectRef = useRef<any>(null);

  useEffect(() => {
    function revealOnScroll() {
      const projects: HTMLElement = projectRef.current;
      if (isElementInViewport(projects)) {
        projects.classList.replace("opacity-0", "opacity-100");
      }
    }

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
    },
    {
      title: "TrailerHub",
      link: "https://trailer-hub-farkhan.vercel.app",
      thumbnail: "/Images/trailerhub.png",
    },
    {
      title: "NotesApp",
      link: "https://notes-app-farkhan.vercel.app/",
      thumbnail: "/Images/notes-app.png",
    },
  ];

  return (
    <div
      className="min-h-screen w-screen pb-10 opacity-0 duration-[1500ms]"
      id="projects"
      ref={projectRef}
    >
      <ProjectHeader />
      <ul className="mx-auto flex w-[80%] flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </div>
  );
}

export const ProjectHeader = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-[80%] py-20 md:py-32">
      <h1 className="text-2xl font-bold dark:text-white md:text-7xl">
        MY PROJECTS
      </h1>
      <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
        Here are the projects I have worked on.
      </p>
    </div>
  );
};
