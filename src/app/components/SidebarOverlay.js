'use client';

import { useAtom } from 'jotai';
import { menuAtom } from '../states/atom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SidebarOverlay = () => {
  const [menuOpen, setMenuOpen] = useAtom(menuAtom);

  const openOverlay = () => {
    gsap.to('#sidebar-overlay', {
      display: 'block',
      opacity: 1,
      duration: 0.5,
    });
    setMenuOpen(true);
  };

  const closeOverlay = () => {
    gsap.to('#sidebar-overlay', {
      display: 'none',
      duration: 0.5,
      opacity: 0,
    });

    setMenuOpen(false);
  };

  useGSAP(() => {
    if (menuOpen) {
      openOverlay();
    } else {
      closeOverlay();
    }
  }, [menuOpen]);
  return (
    <div
      id="sidebar-overlay"
      className="fixed left-0 top-0 z-[999] h-screen w-screen bg-black/50 opacity-0 hover:cursor-pointer"
      onClick={() => closeOverlay()}
    />
  );
};

export default SidebarOverlay;
