// @ts-check
import { defineConfig } from 'astro/config';
import devtoolsJson from "vite-plugin-devtools-json";

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [devtoolsJson(), tailwindcss()]
  },

  integrations: [svelte()]
});