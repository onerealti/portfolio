import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Update this to your production URL (e.g., https://your-username.github.io/portfolio)
  site: "https://onerealti.github.io/portfolio",
  
  // Update this if deploying to a subdirectory on GitHub Pages (e.g., '/portfolio')
  // If deploying to a custom domain or a user page (your-username.github.io), set base to '/' or remove it.
  base: "/portfolio",
  
  integrations: [mdx(), sitemap(), tailwind()],
});
