# Visual Design System: AXIOM (shagoto.me)

## 1. Three Design Directions

### Direction A: Deterministic Brutalism (Selected)
*   **Name:** Deterministic Brutalism.
*   **Concept:** A stark, high-density environment merging a published academic paper with a raw Unix terminal to act as a digital archive and active computational node[cite: 3].
*   **Visual Characteristics:** Minimal decorative elements, data-dense layouts, and stark contrast[cite: 3].
*   **Typography:** A "Split-brain" approach utilizing a classic serif for prose and a strict monospace for mechanical execution and UI.
*   **Color Philosophy:** Relies heavily on terminal-inspired dark modes without neon excess.
*   **Layout Philosophy:** High information density utilizing visible structural grids with no soft shadows or glassmorphism[cite: 3].
*   **Motion Philosophy:** Zero-latency illusion; instant state changes mirroring a local C++ executable.
*   **Strengths:** Directly validates the dual AI Researcher and Systems Engineer identity for academic and deep-tech audiences[cite: 3].
*   **Risks:** May feel overly intimidating or overly rigid to non-technical recruiters.
*   **Relationship to Identity:** Directly reflects the working philosophy of rigorous logic and CLI-first workflows over probabilistic outputs[cite: 1].

### Direction B: The Academic Monograph
*   **Name:** The Academic Monograph.
*   **Concept:** Replicates the experience of reading a LaTeX-compiled scientific journal or published paper[cite: 3, 4].
*   **Visual Characteristics:** Off-white backgrounds, centralized content columns, and footnote indicators.
*   **Typography:** Exclusively traditional Serif typography.
*   **Color Philosophy:** High-contrast light mode (black ink on paper).
*   **Layout Philosophy:** Heavily utilizes whitespace and traditional print margins.
*   **Motion Philosophy:** Completely static.
*   **Strengths:** Strongly appeals to academic counterparts and thesis supervisors looking for peer-reviewed standards[cite: 3].
*   **Risks:** Completely alienates the secondary identities of low-level systems programmer and Linux infrastructure enthusiast[cite: 3].
*   **Relationship to Identity:** Over-indexes on the researcher persona while ignoring the engineering and graphics programming reality[cite: 1].

### Direction C: Headless Node
*   **Name:** Headless Node.
*   **Concept:** A pure terminal emulator interface, mimicking headless Ubuntu server management accessed via SSH[cite: 1].
*   **Visual Characteristics:** Exclusively text-based UI with glowing terminal text on pure black.
*   **Typography:** Exclusively Monospace (e.g., JetBrains Mono)[cite: 5].
*   **Color Philosophy:** Monochrome with phosphor green accents.
*   **Layout Philosophy:** Left-aligned, strictly rigid grid mimicking terminal character limits.
*   **Motion Philosophy:** Typing effects and blinking block cursors.
*   **Strengths:** Instantly communicates the Linux power-user and systems architect persona[cite: 1].
*   **Risks:** Fails the "Anti-Generic" test by falling into the cliché "AI hacker" aesthetic[cite: 3].
*   **Relationship to Identity:** Diminishes the philosophical depth and formal academic rigor required for clinical guideline modeling[cite: 1].

**Critique & Selection:**
Direction A (Deterministic Brutalism) is selected. It avoids generic developer tropes[cite: 3] and explicitly supports both the probabilistic and deterministic facets of the identity[cite: 1, 3].

---

## 2. Design Philosophy & Visual Principles
*   **Proof Over Promise:** The UI exists solely to frame evidence, prioritizing raw code snippets, CLI outputs, and formal abstracts over marketing language[cite: 3].
*   **Data Density:** Optimize for high-information environments with minimal decorative elements[cite: 3].
*   **Zero-Latency:** Interactions must feel instantaneous, uncompromising, and mechanically raw[cite: 3].
*   **Structural Integrity:** Rely on visible lines and strict grids, explicitly rejecting soft shadows, bouncy web animations, and glassmorphism[cite: 3].

## 3. Color System
*   **color-background:** Obsidian (`#050505`) - pure, light-absorbing base.
*   **color-surface:** Graphite (`#121212`) - used for structural containers and code blocks.
*   **color-text:** Parchment (`#E8E8E8`) - an off-white used to reduce eye strain during deep reads of research papers.
*   **color-muted:** Steel (`#888888`) - for metadata, timestamps, and breadcrumbs.
*   **color-accent-logic:** Solver Blue (`#2A7FFF`) - represents deterministic logic, formal verification, and hyperlinks.
*   **color-accent-system:** Phosphor Green (`#4AF626`) - represents execution success and terminal activity.

## 4. Typography System
*   **Primary (Prose):** *EB Garamond*[cite: 5]. Used for H1, H2, research abstracts, thesis methodology, and logs[cite: 2].
*   **Secondary (UI/Data):** *JetBrains Mono*[cite: 5]. Used for the global command palette, directory navigation, and code snippets[cite: 2].

## 5. Type Scale, Spacing & Grid System
*   **Type Scale:** Modular (1.250 - Major Third) to ensure stark contrast between headings and body text.
*   **Spacing System:** Base-4 pixel grid (`4px`, `8px`, `16px`, `32px`, `64px`).
*   **Grid/Layout System:** 12-column CSS Grid structure with maximum container width capped at `1200px`.
*   **Borders:** Hard `1px solid var(--color-border)` applied to delineate structural containers.
*   **Radius:** `0px`. Absolutely no rounded corners to maintain the brutalist, deterministic aesthetic[cite: 3].
*   **Shadows/Elevation:** Strictly forbidden[cite: 3]. Elevation is communicated solely via background shifts (from Obsidian to Graphite) and 1px borders.

