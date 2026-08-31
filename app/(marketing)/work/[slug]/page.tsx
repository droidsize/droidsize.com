import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import {
  getNextProject,
  getProject,
  projects,
  type ProjectLink,
} from "@/config/projects";
import { constructMetadata } from "@/lib/utils";
import { ProjectCover } from "@/components/projects/project-cover";
import { TechnologyStack } from "@/components/projects/technology-stack";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return constructMetadata({
      title: "Project not found — Droidsize",
      path: `/work/${slug}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${project.name} — Droidsize`,
    description: project.cardSummary,
    path: `/work/${project.slug}`,
    image: project.cover.src,
    imageAlt: project.cover.alt,
    imageWidth: project.cover.width,
    imageHeight: project.cover.height,
  });
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function ProjectAction({ link }: { link: ProjectLink }) {
  const external = link.href.startsWith("http");
  const className =
    "inline-flex min-h-12 items-center gap-2 border-b border-[var(--work-ink)] py-2 text-sm font-medium text-[var(--work-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--work-ink)]";

  if (external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {link.kind === "source" ? <GitHubMark /> : null}
        {link.label}
        {link.kind === "source" ? null : (
          <ArrowUpRight aria-hidden="true" className="size-4" />
        )}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": project.categories.includes("open-source")
      ? "SoftwareSourceCode"
      : "SoftwareApplication",
    name: project.name,
    description: project.cardSummary,
    url: `https://www.droidsize.com/work/${project.slug}`,
    image: `https://www.droidsize.com${project.cover.src}`,
    author: {
      "@type": "Organization",
      "@id": "https://www.droidsize.com/#organization",
      name: "Droidsize Technologies",
    },
    sameAs: project.links
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
  };

  return (
    <div className="work-theme bg-[var(--work-canvas)] text-[var(--work-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <article className="px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16">
        <div className="mx-auto max-w-[1280px]">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 py-2 text-sm text-[var(--work-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--work-ink)]"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All work
          </Link>

          <header className="grid gap-10 pb-14 pt-16 sm:pb-20 sm:pt-24 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <p className="mb-7 text-sm text-[var(--work-muted)]">
                {project.name} · {project.status}
              </p>
              <h1 className="max-w-5xl text-[clamp(3.25rem,7vw,6rem)] font-medium leading-[0.94] tracking-[-0.04em]">
                {project.heroTitle}
              </h1>
            </div>
            <div className="lg:pb-1">
              <p className="text-lg leading-8 text-[var(--work-muted)]">
                {project.heroIntroduction}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {project.links.map((link) => (
                  <ProjectAction
                    key={`${link.kind}-${link.href}`}
                    link={link}
                  />
                ))}
              </div>
            </div>
          </header>

          <ProjectCover
            project={project}
            priority
            className="aspect-[1.904/1]"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />

          <div className="mt-16 border-t border-[var(--work-line)] sm:mt-24">
            <section className="grid gap-5 border-b border-[var(--work-line)] py-10 sm:py-14 lg:grid-cols-[0.42fr_1fr]">
              <h2 className="text-sm text-[var(--work-muted)]">The problem</h2>
              <p className="max-w-3xl text-2xl leading-[1.35] tracking-[-0.02em] sm:text-3xl">
                {project.problem}
              </p>
            </section>
            <section className="grid gap-5 border-b border-[var(--work-line)] py-10 sm:py-14 lg:grid-cols-[0.42fr_1fr]">
              <h2 className="text-sm text-[var(--work-muted)]">The product</h2>
              <p className="max-w-3xl text-xl leading-8 text-[var(--work-muted)] sm:text-2xl sm:leading-9">
                {project.productStory}
              </p>
            </section>
            <section className="grid gap-5 border-b border-[var(--work-line)] py-10 sm:py-14 lg:grid-cols-[0.42fr_1fr]">
              <h2 className="text-sm text-[var(--work-muted)]">
                Droidsize&apos;s role
              </h2>
              <p className="max-w-3xl text-xl leading-8 text-[var(--work-muted)] sm:text-2xl sm:leading-9">
                {project.droidsizeRole}
              </p>
            </section>
          </div>

          {project.openSource ? (
            <section className="grid gap-5 border-b border-[var(--work-line)] py-10 sm:py-14 lg:grid-cols-[0.42fr_1fr]">
              <h2 className="text-sm text-[var(--work-muted)]">
                {project.openSource.heading}
              </h2>
              <div>
                <p className="max-w-3xl text-xl leading-8 text-[var(--work-muted)] sm:text-2xl sm:leading-9">
                  {project.openSource.summary}
                </p>
                {project.links
                  .filter((link) => link.kind === "source")
                  .map((link) => (
                    <div className="mt-7" key={link.href}>
                      <ProjectAction link={link} />
                    </div>
                  ))}
              </div>
            </section>
          ) : null}

          <TechnologyStack
            stack={project.stack}
            className="border-b border-[var(--work-line)] py-12 sm:py-16"
          />

          {nextProject ? (
            <nav className="pt-16 sm:pt-24" aria-label="Next project">
              <Link
                href={`/work/${nextProject.slug}`}
                className="group grid gap-6 border-y border-[var(--work-line)] py-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--work-ink)] sm:grid-cols-[1fr_auto] sm:items-end sm:py-14"
              >
                <span>
                  <span className="block text-sm text-[var(--work-muted)]">
                    Next project
                  </span>
                  <span className="mt-3 block text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.04em]">
                    {nextProject.name}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-9 text-[var(--work-muted)] transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transition-none sm:size-12"
                />
              </Link>
            </nav>
          ) : null}
        </div>
      </article>
    </div>
  );
}
