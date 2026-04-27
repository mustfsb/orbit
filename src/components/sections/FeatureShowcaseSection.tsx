"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  TbBrain,
  TbClock,
  TbTarget,
  TbNotebook,
  TbArrowRight,
  TbCalendarWeek,
  TbPlayerPlay,
  TbFlag,
} from "react-icons/tb";
import { IconType } from "react-icons";

const features: {
  id: string;
  Icon: IconType;
  iconBg: string;
  label: string;
  description: string;
  image: string;
}[] = [
  {
    id: "planner",
    Icon: TbBrain,
    iconBg: "#FF6B2B",
    label: "AI Weekly Planner",
    description:
      "Builds a structured plan from your tasks and goals — then refines it through conversation.",
    image: "/images/notion/qa-agent-superbento.png",
  },
  {
    id: "focus",
    Icon: TbClock,
    iconBg: "#7B5CF0",
    label: "Focus Sessions",
    description:
      "Run timed Pomodoro sessions against your plan. Every session is logged automatically.",
    image: "/images/notion/card-task-router.jpg",
  },
  {
    id: "goals",
    Icon: TbTarget,
    iconBg: "#0EA5A0",
    label: "Goal Tracking",
    description:
      "See your progress and patterns over time. Goals connected to tasks and sessions.",
    image: "/images/notion/card-status-reporter.jpg",
  },
  {
    id: "journal",
    Icon: TbNotebook,
    iconBg: "#D946A8",
    label: "Journal",
    description:
      "Capture reflections alongside your work. Entries linked to your weekly plan.",
    image: "/images/notion/card-create-your-own.jpg",
  },
];

const useCases: {
  Icon: IconType;
  iconBg: string;
  label: string;
  href: string;
}[] = [
  { Icon: TbCalendarWeek, iconBg: "#FF6B2B", label: "Plan your week", href: "/planner" },
  { Icon: TbPlayerPlay, iconBg: "#7B5CF0", label: "Start a focus session", href: "/timer" },
  { Icon: TbFlag, iconBg: "#0EA5A0", label: "Track your goals", href: "/dashboard" },
  { Icon: TbNotebook, iconBg: "#D946A8", label: "Write your journal", href: "/dashboard" },
];

export function FeatureShowcaseSection() {
  const [activeId, setActiveId] = useState("planner");
  const active = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <section className="py-section px-site">
      <div className="max-w-site mx-auto">
        <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] font-semibold text-foreground mb-8 lg:mb-10">
          Keep your week on track, every day.
        </h2>

        {/* Main split panel */}
        <div className="rounded-2xl overflow-hidden ring-1 ring-foreground/10 grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
          {/* Left: feature selector */}
          <div className="bg-background p-8 lg:p-10 flex flex-col gap-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-sans text-[13px] font-medium text-primary">
                  AI Features
                </span>
                <span className="font-sans text-[11px] font-semibold bg-primary/10 text-primary rounded-full px-2 py-0.5">
                  New
                </span>
              </div>
              <h3 className="font-sans text-[20px] leading-[27px] tracking-[-0.4px] lg:text-[24px] lg:leading-[32px] font-medium text-foreground mb-5">
                Everything you need to do your best work.
              </h3>
              <Link href="/dashboard">
                <button
                  type="button"
                  className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors"
                  aria-label="Get started"
                >
                  <TbArrowRight size={18} />
                </button>
              </Link>
            </div>

            <div className="border-t border-border" />

            {/* Feature list */}
            <ul className="flex flex-col">
              {features.map((f) => {
                const isActive = f.id === activeId;
                const FIcon = f.Icon;
                return (
                  <li key={f.id} className="border-b border-border last:border-0">
                    <button
                      type="button"
                      onClick={() => setActiveId(f.id)}
                      className="w-full text-left py-3 flex flex-col gap-1 focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: f.iconBg }}
                        >
                          <FIcon size={16} color="white" />
                        </span>
                        <span
                          className={`font-sans text-[15px] font-medium transition-colors ${
                            isActive ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {f.label}
                        </span>
                      </div>
                      {isActive && (
                        <p className="font-sans text-[13px] leading-[19.5px] text-muted-foreground pl-11 pr-2">
                          {f.description}
                        </p>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-border" />

            <Link
              href="/dashboard"
              className="font-sans text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              See what Orbit can do →
            </Link>
          </div>

          {/* Right: screenshot */}
          <div
            className="relative min-h-[280px] lg:min-h-0 overflow-hidden"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--primary) 8%, var(--muted))",
            }}
          >
            <Image
              key={active.id}
              src={active.image}
              alt={active.label}
              fill
              className="object-cover object-left-top"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={active.id === "planner"}
            />
          </div>
        </div>

        {/* Bottom use-case cards */}
        <p className="font-sans text-[13px] text-muted-foreground mt-5 mb-3">
          See what Orbit can do
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {useCases.map(({ Icon, iconBg, label, href }) => {
            const UIcon = Icon;
            return (
              <Link
                key={label}
                href={href}
                className="bg-background rounded-xl ring-1 ring-foreground/10 p-4 flex flex-col gap-3 hover:bg-muted transition-colors"
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: iconBg }}
                >
                  <UIcon size={18} color="white" />
                </span>
                <span className="font-sans text-[14px] font-medium text-foreground leading-tight">
                  {label} →
                </span>
              </Link>
            );
          })}

          {/* CTA dark card */}
          <Link
            href="/dashboard"
            className="bg-foreground rounded-xl p-4 flex flex-col gap-3 hover:bg-foreground/90 transition-colors col-span-2 lg:col-span-1"
          >
            <div className="flex gap-1.5">
              {[TbBrain, TbClock, TbTarget].map((Icon, i) => {
                const CIcon = Icon;
                return (
                  <span
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <CIcon size={14} color="white" />
                  </span>
                );
              })}
            </div>
            <span className="font-sans text-[14px] font-medium text-background leading-tight">
              Try Orbit free →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
