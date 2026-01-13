"use client"

import { useEffect, useState } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";

interface AnalyticsData {
  totalFocusMinutes: number;
  completedTasks: number;
  totalSessions: number;
  avgSessionLength: number;
  weeklyData: { day: string; minutes: number }[];
  peakHour: string;
  peakHourDesc: string;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      // Fetch completed todos
      const { data: todos } = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', user.id);

      // Fetch pomodoro sessions
      const { data: sessions } = await supabase
        .from('pomodoro_sessions')
        .select('*')
        .eq('user_id', user.id);

      const completedTasks = todos?.filter(t => t.completed).length || 0;
      const totalSessions = sessions?.length || 0;

      // Include all sessions (completed + interrupted) for focus time
      // Include all sessions (completed + interrupted) for focus time
      const allSessions = sessions || [];
      // Duration is in seconds, convert to minutes for display
      const totalFocusMinutes = Math.round(allSessions.reduce((acc, s) => acc + (s.duration || 0), 0) / 60);
      const completedSessionsCount = allSessions.filter(s => s.status === 'completed').length;

      const avgSessionLength = totalSessions > 0 ? Math.round(totalFocusMinutes / totalSessions) : 0;

      // Calculate weekly data (last 7 days)
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const today = new Date();
      const weeklyData = [];

      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dayName = days[date.getDay()];

        const dayStart = new Date(date.setHours(0, 0, 0, 0));
        const dayEnd = new Date(date.setHours(23, 59, 59, 999));

        const daySeconds = allSessions
          .filter(s => {
            const sessionDate = new Date(s.started_at);
            return sessionDate >= dayStart && sessionDate <= dayEnd;
          })
          .reduce((acc, s) => acc + (s.duration || 0), 0);

        // Convert to minutes
        weeklyData.push({ day: dayName, minutes: Math.round(daySeconds / 60) });
      }

      // Calculate Bio-Rhythm (Peak Hour)
      const hourCounts = new Array(24).fill(0);
      allSessions.forEach(s => {
        if (s.started_at) {
          const date = new Date(s.started_at);
          const hour = date.getHours();
          hourCounts[hour] += (s.duration || 0);
        }
      });

      let maxMinutes = -1;
      let peakHourIdx = 9; // Default 9 AM if no data

      hourCounts.forEach((count, idx) => {
        if (count > maxMinutes) {
          maxMinutes = count;
          peakHourIdx = idx;
        }
      });

      // If no data (maxMinutes 0 or -1), handle gracefully
      if (maxMinutes <= 0) {
        peakHourIdx = 9; // Default
      }

      const ampm = peakHourIdx >= 12 ? 'PM' : 'AM';
      const displayHour = peakHourIdx % 12 || 12;
      const peakHour = `${displayHour} ${ampm}`;

      // Determine description based on time of day
      let type = "Morning Lark";
      if (peakHourIdx >= 12 && peakHourIdx < 17) type = "Afternoon Flow";
      if (peakHourIdx >= 17 && peakHourIdx < 22) type = "Evening Deep Work";
      if (peakHourIdx >= 22 || peakHourIdx < 5) type = "Night Owl";

      const peakHourDesc = totalSessions > 0 ? type : "Not enough data yet";

      setData({
        totalFocusMinutes,
        completedTasks,
        totalSessions,
        avgSessionLength,
        weeklyData,
        peakHour,
        peakHourDesc
      });
      setLoading(false);
    }

    fetchAnalytics();
  }, []);

  const formatHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const maxMinutes = data?.weeklyData ? Math.max(...data.weeklyData.map(d => d.minutes), 1) : 1;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-24">
        <PageWrapper>
          <div className="space-y-12">
            <div className="space-y-2">
              <h1 className="text-4xl font-serif italic tracking-tight">Intelligence <span className="text-accent">Analytics</span></h1>
              <p className="opacity-60 font-sans italic">A quantified view of your cultivation efforts.</p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 className="w-8 h-8 animate-spin opacity-40" />
              </div>
            ) : !data ? (
              <div className="text-center py-24 opacity-60">
                <p className="font-sans">Sign in to view your analytics.</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-4 gap-8 items-stretch">
                  {/* Peak Hour Card (New) */}
                  <div className="p-8 rounded-2xl border border-accent/20 bg-accent/[0.03] flex flex-col justify-between h-full relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
                    <div>
                      <p className="text-xs font-sans uppercase tracking-widest text-accent mb-2 font-bold">Peak Bio-Rhythm</p>
                      <h2 className="text-4xl lg:text-5xl font-serif italic tracking-tighter">{data.peakHour}</h2>
                    </div>
                    <p className="text-xs opacity-50 mt-4 font-sans tracking-wide uppercase">{data.peakHourDesc}</p>
                  </div>

                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between h-full">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Total Focus Time</p>
                    <h2 className="text-4xl lg:text-5xl font-serif italic tracking-tighter">{formatHours(data.totalFocusMinutes)}</h2>
                  </div>
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between h-full">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Tasks Completed</p>
                    <h2 className="text-4xl lg:text-5xl font-serif italic tracking-tighter">{data.completedTasks}</h2>
                  </div>
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] flex flex-col justify-between h-full">
                    <p className="text-xs font-sans uppercase tracking-widest opacity-40 mb-2 font-medium">Focus Sessions</p>
                    <h2 className="text-4xl lg:text-5xl font-serif italic tracking-tighter">{data.totalSessions}</h2>
                  </div>
                </div>

                <div className="p-10 rounded-2xl border border-border bg-foreground/[0.01] space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif italic">Weekly Activity</h3>
                    <p className="text-xs opacity-40 font-sans">Last 7 days</p>
                  </div>
                  <div className="flex items-end justify-between h-64 px-4 gap-2 md:gap-4">
                    {data.weeklyData.map((d) => (
                      <div key={d.day} className="flex flex-col items-center justify-end gap-4 flex-1 h-full">
                        <div
                          className="w-full bg-accent/20 border-x border-t border-accent/30 rounded-t-sm transition-all duration-700 hover:bg-accent/40 relative group"
                          style={{ height: `${d.minutes > 0 ? Math.max((d.minutes / maxMinutes) * 100, 2) : 1}%` }}
                        >
                          {/* Tooltip for exact validation */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-border rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {d.minutes}m
                          </div>
                        </div>
                        <div className="text-center">
                          <span className="text-xs font-sans opacity-40 uppercase tracking-widest font-medium block">{d.day}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] space-y-4 h-full">
                    <h3 className="text-lg font-serif italic opacity-60">Average Session</h3>
                    <p className="text-3xl font-serif italic">{data.avgSessionLength}m</p>
                    <p className="text-sm font-sans opacity-50 leading-relaxed">
                      Your average focus session length based on completed pomodoros.
                    </p>
                  </div>
                  <div className="p-8 rounded-2xl border border-border bg-foreground/[0.01] space-y-4 h-full">
                    <h3 className="text-lg font-serif italic opacity-60">Completion Rate</h3>
                    <p className="text-3xl font-serif italic">
                      {data.totalSessions > 0 ? Math.round((data.completedTasks / data.totalSessions) * 100) : 0}%
                    </p>
                    <p className="text-sm font-sans opacity-50 leading-relaxed">
                      Ratio of tasks completed to focus sessions started.
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
