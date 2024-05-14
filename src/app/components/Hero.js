'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from '../states/atom';
import DownArrow from './DownArrow';

const Hero = () => {
  const isFirstLoad = useAtomValue(firstLoadAtom);

  const [heroText, setHeroText] = useState(
    window.innerWidth < 768
      ? 'DEDICATED FRONTEND DEVELOPER'
      : 'FRONTEND WEB DEVELOPER DEDICATED TO CRAFTING ENGAGING DIGITAL EXPERIENCES',
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  // useGSAP(() => {
  //   gsap.from('.line', {
  //     yPercent: 100,
  //     delay: isFirstLoad ? 7.5 : 2,
  //     duration: 1,
  //     ease: 'power3',
  //     stagger: 0.1,
  //   });
  //   gsap.from('#current-status', {
  //     yPercent: -100,
  //     duration: 1,
  //     ease: 'power3',
  //     delay: isFirstLoad ? 8 : 3,
  //   });
  //   gsap.from('#down-arrow', {
  //     yPercent: 100,
  //     duration: 1,
  //     ease: 'power3',
  //     delay:
  //       isFirstLoad && window.innerWidth < 768
  //         ? 8.5
  //         : isFirstLoad && window.innerWidth > 768
  //           ? 9
  //           : 3,
  //   });
  // });

  return (
    <section className="relative flex h-[100dvh] w-screen flex-col justify-center overflow-hidden px-8 md:px-24">
      {window.innerWidth > 768 && (
        <div className="absolute left-1/2 top-8 h-[60px] w-[200px] -translate-x-1/2 overflow-hidden text-center uppercase md:w-[300px]">
          <span
            id="current-status"
            className="text-sm inline-block md:text-base"
          >
            currently student at universitas mikroskil
          </span>
        </div>
      )}
      <div className="title overflow-hidden">
        <h1
          id="hero-text"
          className="text-lg font-bold leading-tight md:text-xl"
        >
          {heroText.split(' ').map((word, index) => (
            <div key={index} className="mr-5 inline-block overflow-hidden">
              <span className="line inline-block">{word}</span>
            </div>
          ))}
        </h1>
      </div>
      <div className="absolute bottom-12 left-1/2 h-[60px] w-[60px] -translate-x-1/2 overflow-hidden rounded-full md:h-[80px] md:w-[80px]">
        <button id="down-arrow" role="button" className="h-full w-full">
          <DownArrow />
        </button>
      </div>
    </section>
  );
};

export default Hero;
