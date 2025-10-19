import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";


const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/*.{md,mdx}",
    }),
    schema: () => z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        publish_date: z.coerce.date(),
        is_visible: z.boolean().default(false),
        is_pinned: z.boolean().default(false),
        tags: z.array(z.string()).default([]).nullable(),
    }),
});


/**
 * blog_slug: To href to a blog
 * deployment_text: To modify anchor text if needed
 */
const projects = defineCollection({
    loader: glob({
        base: "./src/content/projects",
        pattern: "**/*.{md,mdx}",
    }),
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
        start_date: z.coerce.date(),
        end_date: z.coerce.date().optional(),
        is_important: z.boolean().default(false),
        is_visible: z.boolean().default(false),
        is_pinned: z.boolean().default(false),
        tags: z.array(z.string()).default([]).nullable(),
        repository_url: z.string().optional(),
        blog_slug: z.string().optional(),
        deployment_url: z.string().optional(),
        deployment_text: z.string().default("Deployment")
    })
})


export const collections = { blog, projects };