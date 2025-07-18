<script lang="ts">
    import { Button, Tooltip } from "bits-ui";
    import type { YearBucket } from "../types/project.type";
    import RenderTags from "./RenderTags.svelte";

    let { yearBuckets }: { yearBuckets: YearBucket[] } = $props();
</script>

<ol class={`flex flex-col gap-6`}>
    {#each yearBuckets as bucket (bucket.year)}
        <li class={`flex flex-col gap-4`}>
            <hgroup class={`flex items-center gap-2`}>
                <h3 class={`font-amulya font-bold text-2xl`}>
                    {bucket.year}
                </h3>

                <hr class={`w-full border border-stone-700`} />
            </hgroup>

            <ul class={`grid md:grid-cols-2 grid-cols-1 gap-4 px-2`}>
                {#each bucket.projects as project (project.id)}
                    {@const safeTags = project.data.project_tags ?? []}
                    {@const mx = "ml-5 mr-4"}

                    <li
                        class={`group bg-stone-950 relative flex flex-col gap-1 pt-5 pb-0 border-2 border-neutral-800 rounded-md overflow-hidden hover:border-stone-600 hover:shadow-sm hover:shadow-stone-800 transition-all duration-300`}
                    >
                        {#if project.data.is_important}
                            <Tooltip.Provider>
                                <Tooltip.Root delayDuration={200}>
                                    <Tooltip.Trigger
                                        class={`absolute top-4 right-4 cursor-pointer`}
                                    >
                                        {@render starSvg()}

                                        <p class={`sr-only`}>
                                            Featured Project!
                                        </p>
                                    </Tooltip.Trigger>

                                    <Tooltip.Content
                                        sideOffset={8}
                                        side={`left`}
                                    >
                                        <div
                                            class={`z-50 bg-stone-950 border-2 border-neutral-800 px-2 py-1 rounded-md text-sm`}
                                        >
                                            Featured Project!
                                        </div>
                                    </Tooltip.Content>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        {/if}

                        <p class={`text-stone-500 text-sm ${mx}`}>
                            {project.timeRange}
                        </p>

                        <h4 class={`font-amulya font-bold text-xl ${mx}`}>
                            {project.data.title}
                        </h4>

                        <span class={`mx-4 -mt-1`}>
                            <RenderTags tags={safeTags} />
                        </span>

                        <p class={`flex-grow text-sm ${mx} mt-2 text-wrap`}>
                            {project.data.description}
                        </p>

                        <div class={`flex mt-4 h-[40px]`}>
                            <svelte:boundary>
                                {@const commonClass = `flex-grow grid place-items-center border-t-2 border-neutral-800 group-hover:border-stone-600 transition-colors duration-300 hover:bg-stone-800/50`}

                                {#if project.data.repository_link}
                                    <Button.Root
                                        href={project.data.repository_link}
                                        class={commonClass}
                                        rel={`noopener noreferrer`}
                                        target={`_blank`}
                                    >
                                        GitHub
                                    </Button.Root>
                                {/if}

                                {#if project.data.deployment_link}
                                    <Button.Root
                                        href={project.data.deployment_link}
                                        class={`${commonClass} border-l-2`}
                                        rel={`noopener noreferrer`}
                                        target={`_blank`}
                                    >
                                        Deployment
                                    </Button.Root>
                                {/if}

                                {#if project.data.blog_slug}
                                    <Button.Root
                                        href={`/blog/${project.data.blog_slug}`}
                                        class={`${commonClass} border-l-2`}
                                        rel={`noopener noreferrer`}
                                    >
                                        Read More
                                    </Button.Root>
                                {/if}
                            </svelte:boundary>
                        </div>
                    </li>
                {/each}
            </ul>
        </li>
    {/each}
</ol>

{#snippet starSvg()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-[24px] aspect-square fill-stone-700 group-hover:rotate-[72deg] transition-transform duration-300 lucide lucide-star-icon lucide-star"
    >
        <path
            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        />
    </svg>
{/snippet}
