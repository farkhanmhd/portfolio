'use client';

import { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      type="button"
      class={`fixed bottom-8 right-4 z-[999] flex h-[45px] w-[45px] flex-col items-center justify-evenly rounded-full bg-white py-2 mix-blend-difference duration-300 sm:right-8 md:right-24`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        class={`h-[2px] w-6 bg-black duration-300 ${isOpen && 'origin-top-left  -translate-y-[3px] translate-x-[4px] rotate-45'}`}
      />
      <div
        class={`h-[2px] w-6 bg-black duration-300 ${isOpen && 'origin-top-left translate-x-[2px] translate-y-[4px] -rotate-45'}`}
      />
    </button>
  );
};

export default MenuButton;