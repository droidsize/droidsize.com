import "@/styles/covers.css";

import Image from "next/image";

import type { ProjectRecord } from "@/config/projects";
import { cn } from "@/lib/utils";

import { projectCovers } from "./covers";

type ProjectCoverProps = {
  project: ProjectRecord;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectCover({
  project,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ProjectCoverProps) {
  const SvgCover = projectCovers[project.slug];

  return (
    <div
      className={cn(
        "relative aspect-[1.904/1] overflow-hidden bg-[var(--cover-ground)]",
        className,
      )}
      role={SvgCover ? "img" : undefined}
      aria-label={SvgCover ? project.cover.alt : undefined}
    >
      {SvgCover ? (
        <div className={cn("absolute inset-0", imageClassName)}>
          <SvgCover />
        </div>
      ) : (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      )}
    </div>
  );
}
