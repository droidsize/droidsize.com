import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { selectedProjects } from "@/config/projects";
import { ProjectCover } from "@/components/projects/project-cover";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const homepageProjects = selectedProjects.slice(0, 4);

export default function RecentWorks() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden py-24 sm:py-36"
      aria-labelledby="selected-work-heading"
    >
      <MaxWidthWrapper large>
        <div className="mb-14 grid gap-7 border-b border-white/20 pb-10 sm:mb-20 sm:pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-muted)]">
              Selected work
            </p>
            <h2
              id="selected-work-heading"
              className="max-w-5xl text-[clamp(3.8rem,8vw,6rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--site-ink)]"
            >
              Products we build and products we help bring to life.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-white/70 lg:justify-self-end">
            Our own products keep us close to the operational problems founders
            face. The same practice shapes how we work with partner teams.
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-14 md:grid-cols-2">
          {homepageProjects.map((project) => (
            <article className="group min-w-0" key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <ProjectCover
                  project={project}
                  imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.015] motion-reduce:transition-none"
                />
                <div className="flex items-start justify-between gap-6 border-b border-white/20 py-5">
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/55">
                      {project.relationship}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-1 size-6 shrink-0 text-white/70 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-end sm:mt-20">
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center gap-3 border-b border-white py-2 text-base font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View all work
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
