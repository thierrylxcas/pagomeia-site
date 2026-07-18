import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    heroImage: z.string().optional(),

    author: z.string().default("Equipe PagoMeia"),
    category: z.string().default("PagoMeia"),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default("5 min"),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };