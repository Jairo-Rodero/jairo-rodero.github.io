import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};