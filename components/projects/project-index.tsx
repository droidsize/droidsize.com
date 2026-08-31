import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ProjectRecord } from "@/config/projects";

type ProjectIndexProps = {
  projects: ProjectRecord[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
  return (
    <ol className="border-t border-[var(--work-line)]">
      {projects.map((project, index) => (
        <li id={project.slug} className="scroll-mt-24" key={project.slug}>
          <Link
            href={`/work/${project.slug}`}
            className="group grid min-h-20 grid-cols-[4rem_1fr_auto] items-center gap-4 border-b border-[var(--work-line)] py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--work-ink)] sm:grid-cols-[5rem_minmax(12rem,0.9fr)_minmax(13rem,1fr)_minmax(9rem,0.6fr)_auto]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f1e9]">
              <Image
                src={project.cover.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <span className="min-w-0">
              <span className="block text-base font-medium text-[var(--work-ink)] sm:text-lg">
                {project.name}
              </span>
              <span className="mt-1 block text-xs text-[var(--work-muted)] sm:hidden">
                {project.status}
              </span>
            </span>
            <span className="hidden text-sm text-[var(--work-muted)] sm:block">
              {project.relationship}
            </span>
            <span className="hidden text-sm text-[var(--work-muted)] sm:block">
              {project.status}
            </span>
            <span className="flex items-center gap-3 text-xs tabular-nums text-[var(--work-faint)]">
              <span className="hidden lg:inline">
                {String(index + 1).padStart(2, "0")}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="size-5 text-[var(--work-muted)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
