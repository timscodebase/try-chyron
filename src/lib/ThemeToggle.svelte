<script lang="ts">
	import { onMount } from 'svelte';

	let darkMode = false;

	onMount(() => {
		const stored = localStorage.getItem('theme-dark');
		if (stored !== null) {
			darkMode = stored === 'true';
		} else {
			darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		updateTheme();
	});

	function toggleTheme() {
		darkMode = !darkMode;
		localStorage.setItem('theme-dark', darkMode.toString());
		updateTheme();
	}

	function updateTheme() {
		const root = document.documentElement;
		root.setAttribute('data-theme', darkMode ? 'dark' : 'light');
	}
</script>

<button class="ctas-button" onclick={toggleTheme}>
	<iconify-icon icon={darkMode ? 'mdi:weather-sunny' : 'mdi:weather-night'} width="24" height="24"
	></iconify-icon>
</button>

<style>
	button {
		margin-left: auto;
	}
</style>
