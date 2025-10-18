<script lang="ts">
    import { Button, DropdownMenu } from "bits-ui";
    import { slide } from "svelte/transition";

    const { slug, pathname }: { slug: string; pathname: string } = $props();

    const menuText = $derived.by(() => {
        if (slug === "me") return "Home";
        let capitalized = slug.charAt(0).toUpperCase() + slug.slice(1);
        return capitalized;
    });

    const internalAnchors = [
        {
            id: 0,
            display: "Home",
            href: "/",
            icon: houseSvg,
        },
        {
            id: 1,
            display: "Projects",
            href: "/projects",
            icon: projectsSvg,
        },
        {
            id: 2,
            display: "Blog",
            href: "/blog",
            icon: blogSvg,
        },
        {
            id: 3,
            display: "Experiences",
            href: "/experiences",
            icon: experiencesSvg,
        },
    ];

    const externalAnchors = [
        {
            id: 0,
            display: "GitHub",
            href: "https://github.com/lalitm1004",
            icon: githubSvg,
        },
        {
            id: 1,
            display: "LinkedIn",
            href: "https://www.linkedin.com/in/lalitm1004/",
            icon: linkedinSvg,
        },
    ];
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger
        class={`w-[165px] flex justify-between items-center pl-3 pr-2 py-1 hover:bg-neutral-800/50 border-2 border-neutral-800 rounded-md outline-0 cursor-pointer transition-colors duration-300`}
    >
        <p>{menuText}</p>
        {@render upDownSvg()}
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
        <DropdownMenu.Content
            class={`w-[165px] py-2 border-2 border-neutral-800 rounded-md bg-stone-950`}
            sideOffset={6}
            forceMount
        >
            {#snippet child({ wrapperProps, props, open })}
                <div {...wrapperProps}>
                    {#if open}
                        <div {...props} transition:slide>
                            <DropdownMenu.Group class={`flex flex-col gap-1`}>
                                {#each internalAnchors as anchor (anchor.id)}
                                    {@const href = anchor.href}
                                    {@const isCurrentPage =
                                        pathname === href ||
                                        pathname.startsWith(`${href}/`)}

                                    <DropdownMenu.Item class={`group`}>
                                        <Button.Root
                                            {href}
                                            data-current={isCurrentPage}
                                            data-astro-prefetch={`load`}
                                            class={`flex items-center justify-between mx-2 px-2 py-1 data-[current="true"]:bg-neutral-800/50 data-[current="false"]:group-hover:bg-neutral-800/50 rounded-md outline-0 transition-colors duration-300`}
                                        >
                                            <p>{anchor.display}</p>

                                            {@render anchor.icon()}
                                        </Button.Root>
                                    </DropdownMenu.Item>
                                {/each}
                            </DropdownMenu.Group>

                            <hr
                                class={`h-[2px] border-neutral-800 w-[80%] mx-auto my-2`}
                            />

                            <DropdownMenu.Group class={`flex flex-col gap-1`}>
                                {#each externalAnchors as anchor (anchor.id)}
                                    <DropdownMenu.Item class={`group`}>
                                        <Button.Root
                                            href={anchor.href}
                                            target={"_blank"}
                                            rel={`noopener noreferrer`}
                                            class={`flex items-center justify-between mx-2 px-2 py-1 group-hover:bg-neutral-800/50 rounded-md outline-0 transition-colors duration-300`}
                                        >
                                            <p>{anchor.display}</p>

                                            {@render anchor.icon()}
                                        </Button.Root>
                                    </DropdownMenu.Item>
                                {/each}
                            </DropdownMenu.Group>
                        </div>
                    {/if}
                </div>
            {/snippet}
        </DropdownMenu.Content>
    </DropdownMenu.Portal>
</DropdownMenu.Root>

{#snippet upDownSvg()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-[20px] aspect-square fill-none stroke-2 stroke-neutral-300 lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"
    >
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
{/snippet}

{#snippet houseSvg()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-[20px] aspect-square fill-none stroke-2 stroke-neutral-300 lucide lucide-house-icon lucide-house"
    >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        />
    </svg>
{/snippet}

{#snippet projectsSvg()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-[20px] aspect-square fill-none stroke-2 stroke-neutral-300 lucide lucide-folder-git2-icon lucide-folder-git-2"
    >
        <path
            d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
        />
        <circle cx="13" cy="12" r="2" />
        <path d="M18 19c-2.8 0-5-2.2-5-5v8" />
        <circle cx="20" cy="19" r="2" />
    </svg>
{/snippet}

{#snippet blogSvg()}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-[20px] aspect-square fill-none stroke-2 stroke-neutral-300 lucide lucide-notebook-pen-icon lucide-notebook-pen"
    >
        <path
            d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
        />
        <path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path
            d="M2 18h4"
        />
        <path
            d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
        />
    </svg>
{/snippet}

{#snippet linkedinSvg()}
    <svg
        class={`h-[20px] aspect-square fill-none stroke-2 stroke-neutral-300 tabler-icon tabler-icon-brand-linkedin`}
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M16 16v-3a2 2 0 1 0 -4 0" />
        <path
            d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
        />
    </svg>
{/snippet}

{#snippet githubSvg()}
    <svg
        class={`h-[20px] aspect-square fill-none stroke-2 stroke-neutral-300 tabler-icon tabler-icon-brand-github`}
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
        />
    </svg>
{/snippet}

{#snippet experiencesSvg()}
    <svg
        class={`h-[20px] aspect-square fill-none stroke-2 stroke-neutral-300 lucide lucide-briefcase-business-icon lucide-briefcase-business`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M12 12h.01" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
{/snippet}
