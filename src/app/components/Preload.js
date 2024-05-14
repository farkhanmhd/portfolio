'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtom, useAtomValue } from 'jotai';
import { firstLoadAtom, preloadAtom } from '../states/atom';

const Loading = () => {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  const [isPreload, setIsPreload] = useAtom(preloadAtom);

  useGSAP(() => {
    gsap.to('#loading-top', {
      xPercent: -100,
      duration: 2,
      ease: 'power3',
      delay: isFirstLoad && 5.5,
    });
    gsap.to('#loading-bottom', {
      xPercent: 100,
      duration: 2,
      ease: 'power3',
      delay: isFirstLoad && 5.5,
    });
  });

  useEffect(() => {
    setTimeout(
      () => {
        setIsPreload(false);
      },
      isFirstLoad ? 7500 : 2000,
    );

    return () => clearTimeout();
  }, [setIsPreload, isFirstLoad]);
  if (isPreload) {
    return (
      <div
        id="loading"
        className="fixed left-0 top-0 z-[999999] flex h-[100dvh] w-screen flex-col overflow-hidden"
      >
        <div id="loading-top" className="h-[50dvh] bg-black"></div>
        <div id="loading-bottom" className="h-[50dvh] bg-black"></div>
      </div>
    );
  }
};

export default Loading;
