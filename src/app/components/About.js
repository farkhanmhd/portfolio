'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { isMobile } from '../utils/isMobile';

const About = () => {
  const aboutText =
    "I'm Farkhan Muhammad, a Frontend Web Developer currently studying at Universitas Mikroskil in Medan, Indonesia. My primary expertise lies in ReactJS, and I'm enthusiastic about crafting streamlined and user-friendly web interfaces. Embracing a commitment to continuous learning, I strive to stay at the forefront of industry trends, ensuring that I bring innovative solutions to the ever-evolving landscape of web development. Whether it's optimizing performance, collaborating on creative projects, or integrating the latest React features, I approach each task with passion and a dedication to delivering high-quality results.";

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

    gsap.from('#section-one', {
      x: -100,
      opacity: 0,
      ease: 'power3',
      scrollTrigger: {
        trigger: '#about',
        scrub: 1,
        start: 'top bottom',
        end: 'center bottom',
      },
    });

    gsap.to('#section-one', {
      x: -100,
      opacity: 0,
      ease: 'power3',
      scrollTrigger: {
        trigger: isMobile() ? '#about' : '#about-text',
        scrub: 1,
        start: isMobile() ? '5% top' : 'top top',
        end: 'top top',
      },
    });
  });

  return (
    <section
      id="about"
      className="flex w-screen flex-col items-center justify-between px-4 py-20 sm:px-8 md:flex-row xl:px-24"
    >
      <span
        id="section-one"
        className="mt-3 self-start text-[20px] duration-500"
      >
        01/
      </span>
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
