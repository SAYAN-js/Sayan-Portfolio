import { FadeInSection } from "@/components/motion/FadeInSection";
import { skillGroups } from "@/lib/site";

export function Skills() {
  return (
    <FadeInSection
      id="skills"
      aria-labelledby="skills-heading"
      className="section-frame page-gutter"
    >
      <div className="section-inner">
        <div className="section-heading-wrap flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
          <h2 id="skills-heading" className="section-label text-zinc-500">
            Skills
          </h2>
          <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-violet-200">
            Growing
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li key={group.title} className="min-h-0">
              <article className="glass-panel h-full rounded-2xl p-5 sm:p-6">
                <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={`${group.title}-${item}`}
                      className="text-sm font-medium text-zinc-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
