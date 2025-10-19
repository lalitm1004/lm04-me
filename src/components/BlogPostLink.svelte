<script lang="ts">
    import type { CollectionEntry } from "astro:content";
    import RenderTags from "./RenderTags.svelte";

    import { Button, Separator } from "bits-ui";

    type BlogPost = CollectionEntry<"blog">;

    let { blogPost }: { blogPost: BlogPost } = $props();
    const tags = $derived(blogPost.data.tags ?? []);
</script>

<li>
    <Button.Root
        href={`/blog/${blogPost.data.slug}`}
        data-astro-prefetch={`load`}
        class={`flex flex-col items-start md:px-4 px-2 py-4 hover:bg-stone-800/50 rounded-md transition-colors duration-200`}
    >
        <time
            class={`text-stone-500 text-sm`}
            datetime={blogPost.data.publish_date.toISOString()}
        >
            {blogPost.data.publish_date.toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "2-digit",
            })}
        </time>

        <hgroup class={`flex flex-col items-start`}>
            <h4 class={`font-amulya font-bold text-xl`}>
                {blogPost.data.title}
            </h4>

            <p class={`text-sm`}>{blogPost.data.description}</p>
        </hgroup>

        <RenderTags {tags} />
    </Button.Root>

    <Separator.Root
        orientation={`horizontal`}
        class={`mt-5 bg-stone-800 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full`}
    />
</li>
