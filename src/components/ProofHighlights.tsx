import { FadeInSection } from "@/components/motion/FadeInSection";
import { siteConfig } from "@/lib/site";

const HIGHLIGHTS = [
  "Production build, lint, typecheck, and audit checks are part of the delivery workflow.",
  "Reusable sections keep the portfolio easy to scan, maintain, and extend.",
  "Responsive layouts are tuned for recruiter review on phone, tablet, and desktop.",
  "Project work emphasizes practical UI flows, clear state handling, and maintainable structure.",
] as const;

const CREDENTIALS = {
  tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
  deployment: ["Vercel", "Netlify"],
  tools: ["ESLint", "TypeScript checks", "npm scripts", "App Router metadata"],
} as const;

export function ProofHighlights() {
  return (
    <FadeInSection
      id="proof"
      aria-labelledby="proof-heading"
      className="section-frame page-gutter"
    >
      <div className="section-inner">
        <div className="section-heading-wrap">
          <h2 id="proof-heading" className="section-label">
            Proof
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg font-medium leading-8 tracking-tight text-zinc-100 sm:text-xl">
            {siteConfig.availability}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="glass-panel-strong rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-zinc-50">
              Delivery Highlights
            </h3>
            <ul className="space-y-3 text-sm leading-7 text-zinc-300">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-panel-strong rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold tracking-tight text-zinc-50">
              Technical Stack in Production Workflow
            </h3>
            <div className="space-y-4 text-sm leading-7">
              <p className="rounded-xl border border-white/10 bg-black/15 p-4">
                <span className="font-semibold text-zinc-100">Technologies:</span>{" "}
                <span className="text-zinc-300">{CREDENTIALS.tech.join(", ")}</span>
              </p>
              <p className="rounded-xl border border-white/10 bg-black/15 p-4">
                <span className="font-semibold text-zinc-100">Deployment:</span>{" "}
                <span className="text-zinc-300">
                  {CREDENTIALS.deployment.join(", ")}
                </span>
              </p>
              <p className="rounded-xl border border-white/10 bg-black/15 p-4">
                <span className="font-semibold text-zinc-100">Tools:</span>{" "}
                <span className="text-zinc-300">
                  {CREDENTIALS.tools.join(", ")}
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </FadeInSection>
  );
}
