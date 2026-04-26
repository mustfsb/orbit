import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

interface PlannerRequestPayload {
    goal?: string;
    pdfData?: { inlineData: { data: string; mimeType: string } } | null;
    type: "initial" | "chat";
    history?: { role: "user" | "model"; content: string }[];
    message?: string;
    currentPlan?: unknown;
}

type GeminiPart = { text: string } | { inlineData: { data: string; mimeType: string } };



export async function POST(req: Request) {
    try {
        const { goal, pdfData, type, history, message, currentPlan } =
            (await req.json()) as PlannerRequestPayload;

        const usedApiKey = process.env.GEMINI_API_KEY;
        if (!usedApiKey) {
            return NextResponse.json({ error: "API Key not found. Please set GEMINI_API_KEY in .env.local." }, { status: 500 });
        }
        const genAI = new GoogleGenerativeAI(usedApiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            generationConfig: { responseMimeType: "application/json" }
        });

        const SYSTEM_INSTRUCTION = `You are an expert productivity planner. Create a structured weekly schedule based on the user's goals and provided documents.

You must ALWAYS format your response as a JSON object with exactly two keys:
- "text": A brief, encouraging summary of the plan or the changes made.
- "plan": An array of 7 days representing the full weekly schedule.

Each day should have a "day" name and a "tasks" array.
Each task should have a "name" and a "type" (one of: focus, rest, review, admin, creative).

Example JSON structure:
{
  "text": "Here's your optimized weekly plan.",
  "plan": [
    {
      "day": "Monday",
      "tasks": [
        { "name": "Deep Work: Core Logic", "type": "focus" },
        { "name": "Reflective Reading", "type": "review" }
      ]
    }
  ]
}

If the user asks for revisions, update the plan accordingly and return the FULL updated JSON plan.`;

        if (type === "initial") {
            const parts: GeminiPart[] = [{ text: `User Goal: ${goal}\n\n${SYSTEM_INSTRUCTION}` }];

            if (pdfData && pdfData.inlineData) {
                parts.push({ inlineData: pdfData.inlineData });
            }

            const result = await model.generateContent({
                contents: [{ role: "user", parts }]
            });
            const response = await result.response;
            const text = response.text();
            try {
                const jsonResponse = JSON.parse(text);
                if (typeof jsonResponse.text !== 'string' || !Array.isArray(jsonResponse.plan)) {
                    console.error("AI returned unexpected JSON shape:", jsonResponse);
                    return NextResponse.json({ error: "AI returned unexpected response format. Please try again." }, { status: 500 });
                }
                return NextResponse.json({ text: jsonResponse.text, plan: jsonResponse.plan });
            } catch (error) {
                console.error("JSON Parse Error:", text, error);
                return NextResponse.json({ error: "AI returned invalid JSON. Please try again." }, { status: 500 });
            }
        } else {
            const historyWithPdf = (history || []).map((historyItem, index: number) => {
                const parts: GeminiPart[] = [{ text: historyItem.content }];
                // Ensure the first user message includes the PDF data if available
                if (index === 0 && historyItem.role === 'user' && pdfData && pdfData.inlineData) {
                    parts.push({ inlineData: pdfData.inlineData });
                }
                return {
                    role: historyItem.role,
                    parts,
                };
            });

            const chat = model.startChat({
                history: historyWithPdf,
            });

            const prompt = `Current Plan: ${JSON.stringify(currentPlan)}\n\nUser Revision Request: ${message}\n\n${SYSTEM_INSTRUCTION}`;
            const result = await chat.sendMessage(prompt);
            const response = await result.response;
            const text = response.text();

            try {
                const jsonResponse = JSON.parse(text);
                if (typeof jsonResponse.text !== 'string' || !Array.isArray(jsonResponse.plan)) {
                    console.error("AI returned unexpected JSON shape:", jsonResponse);
                    return NextResponse.json({ error: "AI returned unexpected response format. Please try again." }, { status: 500 });
                }
                return NextResponse.json({ text: jsonResponse.text, plan: jsonResponse.plan });
            } catch (error) {
                console.error("JSON Parse Error:", text, error);
                return NextResponse.json({ error: "AI returned invalid JSON. Please try again." }, { status: 500 });
            }
        }
    } catch (error: unknown) {
        console.error("Gemini API Route Error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        const status = errorMessage.includes("429") ? 429 : 500;
        return NextResponse.json({ error: errorMessage || "Failed to process AI request." }, { status });
    }
}
