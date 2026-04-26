"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const faqs = [
  {
    num: "01",
    q: "Is the free plan really free?",
    a: "No credit card, no trial period, no expiry. Tasks, focus timer, goals, and journal are core features that will never move behind a paywall.",
  },
  {
    num: "02",
    q: "When is Pro worth upgrading to?",
    a: "When you want the AI weekly planner to structure your time around your actual tasks and goals — and when you need your plan in sync across every device.",
  },
  {
    num: "03",
    q: "What is the Teams plan?",
    a: "A custom workspace for organizations — shared task views, team-level analytics, admin controls, and SSO. Pricing is based on seat count and setup needs.",
  },
  {
    num: "04",
    q: "Can I switch plans later?",
    a: "Yes, at any time. Downgrading back to Free keeps all your data — tasks, journals, and goals stay yours.",
  },
  {
    num: "05",
    q: "How does the AI planner work?",
    a: "Describe what's on your plate for the week. Orbit reads your open tasks and goals, proposes a structured day-by-day schedule, then refines it through conversation.",
  },
  {
    num: "06",
    q: "Is my data private?",
    a: "Your tasks, journal, and goals are private to your account. AI planner requests are processed by your chosen AI provider under their data policies.",
  },
] as const;

const N = faqs.length;

/* ═══════════════════════════════════════════════════════════
   KEYFRAMES + THEME COLORS
═══════════════════════════════════════════════════════════ */

const KF = `
  html.dark  .faq-illu { color: #ffffff; }
  html.light .faq-illu { color: #000000; }

  @keyframes faq-float {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-10px); }
  }
  @keyframes faq-float-xs {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-5px); }
  }
  @keyframes faq-pulse-ring {
    0%   { opacity: 0.45; transform: scale(1); }
    100% { opacity: 0;    transform: scale(1.65); }
  }
  @keyframes faq-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes faq-spin-cw {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes faq-blink {
    0%,100% { opacity: 0.45; }
    50%      { opacity: 0.12; }
  }
`;

function injectKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById("faq-kf")) return;
  const s = document.createElement("style");
  s.id = "faq-kf";
  s.textContent = KF;
  document.head.appendChild(s);
}

/* ═══════════════════════════════════════════════════════════
   ILLUSTRATION COMPONENTS  (all use currentColor)
═══════════════════════════════════════════════════════════ */

function IlluFree() {
  return (
    <svg viewBox="0 0 160 160" fill="none" style={{ width: "62%", height: "62%" }}>
      <g
        style={{
          animation: "faq-float 3.4s ease-in-out infinite",
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        }}
      >
        <rect x="22" y="76" width="116" height="68" rx="7"
          stroke="currentColor" strokeWidth="2" opacity="0.9" />
        <rect x="16" y="62" width="128" height="22" rx="5"
          stroke="currentColor" strokeWidth="2" opacity="0.9" />
        <line x1="80" y1="62" x2="80" y2="144"
          stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M80 62 C65 42 38 50 52 62"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        <path d="M80 62 C95 42 122 50 108 62"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      </g>
      <circle cx="138" cy="28" r="3.5" fill="currentColor"
        style={{ animation: "faq-blink 2.4s ease-in-out 0.3s infinite" }} />
      <circle cx="22" cy="126" r="2.5" fill="currentColor"
        style={{ animation: "faq-blink 3.1s ease-in-out 1.1s infinite" }} />
      <circle cx="144" cy="116" r="2" fill="currentColor"
        style={{ animation: "faq-blink 2.7s ease-in-out 0.7s infinite" }} />
      <circle cx="18" cy="36" r="3" fill="currentColor"
        style={{ animation: "faq-blink 2.9s ease-in-out 0.9s infinite" }} />
    </svg>
  );
}

