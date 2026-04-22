"use client"

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  })
};

export const KineticHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 -mt-[80px] md:-mt-[88px]"
    >
      {/* Noise grain overlay */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />

      {/* Subtle radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl pt-[80px] md:pt-[88px]">

        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
        >
          Now in Beta
        </motion.div>

        <motion.h1
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl lg:text-[96px] tracking-tight leading-[1.05] font-bold"
        >
          Cultivate your<br />focus.
        </motion.h1>

        <motion.p
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-foreground/50 max-w-lg mx-auto leading-relaxed"
        >
          A minimal environment for deep work, intentional planning, and cognitive flourishing. Designed to move at the speed of your thoughts.
        </motion.p>

        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="pt-6"
        >
          <Link
            href="/signup"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold tracking-wide text-accent-foreground transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-foreground/20" />
      </motion.div>
    </section>
  );
};
