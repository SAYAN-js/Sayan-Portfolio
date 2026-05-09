"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorLight() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for high-performance movement
  const mouseX = useSpring(0, { stiffness: 450, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 50 });

  useEffect(() => {
    // Disable on mobile/touch or reduced motion
    if (window.matchMedia("(pointer: coarse)").matches || shouldReduceMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion, isVisible]);

  if (shouldReduceMotion || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      <motion.div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 65%)",
        }}
      />
    </motion.div>
  );
}
