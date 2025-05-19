<script lang="ts">
  import { ChyronWrapper } from 'chyron-svelte';

  // Reactive state for toggles
  let breaking = $state(false);
  let headline = $state(true);
  let logo = $state(true);
  let logoLeft = $state(false);
  let chyron = $state(true);
  let video = $state(true);
  let togglesClosed = $state(false);

  function toggleToggles() {
    togglesClosed = !togglesClosed;
  }

  // Sample headlines (required by ChyronWrapper)
  const headlines = [
    'Breaking News: Major Event Unfolds',
    'Sports Update: Team Wins Championship',
    'Weather Alert: Severe Storms Expected'
  ];

  // Derived customStyles based on breaking state
  let customStyles = $derived(
    breaking
      ? { 'color-chyron-surface': 'var(--color-breaking-news-background, #ff0000)' }
      : {}
  );
</script>

<div class="toggles">
  <button onclick={toggleToggles}>{togglesClosed ? ">" : "<"}</button>
  <div class:closed={togglesClosed}>
    <div>
      <label>
        <input type="checkbox" bind:checked={video} aria-label="Toggle Video" />
        Video
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" bind:checked={breaking} aria-label="Toggle Breaking section" />
        Breaking News
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" bind:checked={headline} aria-label="Toggle Headline section" />
        Headline
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" bind:checked={logo} aria-label="Toggle Logo section" />
        Logo
      </label>
      <label>
        <input
          type="checkbox"
          bind:checked={logoLeft}
          disabled={!logo}
          aria-label="Toggle logo position to left"
        />
        Logo Left
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" bind:checked={chyron} aria-label="Toggle chyron section" />
        Chyron
      </label>
    </div>
  </div>
</div>

{#if video}
<video controls autoplay muted loop playsinline>
  <source src="https://res.cloudinary.com/tithos/video/upload/v1747264461/demo_fwrgzu.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
{/if}

<ChyronWrapper
  {breaking}
  {headline}
  {headlines}
  {logo}
  {logoLeft}
  {chyron}
  logoUrl="https://placehold.co"
  logoAlt="News Logo"
  logoSize={150}
  {customStyles}
/>

<style>
  .toggles {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--white, #fff);
    border-radius: var(--size-border-radius, 1rem);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1001;
    transition: width 0.3s ease;
    overflow: hidden;
  }

  .closed {
    display: none !important;
  }

  .toggles div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: var(--font-family-headline, 'Inter', sans-serif);
    color: var(--color-text-dark, #232323);
  }

  input[type='checkbox'] {
    margin: 0;
    accent-color: var(--red, #ff0000);
  }

  input[type='checkbox']:disabled {
    opacity: 0.5;
  }

  button {
    background-color: var(--color-primary, #007bff);
    color: var(--white, #fff);
    border: none;
    border-radius: var(--size-border-radius, 0.5rem);
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-family: var(--font-family-headline, 'Inter', sans-serif);
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
</style>