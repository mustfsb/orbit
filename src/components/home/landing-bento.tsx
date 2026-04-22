"use client"

import React from "react";
import { CardDynamic, CardGreen } from "./bento-shared";

// Custom SVGs for each card concept
const CustomSVG = ({ type, className = "" }: { type: string; className?: string }) => {
  const svgs: Record<string, React.ReactNode> = {
    pipeline: (
      <svg viewBox="0 0 200 60" className={className} fill="none">
        <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <circle cx="30" cy="30" r="8" fill="currentColor" opacity="0.8" />
        <line x1="52" y1="30" x2="78" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
        <circle cx="100" cy="30" r="20" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <circle cx="100" cy="30" r="8" fill="currentColor" opacity="0.6" />
        <line x1="122" y1="30" x2="148" y2="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
        <circle cx="170" cy="30" r="20" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <circle cx="170" cy="30" r="8" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    flame: (
      <svg viewBox="0 0 100 120" className={className} fill="none">
        <path d="M50 110 C50 110 20 80 20 50 C20 30 35 15 50 5 C65 15 80 30 80 50 C80 80 50 110 50 110Z" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path d="M50 90 C50 90 35 70 35 50 C35 40 42 30 50 25 C58 30 65 40 65 50 C65 70 50 90 50 90Z" fill="currentColor" opacity="0.4" />
        <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    timer: (
      <svg viewBox="0 0 100 100" className={className} fill="none">
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.8" />
        <line x1="50" y1="10" x2="50" y2="14" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="86" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="50" x2="14" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="86" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    progress: (
      <svg viewBox="0 0 200 40" className={className} fill="none">
        <rect x="5" y="15" width="190" height="10" rx="5" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <rect x="5" y="15" width="152" height="10" rx="5" fill="currentColor" opacity="0.6" />
        <text x="100" y="10" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" opacity="0.8">80%</text>
      </svg>
    ),
    clockcalendar: (
      <svg viewBox="0 0 100 100" className={className} fill="none">
        <rect x="15" y="20" width="70" height="60" rx="8" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="15" y1="35" x2="85" y2="35" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <line x1="30" y1="12" x2="30" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="70" y1="12" x2="70" y2="20" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="55" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="55" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="55" x2="56" y2="55" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    aichat: (
      <svg viewBox="0 0 120 100" className={className} fill="none">
        <rect x="10" y="15" width="50" height="30" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M35 45 L30 55 L40 45" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <rect x="60" y="45" width="50" height="30" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <path d="M85 45 L90 35 L80 45" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        <circle cx="90" cy="20" r="4" fill="currentColor" opacity="0.8" />
        <path d="M90 12 L92 18 L98 18 L93 22 L95 28 L90 24 L85 28 L87 22 L82 18 L88 18Z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    targetcheck: (
      <svg viewBox="0 0 100 100" className={className} fill="none">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path d="M38 50 L46 58 L62 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bars: (
      <svg viewBox="0 0 140 60" className={className} fill="none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={i * 20 + 2} y={60 - (15 + i * 5)} width="14" height={15 + i * 5} rx="2" fill="currentColor" opacity={0.2 + i * 0.1} />
        ))}
      </svg>
    ),
  };
  return svgs[type] || null;
};

export function LandingBentoGrid() {
  return (
    <section className="w-full py-24 md:py-32 px-4 font-sans selection:bg-[#E0FF82] selection:text-[#0a0a0a]">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold mb-4">Core Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to focus.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(280px,auto)] md:auto-rows-[minmax(300px,auto)] gap-4">
          
          {/* CARD 1: Plan Track Achieve (Span 2) */}
          <CardDynamic className="md:col-span-2 flex flex-col justify-center items-center">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center flex flex-col items-center gap-8">
              <h2 className="text-5xl sm:text-7xl md:text-[5.5rem] leading-[0.85] font-bold tracking-tighter flex flex-col items-center">
                <span>plan</span>
                <span className="flex items-center gap-[0.2em] relative">
                  track
                  <span className="text-accent">.</span>
                </span>
                <span>achieve</span>
              </h2>
              <CustomSVG type="pipeline" className="w-48 md:w-64 text-accent opacity-80" />
            </div>
          </CardDynamic>

          {/* CARD 2: Focus Habit Streak */}
          <CardGreen className="md:col-span-1 flex flex-col justify-between">
            <div className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">
              Focus Habit
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <CustomSVG type="flame" className="w-16 h-16 text-[#0a0a0a] opacity-80" />
              <span className="text-6xl sm:text-7xl font-bold tracking-tighter block text-center w-full">12</span>
              <span className="text-base sm:text-lg font-bold tracking-tight opacity-70 border-b-2 border-current pb-1 w-max">Days in a row</span>
            </div>

            <CustomSVG type="bars" className="w-full h-12 text-[#0a0a0a] opacity-60" />
          </CardGreen>

          {/* CARD 3: Deep Work Timer */}
          <CardDynamic className="md:col-span-1 flex flex-col justify-between">
            <div className="w-full flex justify-between font-mono text-xs font-bold uppercase tracking-widest relative z-10 transition-colors opacity-40 group-hover:opacity-100">
              {new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(new Date())}
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current group-hover:animate-pulse" />
                25:00
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <CustomSVG type="timer" className="w-24 h-24 text-foreground opacity-70" />
              <h3 className="text-4xl sm:text-5xl leading-[0.9] font-bold tracking-tighter italic">
                Deep<br />Work
              </h3>
            </div>

            <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden relative z-10">
              <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </div>
          </CardDynamic>

          {/* CARD 4: Sprint Tracking */}
          <CardGreen className="md:col-span-1 flex flex-col justify-between !px-6 !py-8">
            <div className="flex justify-between w-full font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">
              <span>Sprint Tracking</span>
              <span>Today</span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <CustomSVG type="progress" className="w-32 text-[#0a0a0a] opacity-70" />
              <div className="text-center">
                <span className="text-[5rem] font-bold italic tracking-tighter text-[#0a0a0a] block leading-none">8<span className="text-3xl">/10</span></span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-60 mt-2 block">focused hours</span>
              </div>
            </div>

            <div className="text-center w-full border-t-[3px] border-black/20 pt-4 group-hover:border-black/60 transition-colors duration-500">
              <span className="text-2xl font-bold tracking-[-0.08em] block lowercase">orbit progress</span>
            </div>
          </CardGreen>

          {/* CARD 5: Master Your Time (Span 2 Rows) */}
          <CardDynamic className="md:col-span-1 md:row-span-2 flex flex-col items-center overflow-visible">
            <h2 className="text-4xl sm:text-5xl md:text-[4rem] leading-[0.9] font-bold tracking-tighter text-center mt-8 md:mt-12 px-2 relative z-10 w-full">
              Master<br />Your<br />Time
            </h2>
            
            <div className="mt-8 font-mono font-bold tracking-[0.2em] text-[10px] sm:text-sm mb-auto opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
              [ orbit.app ]
            </div>

            <div className="relative w-full flex-1 flex items-end justify-center pb-8">
              <CustomSVG type="clockcalendar" className="w-32 h-32 text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </CardDynamic>

          {/* CARD 6: Orbit AI Agent */}
          <CardGreen className="md:col-span-1 flex flex-col justify-start gap-3 md:gap-4 pb-8 min-h-[300px] md:min-h-[340px]">
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60">Orbit AI Agent</div>

            <div className="flex gap-2 sm:gap-3 items-start w-max max-w-[95%] self-end mt-2 z-10">
              <div className="bg-[#0a0a0a] text-[#E0FF82] px-4 py-3 sm:px-5 sm:py-3 font-bold tracking-tight text-xs sm:text-sm leading-none rounded-[16px] sm:rounded-[20px] rounded-br-[4px] shadow-sm">
                Optimize my day
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 border-2 border-[#0a0a0a] rounded-full text-[#0a0a0a] flex items-center justify-center">
                <span className="text-xs font-bold">You</span>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <CustomSVG type="aichat" className="w-28 text-[#0a0a0a] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 items-start w-[100%] sm:w-[90%] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0 ease-out">
              <div className="flex gap-2 sm:gap-3 items-end">
                <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 border-2 border-[#0a0a0a] rounded-full shadow-sm text-[#0a0a0a] flex items-center justify-center text-[8px] font-bold">
                  AI
                </div>
                <div className="bg-transparent text-[#0a0a0a] border-2 border-[#0a0a0a] px-4 py-3 sm:px-5 sm:py-3 font-bold tracking-tight text-xs sm:text-sm leading-none rounded-[16px] sm:rounded-[20px] rounded-bl-[4px] shadow-sm">
                  Re-arranging your agenda...
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-[400ms]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                <div className="bg-[#0a0a0a] text-[#E0FF82] px-4 py-3 sm:px-5 sm:py-3 font-bold tracking-tight text-xs sm:text-sm leading-none rounded-[16px] sm:rounded-[20px] rounded-tl-[4px] rounded-bl-[4px] shadow-sm">
                  Focus blocks locked in!
                </div>
              </div>
            </div>
          </CardGreen>

          {/* CARD 7: Goal Reached */}
          <CardDynamic className="md:col-span-1 flex flex-col items-center justify-center pt-8 relative">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-[#E0FF82] text-[#0a0a0a] font-bold tracking-widest text-xs uppercase px-5 py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110 shadow-xl z-50 pointer-events-none">
              Goal Reached!
              <div className="absolute w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-transparent border-t-[#E0FF82] left-1/2 -ml-2 -bottom-2" />
            </div>

            <div className="flex-1 flex items-center justify-center">
              <CustomSVG type="targetcheck" className="w-28 h-28 text-accent opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
            </div>

            <div className="flex items-center -space-x-4 sm:-space-x-6 relative z-20 mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#111111] rounded-full border-[6px] border-[#222222] z-10 relative overflow-hidden flex items-center justify-center text-[10px] font-bold">
                AM
              </div>

              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#111111] rounded-full border-[6px] border-[#222222] z-20 flex items-center justify-center 
                 transform transition-all duration-500 group-hover:-translate-y-2 
                 group-hover:bg-[#E0FF82] group-hover:text-[#0a0a0a] group-hover:border-[#E0FF82]">
                <span className="text-lg font-bold">You</span>
              </div>

              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#111111] rounded-full border-[6px] border-[#222222] z-10 overflow-hidden flex items-center justify-center text-[10px] font-bold">
                SJ
              </div>
            </div>
          </CardDynamic>

        </div>
      </div>
    </section>
  );
}
