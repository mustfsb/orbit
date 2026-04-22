"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Flag, Plus } from "lucide-react";

interface GoalComposerProps {
  onCreateGoal: (input: { title: string; description: string; target_date: string | null }) => Promise<void>;
}

export function GoalComposer({ onCreateGoal }: GoalComposerProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    await onCreateGoal({
      title,
      description,
      target_date: targetDate || null,
    });
    setTitle("");
    setDescription("");
    setTargetDate("");
    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="rounded-[1.3rem] border border-border bg-foreground/[0.015] p-5 md:p-6"
    >
      <div className="space-y-4">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_220px]">
          <label className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-40">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ship the portfolio refresh"
              className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-base font-sans outline-none transition-colors placeholder:opacity-25 focus:border-border"
            />
          </label>

          <label className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-40">Target Date</span>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4">
              <Calendar className="h-4 w-4 opacity-35" />
              <input
                type="date"
                value={targetDate}
                onChange={(event) => setTargetDate(event.target.value)}
                className="w-full bg-transparent py-4 text-sm font-sans outline-none"
              />
            </div>
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-40">Note</span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Optional note"
            rows={2}
            className="w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-sm font-sans leading-relaxed outline-none transition-colors placeholder:opacity-25 focus:border-border"
          />
        </label>

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={!title.trim() || isSubmitting}
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus className="h-4 w-4" />
          {isSubmitting ? "Saving Goal..." : "Create Goal"}
        </motion.button>
      </div>
    </motion.form>
  );
}
