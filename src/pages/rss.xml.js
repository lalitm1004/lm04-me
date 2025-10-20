import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_INFO } from "../consts";

export const GET = async (context) => {
    const blogPosts = await getCollection('blog');

    const blogItems = blogPosts.map((post) => ({
        ...post.data,
        link: `/blog/${post.data.slug}`,
        publishDate: post.data.publish_date,
        customData: `<category>blog</category>`,
    }));

    const allItems = [...blogItems].sort((a, b) => {
        return new Date(b.publishDate) - new Date(a.publishDate);
    });

    return rss({
        title: SITE_INFO.title,
        description: SITE_INFO.blogDescription,
        site: context.site,
        items: allItems
    });
}