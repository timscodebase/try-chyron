<!-- +layout.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { LayoutData } from './$types';

  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ScrollSmoother } from 'gsap/ScrollSmoother';
  import 'iconify-icon';
  import './style.css';

  import { browser } from '$app/environment';

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /**
   * Creates a ScrollSmoother instance for the given wrapper element.
   * @returns {import('svelte/attachments').Attachment}
   */
  function createScrollSmoother() {
    return (wrapper: HTMLElement) => {
      // Ensure we're in the browser
      if (!browser) return;

      // Find the content element inside the wrapper
      const content = wrapper.querySelector('#smooth-content') as HTMLElement;
      if (!content) {
        console.error('ScrollSmoother: #smooth-content not found');
        return;
      }

      // Initialize ScrollSmoother
      const smoother = ScrollSmoother.create({
        wrapper,
        content,
        smooth: 1.5,
        effects: true,
      });

      // Cleanup on unmount
      return () => {
        smoother?.kill();
      };
    };
  }

  let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div id="smooth-wrapper" {@attach createScrollSmoother()}>
  <div id="smooth-content">
    {@render children()}
  </div>
</div>