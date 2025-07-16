import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
    const blogPosts = await getCollection('blog');
    const projectPosts = await getCollection('projects');

    const blogItems = blogPosts.map((post) => ({
        ...post.data,
        link: `/blog/${post.id}/`,
        pubDate: post.data.pubDate,
        customData: `<category>blog</category>`,
    }));

    const projectItems = projectPosts.map((project) => ({
        ...project.data,
        link: `/projects/${project.id}/`,
        pubDate: project.data.pubDate,
        customData: `<category>project</category>`,
    }));

    const allItems = [...blogItems, ...projectItems].sort((a, b) => {
        return new Date(b.pubDate) - new Date(a.pubDate);
    });

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: allItems
    });
}
