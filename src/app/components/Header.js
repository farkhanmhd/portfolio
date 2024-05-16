'use client';

import Clock from './Clock';
import gsap from 'gsap';

const Header = () => {
  const handleButtonClick = () => {
    gsap.to(window, {
      duration: 2.5,
      ease: 'power3.inOut',
      scrollTo: {
        y: '#hero',
      },
    });
  };
  return (
    <header className="fixed left-0 top-7 z-[999] flex w-screen justify-between px-4 mix-blend-difference sm:px-8 xl:px-24">
      <button
        role="button"
        className="text-md text-white"
        onClick={handleButtonClick}
      >
        FM
      </button>
      <Clock />
    </header>
  );
};

export default Header;
