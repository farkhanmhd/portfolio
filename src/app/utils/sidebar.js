import gsap from 'gsap';

const openSidebar = () => {
  gsap.to('#sidebar-menu', {
    right: 0,
    duration: 1,
    ease: 'power3.inOut',
    display: 'block',
  });

  gsap.to('#sidebar-overlay', {
    display: 'block',
    opacity: 0.5,
  });
};

const closeSidebar = () => {
  gsap.to('#sidebar-menu', {
    right: '-100%',
    duration: 1,
    ease: 'power3.inOut',
    display: 'none',
  });

  gsap.to('#sidebar-overlay', {
    display: 'none',
    opacity: 0,
  });
};

export { openSidebar, closeSidebar };
