<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import 'iconify-icon';
	// import './style.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

{@render children()}
