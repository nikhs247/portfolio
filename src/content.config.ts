import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

// Academic schema
const researchCollection = defineCollection ({
    // type    : 'content',
    loader  : glob({
        pattern: "**/*.md",
        base: "./src/content/research"
    }),
    schema  : z.object({
        title   : z.string(),
        date    : z.date(),
        tags    : z.array(z.string()),
        featured: z.boolean().optional(),
        status  : z.string().optional(),
        funding : z.string().optional(),
        summary : z.string()
    }),
});

// Industry schema
const projectsCollection = defineCollection ({
    // type    : 'content',
    loader  : glob({
        pattern: "**/*.md",
        base: "./src/content/projects"
    }),
    schema  : z.object({
        title   : z.string(),
        role    : z.string(),
        date    : z.date(),
        tags    : z.array(z.string()),
        featured: z.boolean().optional(),
        status  : z.string().optional(),
        funding : z.string().optional(),
        summary : z.string()
    }),
});

export const collections = {
    'research': researchCollection,
    'projects': projectsCollection,
}