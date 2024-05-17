'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
  useGSAP(() => {
    document.addEventListener('mousemove', (e) => {
      gsap.to('#cursor', {
        x: e.clientX,
        y: e.clientY,
      });
    });
  });

  return (
    <div
      id="cursor"
      className="fixed z-[999] hidden h-6 w-6 rounded-full bg-white mix-blend-difference lg:block"
    />
  );
};

export default Cursor;
