import { FadeInSection } from "@/components/motion/FadeInSection";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <FadeInSection
      id="about"
      aria-labelledby="about-heading"
      className="section-frame page-gutter"
    >
      <div className="section-inner-xs">
        <div className="section-heading-wrap">
          <h2 id="about-heading" className="section-label">
            About
          </h2>
          <p className="section-title">Backend-minded engineering</p>
          <p className="section-description">
            Software engineer with a strong eye for clean, usable interfaces and
            reliable logic.
          </p>
        </div>
        <div className="glass-panel-strong space-y-6 rounded-2xl p-6 text-pretty text-left text-base leading-8 text-zinc-400 sm:space-y-7 sm:p-8 sm:text-lg sm:leading-8">
          <p className="text-zinc-100">
            I build full-stack applications using Next.js, TypeScript, and
            backend fundamentals to create fast, reliable products with clean
            user experiences.
          </p>
          <p>
            My work focuses on practical execution: translating ideas into
            shipped features, structuring maintainable codebases, and improving
            performance and usability through iterative releases.
          </p>
          <p>
            {siteConfig.availability}, and I&apos;m looking for teams where I can
            contribute to real products while growing through ownership and
            feedback.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}
