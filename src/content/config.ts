import { defineCollection, z } from 'astro:content';

// Logs collection - Daily execution updates
const logsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        quarter: z.number().min(1).max(4),
        week: z.number().min(1).max(12),
        phase: z.number().min(1).max(3).optional(), // Phase 1 (W12-9), Phase 2 (W8-5), Phase 3 (W4-1)
        tags: z.array(z.string()).default([]),
        hunting: z.number().min(0).default(0), // Time in minutes
        total: z.number().min(0).default(0), // Time in minutes
    }),
});

// Reviews collection - Weekly comprehensive analysis
const reviewsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        quarter: z.number().min(1).max(4),
        week: z.number().min(1).max(12),
        phase: z.number().min(1).max(3).optional(), // Phase 1 (W12-9), Phase 2 (W8-5), Phase 3 (W4-1)
        weekProgress: z.number().min(0).max(100),
        wins: z.array(z.string()).default([]),
        challenges: z.array(z.string()).default([]),
        nextWeekFocus: z.array(z.string()).default([]),
        hunting: z.number().min(0).default(0), // Time in minutes
        total: z.number().min(0).default(0), // Time in minutes
        description: z.string().optional(),
    }),
});

// Quarters collection - High-level goals for each quarter
const quartersCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        quarter: z.number().min(1).max(4),
    }),
});

export const collections = {
    logs: logsCollection,
    reviews: reviewsCollection,
    quarters: quartersCollection,
};
