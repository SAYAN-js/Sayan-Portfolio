import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { PageBackdrop } from "@/components/PageBackdrop";
import { SiteFooter } from "@/components/SiteFooter";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ProofHighlights } from "@/components/ProofHighlights";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageBackdrop />
      <Navbar />
      <main id="main-content" className="relative" tabIndex={-1}>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <ProofHighlights />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
