import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
	// Load Markdown and MDX files in the `src/content/case-studies/` directory.
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()),
		featured: z.boolean().default(false),
		// Structured case study fields
		problem: z.string(),
		architecture: z.string(),
		decisions: z.array(z.string()),
		results: z.array(z.string()),
		lessons: z.array(z.string()),
		// Optional top-line metric for the card/header
		metricHighlight: z.string().optional(),
	}),
});

export const collections = { 'case-studies': caseStudies };
