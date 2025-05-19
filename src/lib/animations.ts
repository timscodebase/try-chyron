// utils/animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Attachment } from 'svelte/attachments';

gsap.registerPlugin(ScrollTrigger);

/**
 * Creates a GSAP animation for the hero h1 element (original animation).
 * @returns {Attachment}
 */
export function createSlideToLeftAnimation(): Attachment {
  return (element: HTMLElement) => {
    // Slide-in animation
    gsap.fromTo(
      element,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: '',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom', // Top of element hits bottom of viewport
          end: 'top 75%', // 25% from viewport bottom
          scrub: false,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  };
}

/**
 * Creates a GSAP animation that slides an element to the right with fade-in.
 * @returns {Attachment}
 */
export function createSlideToRightAnimation(): Attachment {
  return (element: HTMLElement) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 30 }, // Start left
      {
        opacity: 1,
        x: -30, // Slide to right
        duration: 1,
        ease: '',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom', // Top of element hits bottom of viewport
          end: 'top 75%', // 25% from viewport bottom
          scrub: false,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  };
}

/**
 * Creates a GSAP animation that fades an element in from transparent.
 * @returns {Attachment}
 */
export function createFadeInAnimation(): Attachment {
  return (element: HTMLElement) => {
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: '',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'top 75%',
          scrub: false,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  };
}