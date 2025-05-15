<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { LayoutData } from './$types';
  import './styles.css';

  let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

{@render children()}