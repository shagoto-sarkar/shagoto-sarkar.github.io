# Technical Architecture: shagoto.me

## 1. Core Architectural Principles
*   **Static-First Compilation:** 100% of the core content, layouts, and typography compile to pre-rendered HTML and CSS at build time.
*   **Purposeful Client JavaScript:** Zero client-side JavaScript by default. Isolated vanilla scripts are permitted strictly where accessible user interactions (e.g., Z3 proof toggles, command-palette navigation) require DOM manipulation.
*   **Zero-Bloat Aesthetics:** Complete rejection of bloated CSS utility runtimes and component libraries in favor of raw CSS custom properties matching the AXIOM Deterministic Brutalism design tokens.
*   **Type-Safe Content Schema:** Markdown content collections validated via TypeScript/Zod schemas to prevent broken links, missing metadata, or unverified claims.

## 2. Technology Stack
*   **Static Site Generator:** Astro (SSG Mode)
*   **Styling:** Vanilla CSS with global CSS custom properties (design tokens) and Astro scoped component styles.
*   **Content Layer:** Astro Content Collections (Markdown and MDX).
*   **Code Syntax Highlighting:** Shiki (rendered at build time; zero client-side JavaScript).
*   **Typography Assets:** Self-hosted `.woff2` files for *EB Garamond* and *JetBrains Mono* stored in `/public/fonts/`.
*   **Hosting & CI/CD:** GitHub Actions deploying static builds directly to GitHub Pages with custom domain binding for `shagoto.me`.

## 3. Grounded Content Schemas (Zod)

### Research Collection (`src/content/research/`)
Maps to formal academic initiatives, thesis proposals, and clinical reasoning engines.
```typescript
import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    date: z.date(),
    status: z.enum(['proposal', 'ongoing', 'completed', 'published']),
    isProposal: z.boolean().default(false), // Enforces factual clarity
    supervisor: z.string().optional(),
    tags: z.array(z.string()),
    proofAvailable: z.boolean().default(false),
    githubUrl: z.string().url().optional(),
  }),
});
