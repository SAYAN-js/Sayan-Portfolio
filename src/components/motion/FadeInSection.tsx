"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease },
  },
} as const;

export function FadeInSection({
  children,
  ...props
}: HTMLMotionProps<"section">) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      variants={variants}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.14 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
