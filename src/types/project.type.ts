import type { CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

export type ProjectWithTimeRange = Project & {
    timeRange: string;
};

export type YearBucket = {
    year: number;
    projects: ProjectWithTimeRange[];
};