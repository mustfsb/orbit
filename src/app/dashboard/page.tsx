"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PomodoroTimer } from "@/components/pomodoro-timer";
import { TodoList } from "@/components/todo-list";
import { PageWrapper } from "@/components/page-wrapper";
import { useSettings } from "@/context/settings-context";
import { TaskMix } from "@/components/dashboard/task-mix";
import { WelcomeHeader } from "@/components/dashboard/welcome-header";
import { TodayStats } from "@/components/dashboard/today-stats";
import { Brain, BookOpen } from "lucide-react";

import { DistractionBuffer } from "@/components/distraction-buffer";

export default function DashboardPage() {
  const { settings } = useSettings();
  const router = useRouter();
  const [isDistractionBufferOpen, setIsDistractionBufferOpen] = useState(false);

  useEffect(() => {
    if (settings.viewMode === "focused") {
      router.push("/timer");
    }
  }, [settings.viewMode, router]);

  if (settings.viewMode === "focused") {
    return null; // Avoid flicker during redirect
  }

  return (
    <PageWrapper>
      <DistractionBuffer
        isOpen={isDistractionBufferOpen}
        setIsOpen={setIsDistractionBufferOpen}
      />
      <TodayStats />
      <WelcomeHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Pomodoro Timer (The Focus Zone) */}
        <div className="lg:col-span-5 space-y-8">
          <PomodoroTimer />

          {/* Mobile Only: Distraction Buffer Trigger */}
          <button
            onClick={() => setIsDistractionBufferOpen(true)}
            className="lg:hidden w-full rounded-2xl border border-border bg-foreground/[0.03] p-4 flex items-center justify-center gap-3 text-sm font-sans opacity-60 hover:opacity-100 transition-all active:scale-95"
          >
            <Brain className="w-4 h-4" />
            <span>Quick Distraction Note</span>
          </button>

          <TaskMix />

          <Link
            href="/journal"
            className="block rounded-2xl border border-border bg-foreground/[0.02] p-6 hover:bg-foreground/[0.035] transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 opacity-40 group-hover:opacity-70 transition-opacity" />
              <span className="font-sans font-medium text-sm">Daily Journal</span>
            </div>
            <p className="text-xs font-sans opacity-40 italic">Reflect on today&apos;s work</p>
          </Link>

          <div className="rounded-2xl border border-border bg-foreground/[0.02] p-8 font-sans text-lg text-center opacity-60">
            &quot;The soul of focus is the exclusion of the non-essential.&quot;
          </div>
        </div>

        {/* Right Column: To-Do List (The Task Zone) */}
        <div className="lg:col-span-7">
          <TodoList />
        </div>
      </div>
    </PageWrapper>
  );
}
