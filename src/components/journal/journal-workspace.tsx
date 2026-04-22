"use client"

import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { getLocalDateKey } from "@/lib/focus-insights";
import {
  createEmptyJournalDraft,
  isMeaningfulJournalEntry,
  readLegacyJournalEntries,
  type JournalEntry,
  type JournalEntryInput,
} from "@/lib/journal";
import { JournalEntryForm } from "@/components/journal/journal-entry-form";
import { JournalSidebar } from "@/components/journal/journal-sidebar";

function sortEntries(entries: JournalEntry[]): JournalEntry[] {
  return [...entries].sort((left, right) => right.entry_date.localeCompare(left.entry_date));
}

function getMigrationKey(userId: string): string {
  return `orbit-journal-migrated-${userId}`;
}

export function JournalWorkspace() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState(getLocalDateKey(new Date()));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [expandedDates, setExpandedDates] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchEntries = useCallback(async (currentUserId: string): Promise<void> => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("journal_entries")
      .select("*")
      .eq("user_id", currentUserId)
      .order("entry_date", { ascending: false });

    if (error) {
      console.error("Error fetching journal entries:", error);
      setEntries([]);
      return;
    }

    const nextEntries = sortEntries((data ?? []) as JournalEntry[]);
    setEntries(nextEntries);
    setExpandedDates((previous) => {
      if (previous.length > 0) {
        return previous;
      }

      return nextEntries.slice(0, 2).map((entry) => entry.entry_date);
    });
  }, []);

  const migrateLegacyEntries = useCallback(async (currentUserId: string): Promise<void> => {
    if (typeof window === "undefined") {
      return;
    }

    const migrationKey = getMigrationKey(currentUserId);
    if (window.localStorage.getItem(migrationKey) === "true") {
      return;
    }

    const legacyEntries = readLegacyJournalEntries();
    if (legacyEntries.length === 0) {
      window.localStorage.setItem(migrationKey, "true");
      return;
    }

    const supabase = createClient();
    const payload = legacyEntries.map((entry) => ({
      user_id: currentUserId,
      entry_date: entry.entry_date,
      accomplished: entry.accomplished,
      tomorrow: entry.tomorrow,
      rating: entry.rating,
      mood: entry.mood,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await supabase.from("journal_entries").upsert(payload, {
      onConflict: "user_id,entry_date",
    });

    if (error) {
      console.error("Error importing local journal entries:", error);
      return;
    }

    window.localStorage.setItem(migrationKey, "true");
  }, []);

  useEffect(() => {
    const initializeJournal = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      setUserId(user.id);
      await migrateLegacyEntries(user.id);
      await fetchEntries(user.id);
      setLoading(false);
    };

    initializeJournal().catch((error: unknown) => {
      console.error("Failed to initialize journal workspace:", error);
      setLoading(false);
    });
  }, [fetchEntries, migrateLegacyEntries]);

  const selectedEntry = useMemo<JournalEntryInput>(() => {
    const match = entries.find((entry) => entry.entry_date === selectedDate);
    if (!match) {
      return createEmptyJournalDraft(selectedDate);
    }

    return {
      entry_date: match.entry_date,
      accomplished: match.accomplished,
      tomorrow: match.tomorrow,
      rating: match.rating,
      mood: match.mood,
    };
  }, [entries, selectedDate]);

  const persistedSelectedEntry = entries.find((entry) => entry.entry_date === selectedDate) ?? null;

  const filteredEntries = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) {
      return entries;
    }

    return entries.filter((entry) =>
      [
        entry.entry_date,
        entry.accomplished,
        entry.tomorrow,
        entry.mood ?? "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [entries, searchQuery]);

  const saveEntry = useCallback(
    async (nextEntry: JournalEntryInput): Promise<void> => {
      if (!userId || !isMeaningfulJournalEntry(nextEntry)) {
        setSelectedDate(nextEntry.entry_date);
        return;
      }

      setSaving(true);
      const supabase = createClient();
      const { data, error } = await supabase
        .from("journal_entries")
        .upsert(
          {
            user_id: userId,
            entry_date: nextEntry.entry_date,
            accomplished: nextEntry.accomplished,
            tomorrow: nextEntry.tomorrow,
            rating: nextEntry.rating,
            mood: nextEntry.mood,
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "user_id,entry_date",
          }
        )
        .select("*")
        .single();

      if (error) {
        console.error("Error saving journal entry:", error);
        setSaving(false);
        return;
      }

      setEntries((previous) => {
        const withoutCurrentDate = previous.filter((entry) => entry.entry_date !== nextEntry.entry_date);
        return sortEntries([data as JournalEntry, ...withoutCurrentDate]);
      });
      setExpandedDates((previous) =>
        previous.includes(nextEntry.entry_date) ? previous : [nextEntry.entry_date, ...previous]
      );
      setSaving(false);
    },
    [userId]
  );

  const deleteEntry = useCallback(async (): Promise<void> => {
    if (!persistedSelectedEntry) {
      return;
    }

    const confirmed = window.confirm("Delete this journal entry?");
    if (!confirmed) {
      return;
    }

    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase.from("journal_entries").delete().eq("id", persistedSelectedEntry.id);

    if (error) {
      console.error("Error deleting journal entry:", error);
      setSaving(false);
      return;
    }

    setEntries((previous) => previous.filter((entry) => entry.id !== persistedSelectedEntry.id));
    setExpandedDates((previous) =>
      previous.filter((entryDate) => entryDate !== persistedSelectedEntry.entry_date)
    );
    setSelectedDate(getLocalDateKey(new Date()));
    setSaving(false);
  }, [persistedSelectedEntry]);

  const toggleExpanded = (entryDate: string) => {
    setExpandedDates((previous) =>
      previous.includes(entryDate)
        ? previous.filter((currentDate) => currentDate !== entryDate)
        : [entryDate, ...previous]
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin opacity-40" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.45fr)_320px]">
      <div className="rounded-[1.5rem] border border-border bg-foreground/[0.01] p-6 md:p-8">
        <JournalEntryForm
          entryDate={selectedDate}
          entry={selectedEntry}
          isPersisted={Boolean(persistedSelectedEntry)}
          isSaving={saving}
          onSave={saveEntry}
          onDelete={deleteEntry}
        />
      </div>

      <div className="rounded-[1.5rem] border border-border bg-foreground/[0.01] p-5 md:p-6 xl:sticky xl:top-24 xl:self-start">
        <JournalSidebar
          entries={filteredEntries}
          selectedDate={selectedDate}
          expandedDates={expandedDates}
          searchQuery={searchQuery}
          onSelectDate={setSelectedDate}
          onSearchChange={setSearchQuery}
          onToggleExpand={toggleExpanded}
        />
      </div>
    </div>
  );
}
