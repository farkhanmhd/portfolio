'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Link from 'next/link';
import { isMobile } from '../utils/isMobile';

const Contact = () => {
  const email = 'farkhanmuhammad@outlook.com';
  const [username, domain] = email.split('@');
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#section-three', {
      xPercent: -100,
      opacity: 0,
      ease: 'power3',
      scrollTrigger: {
        trigger: '#contact-section',
        scrub: 1,
        start: 'top bottom',
        end: 'top 90%',
      },
    });

    gsap.from('.email-letter', {
      yPercent: 100,
      ease: 'power3',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#contact-section',
        scrub: 1,
        start: 'center bottom',
        end: 'bottom bottom',
      },
    });

    gsap.from('.email-underline', {
      scaleX: 0,
      scrollTrigger: {
        trigger: '#contact-section',
        scrub: 1,
        start: 'center bottom',
        end: 'bottom bottom',
      },
    });
  });
  return (
    <footer
      id="contact-section"
      className="flex h-[100dvh] w-screen flex-col justify-between px-4 pb-5 pt-20 text-[20px] sm:px-8 xl:px-24"
    >
      <div
        id="section-header"
        className="flex flex-col justify-between md:flex-row"
      >
        <span id="section-three" className="self-start duration-500">
          03/
        </span>
        <span className="inline-block w-3/4 text-[20px]">{`let's create something awesome`}</span>
      </div>
      <Link
        href="mailto:farkhanmuhammad@outlook.com"
        className="relative text-[30px] md:text-[80px] xl:text-[144px]"
      >
        <div className="email-text relative inline-block overflow-y-hidden pr-2">
          {username.split('').map((letter, index) => (
            <span
              key={index}
              className="email-letter inline-block lg:-mr-1 xl:-mr-2"
            >
              {letter}
            </span>
          ))}
          <div className="email-underline absolute bottom-0 left-0 h-1 w-full origin-left bg-black lg:h-2" />
        </div>
        <div className="email-text relative inline-block overflow-y-hidden pr-2">
          {`@${domain}`.split('').map((letter, index) => (
            <span
              key={index}
              className="email-letter inline-block lg:-mr-1 xl:-mr-2"
            >
              {letter}
            </span>
          ))}
          <div className="email-underline absolute bottom-0 left-0 h-1 w-full origin-left bg-black lg:h-2" />
        </div>
      </Link>
      <div
        id="section-footer"
        className="flex flex-col justify-between gap-y-10 lg:flex-row"
      >
        <div className="footer-name capitalize">
          <div>farkhan muhammad</div>
          <div>frontend developer</div>
        </div>
        <div className="footer-social flex gap-x-10">
          <Link href="https://www.linkedin.com/in/farkhanmhd/">linkedin</Link>
          <Link href="https://instagram.com/farkhanmhd">instagram</Link>
        </div>
        <div className="footer-design-by">
          <span>Design by </span>
          <Link href="https://designraver.com/">Design Raver</Link>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
