<script lang="ts">
  import { onMount } from 'svelte';
  export const prerender = true; // Fix Vercel dynamic routes error

  // Detect Scroll Timeline support
  onMount(() => {
    if (!CSS.supports('animation-timeline', 'scroll()')) {
      console.warn('Scroll-Driven Animations not supported, using fallback');
      document.body.classList.add('no-scroll-timeline');
    }
  });
</script>

<svelte:head>
  <title>chyron-svelte - Dynamic News Tickers for Svelte</title>
  <meta name="description" content="chyron-svelte: A Svelte library for customizable news tickers. Build dynamic chyrons for news, sports, and live events with ease.">
  <meta name="keywords" content="svelte, chyron, news ticker, broadcast, typescript, web development">
</svelte:head>

<header class="hero">
  <h1>Build Dynamic News Tickers with Ease</h1>
  <h2>chyron-svelte is a lightweight, customizable Svelte library for creating broadcast-style chyrons—perfect for news, sports, or live event apps.</h2>
  <p>Add scrolling headlines, cycling news, and branded logos to your web projects in minutes. With TypeScript support, theme-able styles, and responsive design, chyron-svelte empowers developers to craft engaging, professional tickers without the hassle.</p>
  <button>npm install chyron-svelte</button>
  <div class="secondary-ctas">
    <a href="/demo">View Demo</a> | <a href="https://github.com/timscodebase/try-chyron">Explore on GitHub</a>
  </div>
</header>

<section class="features">
  <h2>Why Choose chyron-svelte?</h2>
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
  <a href="/demo">See the Code in Action</a>
</section>

<section class="use-cases">
  <h2>Bring Your Ideas to Life</h2>
  <h3>From news apps to live streams, chyron-svelte fits any project needing real-time updates.</h3>
  <ul>
    <li><strong>News Websites</strong>: Display breaking news with scrolling tickers and bold headlines, styled to match your site’s branding.</li>
    <li><strong>Sports Apps</strong>: Keep fans engaged with live score updates and sponsor logos in a sleek, broadcast-style chyron.</li>
    <li><strong>Live Events</strong>: Enhance virtual conferences or streams with dynamic announcements and branded overlays.</li>
    <li><strong>Dashboards</strong>: Add real-time alerts or notifications to data-driven applications with customizable tickers.</li>
  </ul>
</section>

<footer>
  <div class="footer-links">
    <a href="#docs">Documentation</a> | <a href="https://github.com/timscodebase/try-chyron/issues">Report an Issue</a> | <a href="#contact">Contact Support</a>
  </div>
</footer>

