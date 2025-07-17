// @ts-check
import { defineConfig } from "astro/config";
import devtoolsJson from "vite-plugin-devtools-json";
import mermaid from "astro-mermaid";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
	site: "https://lm04.me",

	prefetch: true,

	vite: {
		plugins: [
			devtoolsJson(),
			tailwindcss()
		]
	},

	integrations: [
		mermaid({
			theme: "dark",
		}),
		svelte(),
		sitemap(),
		mdx(),
	],

	markdown: {
		syntaxHighlight: {
			type: "shiki",
			excludeLangs: ["mermaid", "math"]
		},
		shikiConfig: {
			theme: "everforest-dark",
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[rehypeExternalLinks, {
				target: "_blank",
				rel: ["noopener", "noreferrer"]
			}],
			rehypeKatex
		],
	}
});