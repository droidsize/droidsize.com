# Minimal Portfolio Design Brief

Last reviewed: 9 August 2026

## Direction

Droidsize should use a quiet, product-led portfolio system rather than an expressive “AI studio” theme. The visual identity provides typography, spacing, navigation, and consistent project metadata. The projects supply the color and imagery through their own OG artwork.

The strongest regenerated concept is **Portfolio Directory**: a short introduction followed by a scalable four-column work grid. The **Selected Work + Index** concept is useful for the homepage hierarchy, but its generated relationship labels are not source-of-truth copy.

The preferred implementation combines them:

- homepage: restrained introduction plus four to six selected projects;
- work page: the full filterable portfolio directory;
- individual project/case-study pages: ownership, status, problem, Droidsize's role, selected artifacts, and a verified destination link;
- company/studio page: founder, company facts, consulting practice, and Delhi studio, without interrupting the work directory.

## Reference findings

### Mobbin

- [MOUTHWASH Studio hero](https://mobbin.com/sites/sections/0e035b6e-f0ab-416e-9ade-af96d4542658) — a compact navigation system, one strong visual, and a single declarative sentence. Useful as a restraint benchmark, not as a composition to copy.
- [MOUTHWASH selected work](https://mobbin.com/sites/sections/e2bc218a-3568-43c0-a95e-b95b0d829e6c) — large project artwork with very little surrounding interface. The work supplies the energy.
- [Fiasco selected works](https://mobbin.com/sites/sections/4ed7c118-a866-41fa-824c-32a24323c927) — an asymmetric, image-led project grid with a brief introduction and small metadata.
- [Vercel people grid](https://mobbin.com/sites/sections/189e7773-bbeb-4af0-970e-78998663ee96) — useful precedent for a large, neutral, consistently ruled directory.
- [Clay company-logo grid](https://mobbin.com/sites/sections/fb54fa16-9809-4bbd-87b6-8b67954b6a48) — a compact family of distinct identities inside one quiet container.

### Dribbble searches

- [Minimal portfolio website search](https://dribbble.com/search/minimal-portfolio-website) — the useful recurring pattern is type-led introduction followed by work; many results become generic when they add device mockups or decorative animation.
- [Venture capital website search](https://dribbble.com/search/venture-capital-website) — useful for studying scalable portfolio directories, but many concepts over-style the fund rather than foregrounding its companies.

Dribbble is a visual-idea source, not evidence that a layout works in production. Prefer patterns that also appear on functioning sites.

### Live venture-portfolio references

- [Founder Collective portfolio](https://foundercollective.com/portfolio/) — image-led featured companies and a portfolio search. Useful for leading with selected work before exposing the full directory.
- [Slow Ventures portfolio](https://slow.co/portfolio/) — an extreme text-only index. Useful as a lower bound for interface complexity, but too sparse for Droidsize because the product imagery is valuable evidence.
- [BoxGroup](https://www.boxgroup.com/) — clear portfolio-first navigation and a strong modular grid. Use the structural confidence, not its heavy borders or investment language.
- [Fifty Years](https://www.fiftyyears.com/) — strong portfolio thesis and company-led storytelling, especially relevant to presenting mission-driven products without turning the studio into a holding-company brand.

## Homepage structure

### 1. Header

- Droidsize wordmark
- Work
- Open source
- Studio
- About
- Discuss a product

Keep navigation visible and ordinary. No fullscreen menu is required on desktop.

### 2. Introduction

Working copy:

> Droidsize builds software products and the systems behind them.

Supporting line:

> From India, for teams everywhere.

This is deliberately shorter than the brand strategy. The homepage should demonstrate the broader story through projects rather than explain it in the hero.

### 3. Selected work

Feature four to six projects with full-width OG artwork. The initial candidates are:

1. Domain Collective
2. RepoPress
3. Merry Magic Mail
4. TripleWave
5. Jeevak
6. one mature open-source foundation after maintenance status is verified

Each card contains only:

- project name;
- relationship label;
- honest status;
- one-sentence description on detail/list views where space permits; and
- verified link or case-study route.

### 4. Practice

One compact block after the work:

> We design and build products for ourselves and for a small number of ambitious teams.

Actions: **Discuss a product** and **How we work**.

Do not present a large generic services grid.

### 5. Company note

A short company/founder introduction can link to the About page. The homepage does not need the complete entity map, legal history, founder résumé, or Delhi-studio program.

### 6. Footer

Company name, required Indian corporate disclosures, contact/support, privacy, terms, and social/GitHub links. Keep legal credibility complete but visually quiet.

## Work directory

Use one directory that scales to the full project inventory.

Suggested filters:

- All
- Droidsize products
- Open source
- In development
- Partner work
- Related ventures

Do not use “portfolio companies,” “investments,” or other VC language. Droidsize is borrowing the clarity of a VC directory, not claiming to be a fund or holding company.

Each project record should include:

```text
slug
name
oneLine
relationship
status
category
operator
droidsizeRole
ogImage
destinationUrl
featuredOrder
public
```

The `operator` and `droidsizeRole` fields prevent shared infrastructure from being mistaken for ownership.

## OG image system

### Format

- master size: 1200 × 630 pixels;
- keep essential artwork and product name inside a central safe area;
- export WebP/AVIF for the site while retaining a lossless source;
- preserve the 1.91:1 aspect ratio in cards instead of cropping each product differently;
- include meaningful alt text in the website; do not use the image's embedded text as the only accessible name.

### Art direction

Every project receives its own small visual world, drawn from real product material:

- product interface or artifact;
- project typography/wordmark where owned and current;
- one restrained product-specific color system;
- a simple composition that remains legible at social-card and directory-thumbnail sizes.

The surrounding Droidsize interface stays neutral. Do not force every project into one black-and-white template, and do not paste unrelated screenshots into device mockups.

### Source process

1. Inventory the live `og:image`, repository assets, wordmarks, and current UI for each public project.
2. Confirm ownership and whether the artifact is current enough to represent the project.
3. Reuse a strong existing OG image when it is accurate.
4. Design a new image when the existing card is missing, stale, generic, incorrectly branded, or visually inconsistent at small sizes.
5. Store the approved master in the owning project's repository when possible, and keep a web-optimized copy in the Droidsize portfolio.
6. Record image source, approval, alt text, and last-verified date in the portfolio data.

## Responsive behavior

- desktop: four-column directory or two-column featured work;
- tablet: two columns;
- mobile: one column with the artwork first and metadata beneath;
- filters may horizontally scroll or collapse into a labelled select;
- no hover-only information or motion-dependent navigation;
- reserve image dimensions to avoid layout shift.

## Motion

Motion should be nearly invisible:

- 120–180 ms underline or arrow movement on links;
- gentle image reveal only when it does not delay content;
- no smooth-scroll takeover, custom cursor, parallax wall, intro loader, or text-scramble effect;
- respect reduced-motion preferences.

## Content boundaries

- Never invent a product state, operator, customer, integration, metric, or testimonial.
- Generated design mockup descriptions and relationship labels are not source-of-truth copy.
- Jeevak remains a venture in incubation; do not imply certification, incorporation, or government affiliation.
- Merry Magic Mail is built for Eva Interactive.
- Charge23 is a related founder venture, not a Droidsize product.
- Open-source status must reflect current maintenance evidence.

## Next implementation gate

Before changing the React site:

1. approve the Portfolio Directory layout family;
2. choose the first six featured projects;
3. inventory each project's current OG image and live URL;
4. approve or replace those six images; and
5. lock the relationship/status vocabulary in portfolio data.