<style>
  /* Reset chyron-svelte styles to prevent leakage */
  :global(:root) {
    font-family: 'Inter', sans-serif;
    --font-family-headline: 'Inter', sans-serif;
    --font-family-chyron: 'Inter', sans-serif;
    --color-chyron-surface: transparent;
    --color-headline-surface: transparent;
    --color-text-light: #fff;
    --color-text-dark: #000;
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: #0f0f0f;
    color: #fff;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  :global(*, *::before, *::after) {
    box-sizing: border-box;
  }

  :global(h1, h2, h3, p, ul, li, button, a) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    color: inherit;
    text-decoration: none;
  }

  /* Hero Section */
  .hero {
    min-height: 100vh;
    padding: 4rem 8vw;
    background: linear-gradient(145deg, #0f0f0f 50%, #1c1c1c);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -30%;
    width: 60%;
    height: 120%;
    background: linear-gradient(45deg, rgba(255, 0, 0, 0.2), transparent);
    transform: rotate(-15deg);
    z-index: -1;
    animation: pulse-glow 4s ease-in-out infinite;
  }

  .hero h1 {
    font-family: 'Aldrich', sans-serif;
    font-size: clamp(2.8rem, 5.5vw, 5rem);
    font-weight: 400;
    line-height: 1.1;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    max-width: 700px;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
    animation: slide-in-left var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 25%;
  }

  .no-scroll-timeline .hero h1 {
    opacity: 1;
    transform: none;
  }

  .hero h2 {
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    font-weight: 300;
    line-height: 1.5;
    color: #e0e0e0;
    max-width: 600px;
    margin: 1.5rem 0;
    animation: fade-in var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 10% cover 35%;
  }

  .no-scroll-timeline .hero h2 {
    opacity: 1;
  }

  .hero p {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    line-height: 1.7;
    color: #b0b0b0;
    max-width: 500px;
    margin-bottom: 2rem;
    animation: fade-in var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 20% cover 45%;
  }

  .no-scroll-timeline .hero p {
    opacity: 1;
  }

  .hero button {
    background: #ff0000;
    color: #fff;
    padding: 0.8rem 1.8rem;
    border: none;
    border-radius: 0.2rem 0.8rem 0.2rem 0.8rem;
    font-family: 'Aldrich', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
    animation: scale-in var(--animation-duration, 0.6s) ease-out;
    animation-timeline: view();
    animation-range: entry 30% cover 55%;
  }

  .no-scroll-timeline .hero button {
    opacity: 1;
    transform: none;
  }

  .hero button:hover {
    background: #ff3333;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
  }

  .secondary-ctas {
    display: flex;
    gap: 1.5rem;
    animation: fade-in var(--animation-duration, 0.6s) ease-out;
    animation-timeline: view();
    animation-range: entry 40% cover 65%;
  }

  .no-scroll-timeline .secondary-ctas {
    opacity: 1;
  }

  .secondary-ctas a {
    color: #ff0000;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ff0000;
    border-radius: 0.2rem;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .secondary-ctas a:hover {
    background: #ff0000;
    color: #fff;
  }

  /* Features Section */
  .features {
    padding: 4rem 8vw;
    background: #0f0f0f;
    position: relative;
  }

  .features::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255, 0, 0, 0.1));
    z-index: -1;
  }

  .features h2 {
    font-family: 'Aldrich', sans-serif;
    font-size: clamp(2.2rem, 4.5vw, 3.5rem);
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 1rem;
    animation: slide-in-left var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 20%;
  }

  .no-scroll-timeline .features h2 {
    opacity: 1;
    transform: none;
  }

  .features h3 {
    font-size: clamp(1rem, 1.8vw, 1.3rem);
    font-weight: 300;
    color: #ccc;
    text-align: left;
    margin-bottom: 2rem;
    animation: fade-in var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
  }

  .no-scroll-timeline .features h3 {
    opacity: 1;
  }

  .features ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
  }

  .features li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #bbb;
    padding: 1.5rem;
    background: #181818;
    border-left: 3px solid #ff0000;
    transform: skewY(-2deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: slide-up var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 20% cover 40%;
  }

  .no-scroll-timeline .features li {
    opacity: 1;
    transform: none;
  }

  .features li:hover {
    transform: skewY(0deg) translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }

  .features li strong {
    color: #ff0000;
    font-family: 'Aldrich', sans-serif;
    font-weight: 400;
  }

  .features a {
    display: inline-block;
    margin-top: 2rem;
    color: #ff0000;
    font-family: 'Aldrich', sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
    animation: fade-in var(--animation-duration, 0.6s) ease-out;
    animation-timeline: view();
    animation-range: entry 30% cover 50%;
  }

  .no-scroll-timeline .features a {
    opacity: 1;
  }

  .features a:hover {
    color: #ff6666;
  }

  /* Use Cases Section */
  .use-cases {
    padding: 4rem 8vw;
    background: linear-gradient(180deg, #181818, #0f0f0f);
    position: relative;
    overflow: hidden;
  }

  .use-cases::before {
    content: '';
    position: absolute;
    bottom: -30%;
    right: -20%;
    width: 80%;
    height: 100%;
    background: radial-gradient(circle at 60% 70%, rgba(255, 0, 0, 0.2), transparent 60%);
    transform: rotate(10deg);
    z-index: -1;
  }

  .use-cases h2 {
    font-family: 'Aldrich', sans-serif;
    font-size: clamp(2.2rem, 4.5vw, 3.5rem);
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    text-align: right;
    margin-bottom: 1rem;
    animation: slide-in-right var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 20%;
  }

  .no-scroll-timeline .use-cases h2 {
    opacity: 1;
    transform: none;
  }

  .use-cases h3 {
    font-size: clamp(1rem, 1.8vw, 1.3rem);
    font-weight: 300;
    color: #ccc;
    text-align: right;
    margin-bottom: 2rem;
    animation: fade-in var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
  }

  .no-scroll-timeline .use-cases h3 {
    opacity: 1;
  }

  .use-cases ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: flex-end;
    max-width: 1200px;
    margin-left: auto;
  }

  .use-cases li {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #bbb;
    padding: 1.5rem;
    background: #181818;
    border-right: 3px solid #ff0000;
    transform: skewY(2deg);
    flex: 1;
    min-width: 240px;
    max-width: 280px;
    animation: slide-up var(--animation-duration, 0.8s) ease-out;
    animation-timeline: view();
    animation-range: entry 20% cover 40%;
  }

  .no-scroll-timeline .use-cases li {
    opacity: 1;
    transform: none;
  }

  .use-cases li:hover {
    transform: skewY(0deg) translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }

  .use-cases li strong {
    color: #ff0000;
    font-family: 'Aldrich', sans-serif;
    font-weight: 400;
  }

  /* Footer */
  footer {
    padding: 2rem 8vw;
    background: #0f0f0f;
    text-align: center;
    position: relative;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    animation: fade-in var(--animation-duration, 0.6s) ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 20%;
  }

  .no-scroll-timeline .footer-links {
    opacity: 1;
  }

  .footer-links a {
    color: #ff0000;
    font-family: 'Aldrich', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .footer-links a:hover {
    background: #ff0000;
    color: #fff;
  }

  /* Keyframes for Scroll-Driven Animations */
  @keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes scale-in {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 0.3; }
  }

  /* Fallback for browsers without Scroll Timeline */
  .no-scroll-timeline :where(.hero *, .features *, .use-cases *, .footer-links) {
    opacity: 1;
    transform: none;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero {
      padding: 2rem 5vw;
      align-items: center;
      text-align: center;
    }

    .hero h1 {
      font-size: clamp(2rem, 4.5vw, 3.5rem);
    }

    .hero h2 {
      font-size: clamp(1rem, 1.8vw, 1.3rem);
    }

    .features, .use-cases {
      padding: 2rem 5vw;
    }

    .features ul {
      grid-template-columns: 1fr;
    }

    .use-cases ul {
      flex-direction: column;
      align-items: flex-end;
      margin: 0;
    }

    .use-cases li {
      max-width: 100%;
    }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    :where(.hero *, .features *, .use-cases *, .footer-links) {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
</style>