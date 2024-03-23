"use client";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <main className="bg-black">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
