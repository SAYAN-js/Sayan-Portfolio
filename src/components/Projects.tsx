"use client";

import { useRef } from "react";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { projects } from "@/lib/site";

const statusStyles = {
  Shipped:
    "border-emerald-400/35 bg-emerald-400/10 text-emerald-100 ring-1 ring-emerald-400/25",
  Completed:
    "border-cyan-400/35 bg-cyan-400/10 text-cyan-100 ring-1 ring-cyan-400/25",
} as const;

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glass-panel-strong border-glow interactive-glow group relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6"
    >
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            0{index + 1} / {project.focus}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-50 transition-colors duration-300 group-hover:text-white">
            {project.title}
          </h3>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">
        {project.description}
      </p>

      <div className="relative mt-6 rounded-xl border border-white/10 bg-black/20 p-4 transition-colors group-hover:bg-black/30">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          Evidence
        </p>
        <p className="mt-2 text-xs leading-6 text-zinc-300">
          {project.proof}
        </p>
      </div>

      <ul className="relative mt-6 space-y-3">
        {project.highlights.map((point) => (
          <li
            key={`${project.title}-${point}`}
            className="flex gap-3 text-left text-xs leading-5 text-zinc-400 group-hover:text-zinc-300"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/50 group-hover:bg-violet-400"
              aria-hidden
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <ul className="relative mt-auto pt-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={`${project.title}-${tech}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 group-hover:text-zinc-300 group-hover:border-white/20 transition-colors"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Projects() {
  return (
    <FadeInSection
      id="projects"
      aria-labelledby="projects-heading"
      className="section-frame page-gutter"
    >
      <div className="section-inner">
        <div className="section-heading-wrap">
          <h2 id="projects-heading" className="section-label">
            Selected Work
          </h2>
          <p className="section-title">Built for scale</p>
          <p className="section-description">
            Focused projects that show product thinking, typed implementation,
            and production habits.
          </p>
        </div>

        <ul className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.title} className="flex min-h-0">
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
