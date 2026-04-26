# Murtaza Ahmed - Backend & Infrastructure Portfolio

A static portfolio site built with [Astro](https://astro.build) for a backend / infrastructure / distributed systems consultant.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding a Case Study

1. Create a new `.md` file in `src/content/case-studies/`:

```bash
src/content/case-studies/your-project-name.md
```

2. Use this frontmatter template:

```yaml
---
title: "Your Case Study Title"
description: "A one-line summary of the project."
date: 2025-01-15
tags: ["Go", "Kubernetes", "PostgreSQL"]
featured: true  # Set to true to show on homepage (max 3 shown)
metricHighlight: "Key result metric"  # Optional — shown as badge on cards

# Structured sections (all required)
problem: "Description of the problem you solved."
architecture: "High-level description of the system you built."
decisions:
  - "Key decision 1 and why"
  - "Key decision 2 and why"
results:
  - "Quantified result 1"
  - "Quantified result 2"
lessons:
  - "What you learned or trade-offs made"
---

## Optional Markdown Body

Any content here renders in the Architecture section of the case study page.
Use this for diagrams, code blocks, or additional detail.
```

## Architecture Diagrams

We use **Mermaid.js** for rendering architecture diagrams dynamically. To add a diagram to the body of your case study, use the following syntax (note: use `<div>` tags instead of markdown code blocks to prevent Astro from breaking the syntax):

```html
<div class="mermaid">
graph TD
  A["API Gateway"] --> B["Backend Service"]
  B --> C[("PostgreSQL")]
</div>
```

3. That's it. No layout or component changes needed. The content collection schema validates your frontmatter and the site auto-generates pages at `/case-studies/your-project-name/`.

## Project Structure

```
├── .github/workflows/deploy.yml    # GitHub Pages auto-deploy
├── public/                         # Static assets (favicon)
├── src/
│   ├── assets/fonts/               # Local font files
│   ├── components/
│   │   ├── BaseHead.astro          # <head> meta tags, SEO
│   │   ├── Header.astro            # Site navigation
│   │   ├── Footer.astro            # Site footer
│   │   ├── MetricCard.astro        # Homepage metric display
│   │   ├── CaseStudyCard.astro     # Case study list card
│   │   └── FormattedDate.astro     # Date formatting
│   ├── content/
│   │   └── case-studies/*.md       # Your case study content
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Page wrapper
│   │   └── CaseStudy.astro         # Case study page layout
│   ├── pages/
│   │   ├── index.astro             # Homepage
│   │   ├── contact.astro           # Contact page
│   │   └── case-studies/
│   │       ├── index.astro         # Case studies listing
│   │       └── [slug].astro        # Dynamic case study pages
│   ├── styles/global.css           # Global styles
│   ├── consts.ts                   # Site config (title, links, metrics)
│   └── content.config.ts           # Content collection schema
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Configuration

Edit `src/consts.ts` to update:

- **SITE_TITLE** / **SITE_DESCRIPTION** — SEO and header
- **NAV_LINKS** — Navigation items
- **CONTACT** — Email, GitHub, LinkedIn URLs
- **METRICS** — Homepage metrics display

## Deployment (GitHub Pages)

### Setup

1. Push to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Ensure `site` and `base` in `astro.config.mjs` match your GitHub Pages URL (already configured to `/portfolio-web`).

### ⚠️ Important: Internal Links (`resolvePath`)

Because this site is hosted on a GitHub Pages subpath (`/portfolio-web`), **all internal links** must be wrapped with the `resolvePath()` utility to prevent 404 errors.

If you add a new button or link anywhere in the Astro files, do it like this:
```astro
---
import { resolvePath } from '../consts';
---
<a href={resolvePath('/contact/')}>Contact Me</a>
```

### How it works

On every push to `main`, the GitHub Actions workflow:

1. Installs dependencies
2. Builds the static site (using Astro's `npm run build`)
3. Deploys the `dist/` folder to GitHub Pages

## Design Principles

- **Mobile-first** — Single-column, minimum 16px font, ~65ch max width
- **Documentation-style** — Clean, neutral, typography-focused
- **Performance** — Minimal JS, static output, optimized fonts
- **Maintainability** — Content is Markdown, config is centralized
