"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Pencil, RotateCcw, Save, Trash2, X } from "lucide-react";
import type { Goal } from "@/lib/goals";

interface GoalCardProps {
  goal: Goal;
  onSave: (
    goalId: string,
    input: {
      title: string;
      description: string | null;
      target_date: string | null;
      progress: number;
      status: Goal["status"];
    }
  ) => Promise<void>;
  onDelete: (goalId: string) => Promise<void>;
}

export function GoalCard({ goal, onSave, onDelete }: GoalCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(goal.title);
  const [draftDescription, setDraftDescription] = useState(goal.description ?? "");
  const [draftTargetDate, setDraftTargetDate] = useState(goal.target_date ?? "");
  const [draftProgress, setDraftProgress] = useState(goal.progress);
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    setDraftTitle(goal.title);
    setDraftDescription(goal.description ?? "");
    setDraftTargetDate(goal.target_date ?? "");
    setDraftProgress(goal.progress);
  }, [goal]);

  const persist = async (status: Goal["status"] = goal.status, progressValue: number = draftProgress) => {
    if (!draftTitle.trim()) {
      return;
    }

    setIsBusy(true);
    await onSave(goal.id, {
      title: draftTitle.trim(),
      description: draftDescription.trim() || null,
      target_date: draftTargetDate || null,
      progress: status === "completed" ? 100 : progressValue,
      status,
    });
    setIsBusy(false);
    setIsEditing(false);
  };

  const toggleStatus = async () => {
    const nextStatus = goal.status === "completed" ? "active" : "completed";
    const nextProgress = goal.status === "completed" ? Math.min(100, Math.max(goal.progress, 90)) : 100;
    if (goal.status === "completed") {
      setDraftProgress(nextProgress);
    } else {
      setDraftProgress(nextProgress);
    }
    await persist(nextStatus, nextProgress);
  };

  const handleDelete = async () => {
    setIsBusy(true);
    await onDelete(goal.id);
    setIsBusy(false);
  };

  return (
    <motion.article
      layout
      className={`rounded-[1.2rem] border p-4 transition-all ${
        goal.status === "completed"
          ? "border-border bg-foreground/[0.015] opacity-70"
          : "border-border bg-foreground/[0.02]"
      }`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                goal.status === "completed"
                  ? "bg-accent text-accent-foreground"
                  : "border border-border bg-background opacity-55"
              }`}
            >
              {goal.status === "completed" ? <CheckCircle2 className="h-3 w-3" /> : null}
              {goal.status}
            </span>

            {goal.target_date ? (
              <span className="inline-flex items-center gap-2 text-[11px] font-sans opacity-45">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(`${goal.target_date}T00:00:00`).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            ) : null}
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <input
                value={draftTitle}
                onChange={(event) => setDraftTitle(event.target.value)}
                className="w-full bg-transparent text-xl font-sans tracking-tight outline-none placeholder:opacity-30"
                placeholder="Goal title"
              />
              <textarea
                value={draftDescription}
                onChange={(event) => setDraftDescription(event.target.value)}
                rows={4}
                className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm font-sans leading-relaxed outline-none transition-colors placeholder:opacity-25 focus:border-border"
                placeholder="Add a note about what success looks like."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-40">Target Date</span>
                  <input
                    type="date"
                    value={draftTargetDate}
                    onChange={(event) => setDraftTargetDate(event.target.value)}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-sans outline-none transition-colors focus:border-border"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-40">Progress</span>
                  <div className="rounded-2xl border border-border bg-background px-4 py-4">
                    <div className="mb-3 flex items-center justify-between text-xs font-sans opacity-60">
                      <span>Completion</span>
                      <span>{draftProgress}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={draftProgress}
                      onChange={(event) => setDraftProgress(Number(event.target.value))}
                      className="w-full accent-accent"
                    />
                  </div>
                </label>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h3 className="text-xl font-sans tracking-tight">{goal.title}</h3>
              <p className="max-w-2xl text-sm font-sans leading-relaxed opacity-55">
                {goal.description || "No extra notes yet. This goal is currently being tracked as a clean milestone."}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {isEditing ? (
            <>
              <button
                onClick={() => persist()}
                disabled={isBusy || !draftTitle.trim()}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-[11px] font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                <Save className="h-3.5 w-3.5" />
                Save
              </button>
              <button
                onClick={() => {
                  setDraftTitle(goal.title);
                  setDraftDescription(goal.description ?? "");
                  setDraftTargetDate(goal.target_date ?? "");
                  setDraftProgress(goal.progress);
                  setIsEditing(false);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium opacity-55 transition-opacity hover:opacity-100"
              >
                <X className="h-3.5 w-3.5" />
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium opacity-55 transition-all hover:text-accent"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </button>
              <button
                onClick={toggleStatus}
                disabled={isBusy}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium opacity-55 transition-all hover:text-accent disabled:opacity-30"
              >
                {goal.status === "completed" ? <RotateCcw className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                {goal.status === "completed" ? "Reopen" : "Complete"}
              </button>
              <button
                onClick={handleDelete}
                disabled={isBusy}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium opacity-45 transition-all hover:text-red-500 disabled:opacity-30"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] opacity-35">
          <span>Progress</span>
          <span>{goal.status === "completed" ? 100 : goal.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-foreground/[0.05]">
          <motion.div
            initial={false}
            animate={{ width: `${goal.status === "completed" ? 100 : goal.progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-accent/80"
          />
        </div>
      </div>
    </motion.article>
  );
}
