export interface PlanTask {
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

export async function generateInitialPlan(
  goal: string,
  pdfData?: { inlineData: { data: string; mimeType: string } } | null,
  apiKey?: string
): Promise<{ text: string; plan: WeeklyPlan }> {
  try {
    const response = await fetch("/api/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal, pdfData, apiKey, type: "initial" }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to generate plan.");
    }

    return {
      text: data.text,
      plan: data.plan,
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
  apiKey?: string,
  pdfData?: { inlineData: { data: string; mimeType: string } } | null
): Promise<{ text: string; updatedPlan?: WeeklyPlan }> {
  try {
    const response = await fetch("/api/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history, currentPlan, apiKey, pdfData, type: "chat" }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to process revision.");
    }

    const text = data.text;

    // Attempt to extract JSON plan if present
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/\{[\s\S]*"plan"[\s\S]*\}/);
    let updatedPlan: WeeklyPlan | undefined;

    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        updatedPlan = parsed.plan;
      } catch (e) {
        console.warn("Failed to parse updated plan from AI response", e);
      }
    }

    return {
      text: text.replace(/```json\n([\s\S]*?)\n```/, "").trim(),
      updatedPlan
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
