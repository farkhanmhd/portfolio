'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Link from 'next/link';

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

    gsap.from('.footer-text', {
      yPercent: 100,
      ease: 'power3',
      scrollTrigger: {
        trigger: '#contact-section',
        scrub: 1,
        start: '95% bottom',
        end: 'bottom bottom',
      },
    });
  });
  return (
    <footer
      id="contact-section"
      className="flex h-[80dvh] w-screen flex-col justify-between px-4 pb-5 pt-20 text-[20px] sm:px-8 md:h-[90dvh] lg:h-[80dvh] xl:h-[100dvh] xl:px-24"
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
        className="relative cursor-none text-[30px] md:text-[50px] lg:text-[80px] xl:text-[100px] 2xl:text-[130px]"
      >
        <div className="email-text relative inline-block overflow-y-hidden pr-2">
          {username.split('').map((letter, index) => (
            <span key={index} className="email-letter inline-block">
              {letter}
            </span>
          ))}
          <div className="email-underline absolute bottom-0 left-0 h-1 w-full origin-left bg-black lg:h-2" />
        </div>
        <br />
        <div className="email-text relative inline-block overflow-y-hidden pr-2">
          {`@${domain}`.split('').map((letter, index) => (
            <span key={index} className="email-letter inline-block ">
              {letter}
            </span>
          ))}
          <div className="email-underline absolute bottom-0 left-0 h-1 w-full origin-left bg-black lg:h-2" />
        </div>
      </Link>
      <div
        id="section-footer"
        className="flex flex-col justify-between gap-y-10 pb-10 lg:flex-row"
      >
        <div className="capitalize">
          <div className="footer-name">
            <div className="overflow-hidden">
              <span className="footer-text block">farkhan muhammad</span>
            </div>
            <div className="overflow-hidden">
              <span className="footer-text block">frontend developer</span>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden">
          <div className="footer-social flex gap-x-10">
            <div className="overflow-hidden">
              <Link
                className="footer-text block cursor-none"
                href="https://www.linkedin.com/in/farkhanmhd/"
              >
                linkedin
              </Link>
            </div>
            <div className="overflow-hidden">
              <Link
                className="footer-text block cursor-none"
                href="https://instagram.com/farkhanmhd"
              >
                instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="footer-design-by overflow-hidden">
            <div className="footer-text">
              <span>Design by </span>
              <Link href="https://designraver.com/" className="cursor-none">
                Design Raver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
