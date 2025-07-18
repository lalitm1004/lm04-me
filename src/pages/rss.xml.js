import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import slugify from '../utils/slugify';

export async function GET(context) {
    const blogPosts = await getCollection('blog');

    const blogItems = blogPosts.map((post) => ({
        ...post.data,
        link: `/blog/${slugify(post.data.slug)}/`,
        publishDate: post.data.publish_date,
        customData: `<category>blog</category>`,
    }));

    const allItems = [...blogItems].sort((a, b) => {
        return new Date(b.publishDate) - new Date(a.publishDate);
    });

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: allItems
    });
}
