'use client';

import { useAtom } from 'jotai';
import { menuAtom } from '../states/atom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { openSidebar, closeSidebar } from '../utils/sidebar';

const SidebarOverlay = () => {
  const [menuOpen, setMenuOpen] = useAtom(menuAtom);

  const open = () => {
    setMenuOpen(true);
    openSidebar();
    gsap.to('#cursor', {
      zIndex: 1000,
      duration: 0,
    });
  };

  const close = () => {
    setMenuOpen(false);
    closeSidebar();
    gsap.to('#cursor', {
      zIndex: 999,
      duration: 0,
    });
  };

  useGSAP(() => {
    if (menuOpen) {
      open();
    } else {
      close();
    }
  }, [menuOpen]);
  return (
    <div
      id="sidebar-overlay"
      className="fixed left-0 top-0 z-[999] h-screen w-screen bg-black/50 opacity-0 "
      onClick={() => close()}
    />
  );
};

export default SidebarOverlay;
