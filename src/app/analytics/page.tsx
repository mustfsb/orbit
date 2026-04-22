"use client"

import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";
import { Loader2 } from "lucide-react";
import { ActivityHeatmap } from "@/components/analytics/activity-heatmap";
import { useSettings } from "@/context/settings-context";
import { useGoals } from "@/context/goals-context";
import { useTasks } from "@/context/task-context";
import { formatMinutes } from "@/lib/focus-insights";

export default function AnalyticsPage() {
  const { settings } = useSettings();
  const { focusInsights, loading: goalsLoading } = useGoals();
  const { tasks, loading: tasksLoading } = useTasks();

  const loading = goalsLoading || tasksLoading;
  const completedTasks = tasks.filter(t => t.completed).length;

  const maxMinutes = Math.max(...focusInsights.weeklyData.map(d => d.minutes), 1);

  const todayMinutes = focusInsights.todayMinutes;
  const goalPercent = Math.min((todayMinutes / settings.dailyFocusGoal) * 100, 100);
  const r = 36;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (goalPercent / 100) * circumference;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-24">
        <PageWrapper>
          <div className="space-y-12">
            <div className="space-y-2">
              <h1 className="text-4xl font-sans tracking-tight">Intelligence <span className="text-accent">Analytics</span></h1>
              <p className="opacity-60 font-sans italic">A quantified view of your cultivation efforts.</p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 className="w-8 h-8 animate-spin opacity-40" />
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-4 gap-8 items-stretch">
                  {/* Peak Hour Card */}
                  <div className="p-8 rounded-2xl border border-border bg-background flex flex-col justify-between h-full relative overflow-hidden">
                    <div>
                      <p className="text-xs font-sans uppercase tracking-widest text-accent mb-2 font-bold">Peak Bio-Rhythm</p>
                      <h2 className="text-4xl lg:text-5xl font-sans tracking-tighter">{focusInsights.peakHour}</h2>
                    </div>
                    <p className="text-xs opacity-50 mt-4 font-sans tracking-wide uppercase">{focusInsights.peakHourDesc}</p>
                  </div>

                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between h-full">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Total Focus Time</p>
                    <h2 className="text-4xl lg:text-5xl font-sans tracking-tighter">{formatMinutes(focusInsights.totalFocusMinutes)}</h2>
                  </div>
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between h-full">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Tasks Completed</p>
                    <h2 className="text-4xl lg:text-5xl font-sans tracking-tighter">{completedTasks}</h2>
                  </div>
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between h-full">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Focus Sessions</p>
                    <h2 className="text-4xl lg:text-5xl font-sans tracking-tighter">{focusInsights.totalSessions}</h2>
                  </div>
                </div>

                {/* Streak + Goal Ring Row */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Current Streak</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-sans tracking-tighter">{focusInsights.currentStreak}</span>
                      <span className="text-sm opacity-40 font-sans">days</span>
                    </div>
                    <p className="text-xs opacity-30 font-sans mt-2">Longest: {focusInsights.longestStreak} days</p>
                  </div>

                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col items-center justify-center gap-4">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 font-medium self-start">Today&apos;s Goal</p>
                    <div className="relative flex items-center justify-center">
                      <svg width="96" height="96" viewBox="0 0 96 96">
                        <circle
                          cx="48"
                          cy="48"
                          r={r}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="opacity-10"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r={r}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          className="text-accent"
                          style={{
                            strokeDasharray: circumference,
                            strokeDashoffset,
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                            transition: "stroke-dashoffset 0.6s ease",
                          }}
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-lg font-sans tracking-tight">{Math.round(goalPercent)}%</span>
                      </div>
                    </div>
                    <p className="text-xs opacity-40 font-sans">{todayMinutes} / {settings.dailyFocusGoal} min</p>
                  </div>

                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Average Session</p>
                    <p className="text-4xl font-sans tracking-tighter">{formatMinutes(focusInsights.avgSessionLength)}</p>
                    <p className="text-xs opacity-30 font-sans mt-2 leading-relaxed">
                      Based on all focus sessions.
                    </p>
                  </div>
                </div>

                {/* Activity Heatmap */}
                <div className="p-10 rounded-2xl border border-border bg-foreground/[0.01] space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-sans">Activity Heatmap</h3>
                    <p className="text-xs opacity-40 font-sans">Last 16 weeks</p>
                  </div>
                  <ActivityHeatmap data={focusInsights.heatmapData} />
                </div>

                {/* Weekly Bar Chart */}
                <div className="p-10 rounded-2xl border border-border bg-foreground/[0.01] space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-sans">Weekly Activity</h3>
                    <p className="text-xs opacity-40 font-sans">Last 7 days</p>
                  </div>
                  <div className="flex items-end justify-between h-64 px-4 gap-2 md:gap-4 relative">
                    {focusInsights.weeklyData.map((d) => (
                      <div key={d.day} className="flex flex-col items-center justify-end gap-4 flex-1 h-full group">
                        <div className="w-full relative flex-grow flex items-end">
                          <div
                            className="w-full bg-accent opacity-30 rounded-md transition-all duration-700 hover:opacity-60 relative"
                            style={{ height: `${d.minutes > 0 ? Math.max((d.minutes / maxMinutes) * 100, 2) : 1}%` }}
                          >
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-background/90 backdrop-blur border border-border/50 rounded-lg shadow-xl text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-10 -translate-y-1 group-hover:translate-y-0">
                              {formatMinutes(d.minutes)}
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <span className="text-xs font-sans opacity-30 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-medium block">{d.day}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] space-y-4 h-full">
                    <h3 className="text-lg font-sans opacity-60">Completion Rate</h3>
                    <p className="text-3xl font-sans">
                      {focusInsights.totalSessions > 0 ? Math.round((completedTasks / focusInsights.totalSessions) * 100) : 0}%
                    </p>
                    <p className="text-sm font-sans opacity-50 leading-relaxed">
                      Ratio of tasks completed to focus sessions started.
                    </p>
                  </div>
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] space-y-4 h-full">
                    <h3 className="text-lg font-sans opacity-60">Longest Streak</h3>
                    <p className="text-3xl font-sans">{focusInsights.longestStreak} <span className="text-lg opacity-40">days</span></p>
                    <p className="text-sm font-sans opacity-50 leading-relaxed">
                      Your personal best consecutive focus days.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </PageWrapper>
      </main>
    </div>
  );
}
