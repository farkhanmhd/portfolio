'use client';

import { useAtom } from 'jotai';
import { menuAtom } from '../states/atom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { openSidebar, closeSidebar } from '../utils/sidebar';

const SidebarOverlay = () => {
  const [menuOpen, setMenuOpen] = useAtom(menuAtom);

  const open = () => {
    openSidebar();
    setMenuOpen(true);
  };

  const close = () => {
    closeSidebar();
    setMenuOpen(false);
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
