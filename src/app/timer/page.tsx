"use client"

import { PomodoroTimer } from "@/components/pomodoro-timer";
import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";

export default function TimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-24">
        <PageWrapper>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-sans tracking-tight">Focus Chamber</h1>
              <p className="opacity-60 font-sans italic max-w-md mx-auto">
                Step away from the noise. This space is dedicated to your deepest work.
              </p>
            </div>
            <PomodoroTimer />
            <div className="pt-12 text-center opacity-40">
              <p className="text-sm font-sans max-w-sm mx-auto">
                &quot;Work is a prayer, and focus is the sanctuary where we offer it.&quot;
              </p>
            </div>
          </div>
        </PageWrapper>
      </main>
    </div>
  );
}
