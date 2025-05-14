<script lang="ts">
  import { ChyronWrapper } from 'chyron-svelte';

  // Reactive state for toggles
  let breaking = $state(true);
  let headline = $state(true);
  let logo = $state(true);
  let logoLeft = $state(true);
  let chyron = $state(true);

  // Sample headlines (required by ChyronWrapper)
  const headlines = [
    'Breaking News: Major Event Unfolds',
    'Sports Update: Team Wins Championship',
    'Weather Alert: Severe Storms Expected'
  ];
</script>

<div class="toggles">
  <div>
    <label>
      <input type="checkbox" bind:checked={breaking} />
      Breaking
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={headline} />
      Headline
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={logo} />
      Logo
    </label>
    <label>
      <input type="checkbox" bind:checked={logoLeft} disabled={!logo} />
      Logo Left
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={chyron} />
      Chyron
    </label>
  </div>
</div>

<div class="image-container">
  <img src="/imgs/IMG_7689.jpg" alt="Stop Sign" />
  <div class="overlay"></div>
</div>

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

  .image-container {
    position: relative;
    width: 100%;
    max-width: 100vw;
    height: auto;
  }

  .image-container img {
    width: 100%;
    height: auto;
    display: block;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-overlay, rgba(0, 0, 0, 0.5));
  }
</style>