"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Clock3,
  Flame,
  Zap,
  TrendingUp,
  CalendarClock,
  Target,
} from "lucide-react";
import { CardDynamic, CardGreen } from "./bento-shared";

export function HomeBentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full bg-background py-16 md:py-32 px-4 font-sans selection:bg-[#E0FF82] selection:text-[#0a0a0a] mb-48"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center text-center px-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#222222] bg-[#111111]/50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-foreground/50 mb-6">
            <Zap className="h-3.5 w-3.5 text-accent" />
            Live Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-6">
            Your command center.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/50">
            Focus, planning, reflection, and rewards unified into a single instrument panel.
          </p>
        </motion.div>

        {/* Unified Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Today's Focus - Large stat card */}
          <CardDynamic className="md:col-span-1 flex flex-col justify-between">
            <div className="w-full flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
              <span className="flex items-center gap-2">
                <Clock3 className="w-3 h-3" />
                Today&apos;s Focus
              </span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center py-6">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="5" className="opacity-10" />
                  <circle cx="50" cy="50" r="42" fill="none" strokeWidth="5" strokeDasharray="264" strokeDashoffset="100" strokeLinecap="round" className="text-accent" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black tracking-tighter">62%</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 mt-1">of daily goal</span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-widest opacity-40">
              <span>3h 45m logged</span>
              <span>6h goal</span>
            </div>
          </CardDynamic>

          {/* Weekly Chart */}
          <CardDynamic className="md:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between w-full font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3" />
                Weekly Rhythm
              </span>
              <span>7 Days</span>
            </div>
            
            <div className="flex items-end gap-2 mt-6 h-[120px] w-full">
              {[
                { day: "Mon", hours: 2.1 },
                { day: "Tue", hours: 4.2 },
                { day: "Wed", hours: 3.0 },
                { day: "Thu", hours: 5.1 },
                { day: "Fri", hours: 3.2 },
                { day: "Sat", hours: 1.5 },
                { day: "Sun", hours: 2.3 },
              ].map((point, idx) => (
                <div key={point.day} className="flex flex-1 flex-col items-center gap-2 h-full justify-end group/bar">
                  <div className="relative flex h-full w-full items-end justify-center">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-accent text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover/bar:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10">
                      {point.hours}h
                    </div>
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full max-w-[24px] rounded-t-md bg-foreground origin-bottom transition-all duration-300 group-hover/bar:brightness-110"
                      style={{
                        height: `${(point.hours / 5.1) * 100}%`,
                        opacity: 0.3 + (point.hours / 5.1) * 0.5,
                      }}
                    />
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-60 group-hover/bar:opacity-100 transition-opacity">
                    {point.day.slice(0, 1)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 flex justify-between items-center border-t border-[#222222]">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                Avg: 3h/day
              </span>
              <Zap className="w-3.5 h-3.5 opacity-40" />
            </div>
          </CardDynamic>

          {/* Journal Echo */}
          <CardDynamic className="md:col-span-1 flex flex-col justify-between">
            <div className="w-full flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest opacity-70">
              <span className="flex items-center gap-2">
                <CalendarClock className="w-3 h-3" />
                Apr 21
              </span>
            </div>
            
            <p className="text-xl sm:text-2xl leading-[1.3] font-bold tracking-tight mt-6 italic flex-1">
              &ldquo;Closed two deep-work blocks before lunch. Tomorrow: tighten the dashboard flow and leave the interface calmer than I found it.&rdquo;
            </p>
          </CardDynamic>

          {/* Active Goals */}
          <CardDynamic className="md:col-span-1 flex flex-col justify-between">
            <div className="w-full flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4">
              <span className="flex items-center gap-2">
                <Target className="w-3 h-3" />
                Active Goals
              </span>
              <span>3 goals</span>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
              {[
                { title: "Refine portfolio system", progress: 74 },
                { title: "Complete spring program map", progress: 46 },
                { title: "Publish analytics refresh", progress: 58 },
              ].map((goal, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-bold tracking-tight">{goal.title}</h4>
                    <span className="text-[10px] font-bold text-accent">{goal.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${goal.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardDynamic>

          {/* Streak */}
          <CardGreen className="md:col-span-1 flex flex-col justify-between">
            <div className="w-full flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
              <span className="flex items-center gap-2">
                <Flame className="w-3 h-3" />
                Streak
              </span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-black tracking-tighter mb-2">9</span>
              <span className="text-sm font-bold opacity-70">Days active</span>
            </div>
            
            <div className="flex items-end gap-1.5 h-10 w-full">
              {[1, 2, 3, 4, 5, 6, 7].map((day, i) => {
                const isActive = i < 6;
                return (
                  <motion.div
                    key={day}
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-1 rounded-sm origin-bottom transition-all duration-300 ${
                      !isActive
                        ? "opacity-15 h-3 bg-[#0a0a0a]"
                        : "h-full bg-[#0a0a0a] opacity-80 group-hover:opacity-100"
                    }`}
                  />
                );
              })}
            </div>
            
            <div className="text-center mt-2">
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-30">
                Weekly rhythm locked
              </span>
            </div>
          </CardGreen>

          {/* Next Tasks */}
          <CardDynamic className="md:col-span-3 flex flex-col justify-between">
            <div className="w-full flex justify-between font-mono text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3" />
                Up Next
              </span>
              <span>AI-prioritized</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "Review Tuesday architecture block", type: "planner", time: "9:00 AM" },
                { title: "Write onboarding checklist copy", type: "task", time: "11:30 AM" },
                { title: "Fix focus-session analytics bug", type: "task", time: "2:00 PM" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  className={`px-4 py-3.5 font-bold tracking-tight text-xs sm:text-sm leading-snug rounded-xl transition-colors duration-200 cursor-default flex items-center justify-between ${
                    item.type === "planner"
                      ? "bg-[#111111] text-accent border border-[#222222]"
                      : "bg-foreground/[0.04] text-foreground/70 hover:bg-foreground/[0.07]"
                  }`}
                >
                  <span className="truncate">{item.title}</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest opacity-40 shrink-0 ml-2">{item.time}</span>
                </motion.div>
              ))}
            </div>
          </CardDynamic>
        </div>
      </div>
    </section>
  );
}
