"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { MotionLink } from "@/components/motion/MotionLink";
import { siteConfig } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const buttonTransition = { type: "spring" as const, stiffness: 380, damping: 30 };

const proofPoints = [
  "Next.js 16",
  "TypeScript",
  "Production build verified",
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const phrases = useMemo(
    () => [
      "Backend-minded frontend engineering",
      "Clean architecture and reliable interfaces",
      "Recruiter-ready product presentation",
    ],
    []
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;

    const full = phrases[phraseIndex] ?? phrases[0];
    const delay = !isDeleting
      ? subIndex === 0
        ? 320
        : 42
      : subIndex === full.length
        ? 1100
        : 24;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const next = subIndex + 1;
        setSubIndex(next);
        if (next >= full.length) setIsDeleting(true);
        return;
      }

      const next = subIndex - 1;
      setSubIndex(next);
      if (next <= 0) {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, phraseIndex, phrases, reduce, subIndex]);

  const displayedHeadline = reduce
    ? phrases[0]
    : phrases[phraseIndex]?.slice(0, Math.max(0, subIndex));

  const itemVariants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.075,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center page-gutter pb-16 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[18%] h-[min(520px,54vh)] w-[min(760px,96vw)] -translate-x-1/2 rounded-full bg-violet-500/[0.13] blur-[105px]" />
        <div className="absolute left-[62%] top-[42%] h-[260px] w-[min(420px,88vw)] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,8,0.08)_0%,transparent_36%,rgba(5,5,8,0.52)_100%)]" />
      </div>

      <motion.div
        className="section-inner relative z-10 grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <motion.p
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-violet-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
            {siteConfig.availability}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="max-w-[11ch] text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-zinc-50 sm:max-w-[12ch] sm:text-6xl lg:max-w-[13ch] lg:text-[4.7rem]"
          >
            {siteConfig.headline.split(" reliable ")[0]}{" "}
            <span className="gradient-text">reliable</span>{" "}
            {siteConfig.headline.split(" reliable ")[1]}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 min-h-[1.7rem] max-w-2xl font-mono text-xs font-medium uppercase tracking-[0.18em] text-violet-200/90 sm:text-sm"
            aria-live="polite"
          >
            {displayedHeadline}
            {!reduce ? (
              <span
                aria-hidden
                className="ml-2 inline-block h-[0.9em] w-[0.3em] translate-y-[-0.06em] rounded bg-violet-300/65"
              />
            ) : null}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-pretty text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8"
          >
            {siteConfig.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center"
          >
            <MotionLink
              href="#projects"
              whileHover={{ scale: 1.018 }}
              whileTap={{ scale: 0.985 }}
              transition={buttonTransition}
              className="btn-primary h-12 min-h-[48px] w-full sm:w-auto sm:min-w-[172px] sm:px-8"
            >
              View Work
            </MotionLink>
            <MotionLink
              href="#contact"
              whileHover={{ scale: 1.018 }}
              whileTap={{ scale: 0.985 }}
              transition={buttonTransition}
              className="btn-glass h-12 min-h-[48px] w-full sm:w-auto sm:min-w-[172px] sm:px-8"
            >
              Contact Sayan
            </MotionLink>
            <a
              href={`mailto:${siteConfig.email}?subject=Resume request from portfolio`}
              className="btn-glass h-12 min-h-[48px] w-full sm:w-auto sm:min-w-[172px] sm:px-8"
            >
              Request Resume
            </a>
          </motion.div>
        </div>

        <motion.aside
          variants={itemVariants}
          className="glass-panel-strong mx-auto w-full max-w-md rounded-2xl p-5 lg:mx-0"
          aria-label="Portfolio highlights"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            Engineering Snapshot
          </p>
          <dl className="mt-6 grid grid-cols-1 gap-4">
            <div className="rounded-xl border border-white/10 bg-black/15 p-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-200">
                Focus
              </dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-200">
                Full-stack web apps, clean UI systems, typed state, and
                production-safe delivery.
              </dd>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-center"
                >
                  <span className="block text-[11px] font-semibold leading-5 text-zinc-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.055] p-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-200">
                Verified
              </dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-200">
                Lint, typecheck, audit, and production build are part of the
                deployment workflow.
              </dd>
            </div>
          </dl>
        </motion.aside>
      </motion.div>
    </section>
  );
}
