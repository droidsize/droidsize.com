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
        {link.label}
        <ArrowUpRight aria-hidden="true" className="size-4" />
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
