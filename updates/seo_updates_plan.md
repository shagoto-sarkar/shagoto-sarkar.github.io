# SEO & Indexing Remediation Plan

## Overview
This plan addresses the critical SEO and indexing warnings identified in the recent site audit[cite: 8]. The primary issues involve missing routing files (sitemaps), missing page-level metadata (canonical tags), and deployment configuration gaps (HTTPS enforcement)[cite: 8].

## Phase 1: Codebase Updates (Astro)

### 1.1 Implement Canonical Tags
*   **Issue:** "Canonical tag missing"[cite: 8]. Search engines need to know the preferred URL for every page.
*   **Action:** Update the global `<head>` (likely in `src/layouts/BaseLayout.astro`).
*   **Implementation:** Dynamically inject the canonical URL using Astro's routing object so every generated page points to its definitive HTTPS URL.
    ```html
    <link rel="canonical" href={new URL(Astro.url.pathname, Astro.site)} />
    ```

### 1.2 Generate XML Sitemap
*   **Issue:** "Sitemap missing"[cite: 8].
*   **Action:** Install and configure the official Astro sitemap integration.
*   **Implementation:** 
    1. Run `npx astro add sitemap` to add `@astrojs/sitemap` to `astro.config.mjs`.
    2. Ensure the `site` property is strictly defined in `astro.config.mjs` (e.g., `site: 'https://shagoto.me'`).

### 1.3 Update `robots.txt`
*   **Issue:** "Sitemap missing... Create /sitemap.xml and list it in robots.txt"[cite: 8].
*   **Action:** Update `public/robots.txt`.
*   **Implementation:** Add the sitemap directive to point crawlers to the newly generated index.
    ```text
    User-agent: *
    Allow: /
    Sitemap: [https://shagoto.me/sitemap-index.xml](https://shagoto.me/sitemap-index.xml)
    ```

## Phase 2: Deployment & Infrastructure

### 2.1 Enforce HTTPS Redirects
*   **Issue:** "HTTP not redirecting to HTTPS"[cite: 8].
*   **Action:** Force SSL at the host/DNS edge network.
*   **Implementation:** 
    *   **If using GitHub Pages:** Go to the repository **Settings > Pages** and check the box for **"Enforce HTTPS"**.
    *   **If using Cloudflare:** Go to **SSL/TLS > Edge Certificates** and toggle **"Always Use HTTPS"** to ON.

## Phase 3: Google Search Console (GSC)

### 3.1 Submit Sitemap & Request Indexing
*   **Issue:** "Site not yet found in Google search results" and "Some pages not yet appearing"[cite: 8].
*   **Action:** Force Google to recognize the new SEO configurations.
*   **Implementation:**
    1. Deploy the codebase changes from Phase 1.
    2. Verify `https://shagoto.me/sitemap-index.xml` loads correctly in the browser.
    3. Log into **Google Search Console** for your domain.
    4. Navigate to **Sitemaps** and submit the exact URL of your new sitemap[cite: 8].
    5. Navigate to **URL Inspection**, enter your homepage URL, and click **Request Indexing**[cite: 8].
