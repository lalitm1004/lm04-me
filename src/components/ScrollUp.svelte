<script lang="ts">
    import { fly } from "svelte/transition";

    let showScrollUp: boolean = $state(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    };
</script>

<svelte:window onscroll={() => (showScrollUp = window.scrollY > 100)} />

{#if showScrollUp}
    <button
        transition:fly={{ y: "100%" }}
        onclick={scrollToTop}
        class={`z-50 fixed bottom-4 md:right-78.5 right-4 h-[40px] aspect-square grid place-items-center rounded-full bg-stone-950 border-2 border-neutral-800/80 cursor-pointer hover:bg-stone-900 transition-colors duration-300`}
    >
        {@render arrowUpSvg()}
    </button>
{/if}

{#snippet arrowUpSvg()}
    <svg
        class={`h-[20px] aspect-square fill-none stroke-2 stroke-neutral-500  lucide lucide-arrow-up-icon lucide-arrow-up`}
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
    </svg>
{/snippet}
