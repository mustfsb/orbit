import { getLocalDateKey } from "@/lib/focus-insights";

export type JournalMood = "calm" | "focused" | "energized" | "reflective" | "stretched";

export interface JournalEntry {
  id: string;
  user_id: string;
  entry_date: string;
  accomplished: string;
  tomorrow: string;
  rating: number;
  mood: JournalMood | null;
  created_at: string;
  updated_at: string;
}

export interface JournalEntryInput {
  entry_date: string;
  accomplished: string;
  tomorrow: string;
  rating: number;
  mood: JournalMood | null;
}

export interface LegacyJournalEntry {
  entry_date: string;
  accomplished: string;
  tomorrow: string;
  rating: number;
  mood: JournalMood | null;
}

export const JOURNAL_MOOD_OPTIONS: { value: JournalMood; label: string }[] = [
  { value: "calm", label: "Calm" },
  { value: "focused", label: "Focused" },
  { value: "energized", label: "Energized" },
  { value: "reflective", label: "Reflective" },
  { value: "stretched", label: "Stretched" },
];

export function getJournalStorageKey(input: Date | string): string {
  const dateKey = typeof input === "string" ? input : getLocalDateKey(input);
  return `orbit-journal-${dateKey}`;
}

export function createEmptyJournalDraft(entryDate: string): JournalEntryInput {
  return {
    entry_date: entryDate,
    accomplished: "",
    tomorrow: "",
    rating: 0,
    mood: null,
  };
}

export function isMeaningfulJournalEntry(entry: JournalEntryInput | LegacyJournalEntry): boolean {
  return Boolean(entry.accomplished.trim() || entry.tomorrow.trim() || entry.rating > 0 || entry.mood);
}

export function readLegacyJournalEntries(): LegacyJournalEntry[] {
  if (typeof window === "undefined") {
    return [];
  }

  const legacyEntries: LegacyJournalEntry[] = [];

  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (!key || !key.startsWith("orbit-journal-")) {
      continue;
    }

    const entryDate = key.replace("orbit-journal-", "");
    const rawValue = window.localStorage.getItem(key);
    if (!rawValue) {
      continue;
    }

    try {
      const parsedValue = JSON.parse(rawValue) as Partial<LegacyJournalEntry>;
      const normalizedEntry: LegacyJournalEntry = {
        entry_date: entryDate,
        accomplished: parsedValue.accomplished?.trim() ?? "",
        tomorrow: parsedValue.tomorrow?.trim() ?? "",
        rating: typeof parsedValue.rating === "number" ? parsedValue.rating : 0,
        mood: parsedValue.mood ?? null,
      };

      if (isMeaningfulJournalEntry(normalizedEntry)) {
        legacyEntries.push(normalizedEntry);
      }
    } catch {
      continue;
    }
  }

  return legacyEntries.sort((left, right) => right.entry_date.localeCompare(left.entry_date));
}
