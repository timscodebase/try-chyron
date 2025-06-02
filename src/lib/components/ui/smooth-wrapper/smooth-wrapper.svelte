<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { browser } from '$app/environment';

	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();

	onMount(() => {
		if (browser) {
			gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
		}
	});

	function createScrollSmoother() {
		return (wrapper: HTMLElement) => {
			if (!browser) return;
			const content = wrapper.querySelector('#smooth-content') as HTMLElement;
			if (!content) {
				console.error('ScrollSmoother: #smooth-content not found');
				return;
			}

			const smoother = ScrollSmoother.create({
				wrapper,
				content,
				smooth: 1.5,
				effects: true
			});

			// Cleanup on unmount
			return () => {
				smoother?.kill();
			};
		};
	}
</script>

<div id="smooth-wrapper" {@attach createScrollSmoother()}>
	<div id="smooth-content">
		{@render children()}
	</div>
</div>
