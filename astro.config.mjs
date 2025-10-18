// @ts-check
import { defineConfig } from 'astro/config';
import devtoolsJson from "vite-plugin-devtools-json";

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://lm04.me",

  vite: {
    plugins: [devtoolsJson(), tailwindcss()]
  },

  integrations: [svelte()]
});