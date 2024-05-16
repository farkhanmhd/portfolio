'use client';

import { useAtom } from 'jotai';
import { menuAtom } from '../states/atom';

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(menuAtom);
  return (
    <button
      type="button"
      className={`fixed bottom-8 right-4 z-[9999] flex h-[45px] w-[45px] flex-col items-center justify-evenly rounded-full bg-white py-2 mix-blend-difference duration-300 sm:right-8 xl:right-[81px]`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div
        className={`h-[2px] w-6 bg-black duration-300 ${isMenuOpen && 'origin-top-left  -translate-y-[3px] translate-x-[4px] rotate-45'}`}
      />
      <div
        className={`h-[2px] w-6 bg-black duration-300 ${isMenuOpen && 'origin-top-left translate-x-[2px] translate-y-[4px] -rotate-45'}`}
      />
    </button>
  );
};

export default MenuButton;
