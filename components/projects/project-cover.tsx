import Image from "next/image";

import type { ProjectRecord } from "@/config/projects";
import { cn } from "@/lib/utils";

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
  return (
    <div
      className={cn(
        "relative aspect-[1.904/1] overflow-hidden bg-[#f4f1e9]",
        className,
      )}
    >
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
