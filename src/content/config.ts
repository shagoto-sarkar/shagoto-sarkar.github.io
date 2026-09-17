import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    date: z.coerce.date(),
    status: z.enum(['proposal', 'ongoing', 'completed', 'published']),
    isProposal: z.boolean().default(false),
    supervisor: z.string().optional(),
    tags: z.array(z.string()),
    proofAvailable: z.boolean().default(false),
    githubUrl: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    constraint: z.string(),
    techStack: z.array(z.string()),
    date: z.coerce.date(),
    collaborators: z.array(z.string()).optional(),
    demoVideoAvailable: z.boolean().default(false),
    repoUrl: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['infrastructure', 'academia', 'philosophy']),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  research,
  projects,
  notes,
};
