'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loading = () => {
  useGSAP(() => {
    gsap.to('#loading-top', {
      xPercent: -100,
      duration: 2,
      ease: 'power3',
      delay: 5.5,
    });
    gsap.to('#loading-bottom', {
      xPercent: 100,
      duration: 2,
      ease: 'power3',
      delay: 5.5,
    });
    gsap.to('#loading', {
      display: 'none',
      delay: 7.5,
    });
  });

  return (
    <div
      id="loading"
      className="fixed left-0 top-0 z-[999999] flex h-[100dvh] w-screen flex-col overflow-hidden"
    >
      <div id="loading-top" className="h-[50dvh] bg-black"></div>
      <div id="loading-bottom" className="h-[50dvh] bg-black"></div>
    </div>
  );
};

export default Loading;