function IlluPro() {
  return (
    <svg viewBox="0 0 160 160" fill="none" style={{ width: "62%", height: "62%" }}>
      <g style={{ animation: "faq-float 3.2s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        {/* Baseline */}
        <line x1="14" y1="138" x2="150" y2="138" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
        {/* Bars — progressively taller */}
        <rect x="18" y="108" width="22" height="30" rx="3"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" opacity="0.6" />
        <rect x="50" y="84" width="22" height="54" rx="3"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.13" opacity="0.7" />
        <rect x="82" y="58" width="22" height="80" rx="3"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.16" opacity="0.85" />
        {/* Tallest bar — highlighted */}
        <rect x="114" y="28" width="22" height="110" rx="3"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.22" />
        {/* Trend arrow */}
        <path d="M29 104 L61 80 L93 54 L125 24"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"
          strokeDasharray="4 3" />
        <path d="M118 18 L128 24 L122 33"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      </g>
    </svg>
  );
}

function IlluTeams() {
  return (
    <svg viewBox="0 0 160 160" fill="none" style={{ width: "62%", height: "62%" }}>
      {/* Org chart connector lines */}
      <line x1="80" y1="48" x2="80" y2="68" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="38" y1="68" x2="122" y2="68" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="38" y1="68" x2="38" y2="84" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="122" y1="68" x2="122" y2="84" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {/* Third level lines */}
      <line x1="38" y1="116" x2="38" y2="128" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <line x1="20" y1="128" x2="56" y2="128" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <line x1="20" y1="128" x2="20" y2="138" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <line x1="56" y1="128" x2="56" y2="138" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />

      {/* Top card — admin */}
      <g style={{ animation: "faq-float 3s ease-in-out 0s infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <rect x="54" y="16" width="52" height="32" rx="6"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <circle cx="68" cy="30" r="6" fill="currentColor" opacity="0.6" />
        <line x1="78" y1="24" x2="98" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="78" y1="30" x2="94" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="78" y1="36" x2="90" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      </g>

      {/* Left card */}
      <g style={{ animation: "faq-float 3s ease-in-out 0.4s infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <rect x="8" y="84" width="60" height="32" rx="6"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <circle cx="22" cy="98" r="5" fill="currentColor" opacity="0.5" />
        <line x1="31" y1="93" x2="60" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        <line x1="31" y1="99" x2="54" y2="99" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        <line x1="31" y1="105" x2="58" y2="105" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      </g>

      {/* Right card */}
      <g style={{ animation: "faq-float 3s ease-in-out 0.8s infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <rect x="92" y="84" width="60" height="32" rx="6"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <circle cx="106" cy="98" r="5" fill="currentColor" opacity="0.5" />
        <line x1="115" y1="93" x2="144" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        <line x1="115" y1="99" x2="138" y2="99" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        <line x1="115" y1="105" x2="142" y2="105" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      </g>

      {/* Third-level mini cards */}
      <g style={{ animation: "faq-float 3s ease-in-out 1.2s infinite", transformBox: "fill-box", transformOrigin: "50% 50%", opacity: 0.5 }}>
        <rect x="6" y="138" width="28" height="16" rx="4"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
        <rect x="42" y="138" width="28" height="16" rx="4"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
      </g>
    </svg>
  );
}

function IlluSwitch() {
  return (
    <svg viewBox="0 0 160 160" fill="none" style={{ width: "62%", height: "62%" }}>
      {/* Left card — current plan (dimmer, slightly smaller) */}
      <g style={{ animation: "faq-float 3.6s ease-in-out 0.4s infinite", transformBox: "fill-box", transformOrigin: "50% 50%", opacity: 0.5 }}>
        <rect x="8" y="56" width="58" height="72" rx="8"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.07" />
        <line x1="20" y1="78" x2="54" y2="78" stroke="currentColor" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
        <line x1="20" y1="87" x2="46" y2="87" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="20" y1="96" x2="50" y2="96" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="20" y1="105" x2="42" y2="105" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <rect x="20" y="64" width="20" height="6" rx="2"
          stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Swap arrows (bidirectional, center) */}
      <g style={{ animation: "faq-float-xs 2.8s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        {/* Up arrow (→) */}
        <path d="M74 72 L86 72" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
        <path d="M83 68 L87 72 L83 76" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
        {/* Down arrow (←) */}
        <path d="M74 88 L86 88" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
        <path d="M77 84 L73 88 L77 92" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
      </g>

      {/* Right card — new plan (brighter, taller = more value) */}
      <g style={{ animation: "faq-float 3.6s ease-in-out 0s infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <rect x="94" y="38" width="58" height="90" rx="8"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
        {/* Badge */}
        <rect x="106" y="50" width="34" height="8" rx="2"
          fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
        <line x1="106" y1="68" x2="140" y2="68" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        <line x1="106" y1="77" x2="132" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
        <line x1="106" y1="86" x2="138" y2="86" stroke="currentColor" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
        <line x1="106" y1="95" x2="130" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.45" strokeLinecap="round" />
        <line x1="106" y1="104" x2="136" y2="104" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        <line x1="106" y1="113" x2="128" y2="113" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function IlluAI() {
  return (
    <svg viewBox="0 0 160 160" fill="none" style={{ width: "62%", height: "62%" }}>
      <g style={{ animation: "faq-float 3.2s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <rect x="22" y="36" width="116" height="94" rx="8"
          stroke="currentColor" strokeWidth="2" opacity="0.9" />
        <line x1="22" y1="56" x2="138" y2="56"
          stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <line x1="52" y1="26" x2="52" y2="46"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <line x1="108" y1="26" x2="108" y2="46"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        {([[0, 1], [1, 2], [2, 0]] as const).map(([row, col]) => (
          <rect
            key={`h-${row}-${col}`}
            x={34 + col * 26} y={68 + row * 22}
            width="18" height="13" rx="3"
            fill="currentColor" fillOpacity="0.25"
            stroke="currentColor" strokeWidth="1" opacity="0.9"
          />
        ))}
        {([[0, 0], [0, 2], [0, 3], [1, 0], [1, 1], [1, 3], [2, 1], [2, 2], [2, 3]] as const).map(([row, col]) => (
          <rect
            key={`l-${row}-${col}`}
            x={34 + col * 26} y={68 + row * 22}
            width="18" height="13" rx="3"
            stroke="currentColor" strokeWidth="1" opacity="0.2"
          />
        ))}
      </g>
      <path
        d="M143 30 L144.8 36 L151 37.8 L144.8 39.6 L143 45.6 L141.2 39.6 L135 37.8 L141.2 36 Z"
        fill="currentColor" opacity="0.45"
        style={{ animation: "faq-blink 2.2s ease-in-out infinite" }} />
      <circle cx="19" cy="74" r="2.5" fill="currentColor"
        style={{ animation: "faq-blink 2.9s ease-in-out 1.2s infinite" }} />
    </svg>
  );
}

function IlluPrivacy() {
  return (
    <svg viewBox="0 0 160 160" fill="none" style={{ width: "62%", height: "62%" }}>
      {/* Blinking corner dots — static, no orbit */}
      <circle cx="30" cy="38" r="2.5" fill="currentColor"
        style={{ animation: "faq-blink 2.4s ease-in-out 0.2s infinite" }} />
      <circle cx="130" cy="38" r="2.5" fill="currentColor"
        style={{ animation: "faq-blink 2.8s ease-in-out 0.9s infinite" }} />
      <circle cx="22" cy="104" r="2" fill="currentColor"
        style={{ animation: "faq-blink 3s ease-in-out 0.5s infinite" }} />
      <circle cx="138" cy="104" r="2" fill="currentColor"
        style={{ animation: "faq-blink 2.6s ease-in-out 1.4s infinite" }} />

      {/* Shield + lock — floating */}
      <g style={{ animation: "faq-float 3.4s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <path
          d="M80 18 L134 40 V88 C134 118 108 134 80 148 C52 134 26 118 26 88 V40 Z"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" opacity="0.9"
        />
        {/* Lock body */}
        <rect x="62" y="82" width="36" height="32" rx="6"
          stroke="currentColor" strokeWidth="2" opacity="0.9" />
        {/* Lock shackle */}
        <path d="M68 82 V72 C68 61 92 61 92 72 V82"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        {/* Keyhole */}
        <circle cx="80" cy="93" r="4" fill="currentColor" opacity="0.65" />
        <rect x="78.5" y="93" width="3" height="9" rx="1.5" fill="currentColor" opacity="0.65" />
      </g>
    </svg>
  );
}

const ILLUS = [IlluFree, IlluPro, IlluTeams, IlluSwitch, IlluAI, IlluPrivacy];

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export function FaqSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rawProgress, setRawProgress] = useState(0);

  useEffect(() => {
    injectKeyframes();

    const handle = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const t = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setRawProgress(t * (N - 1));
    };

    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const activeIndex = Math.round(rawProgress);
  const fillPercent = (rawProgress / (N - 1)) * 100;

  return (
    <section className="border-t border-border">
      {/* ── Desktop: sticky scroll journey ────────────────────── */}
      <div
        ref={containerRef}
        style={{ height: `${N * 100}vh` }}
        className="relative hidden lg:block"
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-background">

          {/* Header */}
          <div className="flex-shrink-0 px-site pt-16 pb-5">
            <div className="max-w-site mx-auto flex items-center justify-between">
              <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium">
                Common questions.
              </h2>
              <span
                className="font-sans text-[13px] text-muted-foreground/50 tabular-nums"
                aria-live="polite"
              >
                {String(activeIndex + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* 3-column body */}
          <div className="flex-1 px-site min-h-0">
            <div className="max-w-site mx-auto h-full flex items-stretch">

              {/* ── LEFT: Illustration (no background) ── */}
              <div className="flex-1 relative flex items-center justify-center pr-10 min-w-0">
                {ILLUS.map((Illu, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      className="faq-illu absolute flex items-center justify-center"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: `scale(${isActive ? 1 : 0.93})`,
                        transition:
                          "opacity 560ms cubic-bezier(0.4,0,0.2,1), transform 560ms cubic-bezier(0.4,0,0.2,1)",
                        pointerEvents: isActive ? "auto" : "none",
                        width: "min(360px, 100%)",
                        aspectRatio: "1 / 1",
                      }}
                    >
                      <Illu />
                    </div>
                  );
                })}
              </div>

              {/* ── CENTER: Timeline ── */}
              <div
                className="flex-shrink-0 relative flex justify-center"
                style={{ width: "72px" }}
              >
                {/* Track */}
                <div
                  style={{
                    position: "absolute",
                    top: 0, bottom: 0,
                    left: "50%", width: "2px", marginLeft: "-1px",
                    background: "var(--border)",
                  }}
                />
                {/* Fill — no CSS transition, pixel-perfect */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%", width: "2px", marginLeft: "-1px",
                    background: "var(--primary)",
                    height: `${fillPercent}%`,
                  }}
                />
                {/* Dots */}
                {faqs.map((_, i) => {
                  const isPast = i <= activeIndex;
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: `${(i / (N - 1)) * 100}%`,
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                      }}
                    >
                      {isActive && (
                        <div
                          style={{
                            position: "absolute",
                            inset: "-5px",
                            borderRadius: "50%",
                            border: "1.5px solid var(--primary)",
                            opacity: 0.3,
                          }}
                        />
                      )}
                      <div
                        style={{
                          width: isActive ? "14px" : "10px",
                          height: isActive ? "14px" : "10px",
                          borderRadius: "50%",
                          border: `2px solid ${isPast ? "var(--primary)" : "var(--border)"}`,
                          background: isPast ? "var(--primary)" : "var(--background)",
                          transition: "all 300ms cubic-bezier(0.4,0,0.2,1)",
                          boxShadow: isActive
                            ? "0 0 0 3px color-mix(in srgb, var(--primary) 18%, transparent)"
                            : "none",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* ── RIGHT: Q&A text ── */}
              <div className="flex-1 relative flex items-center pl-10 min-w-0">
                {faqs.map((faq, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: "100%",
                        maxWidth: "520px",
                        opacity: isActive ? 1 : 0,
                        transform: `translateY(${(i - activeIndex) * 36}px)`,
                        transition:
                          "opacity 560ms cubic-bezier(0.4,0,0.2,1), transform 560ms cubic-bezier(0.4,0,0.2,1)",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <span className="font-sans text-[12px] tracking-[0.08em] text-muted-foreground/40 select-none mb-4 block">
                        {faq.num}
                      </span>
                      <h3 className="font-sans text-[28px] leading-[34px] tracking-[-0.56px] lg:text-[34px] lg:leading-[41px] lg:tracking-[-0.68px] font-medium text-foreground mb-5">
                        {faq.q}
                      </h3>
                      <p className="font-sans text-[17px] leading-[28px] text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Scroll hint */}
          <div className="flex-shrink-0 px-site pb-6">
            <div className="max-w-site mx-auto flex justify-center">
              <div
                className="flex flex-col items-center gap-1"
                style={{
                  opacity: rawProgress < 0.15 ? 1 : 0,
                  transition: "opacity 400ms ease",
                  pointerEvents: "none",
                }}
              >
                <span className="text-[11px] tracking-[0.06em] uppercase text-muted-foreground/30">
                  scroll
                </span>
                <svg
                  width="12" height="18" viewBox="0 0 12 18" fill="none"
                  style={{ animation: "faq-float-xs 1.8s ease-in-out infinite" }}
                >
                  <path
                    d="M6 2 L6 14 M2 10 L6 14 L10 10"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="text-muted-foreground/30"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: simple list ──────────────────────────────── */}
      <div className="lg:hidden py-section px-site">
        <div className="max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] font-medium mb-12">
            Common questions.
          </h2>
          <div className="relative">
            <div
              className="absolute top-0 bottom-0 bg-border"
              style={{ left: "7px", width: "2px" }}
            />
            <div className="flex flex-col gap-12">
              {faqs.map((faq, i) => (
                <div key={i} className="relative pl-9">
                  <div
                    className="absolute bg-primary border-primary rounded-full border-2"
                    style={{ left: "0", top: "3px", width: "16px", height: "16px" }}
                  />
                  <span className="font-sans text-[11px] tracking-[0.08em] text-muted-foreground/40 block mb-2">
                    {faq.num}
                  </span>
                  <h3 className="font-sans text-[20px] leading-[27px] tracking-[-0.3px] font-medium text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-[16px] leading-[26px] text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
