"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { MotionLink } from "@/components/motion/MotionLink";
import { siteConfig } from "@/lib/site";
import { ProfileImage } from "@/components/ProfileImage";

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
        <div className="absolute left-1/2 top-[18%] h-[min(520px,54vh)] w-[min(760px,96vw)] -translate-x-1/2 rounded-full bg-violet-500/[0.11] blur-[105px]" />
        <div className="absolute left-[62%] top-[42%] h-[260px] w-[min(420px,88vw)] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,8,0.08)_0%,transparent_36%,rgba(5,5,8,0.55)_100%)]" />
      </div>

      <motion.div
        className="section-inner relative z-10 grid w-full items-center gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-violet-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
              {siteConfig.availability}
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-[12ch] text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-50 sm:text-6xl lg:text-[4.85rem]"
          >
            {siteConfig.headline.split(" reliable ")[0]}{" "}
            <span className="gradient-text">reliable</span>{" "}
            {siteConfig.headline.split(" reliable ")[1]}
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-8 min-h-[1.7rem]">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-200/90 sm:text-sm" aria-live="polite">
              {displayedHeadline}
              {!reduce ? (
                <span
                  aria-hidden
                  className="ml-2 inline-block h-[0.9em] w-[0.3em] translate-y-[-0.06em] rounded bg-violet-300/65"
                />
              ) : null}
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8"
          >
            {siteConfig.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex w-full max-w-md flex-col items-stretch gap-3.5 sm:max-w-none sm:flex-row sm:items-center"
          >
            <MotionLink
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={buttonTransition}
              className="btn-primary h-12 w-full sm:w-auto sm:min-w-[172px] sm:px-8"
            >
              View Work
            </MotionLink>
            <MotionLink
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={buttonTransition}
              className="btn-glass h-12 w-full sm:w-auto sm:min-w-[172px] sm:px-8"
            >
              Contact Sayan
            </MotionLink>
          </motion.div>
        </div>

        <motion.aside
          variants={itemVariants}
          className="glass-panel-strong mx-auto w-full max-w-md overflow-hidden rounded-3xl p-0 lg:mx-0"
          aria-label="Professional profile"
        >
          <div className="flex flex-col items-center p-6 sm:p-8">
            <ProfileImage />
            
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold tracking-tight text-white">{siteConfig.name}</h2>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-zinc-500">{siteConfig.role}</p>
            </div>

            <div className="mt-8 w-full space-y-4">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">Engineering Focus</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Full-stack web apps, clean UI systems, and production-safe delivery.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-2.5">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.015] py-2.5 px-1">
                    <span className="text-[10px] font-semibold text-zinc-400">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
