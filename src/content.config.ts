import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.{md,mdx}",
	}),

	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),

			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),

			heroImage: image().optional(),

			author: z.string().default("Equipe PagoMeia"),
			role: z.string().default("Equipe Editorial"),

			category: z.string().default("Cultura Pop"),
			tags: z.array(z.string()).default([]),

			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };