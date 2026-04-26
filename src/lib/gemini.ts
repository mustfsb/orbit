export interface PdfData {
  inlineData: {
    data: string;
    mimeType: string;
  };
}

export interface PlanTask {
  id?: string;
  name: string;
  type: "focus" | "rest" | "review" | "admin" | "creative";
  description?: string;
}

export interface DayPlan {
  day: string;
  tasks: PlanTask[];
}

export type WeeklyPlan = DayPlan[];

export interface ChatMessage {
  role: "user" | "model";
  content: string;
  plan?: WeeklyPlan; // Store the plan associated with this response if updated
}

function createTaskId(day: string, index: number): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${day}-${index}-${Math.random().toString(36).slice(2, 10)}`;
}

export function normalizeWeeklyPlan(plan: WeeklyPlan): WeeklyPlan {
  if (!Array.isArray(plan)) {
    console.error("normalizeWeeklyPlan expected an array but received:", plan);
    return [];
  }
  return plan.map((dayPlan) => ({
    ...dayPlan,
    tasks: Array.isArray(dayPlan.tasks)
      ? dayPlan.tasks.map((task, index) => ({
          ...task,
          id: task.id ?? createTaskId(dayPlan.day, index),
        }))
      : [],
  }));
}

export async function generateInitialPlan(
  goal: string,
  pdfData?: PdfData | null,
): Promise<{ text: string; plan: WeeklyPlan }> {
  try {
    const response = await fetch("/api/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal, pdfData, type: "initial" }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to generate plan.");
    }

    return {
      text: data.text,
      plan: normalizeWeeklyPlan(data.plan),
    };
  } catch (error: unknown) {
    console.error("Gemini Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    if (errorMessage.includes("429")) {
      throw new Error("API quota exceeded. Please wait a minute or use a different API key.");
    }
    throw new Error(errorMessage || "Failed to generate plan. Please check your connection or API key.");
  }
}

export async function chatWithAI(
  message: string,
  history: ChatMessage[],
  currentPlan: WeeklyPlan,
  pdfData?: PdfData | null
): Promise<{ text: string; updatedPlan?: WeeklyPlan }> {
  try {
    const response = await fetch("/api/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history, currentPlan, pdfData, type: "chat" }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to process revision.");
    }

    return {
      text: data.text,
      updatedPlan: data.plan ? normalizeWeeklyPlan(data.plan) : undefined,
    };
  } catch (error: unknown) {
    console.error("Gemini Chat Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    if (errorMessage.includes("429")) {
      throw new Error("API quota exceeded. Please wait a minute.");
    }
    throw new Error(errorMessage || "Failed to process revision.");
  }
}
