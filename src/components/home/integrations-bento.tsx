"use client"

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  FileText,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Google Calendar",
    description: "Two-way sync with automatic deep work blocking.",
    stat: "2.4s",
    statLabel: "sync",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: MessageSquare,
    title: "Slack Status",
    description: "Auto DND and status updates during focus.",
    stat: "Zero",
    statLabel: "distractions",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: FileText,
    title: "Notion Export",
    description: "One-click journal export to your workspace.",
    stat: "1-click",
    statLabel: "export",
    gradient: "from-gray-500/10 to-slate-500/10",
    iconColor: "text-gray-400",
  },
  {
    icon: Brain,
    title: "AI Planning",
    description: "Gemini-powered cognitive load scheduling.",
    stat: "< 3s",
    statLabel: "plan gen",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const IntegrationsBento = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-24 mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20 space-y-5"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#222222] bg-[#111111]/50 px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">
            Integrations &amp; Features
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold leading-[1.1]">
          Connects with your world.
        </h2>
        <p className="max-w-xl mx-auto text-base text-foreground/45 leading-relaxed">
          Orbit isn&apos;t another silo. It pulls from your existing tools and pushes structure back into your life without the friction.
        </p>
      </motion.div>

      {/* Feature grid - 4 columns */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(224,255,130,0.04)]"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                <Icon size={28} strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold tracking-tight leading-snug group-hover:text-foreground transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground/35 group-hover:text-foreground/60 transition-opacity duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Stat badge */}
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                  {feature.stat}
                  <span className="text-accent/60">{feature.statLabel}</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
