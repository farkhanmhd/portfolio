'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { isMobile, isTablet } from '../utils/isMobile';
import { projects } from '../utils/projects';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projectDetailElements = document.querySelectorAll('.project-detail');

    projectDetailElements.forEach((element) => {
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

    for (let i = 0; i < projects.length; i++) {
      gsap.from(`.project-title-${i}`, {
        y: isMobile() ? 100 : 200,
        scrollTrigger: {
          trigger: `.project-title-${i}`,
          scrub: 1,
          start: isTablet() ? 'top bottom' : 'center bottom',
          end: isTablet() ? 'bottom bottom' : 'bottom center',
        },
      });

      gsap.from(`.project-description-${i}`, {
        y: isMobile() ? 100 : 200,
        scrollTrigger: {
          trigger: `.project-title-${i}`,
          scrub: 1,
          start: isTablet() ? 'top bottom' : 'center bottom',
          end: isTablet() ? 'bottom bottom' : 'bottom center',
        },
      });
    }
  });
  return (
    <section
      id="projects-section"
      className="  min-h-[100dvh]  w-screen px-4 py-20 text-[20px] sm:px-8 xl:px-24"
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
      <div id="projects" className="mt-10 flex flex-col gap-y-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project flex h-full w-full flex-col justify-between gap-x-10 gap-y-10 2xl:flex-row"
          >
            <div className="project-detail w-full 2xl:w-[40%]">
              <div className="project-detail-title flex flex-wrap text-[56px] xl:text-[144px]">
                {project.title.split(' ').map((word, index) => (
                  <div
                    key={index}
                    className="relative mr-5 inline-block overflow-hidden"
                  >
                    <span className={`project-title-${i} inline-block`}>
                      {word}
                    </span>
                  </div>
                ))}
              </div>
              <div className="project-description">
                {project.description.split(' ').map((word, index) => (
                  <div
                    key={index}
                    className="mr-2 inline-block overflow-hidden"
                  >
                    <span className={`project-description-${i} inline-block`}>
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="project-picture relative z-[10] h-[50vh] w-full overflow-hidden xl:mt-14 xl:h-[110vh] 2xl:w-3/6">
              <Link
                href={project.url}
                className="duration-300 hover:brightness-50"
                target="_blank"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-image h-[1930px] w-full object-cover"
                  width={3360}
                  height={1930}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
