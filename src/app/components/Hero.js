'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DownArrow from './DownArrow';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { isMobile } from '../utils/isMobile';

const Hero = () => {
  const [heroText, setHeroText] = useState(
    isMobile()
      ? 'DEDICATED FRONTEND DEVELOPER'
      : 'FRONTEND WEB DEVELOPER DEDICATED TO CRAFTING ENGAGING DIGITAL EXPERIENCES',
  );

  useEffect(() => {
    const handleResize = () => {
      if (isMobile()) {
        setHeroText('DEDICATED FRONTEND DEVELOPER');
      } else {
        setHeroText(
          'FRONTEND WEB DEVELOPER DEDICATED TO CRAFTING ENGAGING DIGITAL EXPERIENCES',
        );
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.from('.line', {
      yPercent: 100,
      delay: 7,
      duration: 1,
      ease: 'power3',
      stagger: 0.1,
    });
    gsap.from('#current-status', {
      yPercent: -100,
      duration: 1,
      ease: 'power3',
      delay: 7.5,
    });
    gsap.from('#down-arrow', {
      yPercent: 100,
      duration: 1,
      ease: 'power3',
      delay: isMobile() ? 7.5 : 8,
    });
    gsap.to('#down-arrow', {
      rotate: 180,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  return (
    <section
      className="relative flex h-[100dvh] w-screen flex-col justify-center overflow-hidden px-4 py-20 sm:px-8 xl:px-24"
      id="hero"
    >
      {!isMobile() && (
        <div className="absolute left-1/2 top-8 h-[60px] w-[200px] -translate-x-1/2 overflow-hidden text-center uppercase md:w-[300px]">
          <span
            id="current-status"
            className="inline-block text-sm md:text-base"
          >
            currently student at universitas mikroskil
          </span>
        </div>
      )}
      <div
        className="title bg-black mix-blend-difference"
        onMouseEnter={() => gsap.to('#cursor', { scale: 10, zIndex: 0 })}
        onMouseLeave={() => gsap.to('#cursor', { scale: 1, zIndex: 999 })}
      >
        <h1
          id="hero-text"
          className="block text-lg font-bold leading-tight lg:text-[70px] xl:text-xl"
        >
          {heroText.split(' ').map((word, index) => (
            <div
              key={index}
              className="mr-5 inline-block overflow-hidden text-white mix-blend-difference"
            >
              <span className="line inline-block">{word}</span>
            </div>
          ))}
        </h1>
      </div>
      <div className="absolute bottom-12 left-1/2 h-[60px] w-[60px] -translate-x-1/2 overflow-hidden rounded-full md:h-[80px] md:w-[80px]">
        <button
          id="down-arrow"
          role="button"
          className="h-full w-full cursor-none"
          onClick={() =>
            gsap.to(window, {
              duration: 2.5,
              ease: 'power3.inOut',
              scrollTo: {
                y: '#about-section',
              },
            })
          }
        >
          <DownArrow />
        </button>
      </div>
    </section>
  );
};

export default Hero;
