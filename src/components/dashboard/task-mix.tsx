"use client"

import React from "react";
import { useTasks, TaskType } from "@/context/task-context";
import { motion } from "framer-motion";

const typeLabels: Record<TaskType, string> = {
  focus: "Deep Work",
  creative: "Creative",
  rest: "Restorative",
  admin: "Logistics",
  review: "Reflective",
  distraction: "Distraction",
};

const typeColors: Record<TaskType, string> = {
  focus: "bg-accent",
  creative: "bg-purple-400",
  rest: "bg-blue-400",
  admin: "bg-stone-300",
  review: "bg-emerald-400",
  distraction: "bg-red-400",
};

export function TaskMix() {
  const { tasks } = useTasks();

  const activeTasks = tasks.filter(t => !t.completed);
  const total = activeTasks.length;

  if (total === 0) return null;

  const distribution = activeTasks.reduce((acc, task) => {
    acc[task.type] = (acc[task.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-8 rounded-2xl border border-border bg-foreground/[0.02] space-y-6">
      <div className="space-y-1">
        <h3 className="text-sm font-sans font-bold uppercase tracking-[0.2em] opacity-40">Task Mix</h3>
        <p className="text-xs font-sans opacity-60">Visualizing your cognitive load.</p>
      </div>

      <div className="h-2 w-full flex rounded-full overflow-hidden bg-foreground/5">
        {Object.entries(distribution).map(([type, count]) => (
          <motion.div
            key={type}
            initial={{ width: 0 }}
            animate={{ width: `${(count / total) * 100}%` }}
            className={typeColors[type as TaskType]}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-4">
        {Object.entries(typeLabels).map(([type, label]) => {
          const count = distribution[type] || 0;
          if (count === 0) return null;
          return (
            <div key={type} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${typeColors[type as TaskType]}`} />
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider opacity-60">{label}</span>
              <span className="text-[10px] font-sans opacity-30 ml-auto">{Math.round((count / total) * 100)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
