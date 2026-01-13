"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PomodoroTimer } from "@/components/pomodoro-timer";
import { TodoList } from "@/components/todo-list";
import { PageWrapper } from "@/components/page-wrapper";
import { useSettings } from "@/context/settings-context";
import { TaskMix } from "@/components/dashboard/task-mix";
import { WelcomeHeader } from "@/components/dashboard/welcome-header";

import { DistractionBuffer } from "@/components/distraction-buffer";

export default function DashboardPage() {
  const { settings } = useSettings();
  const router = useRouter();

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
      <DistractionBuffer />
      <WelcomeHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Pomodoro Timer (The Focus Zone) */}
        <div className="lg:col-span-5 space-y-8">
          <PomodoroTimer />
          <TaskMix />

          <div className="p-8 rounded-2xl border border-border italic font-serif text-lg text-center opacity-60 bg-foreground/[0.01]">
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
