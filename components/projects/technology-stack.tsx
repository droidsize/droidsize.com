import type { ProjectTechnology } from "@/config/projects";
import { cn } from "@/lib/utils";

import { TechnologyIcon } from "./technology-icon";

type TechnologyStackProps = {
  stack: ProjectTechnology[];
  className?: string;
  title?: string;
};

export function TechnologyStack({
  stack,
  className,
  title = "Built with",
}: TechnologyStackProps) {
  return (
    <section className={cn("grid gap-7 lg:grid-cols-[0.42fr_1fr]", className)}>
      <h2 className="text-sm text-[var(--work-muted)]">{title}</h2>
      <ul className="grid border-t border-[var(--work-line)] sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((technology) => (
          <li
            className="flex min-h-24 items-center gap-3 border-b border-[var(--work-line)] py-4 sm:pr-5 sm:odd:border-r sm:odd:pr-5 sm:even:pl-5 lg:border-r lg:px-5 lg:first:pl-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0"
            key={technology.name}
          >
            <span className="flex size-10 shrink-0 items-center justify-center border border-[var(--work-line)] text-[var(--work-ink)]">
              <TechnologyIcon icon={technology.icon} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-[var(--work-ink)]">
                {technology.name}
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-[var(--work-muted)]">
                {technology.role}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
