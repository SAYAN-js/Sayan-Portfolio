"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileImage() {
  return (
    <div className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40">
      {/* Premium background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 to-cyan-400/20 blur-2xl" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10 bg-[#0a0a0f] shadow-2xl"
      >
        <Image
          src="/avatar.png"
          alt="Sayan Chowdhury"
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          priority
        />
        
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />
      </motion.div>

      {/* Decorative ring */}
      <div className="absolute -inset-1 rounded-full border border-white/5" />
    </div>
  );
}
