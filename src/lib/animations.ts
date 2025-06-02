// utils/animations.ts
import { browser } from '$app/environment';
import type { Attachment } from 'svelte/attachments';

// Keep track of created triggers for proper cleanup
const createdTriggers = new Map<HTMLElement, any>();

// Lazy-loaded GSAP modules
let gsap;
let ScrollTrigger;

// Initialize GSAP only on the client side
async function initGSAP() {
  if (browser && !gsap) {
    const gsapModule = await import('gsap');
    gsap = gsapModule.gsap;
    
    const stModule = await import('gsap/ScrollTrigger');
    ScrollTrigger = stModule.ScrollTrigger;
    
    gsap.registerPlugin(ScrollTrigger);
    
    return true;
  }
  return false;
}

/**
 * Creates a GSAP animation for the hero h1 element (original animation).
 * @returns {Attachment}
 */
export function createSlideToLeftAnimation(): Attachment {
  return async (element: HTMLElement) => {
    // Only run in browser context
    if (!browser) return;
    
    // Initialize GSAP
    await initGSAP();
    if (!gsap || !ScrollTrigger) return;
    
    // Slide-in animation
    gsap.set(element, { opacity: 0, x: -30 });
    
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: 'top bottom', // Top of element hits bottom of viewport
        end: 'top 75%', // 25% from viewport bottom
        toggleActions: 'play none none none',
      }
    });
    
    // Store the trigger for cleanup
    const trigger = ScrollTrigger.getAll().find(t => t.trigger === element);
    if (trigger) {
      createdTriggers.set(element, trigger);
    }

    // Return cleanup function
    return () => {
      if (createdTriggers.has(element)) {
        const trigger = createdTriggers.get(element);
        if (trigger && trigger.kill) {
          trigger.kill();
        }
        createdTriggers.delete(element);
      }
      
      if (animation && animation.kill) {
        animation.kill();
      }
    };
  };
}

/**
 * Creates a GSAP animation that slides an element to the right with fade-in.
 * @returns {Attachment}
 */
export function createSlideToRightAnimation(): Attachment {
  return async (element: HTMLElement) => {
    // Only run in browser context
    if (!browser) return;
    
    // Initialize GSAP
    await initGSAP();
    if (!gsap || !ScrollTrigger) return;
    
    // Set initial state
    gsap.set(element, { opacity: 0, x: 30 });
    
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0, // Slide to original position
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: 'top bottom', // Top of element hits bottom of viewport
        end: 'top 75%', // 25% from viewport bottom
        toggleActions: 'play none none none',
      }
    });
    
    // Store the trigger for cleanup
    const trigger = ScrollTrigger.getAll().find(t => t.trigger === element);
    if (trigger) {
      createdTriggers.set(element, trigger);
    }

    // Return cleanup function
    return () => {
      if (createdTriggers.has(element)) {
        const trigger = createdTriggers.get(element);
        if (trigger && trigger.kill) {
          trigger.kill();
        }
        createdTriggers.delete(element);
      }
      
      if (animation && animation.kill) {
        animation.kill();
      }
    };
  };
}

/**
 * Creates a GSAP animation that fades an element in from transparent.
 * @returns {Attachment}
 */
export function createFadeInAnimation(): Attachment {
  return async (element: HTMLElement) => {
    // Only run in browser context
    if (!browser) return;
    
    // Initialize GSAP
    await initGSAP();
    if (!gsap || !ScrollTrigger) return;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 20 });
    
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'top 75%',
        toggleActions: 'play none none none',
      }
    });
    
    // Store the trigger for cleanup
    const trigger = ScrollTrigger.getAll().find(t => t.trigger === element);
    if (trigger) {
      createdTriggers.set(element, trigger);
    }

    // Return cleanup function
    return () => {
      if (createdTriggers.has(element)) {
        const trigger = createdTriggers.get(element);
        if (trigger && trigger.kill) {
          trigger.kill();
        }
        createdTriggers.delete(element);
      }
      
      if (animation && animation.kill) {
        animation.kill();
      }
    };
  };
}
