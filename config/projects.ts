export type ProjectCategory =
  | "droidsize-product"
  | "open-source"
  | "building-now"
  | "partner-work"
  | "venture";

export type ProjectStatus =
  | "Live"
  | "Active development"
  | "In development"
  | "Partner product"
  | "Public repository";

export type TechnologyIconKey =
  | "anthropic"
  | "convex"
  | "elevenlabs"
  | "expo"
  | "firebase"
  | "github"
  | "googlegemini"
  | "nextdotjs"
  | "postgresql"
  | "presentation"
  | "prisma"
  | "react"
  | "sentry"
  | "stripe"
  | "tailwindcss"
  | "turborepo"
  | "typescript"
  | "vercel"
  | "vite";

export interface ProjectTechnology {
  name: string;
  icon: TechnologyIconKey;
  role: string;
}

export interface ProjectLink {
  href: string;
  label: string;
  kind: "product" | "current-build" | "source" | "contact";
}

export interface ProjectCover {
  src: string;
  alt: string;
}

export interface OpenSourceDetails {
  heading: string;
  summary: string;
}

export interface ProjectRecord {
  slug: string;
  name: string;
  relationship: string;
  status: ProjectStatus;
  categories: ProjectCategory[];
  selected: boolean;
  cover: ProjectCover;
  cardSummary: string;
  heroTitle: string;
  heroIntroduction: string;
  problem: string;
  productStory: string;
  droidsizeRole: string;
  links: ProjectLink[];
  stack: ProjectTechnology[];
  openSource?: OpenSourceDetails;
}

