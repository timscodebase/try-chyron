<script lang="ts">
  import demoImg from '$lib/imgs/demo.png';
  export const prerender = true; // Fix Vercel dynamic routes error

  let copied = $state(false);
  function copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      copied = true;
      setTimeout(() => (copied = false), 2000); // Reset after 2s
    }).catch(err => console.error('Copy failed:', err));
  }
</script>

<svelte:head>
  <title>chyron-svelte - Dynamic News Tickers for Svelte</title>
  <meta name="description" content="chyron-svelte: A Svelte library for customizable news tickers. Build dynamic chyrons for news, sports, and live events with ease.">
  <meta name="keywords" content="svelte, chyron, news ticker, broadcast, typescript, web development">
</svelte:head>

<header class="hero" style="--hero-bg: url({demoImg})">
  <div class="on-top grid">
    <div>
      <h1 class="aldrich-400">Build Dynamic News Tickers with Ease</h1>
      <h2 class="inter-300 fade-in">chyron-svelte is a lightweight, customizable Svelte library for creating broadcast-style chyrons—perfect for news, sports, or live event apps.</h2>
      <p class="fade-in">Add scrolling headlines, cycling news, and branded logos to your web projects in minutes. With TypeScript support, theme-able styles, and responsive design, chyron-svelte empowers developers to craft engaging, professional tickers without the hassle.</p>
    </div>
    <div class="full-center flex-column">
      <div class="code-box">
        <pre><code>npm install chyron-svelte</code></pre>
        <button
          class="copy-button"
          aria-label="Copy code to clipboard"
          onclick={() => copyCode('npm install chyron-svelte')}
        >
          <span class="copy-icon"><iconify-icon icon="ph:copy"></iconify-icon></span>
          <span class="copy-text">Copy</span>
          <span class="copied-text" aria-live="polite">Copied!</span>
        </button>
      </div>
      <div class="secondary-ctas">
        <a class="ctas-button" href="/demo" target="_blank">View Demo</a> | <a class="ctas-button" href="https://github.com/timscodebase/chyron-svelte">Explore on GitHub</a>
      </div>
    </div>
    
  </div>
</header>

<div class="divider"></div>

<section class="features">
  <h2 class="aldrich-400 text-left  slide-to-right">Why Choose chyron-svelte?</h2>
  <h3>Packed with features to make your news tickers stand out.</h3>
  <ul>
    <li>
      <strong>🚀 Effortless Integration</strong>: Install via npm and start building with a single import. Works seamlessly with SvelteKit and TypeScript.
    </li>
    <li>
      <strong>🎨 Fully Customizable</strong>: Tailor colors, fonts, and sizes using CSS variables or dynamic customStyles props. Match any brand or theme.
    </li>
    <li>
      <strong>📜 Dynamic Content</strong>: Create scrolling chyrons, cycling headlines, and rotating logo displays with minimal code.
    </li>
    <li>
      <strong>📱 Responsive & Accessible</strong>: Grid-based layouts adapt to all screens, with ARIA support for screen readers.
    </li>
    <li>
      <strong>⚡ Lightweight & Fast</strong>: Optimized for performance, ensuring smooth animations and quick load times.
    </li>
    <li>
      <strong>🛠 Developer-Friendly</strong>: TypeScript types, clear documentation, and a modular component structure make development a breeze.
    </li>
  </ul>
  <a href="/demo" target="_blank">See the Code in Action</a>
</section>

<div class="divider"></div>

<section class="use-cases">
  <h2 class="aldrich-400 text-right slide-to-left">Bring Your Ideas to Life</h2>
  <h3>From news apps to live streams, chyron-svelte fits any project needing real-time updates.</h3>
  <ul>
    <li><strong>News Websites</strong>: Display breaking news with scrolling tickers and bold headlines, styled to match your site's branding.</li>
    <li><strong>Sports Apps</strong>: Keep fans engaged with live score updates and sponsor logos in a sleek, broadcast-style chyron.</li>
    <li><strong>Live Events</strong>: Enhance virtual conferences or streams with dynamic announcements and branded overlays.</li>
    <li><strong>Dashboards</strong>: Add real-time alerts or notifications to data-driven applications with customizable tickers.</li>
  </ul>
</section>

<div class="divider"></div>

<footer>
  <p>Made by Tim Smith. Powered by Svelte</p>
</footer>