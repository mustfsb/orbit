"use client"

import { useEffect, useMemo, useState } from "react"
import { Trash2 } from "lucide-react";
import {
  JOURNAL_MOOD_OPTIONS,
  type JournalEntryInput,
} from "@/lib/journal";
import { getLocalDateKey } from "@/lib/focus-insights";

interface JournalEntryFormProps {
  entryDate: string;
  entry: JournalEntryInput;
  isPersisted: boolean;
  isSaving: boolean;
  onSave: (entry: JournalEntryInput) => Promise<void>;
  onDelete: () => Promise<void>;
}

export function JournalEntryForm({
  entryDate,
  entry,
  isPersisted,
  isSaving,
  onSave,
  onDelete,
}: JournalEntryFormProps) {
  const [draft, setDraft] = useState<JournalEntryInput>(entry);

  useEffect(() => {
    setDraft(entry);
  }, [entry]);

  const prettyDate = useMemo(() => {
    return new Date(`${entryDate}T00:00:00`).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [entryDate]);

  const persist = async (nextEntry: JournalEntryInput) => {
    setDraft(nextEntry);
    await onSave(nextEntry);
  };

  const handleTextBlur = async (field: "accomplished" | "tomorrow", value: string) => {
    await persist({
      ...draft,
      [field]: value,
    });
  };

  const handleRating = async (rating: number) => {
    await persist({
      ...draft,
      rating,
    });
  };

  const handleMood = async (mood: JournalEntryInput["mood"]) => {
    await persist({
      ...draft,
      mood,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-xl font-sans tracking-tight">
            {entryDate === getLocalDateKey(new Date()) ? "Today’s Note" : "Selected Note"}
          </h2>
          <p className="text-sm opacity-45 font-sans">{prettyDate}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-sans opacity-45">
            {isSaving ? "Saving..." : isPersisted ? "Synced" : "Draft"}
          </span>
          {isPersisted ? (
            <button
              onClick={onDelete}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium opacity-55 transition-all hover:text-red-500"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </button>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <textarea
          value={draft.accomplished}
          onChange={(event) => setDraft((previous) => ({ ...previous, accomplished: event.target.value }))}
          onBlur={(event) => handleTextBlur("accomplished", event.target.value)}
          placeholder="Write freely about the day, decisions, friction points, or anything worth keeping."
          rows={10}
          className="w-full resize-none rounded-[1.35rem] border border-border bg-background p-5 font-sans text-sm leading-relaxed transition-colors placeholder:opacity-20 focus:border-border focus:outline-none"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <textarea
            value={draft.tomorrow}
            onChange={(event) => setDraft((previous) => ({ ...previous, tomorrow: event.target.value }))}
            onBlur={(event) => handleTextBlur("tomorrow", event.target.value)}
            placeholder="A short line for tomorrow, or the next thing worth remembering."
            rows={3}
            className="w-full resize-none rounded-[1.2rem] border border-border bg-background p-4 font-sans text-sm leading-relaxed transition-colors placeholder:opacity-20 focus:border-border focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {JOURNAL_MOOD_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleMood(draft.mood === option.value ? null : option.value)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-sans transition-all ${
                  draft.mood === option.value
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background opacity-55 hover:opacity-100"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[1, 2, 3, 4, 5].map((r) => (
              <button
                key={r}
                onClick={() => handleRating(r)}
                className={`inline-flex min-w-9 items-center justify-center rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all ${
                  draft.rating >= r
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-foreground/[0.05] opacity-35 hover:opacity-65"
                }`}
              >
                {r}
              </button>
            ))}
            {draft.rating > 0 ? (
              <span className="text-[11px] opacity-40 font-sans">
                {["", "Poor", "Fair", "Good", "Great", "Excellent"][draft.rating]}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <p className="text-[10px] opacity-20 font-sans">Auto-saved on blur.</p>
    </div>
  )
}
