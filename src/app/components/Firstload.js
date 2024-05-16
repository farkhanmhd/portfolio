'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Firstload = () => {
  useGSAP(() => {
    gsap.from('.letter', {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.to('.letter', {
      yPercent: -100,
      duration: 1,
      ease: 'power3',
      delay: 2,
      stagger: 0.05,
    });
    gsap.to('.initial', {
      yPercent: -100,
      duration: 1,
      ease: 'power3',
      delay: 2.8,
    });
    gsap.to('.left-letter', {
      marginRight: 0,
      duration: 1,
      ease: 'power3',
      delay: 3.8,
    });
    gsap.to('.initial', {
      opacity: 0,
      duration: 0.5,
      delay: 4.8,
    });
    gsap.to('#firstload', {
      opacity: 0,
      duration: 0.1,
      display: 'none',
      delay: 5.5,
    });
  });

  return (
    <div
      id="firstload"
      className="fixed left-0 top-0 z-[9999999] flex h-[100dvh] w-screen flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="fixed left-1/2 top-1/2 h-[40px] w-[80vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-md uppercase md:text-lg lg:h-[70px] xl:h-[100px] xl:text-xl">
        <p id="full-name" className="relative">
          {'farkhan muhammad'.split(' ').map((word, index) => (
            <span key={index} className="mr-[12px] inline-block md:mr-9">
              {word.split('').map((letter, index) => (
                <span key={index} className="letter opacity-1 inline-block">
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </p>
        <div className="initial relative">
          <span className="left-letter mr-10 uppercase md:mr-20 lg:mr-40">
            f
          </span>
          <span className="right-letter  uppercase">m</span>
        </div>
      </div>
    </div>
  );
};

export default Firstload;
