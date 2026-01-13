"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WeeklyPlan, PlanTask } from "@/lib/gemini";
import { useTasks } from "@/context/task-context";
import {
  Sparkles,
  Coffee,
  BookOpen,
  Briefcase,
  Layout,
  Plus,
  Check
} from "lucide-react";

interface PlannerGridProps {
  plan: WeeklyPlan;
}

const typeIcons = {
  focus: Sparkles,
  rest: Coffee,
  review: BookOpen,
  admin: Briefcase,
  creative: Layout,
};

const typeColors = {
  focus: "text-accent",
  rest: "text-blue-400",
  review: "text-emerald-500",
  admin: "text-stone-400",
  creative: "text-purple-400",
};

function TaskItem({ task }: { task: PlanTask }) {
  const { addTask } = useTasks();
  const [isAdded, setIsAdded] = useState(false);
  const Icon = typeIcons[task.type] || Sparkles;
  const colorClass = typeColors[task.type] || "text-accent";

  const handleAdd = () => {
    setIsAdded(true);
    addTask(task.name, task.type);

    // Toast notification for feedback
    const toast = document.createElement("div");
    toast.className = "fixed bottom-8 right-8 bg-foreground text-background px-6 py-3 rounded-full text-xs font-medium shadow-2xl z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300";
    toast.innerText = `"${task.name}" added to your list`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("animate-out", "fade-out", "slide-out-to-bottom-4");
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
  };

  return (
    <div className="group relative p-3 rounded-xl bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-300 flex items-start justify-between gap-3 border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 w-full">
      <div className="flex items-start gap-3 min-w-0 flex-1">
        <div className={`mt-0.5 p-1.5 rounded-md ${colorClass} bg-current/10 flex-shrink-0`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <div className="space-y-0.5 min-w-0 flex-1">
          <p className="font-medium text-sm tracking-tight truncate pr-1" title={task.name}>{task.name}</p>
          {task.description && (
            <p className="opacity-50 text-[10px] leading-relaxed line-clamp-2">{task.description}</p>
          )}
        </div>
      </div>

      <button
        onClick={handleAdd}
        disabled={isAdded}
        className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${isAdded
            ? 'bg-green-500/10 text-green-600'
            : 'bg-transparent hover:bg-foreground/5 text-foreground/20 hover:text-foreground'
          }`}
        title={isAdded ? "Added" : "Add to tasks"}
      >
        {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-4 h-4" />}
      </button>
    </div>
  );
}

export function PlannerGrid({ plan }: PlannerGridProps) {
  if (!plan || plan.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-4 auto-rows-fr">
      {plan.map((dayPlan, i) => (
        <motion.div
          key={dayPlan.day}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="space-y-3 bg-foreground/[0.01] rounded-2xl p-4 border border-border/40 h-full"
        >
          <div className="flex items-center justify-between pb-2 border-b border-border/40 mb-2">
            <h3 className="text-sm font-serif italic opacity-70">
              {dayPlan.day}
            </h3>
            <span className="text-[10px] opacity-30 font-sans tracking-widest">{dayPlan.tasks.length} TASKS</span>
          </div>
          <div className="space-y-2">
            {dayPlan.tasks.map((task, j) => (
              <TaskItem key={j} task={task} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
