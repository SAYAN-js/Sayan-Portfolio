"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteFooter() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      className="page-gutter border-t border-white/[0.06] bg-[#050508]/40 py-10 text-center backdrop-blur-sm"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.42, ease }}
    >
      <p className="mx-auto max-w-6xl font-mono text-xs tracking-wide text-zinc-600">
        Copyright {new Date().getFullYear()} {siteConfig.shortName}
      </p>
    </motion.footer>
  );
}
