import { defineCollection, z } from 'astro:content';

// Define a schema for each content type
const playground = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string().optional(),
    }),
});

const notes = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

// Register collections
export const collections = { playground, notes };
