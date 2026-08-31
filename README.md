# Droidsize Technologies website

The official corporate website for **DROIDSIZE TECHNOLOGIES PRIVATE LIMITED**, built with Next.js, React, TypeScript, and Tailwind CSS.

## Local development

Requirements:

- Node.js 20.9 or newer
- pnpm

```sh
pnpm install
pnpm dev
```

The local site is available at `http://localhost:3000`.

## Validation

```sh
pnpm typecheck
pnpm build
pnpm audit --prod
```

The production build is static except for framework-generated metadata routes. The app does not require a database or application secrets.

## Public routes

- `/` — corporate homepage
- `/company` — legal identity and leadership
- `/contact` — organization contact details
- `/apps/merry-magic-mail/support` — Merry Magic Mail support
- `/privacy` — corporate website privacy notice
- `/terms` — corporate website terms
- `/robots.txt` and `/sitemap.xml` — crawler metadata

## Release controls

Production is hosted by Vercel from the `master` branch of `droidsize/droidsize.com`. Use a feature branch and draft pull request for changes. Do not update Apple Developer, Google Play, Search Console, DNS, or production deployment settings from this repository workflow without explicit approval.

The current corporate credibility and store-readiness record is in [`docs/corporate-credibility-audit.md`](docs/corporate-credibility-audit.md).
