'use client';

import gsap from 'gsap';
import { useSetAtom } from 'jotai';
import { menuAtom } from '../states/atom';
import { isTablet } from '../utils/isMobile';

const SidebarList = ({ text, target }) => {
  const setMenuOpen = useSetAtom(menuAtom);

  const handleButtonClick = () => {
    gsap.to(window, {
      duration: 2.5,
      ease: 'power3.inOut',
      scrollTo: {
        y: `#${target}`,
      },
    });

    if (isTablet()) {
      gsap.to('#sidebar-menu', {
        xPercent: 100,
        duration: 1,
        display: 'none',
        ease: 'power3.inOut',
      });

      setMenuOpen(false);
    }
  };
  return (
    <li class="sidebar-list text-[56px]" onClick={handleButtonClick}>
      <div className="sidebar-text-container relative max-w-max">
        <span className="sidebar-text">{text}</span>
        <div className="sidebar-text-underline absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-white duration-300" />
      </div>
    </li>
  );
};

export default SidebarList;
