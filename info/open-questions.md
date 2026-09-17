# Open Questions & Decision Log

## Identity & Positioning
*   **Question:** Should the site explicitly mention the intention to apply for post-graduate programs?
    *   **Current recommendation:** Imply it through the rigorous academic structure (`/research`, thesis abstracts) rather than a blunt "seeking grad school" statement, maintaining the "active computational node" persona.
    *   **Decision status:** Pending User Confirmation.

## Content & Assets
*   **Question:** How will the architecture diagrams (SVGs) be generated and maintained?
    *   **Current recommendation:** Generate via code (Mermaid.js or Graphviz) styled via CSS to fit the brutalist terminal aesthetic. This aligns with the developer persona and is easier to maintain than hand-drawn Figma files.
    *   **Decision status:** Pending User Confirmation.
*   **Question:** Are there releasable code snippets or public GitHub repositories for projects like the Neuro-Symbolic Engine or the 911 OpenGL simulation?
    *   **Current recommendation:** Host curated, highly relevant code snippets directly in the Technical Briefs, and link to public repos if available. If private, use unedited 60fps video captures.
    *   **Decision status:** Requires User Input to verify asset availability.

## Visual Direction
*   **Question:** Does the specific pairing of *EB Garamond* (Serif for prose) and *JetBrains Mono* (Monospace for data) align with the user's aesthetic preferences?
    *   **Current recommendation:** Proceed with this pairing for strong contrast, but remain open to alternatives that fit the "Academic vs. Terminal" theme.
    *   **Decision status:** Pending User Review.

## Technical Architecture & Deployment
*   **Question:** What static site generator (SSG) or framework will be used to build the site?
    *   **Current recommendation:** Astro or Hugo. Both align with the zero-latency performance requirements and handle Markdown content (for `/notes` and `/projects`) exceptionally well without heavy JavaScript client-side routing.
    *   **Decision status:** Pending Technical Discussion.
*   **Question:** Where will the site be hosted?
    *   **Current recommendation:** GitHub Pages or Vercel for reliability and CI/CD ease, though self-hosting on the Ubuntu server would strongly reinforce the systems engineer persona.
    *   **Decision status:** Pending User Decision.

## Privacy
*   **Question:** Should contact information (email, phone) be listed publicly, or obfuscated?
    *   **Current recommendation:** An obfuscated email or a simple `mailto:` link using the `diu2everywhere.xyz` domain. Avoid complex contact forms to maintain the minimal aesthetic.
    *   **Decision status:** Pending User Preference.
