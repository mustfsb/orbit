import type { PlanTask, WeeklyPlan } from "@/lib/gemini";

export const LIBRARY_STORAGE_KEY = "orbit-library-pins";

export interface LibraryPin {
  id: string;
  text: string;
  created_at: string;
}

export interface LibraryPlanSnippet {
  id: string;
  day: string;
  title: string;
  description?: string;
  type: PlanTask["type"];
}

function createId(seed: string): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${seed}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createLibraryPin(text: string): LibraryPin {
  return {
    id: createId("pin"),
    text,
    created_at: new Date().toISOString(),
  };
}

export function readLibraryPins(): LibraryPin[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawPins = window.localStorage.getItem(LIBRARY_STORAGE_KEY);
    if (!rawPins) {
      return [];
    }

    const parsedPins = JSON.parse(rawPins) as LibraryPin[];
    return parsedPins
      .filter((pin) => typeof pin?.text === "string" && pin.text.trim().length > 0)
      .sort((left, right) => right.created_at.localeCompare(left.created_at));
  } catch {
    return [];
  }
}

export function writeLibraryPins(pins: LibraryPin[]): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(pins));
}

export function readUpcomingPlanSnippets(limit = 5): LibraryPlanSnippet[] {
  if (typeof window === "undefined") {
    return [];
  }

  const rawPlan = window.localStorage.getItem("orbit-current-plan");
  if (!rawPlan) {
    return [];
  }

  try {
    const plan = JSON.parse(rawPlan) as WeeklyPlan;
    const completions = JSON.parse(
      window.localStorage.getItem("orbit-plan-completions") ?? "{}"
    ) as Record<string, boolean>;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOffset = new Date().getDay();
    const orderedDays = [...days.slice(dayOffset), ...days.slice(0, dayOffset)];
    const snippets: LibraryPlanSnippet[] = [];

    orderedDays.forEach((dayName) => {
      if (snippets.length >= limit) {
        return;
      }

      const dayPlan = plan.find((entry) => entry.day === dayName);
      if (!dayPlan) {
        return;
      }

      dayPlan.tasks.forEach((task, index) => {
        if (snippets.length >= limit) {
          return;
        }

        const taskKey = task.id ?? `${dayPlan.day}-${index}`;
        const fallbackKey = `${dayPlan.day}-${index}`;
        const isComplete = Boolean(completions[taskKey] ?? completions[fallbackKey]);

        if (isComplete) {
          return;
        }

        snippets.push({
          id: taskKey,
          day: dayPlan.day,
          title: task.name,
          description: task.description,
          type: task.type,
        });
      });
    });

    return snippets;
  } catch {
    return [];
  }
}
