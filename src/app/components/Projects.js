'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { isMobile } from '../utils/isMobile';
import { projects } from '../utils/projects';
import Image from 'next/image';

const Projects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectDetailElements = document.querySelectorAll('.project-detail');

    projectDetailElements.forEach((element, index) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom center',
          pin: true,
          pinSpacing: false,
        },
      });
    });

    gsap.to('.project-image', {
      y: isMobile() ? -400 : -800,
      scrollTrigger: {
        trigger: '#projects-section',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    gsap.from('#section-two', {
      xPercent: -100,
      opacity: 0,
      ease: 'power3',
      scrollTrigger: {
        trigger: '#projects-section',
        scrub: 1,
        start: 'top bottom',
        end: 'top 90%',
      },
    });
    gsap.to('#section-two', {
      xPercent: -100,
      opacity: 0,
      ease: 'power3',
      scrollTrigger: {
        trigger: '#projects-section',
        scrub: 1,
        start: 'top top',
        end: 'top top',
      },
    });
  });
  return (
    <section
      id="projects-section"
      className="  min-h-[100dvh]  w-screen px-8 py-20 text-[20px] md:px-24"
    >
      <div
        id="section-header"
        className="flex flex-col justify-between md:flex-row"
      >
        <span id="section-two" className="self-start duration-500">
          02/
        </span>
        <span className="inline-block w-3/4 text-[20px]">recent works</span>
      </div>
      <div id="projects" className="flex flex-col gap-y-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex h-full w-full flex-col justify-between gap-x-10 gap-y-10 md:flex-row"
          >
            <div className="project-detail w-full md:w-2/6">
              <p className="text-[56px] md:text-[144px]">{project.title}</p>
              <p className="">{project.description}</p>
            </div>
            <div className="project-picture h-[50vh] w-full overflow-hidden md:h-[110vh] md:w-3/6">
              <Image
                src={project.image}
                alt={project.title}
                className="project-image mt-14 h-[800px] w-full object-cover md:h-[2000px]"
                width={3000}
                height={2000}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
