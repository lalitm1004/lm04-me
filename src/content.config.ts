import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: () => z.object({
        slug: z.string(),
        meta_title: z.string().optional(),
        title: z.string(),
        description: z.string(),
        publish_date: z.coerce.date(),
        is_published: z.boolean().default(false),
        is_pinned: z.boolean().default(false),
        blog_tags: z.array(z.string()).default([]).nullable(),
    }),
})

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: () => z.object({
        slug: z.string(),
        meta_title: z.string().optional(),
        title: z.string(),
        description: z.string(),
        start_date: z.coerce.date(),
        end_date: z.coerce.date().optional(),
        is_published: z.boolean().default(false),
        is_pinned: z.boolean().default(false),
        is_important: z.boolean().default(false),
        project_tags: z.array(z.string()).default([]).nullable(),
    }),
})

export const collections = { blog, projects };