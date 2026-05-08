import { FadeInSection } from "@/components/motion/FadeInSection";
import { projects } from "@/lib/site";

const statusStyles = {
  Shipped:
    "border-emerald-400/35 bg-emerald-400/10 text-emerald-100 ring-1 ring-emerald-400/25",
  Completed:
    "border-cyan-400/35 bg-cyan-400/10 text-cyan-100 ring-1 ring-cyan-400/25",
} as const;

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
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg font-medium leading-8 tracking-tight text-zinc-100 sm:text-xl">
            Focused projects that show product thinking, typed implementation,
            and production habits.
          </p>
        </div>

        <ul className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.title} className="flex min-h-0">
              <article className="glass-panel-strong group relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/35 hover:bg-white/[0.08] hover:shadow-[0_26px_70px_-18px_rgba(139,92,246,0.23)] sm:p-6">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
                  aria-hidden
                />
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

                <p className="relative mt-5 text-sm leading-7 text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">
                  {project.description}
                </p>

                <div className="relative mt-5 rounded-xl border border-white/10 bg-black/15 p-4">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-xs leading-6 text-zinc-300">
                    {project.proof}
                  </p>
                </div>

                <ul className="relative mt-5 space-y-2.5">
                  {project.highlights.map((point) => (
                    <li
                      key={`${project.title}-${point}`}
                      className="flex gap-2 text-left text-xs leading-6 text-zinc-300"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300/80"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={`${project.title}-${tech}`}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="relative mt-auto pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                  {project.sourceLabel}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
