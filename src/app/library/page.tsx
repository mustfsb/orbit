"use client"

import { useEffect, useMemo, useState } from "react";
import {
  BookMarked,
  BookOpenText,
  Loader2,
  Pin,
  Plus,
  Target,
  Trash2,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { useGoals } from "@/context/goals-context";
import { useTasks } from "@/context/task-context";
import { usePlanner } from "@/context/planner-context";
import { formatMinutes } from "@/lib/focus-insights";
import type { JournalEntry } from "@/lib/journal";
import {
  createLibraryPin,
  readLibraryPins,
  readUpcomingPlanSnippets,
  writeLibraryPins,
  type LibraryPin,
} from "@/lib/library";
import { createClient } from "@/lib/supabase/client";

const plannerTypeLabel: Record<string, string> = {
  focus: "Focus",
  creative: "Creative",
  review: "Review",
  admin: "Admin",
  rest: "Rest",
};

export default function LibraryPage() {
  const { activeGoals, focusInsights, loading: goalsLoading } = useGoals();
  const { tasks, loading: tasksLoading } = useTasks();
  const { currentPlan, completions } = usePlanner();
  const [pins, setPins] = useState<LibraryPin[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [pinDraft, setPinDraft] = useState("");
  const [loadingJournal, setLoadingJournal] = useState(true);

  const plannerSnippets = useMemo(() => {
    return readUpcomingPlanSnippets(currentPlan, completions, 5);
  }, [currentPlan, completions]);

  useEffect(() => {
    setPins(readLibraryPins());

    const loadJournalEntries = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setJournalEntries([]);
        setLoadingJournal(false);
        return;
      }

      const { data, error } = await supabase
        .from("journal_entries")
        .select("*")
        .eq("user_id", user.id)
        .order("entry_date", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Error loading library journal entries:", error);
        setJournalEntries([]);
      } else {
        setJournalEntries((data ?? []) as JournalEntry[]);
      }

      setLoadingJournal(false);
    };

    loadJournalEntries().catch((error: unknown) => {
      console.error("Failed to load library data:", error);
      setLoadingJournal(false);
    });
  }, []);

  const upcomingLedger = useMemo(() => {
    const taskSnippets = tasks
      .filter((task) => !task.completed)
      .slice(0, 3)
      .map((task) => ({
        id: task.id,
        title: task.text,
        meta: task.type === "distraction" ? "Inbox" : "Task ledger",
      }));

    const plannerItems = plannerSnippets.map((snippet) => ({
      id: snippet.id,
      title: snippet.title,
      meta: `${snippet.day.slice(0, 3)} ${plannerTypeLabel[snippet.type] ?? "Plan"}`,
    }));

    return [...plannerItems, ...taskSnippets].slice(0, 6);
  }, [plannerSnippets, tasks]);

  const handleCreatePin = (): void => {
    const trimmedDraft = pinDraft.trim();
    if (!trimmedDraft) {
      return;
    }

    const nextPins = [createLibraryPin(trimmedDraft), ...pins].slice(0, 18);
    setPins(nextPins);
    writeLibraryPins(nextPins);
    setPinDraft("");
  };

  const handleDeletePin = (pinId: string): void => {
    const nextPins = pins.filter((pin) => pin.id !== pinId);
    setPins(nextPins);
    writeLibraryPins(nextPins);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
        <PageWrapper>
          <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground">
                  <BookMarked className="h-3.5 w-3.5" />
                  Focus Library
                </div>
                <h1 className="text-4xl md:text-5xl font-sans tracking-tight">A quiet shelf for your working mind.</h1>
                <p className="max-w-2xl text-sm font-sans leading-relaxed opacity-55">
                  Orbit pulls notes, goals, and the next pieces of work into one calm reading room, then lets you pin the lines you want to keep close.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-sans">
                <span className="rounded-full border border-border bg-foreground/[0.05] px-3 py-1.5 opacity-55">
                  {activeGoals.length} active goals
                </span>
                <span className="rounded-full border border-border bg-foreground/[0.05] px-3 py-1.5 opacity-55">
                  {focusInsights.currentStreak} day streak
                </span>
                <span className="rounded-full bg-accent px-3 py-1.5 text-accent-foreground">
                  {formatMinutes(focusInsights.totalFocusMinutes)} focused
                </span>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
              <div className="space-y-6">
                <section className="rounded-[2rem] border border-border bg-foreground/[0.015] p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Journal shelf</p>
                      <h2 className="mt-2 text-2xl font-sans tracking-tight">Recent notes</h2>
                    </div>
                    <span className="rounded-full border border-border bg-foreground/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] opacity-45">
                      Synced
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {loadingJournal ? (
                      <div className="flex items-center gap-3 rounded-[1.5rem] border border-border bg-background px-5 py-4 text-sm opacity-50">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading notes...
                      </div>
                    ) : journalEntries.length === 0 ? (
                      <div className="rounded-[1.5rem] border border-border bg-background px-5 py-5 text-sm font-sans opacity-55">
                        Your saved journal notes will surface here after the first synced entry.
                      </div>
                    ) : (
                      journalEntries.map((entry) => (
                        <article key={entry.id} className="rounded-[1.5rem] border border-border bg-background px-5 py-5">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-sm font-sans tracking-tight">
                              {new Date(`${entry.entry_date}T00:00:00`).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">
                              {entry.mood ? (
                                <span className="rounded-full bg-accent px-2.5 py-1 text-accent-foreground">
                                  {entry.mood}
                                </span>
                              ) : null}
                              {entry.rating > 0 ? (
                                <span className="rounded-full border border-border bg-foreground/[0.05] px-2.5 py-1 opacity-45">
                                  {entry.rating}/5
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <p className="mt-4 text-sm font-sans leading-relaxed opacity-65">
                            {entry.accomplished || entry.tomorrow || "No note text saved for this date."}
                          </p>
                        </article>
                      ))
                    )}
                  </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.9fr)]">
                  <div className="rounded-[2rem] border border-border bg-foreground/[0.015] p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Momentum shelf</p>
                        <h2 className="mt-2 text-2xl font-sans tracking-tight">Goals in motion</h2>
                      </div>
                      <Target className="h-5 w-5 text-accent" />
                    </div>

                    <div className="mt-6 space-y-3">
                      {goalsLoading ? (
                        <div className="flex items-center gap-3 rounded-[1.5rem] border border-border bg-background px-5 py-4 text-sm opacity-50">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Loading goals...
                        </div>
                      ) : activeGoals.length === 0 ? (
                        <div className="rounded-[1.5rem] border border-border bg-background px-5 py-5 text-sm font-sans opacity-55">
                          No active goals yet. Create one in Goals to build a visible arc here.
                        </div>
                      ) : (
                        activeGoals.slice(0, 4).map((goal) => (
                          <div key={goal.id} className="rounded-[1.35rem] border border-border bg-background px-4 py-4">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-sans">{goal.title}</p>
                                <p className="mt-1 text-[11px] font-sans opacity-45">
                                  {goal.target_date
                                    ? `Target ${new Date(`${goal.target_date}T00:00:00`).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                      })}`
                                    : "Open timeline"}
                                </p>
                              </div>
                              <span className="text-xs font-sans text-accent">{goal.progress}%</span>
                            </div>
                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/[0.06]">
                              <div className="h-full rounded-full bg-accent/80" style={{ width: `${goal.progress}%` }} />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-border bg-foreground/[0.015] p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">On deck</p>
                        <h2 className="mt-2 text-2xl font-sans tracking-tight">Next pieces</h2>
                      </div>
                      <BookOpenText className="h-5 w-5 opacity-45" />
                    </div>

                    <div className="mt-6 space-y-3">
                      {tasksLoading && upcomingLedger.length === 0 ? (
                        <div className="flex items-center gap-3 rounded-[1.5rem] border border-border bg-background px-5 py-4 text-sm opacity-50">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Loading queue...
                        </div>
                      ) : upcomingLedger.length === 0 ? (
                        <div className="rounded-[1.5rem] border border-border bg-background px-5 py-5 text-sm font-sans opacity-55">
                          Planner blocks and open tasks will gather here once they exist.
                        </div>
                      ) : (
                        upcomingLedger.map((item) => (
                          <div key={item.id} className="rounded-[1.35rem] border border-border bg-background px-4 py-4">
                            <p className="text-sm font-sans">{item.title}</p>
                            <p className="mt-1 text-[11px] font-sans opacity-45">{item.meta}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <section className="rounded-[2rem] border border-border bg-foreground/[0.02] p-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Margin notes</p>
                    <h2 className="text-2xl font-sans tracking-tight">Pin a line to keep nearby.</h2>
                    <p className="text-sm font-sans leading-relaxed opacity-55">
                      Use this small shelf for fragments, reminders, or short instructions you want to revisit during the week.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <textarea
                      value={pinDraft}
                      onChange={(event) => setPinDraft(event.target.value)}
                      placeholder="Keep the dashboard calmer than you found it."
                      rows={4}
                      className="w-full resize-none rounded-[1.5rem] border border-border bg-background px-4 py-4 text-sm font-sans leading-relaxed outline-none transition-colors placeholder:opacity-25 focus:border-border"
                    />
                    <button
                      type="button"
                      onClick={handleCreatePin}
                      disabled={!pinDraft.trim()}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      <Plus className="h-4 w-4" />
                      Add Pin
                    </button>
                  </div>
                </section>

                <section className="rounded-[2rem] border border-border bg-foreground/[0.015] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Pinned shelf</p>
                      <h2 className="mt-2 text-2xl font-sans tracking-tight">Saved fragments</h2>
                    </div>
                    <Pin className="h-5 w-5 text-accent" />
                  </div>

                  <div className="mt-6 space-y-3">
                    {pins.length === 0 ? (
                      <div className="rounded-[1.5rem] border border-border bg-background px-5 py-5 text-sm font-sans opacity-55">
                        Add a short pin above and it will stay here locally on this device.
                      </div>
                    ) : (
                      pins.map((pin) => (
                        <div key={pin.id} className="rounded-[1.35rem] border border-border bg-background px-4 py-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm font-sans leading-relaxed">{pin.text}</p>
                              <p className="mt-2 text-[11px] font-sans opacity-40">
                                {new Date(pin.created_at).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleDeletePin(pin.id)}
                              className="rounded-full border border-border bg-background p-2 opacity-45 transition-colors hover:text-red-500 hover:opacity-100"
                              title="Delete pin"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </PageWrapper>
      </main>
    </div>
  );
}
