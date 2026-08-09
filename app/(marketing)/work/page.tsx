import type { Metadata } from "next";

import { projects } from "@/config/projects";
import { constructMetadata } from "@/lib/utils";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectIndex } from "@/components/projects/project-index";

export const metadata: Metadata = constructMetadata({
  title: "Work — Droidsize",
  description:
    "Products built by Droidsize, open-source work, and selected products made with founders and partner companies.",
  path: "/work",
  image: "/projects/covers/domain-collective.png",
  imageAlt:
    "Registrar routes converging into one ordered domain portfolio for Domain Collective.",
  imageWidth: 1731,
  imageHeight: 909,
});

const featuredProjects = projects.filter((project) =>
  ["domain-collective", "repopress"].includes(project.slug),
);

export default function WorkPage() {
  return (
    <div className="work-theme bg-[var(--work-canvas)] text-[var(--work-ink)]">
      <section className="px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-[1150px]">
          <header>
            <h1 className="max-w-3xl text-balance text-[clamp(2.25rem,5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.035em]">
              Droidsize builds software products and the systems behind them.
            </h1>
            <p className="mt-3 text-lg text-[var(--work-muted)]">
              From India, for teams everywhere.
            </p>
          </header>

          <section className="py-12 sm:py-14" aria-labelledby="selected-work">
            <div className="mb-5 flex items-end justify-between gap-6">
              <h2 id="selected-work" className="text-xl font-medium">
                Selected work
              </h2>
            </div>
            <div className="grid gap-x-5 gap-y-12 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  priority={index === 0}
                />
              ))}
            </div>
          </section>

          <section className="pb-8 sm:pb-12" aria-labelledby="all-work">
            <div className="mb-5 flex items-end justify-between gap-6 border-t border-[var(--work-line)] pt-6">
              <h2 id="all-work" className="text-xl font-medium">
                All projects
              </h2>
              <span className="text-sm text-[var(--work-muted)]">
                {String(projects.length).padStart(2, "0")} projects
              </span>
            </div>
            <ProjectIndex projects={projects} />
          </section>
        </div>
      </section>
    </div>
  );
}
