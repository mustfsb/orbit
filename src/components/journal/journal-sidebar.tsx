"use client"

import { getLocalDateKey } from "@/lib/focus-insights";
import type { JournalEntry } from "@/lib/journal";

interface JournalSidebarProps {
  entries: JournalEntry[];
  selectedDate: string;
  expandedDates: string[];
  searchQuery: string;
  onSelectDate: (entryDate: string) => void;
  onSearchChange: (value: string) => void;
  onToggleExpand: (entryDate: string) => void;
}

export function JournalSidebar({
  entries,
  selectedDate,
  expandedDates,
  searchQuery,
  onSelectDate,
  onSearchChange,
  onToggleExpand,
}: JournalSidebarProps) {
  const todayKey = getLocalDateKey(new Date());
  const timelineDates = Array.from(new Set([todayKey, ...entries.map((entry) => entry.entry_date)])).sort((left, right) =>
    right.localeCompare(left)
  );

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-sans tracking-tight opacity-60">Archive</h3>

      <div className="rounded-[1rem] border border-border bg-background px-4 py-3">
        <input
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search notes or moods..."
          className="w-full bg-transparent text-sm font-sans outline-none placeholder:opacity-25"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {timelineDates.map((entryDate) => (
          <button
            key={entryDate}
            onClick={() => onSelectDate(entryDate)}
            className={`flex-shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-sans transition-all ${
              selectedDate === entryDate
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-background opacity-55 hover:opacity-100"
            }`}
          >
            {new Date(`${entryDate}T00:00:00`).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {entries.length === 0 ? (
          <div className="rounded-[1rem] border border-border bg-foreground/[0.01] p-4 text-sm font-sans opacity-50">
            Your saved journal history will appear here after the first synced entry.
          </div>
        ) : (
          entries.map((entry) => {
            const isExpanded = expandedDates.includes(entry.entry_date);
            const isSelected = selectedDate === entry.entry_date;

            return (
              <div
                key={entry.id}
                className={`rounded-[1.5rem] border p-4 transition-all ${
                  isSelected ? "border-accent/25 bg-background shadow-sm" : "border-border bg-foreground/[0.01] hover:bg-foreground/[0.03]"
                }`}
              >
                <button
                  onClick={() => {
                    onSelectDate(entry.entry_date);
                    onToggleExpand(entry.entry_date);
                  }}
                  className="w-full text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-sans tracking-tight">
                        {new Date(`${entry.entry_date}T00:00:00`).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      {entry.mood ? (
                        <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
                          {entry.mood}
                        </span>
                      ) : null}
                    </div>

                    <span className="text-[11px] font-sans opacity-35">
                      {entry.rating > 0 ? `${entry.rating}/5` : ""}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs font-sans leading-relaxed opacity-55">
                    <p className={isExpanded ? "" : "line-clamp-2"}>
                      {entry.accomplished || entry.tomorrow || "No note text saved for this date."}
                    </p>
                    {isExpanded ? (
                      <div className="space-y-1 border-t border-border/60 pt-3">
                        <p>{entry.tomorrow || "No next-focus note saved."}</p>
                      </div>
                    ) : null}
                  </div>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  )
}
