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
        daily_hacking: z.number().min(0).default(0), // Time in minutes
        daily_total: z.number().min(0).default(0), // Time in minutes
        description: z.string().optional(),
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
        weekly_hacking: z.number().min(0).default(0), // Time in minutes
        weekly_total: z.number().min(0).default(0), // Time in minutes
        description: z.string().optional(),
    }),
});

// Quarters collection - Quarter reference pages with 12-Week Outcome and Phase Goals
const quartersCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        quarter: z.number().min(1).max(4),
        theme: z.string().optional(), // e.g., "Foundation", "Execution", "Specialization", "Mastery"
    }),
});

// Roadmap collection - High-level bug bounty strategy and milestones
const roadmapCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = {
    logs: logsCollection,
    reviews: reviewsCollection,
    quarters: quartersCollection,
    roadmap: roadmapCollection,
};
