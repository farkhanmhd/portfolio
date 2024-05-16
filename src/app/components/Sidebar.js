'use client';

import { useAtom } from 'jotai';
import { menuAtom } from '../states/atom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SidebarList from './SidebarList';
import Link from 'next/link';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useAtom(menuAtom);
  const openSidebar = () => {
    gsap.to('#sidebar-menu', {
      xPercent: 0,
      duration: 1,
      display: 'block',
      ease: 'power3.inOut',
    });

    setMenuOpen(true);
  };

  const closeSidebar = () => {
    gsap.to('#sidebar-menu', {
      xPercent: 100,
      duration: 1,
      display: 'none',
      ease: 'power3.inOut',
    });

    setMenuOpen(false);
  };

  useGSAP(() => {
    if (menuOpen) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }, [menuOpen]);

  const sidebarListText = [
    {
      text: 'Home',
      target: 'hero',
    },
    {
      text: 'About',
      target: 'about-section',
    },
    {
      text: 'Projects',
      target: 'projects-section',
    },
    {
      text: 'Contact',
      target: 'contact-section',
    },
    ,
  ];

  return (
    <aside
      id="sidebar-menu"
      class="fixed right-0 z-[999] hidden h-[100dvh] w-screen  bg-black text-white hover:cursor-default lg:w-5/12 lg:max-w-[672px]"
    >
      <div class="flex h-full w-full flex-col justify-between px-[100px] py-[50px] ">
        <div class="mt-20 w-full">
          <div class="mb-10">
            <p class="text-[11px] underline">Navigation</p>
          </div>
          <ul className="mt-16 flex flex-col justify-center gap-y-5 font-normal  capitalize lg:justify-start">
            {sidebarListText.map(({ text, target }, i) => (
              <SidebarList key={i} text={text} target={target} />
            ))}
          </ul>
        </div>
        <div>
          <p class=" mb-5 text-sm">Get in Touch</p>
          <div class="flex gap-x-8 capitalize">
            <Link
              href="https://www.linkedin.com/in/farkhanmhd/"
              class="sidebar-link text-base"
            >
              <div className="link-text-container relative max-w-max">
                <span className="link-text">LinkedIn</span>
                <div className="link-text-underline absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-white duration-300" />
              </div>
            </Link>
            <Link
              href="https://instagram.com/farkhanmhd"
              class="sidebar-link text-base"
            >
              <div className="link-text-container relative max-w-max">
                <span className="link-text">Instagram</span>
                <div className="link-text-underline absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-white duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
