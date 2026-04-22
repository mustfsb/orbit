"use client"

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Upload,
  X,
  History,
  RotateCcw
} from "lucide-react";
import { PlannerGrid } from "@/components/planner/planner-grid";
import { PlannerChat, ThinkingLoader } from "@/components/planner/planner-chat";
import {
  WeeklyPlan,
  ChatMessage,
  generateInitialPlan,
  chatWithAI,
  normalizeWeeklyPlan,
  PlanTask,
} from "@/lib/gemini";
import { useSettings } from "@/context/settings-context";

export default function PlannerPage() {
  const [goal, setGoal] = useState("");
  // Storing PDF as base64 string
  const [pdfData, setPdfData] = useState<{ inlineData: { data: string; mimeType: string } } | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string | null>(null);
  const [isProcessingPdf, setIsProcessingPdf] = useState(false);

  const [currentPlan, setCurrentPlan] = useState<WeeklyPlan | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [completions, setCompletions] = useState<Record<string, boolean>>({});
  const { settings } = useSettings();

  // Persistence: Hydration
  useEffect(() => {
    const savedPlan = localStorage.getItem("orbit-current-plan");
    const savedHistory = localStorage.getItem("orbit-chat-history");
    const savedCompletions = localStorage.getItem("orbit-plan-completions");

    let normalizedPlan: WeeklyPlan | null = null;

    if (savedPlan) {
      normalizedPlan = normalizeWeeklyPlan(JSON.parse(savedPlan) as WeeklyPlan);
      setCurrentPlan(normalizedPlan);
    }
    if (savedHistory) setChatHistory(JSON.parse(savedHistory));

    if (savedCompletions) {
      try {
        const parsedCompletions = JSON.parse(savedCompletions) as Record<string, boolean>;
        if (normalizedPlan) {
          const migratedCompletions = { ...parsedCompletions };

          normalizedPlan.forEach((dayPlan) => {
            dayPlan.tasks.forEach((task, index) => {
              const legacyKey = `${dayPlan.day}-${index}`;
              if (parsedCompletions[legacyKey] && task.id) {
                migratedCompletions[task.id] = true;
              }
            });
          });

          setCompletions(migratedCompletions);
          localStorage.setItem("orbit-plan-completions", JSON.stringify(migratedCompletions));
        } else {
          setCompletions(parsedCompletions);
        }
      } catch {
        // ignore
      }
    }

    setIsHydrated(true);
  }, []);

  // Persistence: Saving
  useEffect(() => {
    if (isHydrated) {
      if (currentPlan) localStorage.setItem("orbit-current-plan", JSON.stringify(currentPlan));
      localStorage.setItem("orbit-chat-history", JSON.stringify(chatHistory));
    }
  }, [currentPlan, chatHistory, isHydrated]);

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== "application/pdf") return;

    setPdfFileName(file.name);
    setIsProcessingPdf(true);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove data URL prefix (e.g., "data:application/pdf;base64,")
        const base64Data = base64String.split(",")[1];

        setPdfData({
          inlineData: {
            data: base64Data,
            mimeType: file.type
          }
        });
        setIsProcessingPdf(false);
      };

      reader.onerror = () => {
        console.error("Error reading file");
        alert("Failed to read file.");
        setIsProcessingPdf(false);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error("PDF upload error:", error);
      alert("Failed to process PDF.");
      setIsProcessingPdf(false);
    }
  };

  const clearPdf = () => {
    setPdfFileName(null);
    setPdfData(null);
  };

  const handleGenerateInitial = async () => {
    if (!goal.trim()) return;

    setIsLoading(true);
    try {
      // Pass pdfData (if exists) instead of pdfText
      const { text, plan } = await generateInitialPlan(goal, pdfData, settings.geminiApiKey);
      setCurrentPlan(plan);
      setChatHistory([
        { role: "user", content: `Goal: ${goal}` },
        { role: "model", content: text }
      ]);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An error occurred";
      alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChat = async (message: string) => {
    if (!currentPlan) return;

    const newUserMessage: ChatMessage = { role: "user", content: message };
    setChatHistory(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const { text, updatedPlan } = await chatWithAI(
        message,
        [...chatHistory, newUserMessage],
        currentPlan,
        settings.geminiApiKey,
        pdfData
      );

      const assistantMessage: ChatMessage = { role: "model", content: text };
      setChatHistory(prev => [...prev, assistantMessage]);

      if (updatedPlan) {
        setCurrentPlan(updatedPlan);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An error occurred";
      alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCompletion = (key: string) => {
    const updated = { ...completions, [key]: !completions[key] };
    setCompletions(updated);
    localStorage.setItem("orbit-plan-completions", JSON.stringify(updated));
  };

  const handleReorderDay = (dayIndex: number, reorderedTasks: PlanTask[]) => {
    setCurrentPlan((previousPlan) => {
      if (!previousPlan) {
        return previousPlan;
      }

      return previousPlan.map((dayPlan, index) =>
        index === dayIndex ? { ...dayPlan, tasks: reorderedTasks } : dayPlan
      );
    });
  };

  const resetPlanner = () => {
    if (confirm("Reset the current plan and history?")) {
      setCurrentPlan(null);
      setChatHistory([]);
      setGoal("");
      setPdfFileName(null);
      setPdfData(null);
      setCompletions({});
      localStorage.removeItem("orbit-current-plan");
      localStorage.removeItem("orbit-chat-history");
      localStorage.removeItem("orbit-plan-completions");
    }
  };

  if (!isHydrated) return null;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Navbar />

      <main className="flex-grow flex flex-col">
        {!currentPlan ? (
          <section className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 md:py-24 space-y-16">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-accent-foreground"
              >
                <Sparkles className="w-3 h-3" />
                Real-Time Architect Integration
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-sans tracking-tight leading-tight">
                Architect your intentions.
              </h1>
              <p className="opacity-40 font-sans max-w-lg mx-auto leading-relaxed">
                Provide your goals and documents. Orbit will synthesize a structured path for your spiritual and intellectual growth.
              </p>
            </div>

            <div className="space-y-8">
              <div className="relative group">
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="What would you like to cultivate this week?"
                  className="w-full h-48 rounded-[3rem] border border-border bg-background p-10 text-xl leading-relaxed text-foreground shadow-sm transition-colors placeholder:opacity-20 focus:border-border focus:outline-none resize-none font-sans"
                />
                <div className="absolute bottom-8 right-10 opacity-10 group-focus-within:opacity-30 transition-opacity">
                  <FileText className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handlePdfUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="pdf-upload"
                  />
                  <label
                    htmlFor="pdf-upload"
                    className={`flex cursor-pointer items-center gap-3 rounded-full border border-border px-8 py-4 text-sm font-sans italic transition-colors hover:bg-foreground/[0.03] ${pdfFileName ? "bg-accent text-accent-foreground" : "bg-foreground/[0.04]"}`}
                  >
                    {isProcessingPdf ? (
                      <span className="animate-pulse">Preparing PDF...</span>
                    ) : pdfFileName ? (
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-accent" />
                        {pdfFileName}
                        <button onClick={(e) => { e.preventDefault(); clearPdf(); }}>
                          <X className="w-3 h-3 opacity-40 hover:opacity-100" />
                        </button>
                      </span>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 opacity-40" />
                        Import Syllabus or PDF
                      </>
                    )}
                  </label>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGenerateInitial}
                  disabled={isLoading || !goal.trim()}
                  className="flex h-16 min-w-[200px] items-center justify-center gap-3 rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-30"
                >
                  {isLoading ? <ThinkingLoader /> : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Synthesize Plan</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </section>
        ) : (
          <div className="flex-grow flex flex-col gap-6 lg:flex-row lg:h-[calc(100vh-4rem)]">
            {/* Left: Schedule Grid */}
            <div className="flex-grow overflow-y-auto p-6 md:p-10 lg:w-[68%] scrollbar-none">
              <PageWrapper>
                <div className="max-w-6xl mx-auto space-y-12">
                  <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <History className="w-5 h-5 opacity-20" />
                        <h2 className="text-3xl font-sans tracking-tight">Weekly Architecture</h2>
                      </div>
                      <p className="text-sm font-sans leading-relaxed opacity-45">
                        Rearrange each day with drag handles. Completion state stays attached to the task itself.
                      </p>
                    </div>
                    <button
                      onClick={resetPlanner}
                      className="p-3 rounded-full hover:bg-foreground/5 transition-colors opacity-30 hover:opacity-100"
                      title="Reset Plan"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  <PlannerGrid
                    plan={currentPlan}
                    completions={completions}
                    onToggleCompletion={toggleCompletion}
                    onReorderDay={handleReorderDay}
                  />

                  {/* Subtle Footer for Grid */}
                  <div className="pt-12 opacity-20 text-[10px] uppercase tracking-[0.2em] font-sans text-center">
                    Evolving based on your intuition
                  </div>
                </div>
              </PageWrapper>
            </div>

            {/* Right: Chat Revisions */}
            <div className="w-full lg:w-[32%] flex flex-col h-[52vh] rounded-[2rem] border border-border bg-foreground/[0.015] lg:h-full">
              <div className="border-b border-border/70 p-6 opacity-50">
                <span className="text-[10px] uppercase tracking-widest font-sans font-bold">Architectural Margin</span>
                <p className="mt-3 text-sm font-sans leading-relaxed opacity-70">
                  Ask Orbit to tighten a day, rebalance the week, or rewrite the plan around new constraints.
                </p>
              </div>
              <div className="flex-grow overflow-hidden p-4 pt-2">
                <PlannerChat
                  history={chatHistory}
                  onSendMessage={handleChat}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
