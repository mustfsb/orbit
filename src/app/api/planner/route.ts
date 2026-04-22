import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

interface PlannerRequestPayload {
    goal?: string;
    pdfData?: { inlineData: { data: string; mimeType: string } } | null;
    apiKey?: string;
    type: "initial" | "chat";
    history?: { role: "user" | "model"; content: string }[];
    message?: string;
    currentPlan?: unknown;
}

type GeminiPart = { text: string } | { inlineData: { data: string; mimeType: string } };



export async function POST(req: Request) {
    try {
        const { goal, pdfData, apiKey, type, history, message, currentPlan } =
            (await req.json()) as PlannerRequestPayload;

        const usedApiKey = apiKey || process.env.GEMINI_API_KEY;
        if (!usedApiKey) {
            return NextResponse.json({ error: "API Key not found. Please set it in .env.local or settings." }, { status: 500 });
        }
        const genAI = new GoogleGenerativeAI(usedApiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            generationConfig: { responseMimeType: type === "initial" ? "application/json" : "text/plain" }
        });

        const SYSTEM_INSTRUCTION = `You are an expert productivity planner. Create a structured weekly schedule based on the user's goals and provided documents.
Format your response as a JSON object containing a "plan" key which is an array of 7 days.
Each day should have a "day" name and a "tasks" array.
Each task should have a "name" and a "type" (one of: focus, rest, review, admin, creative).

Example JSON structure:
{
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

If the user asks for revisions, update the plan accordingly and return the FULL updated JSON plan in your response inside a code block marked with \`\`\`json.
Always provide a brief, encouraging summary of the changes in the text part of your response.`;

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
                return NextResponse.json({ text: "Plan synthesized based on your goals.", plan: jsonResponse.plan });
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

            return NextResponse.json({ text });
        }
    } catch (error: unknown) {
        console.error("Gemini API Route Error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        const status = errorMessage.includes("429") ? 429 : 500;
        return NextResponse.json({ error: errorMessage || "Failed to process AI request." }, { status });
    }
}
