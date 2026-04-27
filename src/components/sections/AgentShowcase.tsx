"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: "qa",
    iconBg: "#F97316",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2C5.58172 2 2 5.35786 2 9.5C2 11.4851 2.80254 13.2872 4.10746 14.6088L3.05132 17.7265C2.93558 18.0667 3.27175 18.3845 3.60369 18.2494L7.10556 16.8258C7.99549 17.0999 8.98074 17.25 10 17.25C14.4183 17.25 18 13.8921 18 9.75C18 5.60786 14.4183 2 10 2Z"
          fill="white"
        />
      </svg>
    ),
    label: "Q&A agents",
    desc: "Answers your team's questions automatically, around the clock.",
    image: "/images/notion/qa-agent-superbento.png",
    cardBg: "#FDDBC7",
    cardBgDark: "#3B1F0F",
  },
  {
    id: "task",
    iconBg: "#7C3AED",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Task routing agents",
    desc: "Assigns, prioritizes, and routes tasks on its own.",
    image: "/images/notion/card-task-router.jpg",
    cardBg: "#EDE9FF",
    cardBgDark: "#1E1440",
  },
  {
    id: "status",
    iconBg: "#0D9488",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="2" width="14" height="16" rx="2.5" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M7 7H13M7 10H13M7 13H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Reporting agents",
    desc: "Generates and sends status updates while you focus.",
    image: "/images/notion/notion-agent-aimn.png",
    cardBg: "#CCFDF4",
    cardBgDark: "#062B25",
  },
  {
    id: "create",
    iconBg: "#DB2777",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3V5M10 15V17M3 10H5M15 10H17M4.93 4.93L6.34 6.34M13.66 13.66L15.07 15.07M4.93 15.07L6.34 13.66M13.66 6.34L15.07 4.93" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    label: "Create your own",
    desc: "Build a custom agent for any workflow in minutes.",
    image: "/images/notion/card-create-your-own.jpg",
    cardBg: "#FFF5EB",
    cardBgDark: "#2E1A06",
  },
];

export function AgentShowcase() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovering = useRef(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setActive(index);
      setVisible(true);
    }, 200);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hovering.current) {
        setVisible(false);
        setTimeout(() => {
          setActive((prev) => (prev + 1) % features.length);
          setVisible(true);
        }, 200);
      }
    }, 3500);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleSelect = (i: number) => {
    goTo(i);
    startTimer();
  };

  const current = features[active];
  const cardBg = isDark ? current.cardBgDark : current.cardBg;

  return (
    <section
      className="py-section px-site border-t border-border"
      onMouseEnter={() => { hovering.current = true; }}
      onMouseLeave={() => { hovering.current = false; }}
    >
      <div className="max-w-site mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

          {/* Left panel */}
          <div className="flex flex-col lg:w-[42%] shrink-0">
            {/* Badge row */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-sans text-[13px] font-medium text-foreground">
                AI Agents
              </span>
              <span className="font-sans text-[11px] font-semibold bg-primary text-primary-foreground rounded-full px-2 py-0.5 leading-none">
                New
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-1.44px] font-semibold text-foreground mb-6 max-w-[400px]">
              Keep work moving, around the clock.
            </h2>

            {/* Arrow CTA */}
            <Link href="/dashboard" className="mb-10 self-start" tabIndex={0}>
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors text-[20px] font-medium">
                →
              </span>
            </Link>

            {/* Feature list */}
            <div className="flex flex-col">
              {features.map((f, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => handleSelect(i)}
                    className={[
                      "flex items-start gap-4 text-left py-5 border-t border-border transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 rounded-sm",
                      i === features.length - 1 ? "border-b" : "",
                    ].join(" ")}
                  >
                    {/* Icon circle */}
                    <span
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-200"
                      style={{ backgroundColor: f.iconBg, transform: isActive ? "scale(1.08)" : "scale(1)" }}
                    >
                      {f.icon}
                    </span>

                    {/* Text */}
                    <span className="flex flex-col gap-1 min-w-0">
                      <span
                        className={[
                          "font-sans text-[17px] leading-[24px] font-semibold transition-colors duration-200",
                          isActive ? "text-foreground" : "text-muted-foreground",
                        ].join(" ")}
                      >
                        {f.label}
                      </span>
                      <span
                        className="font-sans text-[15px] leading-[22px] text-muted-foreground overflow-hidden transition-all duration-300"
                        style={{
                          maxHeight: isActive ? "3rem" : "0",
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        {f.desc}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel */}
          <div className="flex-1 min-w-0">
            <div
              className="w-full rounded-2xl overflow-hidden ring-1 ring-foreground/10 shadow-xl relative transition-colors duration-500"
              style={{ backgroundColor: cardBg, aspectRatio: "4/3" }}
            >
              <div
                className="absolute inset-0 transition-opacity duration-200"
                style={{ opacity: visible ? 1 : 0 }}
              >
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.label}
                  fill
                  className="object-contain"
                  style={{ padding: "24px" }}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority={active === 0}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