export const projects: ProjectRecord[] = [
  {
    slug: "domain-collective",
    name: "Domain Collective",
    relationship: "A Droidsize product",
    status: "Live",
    categories: ["droidsize-product"],
    selected: true,
    cover: {
      src: "/projects/covers/domain-collective.png",
      alt: "Registrar routes converging into one ordered domain portfolio.",
    },
    cardSummary:
      "One place to see where every domain lives, what renews next, and whether DNS, SSL, or access needs attention.",
    heroTitle: "Keep every domain in one place.",
    heroIntroduction:
      "Domain Collective gives founders, agencies, and product teams a clear operational view across registrars. Renewals, DNS, nameservers, SSL, and ownership no longer need separate tabs and spreadsheets.",
    problem:
      "Domain portfolios grow across registrars, people, and client accounts. The important details become hardest to find when a renewal or DNS change is already urgent.",
    productStory:
      "Connect the registrars you already use. See which domains need attention, where each one is managed, and who can make changes. Separate personal, team, and client portfolios without losing the larger picture.",
    droidsizeRole:
      "Product strategy, interface and systems design, full-stack engineering, registrar integrations, and ongoing operation.",
    links: [
      {
        href: "https://collective.domains",
        label: "Visit Domain Collective",
        kind: "product",
      },
    ],
    stack: [
      { name: "Next.js", icon: "nextdotjs", role: "Application framework" },
      { name: "TypeScript", icon: "typescript", role: "Product code" },
      { name: "PostgreSQL", icon: "postgresql", role: "Operational data" },
      { name: "Prisma", icon: "prisma", role: "Data modelling" },
      { name: "Vercel", icon: "vercel", role: "Deployment" },
      { name: "Sentry", icon: "sentry", role: "Error monitoring" },
    ],
  },
  {
    slug: "sparkle",
    name: "Sparkle",
    relationship: "A Droidsize product",
    status: "Active development",
    categories: ["droidsize-product", "building-now"],
    selected: true,
    cover: {
      src: "/projects/covers/sparkle.png",
      alt: "A dense reading queue becoming a connected constellation of ideas.",
    },
    cardSummary:
      "Turn saved articles and text into concise visual stories, then organise them into Constellations you will want to revisit.",
    heroTitle: "Turn your reading list into something you will remember.",
    heroIntroduction:
      "Save an article or paste a passage. Sparkle distils it into a short visual story you can read in a quiet minute, keep, remix, and group with related ideas.",
    problem:
      "Reading lists are full of good intentions. Useful articles disappear into a queue long before their ideas become part of how you think.",
    productStory:
      "Sparkle turns each saved piece into a sequence of focused visual cards called a Spark. Related Sparks collect into Constellations, so reading becomes a library of ideas rather than a growing pile of links.",
    droidsizeRole:
      "Product definition, brand and interaction design, AI reading pipeline, web and mobile engineering, and product operations.",
    links: [
      {
        href: "https://trysparkles.app",
        label: "Explore Sparkle",
        kind: "product",
      },
    ],
    stack: [
      { name: "React", icon: "react", role: "Web interface" },
      { name: "Vite", icon: "vite", role: "Web tooling" },
      { name: "Firebase", icon: "firebase", role: "Application backend" },
      {
        name: "Google Gemini",
        icon: "googlegemini",
        role: "Reading intelligence",
      },
      { name: "Expo", icon: "expo", role: "Mobile application" },
      { name: "TypeScript", icon: "typescript", role: "Shared product code" },
    ],
  },
  {
    slug: "repopress",
    name: "RepoPress",
    relationship: "A Droidsize developer product",
    status: "Active development",
    categories: ["open-source", "building-now"],
    selected: true,
    cover: {
      src: "/projects/covers/repopress.png",
      alt: "Repository branches passing through editorial gates into a published document.",
    },
    cardSummary:
      "A visual editor for Markdown and MDX repositories, with review, history, and publishing built around Git.",
    heroTitle: "Edit the words. Keep Git in control.",
    heroIntroduction:
      "RepoPress gives teams a focused writing and review workspace for content stored in a repository. Authors get a visual editor. Developers keep the files, history, and deployment workflow they already trust.",
    problem:
      "Repository-backed content works well for developers, but small editorial changes still turn into local setup, raw Markdown edits, and avoidable pull-request work.",
    productStory:
      "Connect a GitHub repository, find the content that needs work, edit it visually, and move it through a clear review and publishing flow. Framework-aware configuration keeps the editor close to the structure of the real site.",
    droidsizeRole:
      "Product strategy, design, full-stack implementation, GitHub integration, content modelling, and open development.",
    links: [
      {
        href: "https://repo-press.vercel.app",
        label: "Open RepoPress",
        kind: "product",
      },
      {
        href: "https://github.com/itsyogesh/repo-press",
        label: "View source",
        kind: "source",
      },
    ],
    stack: [
      { name: "Next.js", icon: "nextdotjs", role: "Application framework" },
      { name: "React", icon: "react", role: "Editing interface" },
      { name: "TypeScript", icon: "typescript", role: "Product code" },
      { name: "Convex", icon: "convex", role: "Draft and workflow state" },
      { name: "GitHub", icon: "github", role: "Repository integration" },
      { name: "Vercel", icon: "vercel", role: "Deployment" },
    ],
    openSource: {
      heading: "Open development",
      summary:
        "RepoPress is developed in public. The repository contains the working application, setup guidance, implementation history, and the issue tracker for technical discussion.",
    },
  },
  {
    slug: "merry-magic-mail",
    name: "Merry Magic Mail",
    relationship: "Built by Droidsize for Eva Interactive Co.",
    status: "Partner product",
    categories: ["partner-work"],
    selected: true,
    cover: {
      src: "/projects/covers/merry-magic-mail.png",
      alt: "A letter ribbon becoming a voice waveform as it travels across distance.",
    },
    cardSummary:
      "A Christmas product that turns a child's letter into a personalised reply, audio moment, wishlist, and keepsake.",
    heroTitle: "A letter to Santa that answers back.",
    heroIntroduction:
      "Merry Magic Mail helps families turn a Christmas wish into a story they can hear, share, and keep. Children write to Santa; the experience carries that letter into personalised replies, wishlists, and optional keepsakes.",
    problem:
      "A Christmas letter is often a brief activity. The anticipation, reply, and family coordination around it happen in separate places or not at all.",
    productStory:
      "Children can write or upload a letter, receive a personalised response, listen to Santa, build a wishlist, and share the moment with family. The product also supports gift coordination and physical-letter fulfilment where available.",
    droidsizeRole:
      "Product consulting, experience design, web and mobile engineering, AI voice and content workflows, commerce, and fulfilment integrations.",
    links: [
      {
        href: "https://merrymagicmail.com",
        label: "Visit Merry Magic Mail",
        kind: "product",
      },
    ],
    stack: [
      { name: "Next.js", icon: "nextdotjs", role: "Application framework" },
      { name: "TypeScript", icon: "typescript", role: "Product code" },
      { name: "PostgreSQL", icon: "postgresql", role: "Product data" },
      { name: "Prisma", icon: "prisma", role: "Data modelling" },
      {
        name: "Google Gemini",
        icon: "googlegemini",
        role: "Personalised content",
      },
      { name: "ElevenLabs", icon: "elevenlabs", role: "Voice experiences" },
    ],
  },
  {
    slug: "cadenza",
    name: "Cadenza",
    relationship: "A Droidsize product",
    status: "In development",
    categories: ["droidsize-product", "building-now"],
    selected: true,
    cover: {
      src: "/projects/covers/cadenza.png",
      alt: "A data spine passing through a sequence of presentation frames.",
    },
    cardSummary:
      "Turn raw data and a brand template into a deck your team can still edit, share, and export.",
    heroTitle: "Start with the data. Leave with the deck.",
    heroIntroduction:
      "Cadenza profiles a dataset, finds the story worth presenting, and builds an editable deck around the team's brand. Charts, headlines, and supporting facts stay grounded in the source.",
    problem:
      "The information for a presentation already exists, but turning spreadsheets into a coherent, on-brand deck still consumes days of interpretation and formatting.",
    productStory:
      "Add a dataset and a template or brand kit. Cadenza builds a structured first draft, keeps key claims tied to the data, and lets the team refine, share, and export the result to PowerPoint.",
    droidsizeRole:
      "Product strategy, interface design, data and AI architecture, deck generation, editing experience, collaboration, and PowerPoint export.",
    links: [
      {
        href: "https://cadenza-ai.vercel.app",
        label: "View current build",
        kind: "current-build",
      },
    ],
    stack: [
      { name: "Next.js", icon: "nextdotjs", role: "Application framework" },
      { name: "TypeScript", icon: "typescript", role: "Product code" },
      { name: "Anthropic", icon: "anthropic", role: "Deck intelligence" },
      { name: "PostgreSQL", icon: "postgresql", role: "Product data" },
      { name: "Prisma", icon: "prisma", role: "Data modelling" },
      { name: "PptxGenJS", icon: "presentation", role: "PowerPoint export" },
    ],
  },
  {
    slug: "copycanvas",
    name: "CopyCanvas",
    relationship: "A Droidsize product",
    status: "In development",
    categories: ["droidsize-product", "building-now"],
    selected: true,
    cover: {
      src: "/projects/covers/copycanvas.png",
      alt: "Interface copy moving from scattered fragments into a clear product flow.",
    },
    cardSummary:
      "Review interface copy in context, compare alternatives, and keep every decision attached to the screen and flow it affects.",
    heroTitle: "Review product copy where people will actually read it.",
    heroIntroduction:
      "CopyCanvas brings screens, flows, copy, suggestions, and discussion into one visual workspace. Teams can see the words in context before a change reaches production.",
    problem:
      "Product copy is often reviewed in documents and spreadsheets, separated from the screen, state, and journey that give the words meaning.",
    productStory:
      "Map screens into a flow, identify the text that matters, compare suggested revisions, and keep feedback attached to the exact interface element under discussion.",
    droidsizeRole:
      "Product strategy, interaction design, multimodal AI workflows, collaborative review, and full-stack engineering.",
    links: [
      {
        href: "/contact?project=copycanvas",
        label: "Discuss CopyCanvas",
        kind: "contact",
      },
    ],
    stack: [
      { name: "Next.js", icon: "nextdotjs", role: "Application framework" },
      { name: "TypeScript", icon: "typescript", role: "Product code" },
      { name: "Anthropic", icon: "anthropic", role: "Copy intelligence" },
      { name: "PostgreSQL", icon: "postgresql", role: "Product data" },
      { name: "Vercel AI SDK", icon: "vercel", role: "AI workflows" },
      { name: "Tailwind CSS", icon: "tailwindcss", role: "Interface system" },
    ],
  },
  {
    slug: "turbocamp",
    name: "Turbocamp",
    relationship: "A Droidsize open-source project",
    status: "Public repository",
    categories: ["open-source"],
    selected: false,
    cover: {
      src: "/projects/covers/turbocamp.png",
      alt: "Modular product systems moving through a shared software foundation.",
    },
    cardSummary:
      "An opinionated SaaS foundation for teams that want the common product systems in place before they build what makes the business different.",
    heroTitle: "Start with the product, not the plumbing.",
    heroIntroduction:
      "Turbocamp brings authentication, organisations, billing, data, email, analytics, documentation, and a central API into one TypeScript monorepo.",
    problem:
      "A new SaaS product can spend its first weeks rebuilding accounts, billing, email, analytics, documentation, and deployment instead of testing the product itself.",
    productStory:
      "Turbocamp assembles those recurring systems into a modular foundation that a small team can understand, change, and operate. It is opinionated enough to move quickly without hiding the underlying code.",
    droidsizeRole:
      "Architecture, monorepo composition, product defaults, documentation, and ongoing maintenance.",
    links: [
      {
        href: "https://github.com/droidsize/turbocamp",
        label: "View source",
        kind: "source",
      },
    ],
    stack: [
      { name: "Next.js", icon: "nextdotjs", role: "Application framework" },
      { name: "TypeScript", icon: "typescript", role: "Shared product code" },
      { name: "Turborepo", icon: "turborepo", role: "Monorepo tooling" },
      { name: "PostgreSQL", icon: "postgresql", role: "Application data" },
      { name: "Prisma", icon: "prisma", role: "Data modelling" },
      { name: "Stripe", icon: "stripe", role: "Billing" },
    ],
    openSource: {
      heading: "Public work in progress",
      summary:
        "Turbocamp's source is public while its release documentation and licensing are being cleaned up. Treat the repository as an active foundation under development, not a finished production guarantee.",
    },
  },
];

export const selectedProjects = projects.filter((project) => project.selected);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) return undefined;

  return projects[(currentIndex + 1) % projects.length];
}
