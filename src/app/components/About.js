'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const About = () => {
  const aboutText =
    "I'm Farkhan Muhammad, a Frontend Web Developer, Currently a Student at Universitas Mikroskil in Medan, Indonesia, specializing in ReactJS. I'm passionate about creating user-friendly web interfaces and staying updated on industry trends to provide innovative solutions in web development.";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.about-letter', {
      color: 'black',
      stagger: 1.5,
      scrollTrigger: {
        trigger: '#about',
        scrub: 1,
        start: 'top center',
        end: 'bottom center',
      },
    });
  });

  return (
    <section
      id="about"
      className="mb-10 flex min-h-[100dvh] w-screen items-center justify-end px-8 md:mb-0 md:px-24"
    >
      <h2
        id="about-text"
        className="flex w-full flex-wrap text-[36px] md:w-3/4 md:text-lg"
      >
        {aboutText.split(' ').map((word, i) => (
          <span key={i} className="mr-2">
            {word.split('').map((letter, j) => (
              <span key={j} className="about-letter text-gray-300">
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </section>
  );
};

export default About;