## 6. Components & Iconography
*   **Iconography:** Minimal. Rely on ASCII characters or stark wireframe SVGs (e.g., `+`, `-`, `>`, `█`).
*   **Imagery:** Exclusively architecture diagrams, CLI outputs, and unedited video captures[cite: 3, 4]. No generic device mockups[cite: 3].
*   **Code Presentation:** Displayed in Graphite blocks with strict, low-contrast syntax highlighting.
*   **Research Presentation:** Layout mimics a dual-pane editor. Prose on the left, Z3 formal proofs or methodology diagrams on the right, controlled via a side-by-side toggle[cite: 2].
*   **Project Presentation:** Features a strict "Constraint" and "Execution" layout alongside architecture diagrams[cite: 2].
*   **Navigation:** Top or side-aligned standard directory model (`/research`, `/projects`, `/notes`) using JetBrains Mono[cite: 2, 5].
*   **Buttons:** Hard rectangular blocks. Hover states instantly invert background and text colors.
*   **Cards:** Wireframe-style structural boxes without padding bloat.
*   **Tags/Badges:** Monospace text enclosed in 1px borders.

## 7. Motion Philosophy
*   **Animation Philosophy:** Zero-easing. Transitions must mimic raw 60fps hardware rendering or instant terminal state changes.
*   **Transition Durations:** `0ms` to `50ms`. No smooth fades or bouncy web animations[cite: 3].
*   **Hover Behavior:** Instantaneous background or border color swap.
*   **Page Transitions:** Pages replace one another instantly.
*   **Micro-interactions:** Blinking block cursor (`█`) in text inputs or the command palette.
*   **Reduced-Motion Behavior:** Defaults to instant DOM replacement without any animated transitions.

## 8. Responsive Design
*   **Large Desktop:** 12-column grid, visible structural dividers. Dual-pane research viewers (prose vs. Z3 proofs) fully expanded[cite: 2].
*   **Laptop/Tablet:** 8-column grid. Left-aligned navigation collapses to a top bar.
*   **Mobile:** 4-column grid. Stacks into a dense "pocket terminal" emphasizing typography. Side-by-side toggles for research proofs convert into top/bottom accordion sections[cite: 2].

## 9. Accessibility
*   **Contrast:** WCAG AAA compliance for text contrast on dark backgrounds.
*   **Keyboard Navigation:** Fully supported. The global command palette (`/`) acts as the primary power-user navigation tool[cite: 2].
*   **Focus States:** A sharp `2px solid var(--color-accent-logic)` outline with zero offset.
*   **Screen Readers:** SVGs for AI architectures (e.g., the LLM to Pydantic to Z3 pipeline) must include deeply descriptive `aria-labels`[cite: 4].

## 10. Page-Level Visual Strategy

### Homepage (`/`)
*   **Visual Hierarchy:** Dual-column manifesto → Pinned Highlights → Chronological activity feed[cite: 2].
*   **Primary Focal Point:** The statement "Architecting verifiable intelligence" presented in large EB Garamond.
*   **Content Density:** High.
*   **Interaction Patterns:** Scroll to reveal the chronologically sorted feed of recent commits and logs[cite: 2].

### Research (`/research`)
*   **Visual Hierarchy:** Index list prioritizing titles and publication/proposal status.
*   **Content Density:** High, mirroring an index of academic abstracts[cite: 2].

### Individual Research Pages (`/research/[slug]`)
*   **Visual Hierarchy:** Title → Abstract → Dual-pane Methodology (Prose vs. Proofs)[cite: 2].
*   **Interaction Patterns:** Side-by-side toggle for prose descriptions versus Z3 formal proofs[cite: 2].

### Projects (`/projects`)
*   **Visual Hierarchy:** Grid of technical briefs.
*   **Content Density:** Medium. Thumbnails consist of wireframe architecture diagrams (white on black) or unedited terminal outputs[cite: 4].

### Individual Project Pages (`/projects/[slug]`)
*   **Visual Hierarchy:** Architecture Diagram → "The Constraint" → "The Execution"[cite: 2].
*   **Primary Focal Point:** Execution evidence, such as unedited 60fps video captures or raw code snippets[cite: 2, 4].

### Notes (`/notes`)
*   **Visual Hierarchy:** Chronological list of log entries[cite: 2].
*   **Content Density:** High text density.

### Individual Writing Pages (`/notes/[slug]`)
*   **Primary Focal Point:** The text itself. Focuses heavily on the EB Garamond reading experience for literary analysis or technical configurations[cite: 4, 5].

### CV/Download (`/cv.pdf`)
*   **Interaction Patterns:** Direct download trigger for the LaTeX-compiled PDF; no intermediate web page required[cite: 2].

---

## 11. Conceptual Design Tokens
```css
/* Color */
--color-bg-base: #050505;
--color-bg-surface: #121212;
--color-text-primary: #E8E8E8;
--color-text-muted: #888888;
--color-accent-logic: #2A7FFF;
--color-accent-system: #4AF626;
--color-border: #333333;

/* Typography */
--font-family-prose: 'EB Garamond', serif;
--font-family-system: 'JetBrains Mono', monospace;

/* Spacing & Structure */
--spacing-base: 4px;
--border-radius-none: 0px;
--border-width-structural: 1px;

/* Motion */
--motion-duration-instant: 0ms;
--motion-duration-snap: 50ms;
