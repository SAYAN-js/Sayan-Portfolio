import { FadeInSection } from "@/components/motion/FadeInSection";

type Milestone = {
  when: string;
  label: string;
  dateTime?: string;
  future?: boolean;
};

const MILESTONES: Milestone[] = [
  {
    when: "March 2026",
    dateTime: "2026-03",
    label: "Started coding",
  },
  {
    when: "April 2026",
    dateTime: "2026-04",
    label: "Building projects",
  },
  {
    when: "Future",
    label: "Aiming for software engineering roles",
    future: true,
  },
];

export function Journey() {
  return (
    <FadeInSection
      id="journey"
      aria-labelledby="journey-heading"
      className="section-frame page-gutter"
    >
      <div className="section-inner-xs">
        <div className="section-heading-wrap">
          <h2 id="journey-heading" className="section-label">
            Journey
          </h2>
        </div>

        <div className="relative pl-0 sm:pl-1">
          <div
            className="pointer-events-none absolute bottom-12 left-[11px] top-3 w-px bg-gradient-to-b from-violet-500/50 via-white/15 to-zinc-600/35 sm:left-[17px]"
            aria-hidden
          />

          <ol className="relative" aria-label="Career timeline">
            {MILESTONES.map((item, index) => {
              const isLast = index === MILESTONES.length - 1;

              return (
                <li key={item.when} className="relative">
                  <div
                    className={`group flex gap-4 sm:gap-6 ${isLast ? "pb-0" : "pb-10 sm:pb-14"}`}
                  >
                    <div className="relative z-10 flex w-7 shrink-0 flex-col items-center pt-1 sm:w-8">
                      <span
                        className={`size-4 rounded-full border-2 border-[#050508] shadow-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg sm:size-[18px] ${
                          item.future
                            ? "border-dashed border-zinc-500 bg-zinc-900/80 backdrop-blur-sm group-hover:border-violet-400/60"
                            : "bg-gradient-to-br from-violet-400 to-fuchsia-500 group-hover:shadow-violet-500/40"
                        }`}
                      />
                    </div>
                    <div className="glass-panel flex min-h-[5.5rem] min-w-0 flex-1 flex-col justify-center rounded-2xl px-4 py-4 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-white/[0.14] group-hover:bg-white/[0.07] group-hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.15)] sm:min-h-[6rem] sm:px-5 sm:py-5">
                      <time
                        {...(item.dateTime ? { dateTime: item.dateTime } : {})}
                        className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-violet-300/95 group-hover:text-violet-200"
                      >
                        {item.when}
                      </time>
                      <p className="mt-2.5 text-base font-medium leading-snug tracking-tight text-zinc-100 group-hover:text-white sm:text-lg">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </FadeInSection>
  );
}
