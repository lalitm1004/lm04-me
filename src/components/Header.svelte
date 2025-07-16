<script lang="ts">
    import { Button } from "bits-ui";
    import Menu from "./Menu.svelte";

    const {
        pathname,
        slugOverride,
    }: {
        pathname: string;
        slugOverride?: string;
    } = $props();

    const slug: string = $derived.by(() => {
        let slug = "me";

        let segments = pathname.split("/").filter(Boolean);

        if (segments.length >= 1) {
            slug = segments[0];
        }

        slug = slugOverride ?? slug;
        return slug;
    });

    const slugHrefMap: Record<string, string> = {
        me: "/",
        "404": "/",
        blog: "/blog",
        projects: "/projects",
    };
    const slugHref: string = $derived.by(() => slugHrefMap[slug] ?? "/");
</script>

<header class={`absolute left-0 top-0 h-[75px] w-full`}>
    <nav
        class={`h-full md:w-[128ch] flex items-center justify-between md:m-auto mx-4 `}
    >
        <h2 class={`font-amulya font-bold italic md:text-3xl text-2xl`}>
            <Button.Root href={slugHref}>
                lm04/{slug}
            </Button.Root>
        </h2>

        <Menu {pathname} />
    </nav>
</header>
