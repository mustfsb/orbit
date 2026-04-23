"use client";

import Image from "next/image";
import { useDarkMode } from "./dark-mode-provider";
import { useState, useEffect } from "react";

function DualLogo({ light, dark, alt, size = 24 }: { light: string; dark: string; alt: string; size?: number }) {
  const { theme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, flexShrink: 0 }}>
      <Image
        src={mounted && theme === "dark" ? dark : light}
        alt={alt}
        width={size}
        height={size}
        unoptimized
        style={{ objectFit: "contain" }}
      />
    </span>
  );
}

function SingleLogo({ src, alt, size = 24 }: { src: string; alt: string; size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, flexShrink: 0 }}>
      <Image src={src} alt={alt} width={size} height={size} unoptimized style={{ objectFit: "contain" }} />
    </span>
  );
}

export default function Features() {
  const features = [
    {
      title: "AI Planning",
      description: "Automatically generates weekly schedules based on your goals and energy levels",
    },
    {
      title: "Multi-session",
      description: "Run multiple focus sprints in parallel across different projects",
    },
    {
      title: "Share links",
      description: "Share a link to any plan or journal entry for collaboration",
    },
    {
      title: "Calendar Sync",
      description: "Connect Google Calendar, Outlook, or Apple Calendar for seamless scheduling",
    },
    {
      title: "API Integration",
      description: "Connect your OpenAI, Claude, or Gemini API key for enhanced AI features",
    },
    {
      title: "Any device",
      description: "Web, desktop (macOS, Windows, Linux), and installable PWA",
    },
    {
      title: "Any workflow",
      description: "Pomodoro, time-blocking, or free-form deep work sessions",
    },
  ];

  return (
    <section
      id="features"
      className="landing-section"
      style={{
        borderTop: "1px solid var(--landing-border-weak)",
        padding: "var(--landing-vpadding) var(--landing-padding)",
      }}
    >
      <div style={{ marginBottom: "24px", maxWidth: "100%" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--landing-text-strong)",
            marginBottom: "12px",
          }}
        >
          What is Orbit?
        </h3>
        <p>
          Orbit is a productivity companion that helps you plan deep work
          sessions, track goals, and maintain focus through intelligent
          scheduling.
        </p>
      </div>

      <ul className="features-grid" style={{ padding: 0, margin: 0 }}>
        {features.map((feature) => (
          <li
            key={feature.title}
            style={{
              listStyle: "none",
              marginBottom: "16px",
              display: "flex",
              gap: "12px",
              lineHeight: "200%",
            }}
          >
            <span style={{ color: "var(--landing-icon)", flexShrink: 0 }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", marginTop: "6px" }}
              >
                <path
                  d="M3 8L6.5 11.5L13 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <strong
                style={{
                  fontWeight: 500,
                  color: "var(--landing-text-strong)",
                  marginRight: "12px",
                }}
              >
                {feature.title}
              </strong>
              {feature.description}
            </span>
          </li>
        ))}
      </ul>

      <h4
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "var(--landing-text-strong)",
          margin: "40px 0 24px",
        }}
      >
        Works with your favorite tools
      </h4>

      <div
        className="integrations-row"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "36px",
          flexWrap: "wrap",
        }}
      >
        {[
          { type: "dual", light: "/logos/openai-black.svg", dark: "/logos/openai-white.svg", alt: "OpenAI", label: "OpenAI", size: 42 },
          { type: "single", src: "/logos/claude.svg", alt: "Claude", label: "Claude", size: 34 },
          { type: "single", src: "/logos/gemini.png", alt: "Gemini", label: "Gemini", size: 34 },
          { type: "single", src: "/logos/google-cal.svg", alt: "Google Calendar", label: "Calendar", size: 34 },
          { type: "single", src: "/logos/outlook.svg", alt: "Outlook", label: "Outlook", size: 34 },
          { type: "single", src: "/logos/apple-calendar.png", alt: "Apple Calendar", label: "Calendar", size: 34 },
        ].map((item) => (
          <div
            key={item.alt}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 42 }}>
              {item.type === "dual" ? (
                <DualLogo light={item.light!} dark={item.dark!} alt={item.alt} size={item.size} />
              ) : (
                <SingleLogo src={item.src!} alt={item.alt} size={item.size} />
              )}
            </div>
            <span
              style={{
                fontSize: "11px",
                color: "var(--landing-text-weak)",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#faq"
        className="group"
        style={{
          background: "var(--landing-bg-strong)",
          padding: "8px 12px 8px 20px",
          color: "var(--landing-text-inverted)",
          borderRadius: "4px",
          fontWeight: 500,
          marginTop: "40px",
          display: "flex",
          width: "fit-content",
          gap: "12px",
          textDecoration: "none",
          fontFamily: "var(--landing-font-mono)",
          alignItems: "center",
          transition: "background 150ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--landing-bg-strong-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--landing-bg-strong)";
        }}
      >
        Read FAQ
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>

      <style>{`
        @media (min-width: 40rem) {
          .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 24px;
          }
          .integrations-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }


      `}</style>
    </section>
  );
}
