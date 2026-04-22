"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WeeklyPlan, PlanTask } from "@/lib/gemini";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function NextUp() {
  const [nextTask, setNextTask] = useState<PlanTask | null>(null);
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    const savedPlan = localStorage.getItem("orbit-current-plan");
    if (savedPlan) {
      try {
        const plan: WeeklyPlan = JSON.parse(savedPlan);
        // Get current day of week
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = days[new Date().getDay()];

        const todayPlan = plan.find(d => d.day === today);
        if (todayPlan && todayPlan.tasks.length > 0) {
          setNextTask(todayPlan.tasks[0]);
          setDayName(today);
        }
      } catch (e) {
        console.error("Failed to parse plan for NextUp", e);
      }
    }
  }, []);

  if (!nextTask) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl border border-accent/20 bg-accent/[0.02] space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans font-bold text-accent">
          <Sparkles className="w-3 h-3" />
          Next Architectural Intent
        </div>
        <span className="text-[10px] opacity-40 font-sans font-bold uppercase tracking-widest">{dayName}</span>
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-sans tracking-tight">{nextTask.name}</h3>
        <p className="text-xs opacity-50 font-sans italic">
          Based on your synthesized weekly path.
        </p>
      </div>

      <Link
        href="/planner"
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans font-bold text-accent hover:opacity-70 transition-opacity pt-2"
      >
        View Full Schedule <ArrowRight className="w-3 h-3" />
      </Link>
    </motion.div>
  );
}
