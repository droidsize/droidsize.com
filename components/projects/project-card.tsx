import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ProjectRecord } from "@/config/projects";

import { ProjectCover } from "./project-cover";

type ProjectCardProps = {
  project: ProjectRecord;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group min-w-0">
      <Link
        href={`/work/${project.slug}`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--work-ink)]"
      >
        <ProjectCover
          project={project}
          priority={priority}
          imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.015] motion-reduce:transition-none"
        />
        <div className="flex items-start justify-between gap-6 border-b border-[var(--work-line)] py-4">
          <div>
            <h3 className="text-xl font-medium tracking-[-0.02em] text-[var(--work-ink)] sm:text-2xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--work-muted)]">
              {project.relationship}
            </p>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-[var(--work-muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </div>
      </Link>
    </article>
  );
}
