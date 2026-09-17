# Information Architecture: shagoto.me

## Global Structure & Navigation
The navigation system uses standard, universally understood directory paths while maintaining a "terminal/Unix" aesthetic visually on the frontend.

**Primary Navigation:**
*   `/research` (Formal academic work, thesis proposals, and AI reasoning engines)
*   `/projects` (Engineering, low-level programming, web architectures, and infrastructure)
*   `/notes` (Technical documentation, logs, and intellectual reflections)

**Secondary Navigation/Actions:**
*   `[Command Palette]` (Triggered by `/` for global search and rapid node jumping)
*   `[Download CV]` (Direct download of a LaTeX-compiled professional resume)

## Page Definitions

### 1. `/` (Homepage / The Nexus)
*   **Model:** Hybrid (Identity → Highlights → Feed)
    *   *First 10 seconds (Identity):* Dual-column manifesto ("Architecting verifiable intelligence...").
    *   *Next 30 seconds (Pinned Highlights):* 2-3 top projects/papers (e.g., Abductive Neuro-Symbolic Engine, 911 OpenGL Simulation).
    *   *Scroll (The Feed):* Chronological activity feed (commits, recent notes).
*   **Visitor's Intended Takeaway:** This is an active computational node managed by a serious systems architect and AI researcher.

### 2. `/research` (Academic & Verifiable AI Index)
*   **Purpose:** Host formal academic work, including ongoing thesis proposals and clinical reasoning engines.
*   **Required Content:** Index of research initiatives.

### 3. `/research/[project-slug]` (Research Brief)
*   **URLs:** 
    * `/research/abductive-neuro-symbolic-engine`
    * `/research/z3-cardiorenal-thesis-proposal` (Clearly marked as an ongoing proposal)
*   **Required Content:** Abstract, Methodology, Architecture Diagram (LLM -> Pydantic -> Z3), Results/Expected Results.
*   **Interactive Element:** Side-by-side toggle for prose descriptions vs. Z3 formal proofs.

### 4. `/projects` (Engineering Index)
*   **Purpose:** Present low-level programming, GUI architectures, web compilers, and infrastructure.
*   **Required Content:** Index of engineering work.

### 5. `/projects/[project-slug]` (Technical Brief)
*   **URLs:** 
    * `/projects/opengl-lower-manhattan` (Credits collaboration with Mahadi)
    * `/projects/js-mini-compiler-ide`
    * `/projects/java-ridesharing-gui`
*   **Required Content:** Architecture Diagram, "The Constraint" definition, and "The Execution" (raw code snippets, CLI output, or unedited 60fps video capture).

### 6. `/notes` (Logs & Writing Index)
*   **Purpose:** Document infrastructure setups, academic notes, and philosophical/literary explorations.
*   **URLs:**
    * `/notes/headless-ubuntu-tailscale`
    * `/notes/8086-microprocessor-assembly`
    * `/notes/moral-complexity-dostoevsky-arcane`

## Sitemap
*   `/`
    *   `/research`
        *   `/research/abductive-neuro-symbolic-engine`
        *   `/research/z3-cardiorenal-thesis-proposal`
    *   `/projects`
        *   `/projects/opengl-lower-manhattan`
        *   `/projects/js-mini-compiler-ide`
        *   `/projects/java-ridesharing-gui`
    *   `/notes`
        *   `/notes/headless-ubuntu-tailscale`
        *   `/notes/8086-microprocessor-assembly`
        *   `/notes/moral-complexity-dostoevsky-arcane`
    *   `/cv.pdf`
    
