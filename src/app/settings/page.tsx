"use client"

import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";
import { useSettings } from "@/context/settings-context";
import { motion } from "framer-motion";
import { Monitor, Layout, Clock, Volume2, Bell, Sparkles } from "lucide-react";

export default function SettingsPage() {
  const { settings, updateSettings } = useSettings();

  const quotes = [
    "Focus is the art of saying no to everything else.",
    "Simplicity is the ultimate sophistication.",
    "The soul of focus is the exclusion of the non-essential.",
    "In the silence of focus, great things are born."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto w-full px-6 py-12 md:py-24">
        <PageWrapper>
          <div className="space-y-12">
            <div className="space-y-2">
              <h1 className="text-4xl font-serif italic tracking-tight">System Settings</h1>
              <p className="opacity-60 font-sans italic">Configure your environment for optimal cultivation.</p>
            </div>

            {/* View Mode */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 opacity-40">
                <Monitor className="w-4 h-4" />
                <h2 className="text-xs font-sans font-medium uppercase tracking-widest">Interface View Mode</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => updateSettings({ viewMode: "unified" })}
                  className={`p-6 rounded-2xl border text-left transition-all ${settings.viewMode === "unified"
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/30 bg-foreground/[0.01]"
                    }`}
                >
                  <Layout className={`w-6 h-6 mb-4 ${settings.viewMode === "unified" ? "text-accent" : "opacity-40"}`} />
                  <h3 className="text-lg font-serif italic mb-1">Unified Dashboard</h3>
                  <p className="text-xs opacity-50 font-sans leading-relaxed">Timer and Tasks on a single expansive page.</p>
                </button>
                <button
                  onClick={() => updateSettings({ viewMode: "focused" })}
                  className={`p-6 rounded-2xl border text-left transition-all ${settings.viewMode === "focused"
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/30 bg-foreground/[0.01]"
                    }`}
                >
                  <Monitor className={`w-6 h-6 mb-4 ${settings.viewMode === "focused" ? "text-accent" : "opacity-40"}`} />
                  <h3 className="text-lg font-serif italic mb-1">Focused Mode</h3>
                  <p className="text-xs opacity-50 font-sans leading-relaxed">Separate pages for deep work and organization.</p>
                </button>
              </div>
            </section>

            {/* Durations */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 opacity-40">
                <Clock className="w-4 h-4" />
                <h2 className="text-xs font-sans font-medium uppercase tracking-widest">Timer Intervals (Minutes)</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-sans opacity-60">Focus Duration</label>
                  <input
                    type="number"
                    value={settings.focusDuration}
                    onChange={(e) => updateSettings({ focusDuration: Number(e.target.value) })}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent font-serif italic text-2xl"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-sans opacity-60">Break Duration</label>
                  <input
                    type="number"
                    value={settings.breakDuration}
                    onChange={(e) => updateSettings({ breakDuration: Number(e.target.value) })}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent font-serif italic text-2xl"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-sans opacity-60">Long Break Interval</label>
                  <span className="text-sm font-serif italic opacity-40">Every {settings.longBreakInterval} sessions</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="4"
                  step="1"
                  value={settings.longBreakInterval}
                  onChange={(e) => updateSettings({ longBreakInterval: Number(e.target.value) })}
                  className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between px-1 text-[10px] opacity-30 font-sans uppercase font-bold tracking-widest">
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
            </section>

            {/* Automation */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 opacity-40">
                <Sparkles className="w-4 h-4" />
                <h2 className="text-xs font-sans font-medium uppercase tracking-widest">Automation</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-foreground/[0.01]">
                  <span className="text-sm font-sans">Auto-start Pomodoros</span>
                  <button
                    onClick={() => updateSettings({ autoStartPomodoros: !settings.autoStartPomodoros })}
                    className={`w-10 h-5 rounded-full transition-colors relative ${settings.autoStartPomodoros ? 'bg-accent' : 'bg-foreground/10'}`}
                  >
                    <motion.div
                      animate={{ x: settings.autoStartPomodoros ? 22 : 2 }}
                      className="absolute top-1 w-3 h-3 rounded-full bg-white shadow-sm"
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-foreground/[0.01]">
                  <span className="text-sm font-sans">Auto-start Breaks</span>
                  <button
                    onClick={() => updateSettings({ autoStartBreaks: !settings.autoStartBreaks })}
                    className={`w-10 h-5 rounded-full transition-colors relative ${settings.autoStartBreaks ? 'bg-accent' : 'bg-foreground/10'}`}
                  >
                    <motion.div
                      animate={{ x: settings.autoStartBreaks ? 22 : 2 }}
                      className="absolute top-1 w-3 h-3 rounded-full bg-white shadow-sm"
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Audio & Notifications */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 opacity-40">
                <Volume2 className="w-4 h-4" />
                <h2 className="text-xs font-sans font-medium uppercase tracking-widest">Feedback & Awareness</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-foreground/[0.01]">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 opacity-40" />
                    <span className="text-sm font-sans">Audio Cues (Soft Bell)</span>
                  </div>
                  <button
                    onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
                    className={`w-12 h-6 rounded-full transition-colors relative ${settings.soundEnabled ? 'bg-accent' : 'bg-foreground/10'}`}
                  >
                    <motion.div
                      animate={{ x: settings.soundEnabled ? 24 : 4 }}
                      className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* AI Configuration */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 opacity-40">
                <Sparkles className="w-4 h-4" />
                <h2 className="text-xs font-sans font-medium uppercase tracking-widest">AI & Integration</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="text-sm font-sans opacity-60">Gemini API Key</label>
                  <input
                    type="password"
                    value={settings.geminiApiKey}
                    onChange={(e) => updateSettings({ geminiApiKey: e.target.value })}
                    placeholder="AIza..."
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent font-sans text-sm tracking-widest"
                  />
                  <p className="text-[10px] opacity-30 font-sans leading-relaxed">
                    Leave empty to use the default system key. Your key is stored locally in your browser.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Quote */}
            <div className="pt-12 text-center opacity-40">
              <p className="text-sm font-serif italic">&quot;{quotes[Math.floor(Math.random() * quotes.length)]}&quot;</p>
            </div>
          </div>
        </PageWrapper>
      </main>
    </div>
  );
}
