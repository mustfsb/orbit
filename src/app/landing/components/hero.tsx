"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDarkMode } from "./dark-mode-provider";
import { useState, useEffect } from "react";
import HeroAsciiOrbit from "./hero-ascii-orbit";
import VerticalCutReveal from "./vertical-cut-reveal";

function DualLogo({ light, dark, alt, className, size = 32 }: { light: string; dark: string; alt: string; className?: string; size?: number }) {
  const { theme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`hero-logo-wrapper ${className || ""}`} style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <Image
        src={light}
        alt={alt}
        fill
        unoptimized
        className="hero-logo-light"
        style={{
          opacity: mounted && theme === "dark" ? 0 : 1,
          transition: "opacity 0.2s ease",
          objectFit: "contain",
        }}
      />
      <Image
        src={dark}
        alt={alt}
        fill
        unoptimized
        className="hero-logo-dark"
        style={{
          opacity: mounted && theme === "dark" ? 1 : 0,
          transition: "opacity 0.2s ease",
          objectFit: "contain",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

function SingleLogo({ src, alt, className, size = 32 }: { src: string; alt: string; className?: string; size?: number }) {
  return (
    <div className={`hero-logo-wrapper ${className || ""}`} style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "48px",
        maxWidth: "100%",
        padding: `calc(var(--landing-vpadding) * 1.5) var(--landing-padding)`,
      }}
      className="fade-in hero-section"
    >
      <div
        className="hero-left"
        style={{
          flex: "1 1 0",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
      {/* Announcement badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <span
          style={{
            background: "var(--landing-bg-strong)",
            color: "var(--landing-text-inverted)",
            fontWeight: 500,
            padding: "4px 8px",
            lineHeight: 1,
            flexShrink: 0,
            fontFamily: "var(--landing-font-mono)",
            fontSize: "12px",
          }}
        >
          New
        </span>
        <span style={{ color: "var(--landing-text-strong)", lineHeight: 1.4, fontSize: "14px" }}>
          Orbit Plus gets AI planning and unlimited history
        </span>
      </div>

      <h1 className="hero-reveal-heading" aria-label="Cultivate your focus. Plan deeper days.">
        <span className="sr-only">Cultivate your focus. Plan deeper days.</span>
        <VerticalCutReveal
          aria-hidden="true"
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
          }}
          containerClassName="hero-reveal-line"
          elementLevelClassName="hero-reveal-character"
        >
          {`CULTIVATE YOUR`}
        </VerticalCutReveal>
        <span className="hero-reveal-line hero-reveal-line-with-focus-icon" aria-hidden="true">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="last"
            reverse
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 0.5,
            }}
            containerClassName="hero-reveal-inline-copy"
            elementLevelClassName="hero-reveal-character"
          >
            {`FOCUS`}
          </VerticalCutReveal>
          <span className="hero-inline-focus-emoji">🎯</span>
        </span>
        <span className="hero-reveal-line hero-reveal-line-tertiary hero-reveal-line-with-icon" aria-hidden="true">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="center"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 1.05,
            }}
            containerClassName="hero-reveal-inline-copy"
            elementLevelClassName="hero-reveal-character"
          >
            {`PLAN DEEPER DAYS`}
          </VerticalCutReveal>
          <span className="hero-inline-apple-calendar-reveal">
            <motion.span
              className="hero-inline-apple-calendar-motion"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 1.45,
              }}
            >
              <Image
                src="/logos/apple-calendar.png"
                alt=""
                width={42}
                height={42}
                unoptimized
                className="hero-inline-apple-calendar"
              />
            </motion.span>
          </span>
        </span>
      </h1>

      {/* Hero subtitle */}
      <p
        style={{
          marginBottom: "32px",
          maxWidth: "36rem",
        }}
        className="hero-subtitle"
      >
        Orbit is a minimal productivity environment for deep work and intentional planning.
        AI-powered scheduling, focus timers, and goal tracking help you reclaim your attention.
      </p>

      {/* Brand logos row */}
      <div
        className="hero-logos-row"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
          marginBottom: "40px",
        }}
      >
        <DualLogo light="/logos/openai-black.svg" dark="/logos/openai-white.svg" alt="OpenAI" size={40} />
        <SingleLogo src="/logos/claude.svg" alt="Claude" size={30} />
        <SingleLogo src="/logos/gemini.png" alt="Gemini" size={30} />
        <SingleLogo src="/logos/google-logo.svg" alt="Google" size={30} />
        <DualLogo light="/logos/apple-black.svg" dark="/logos/apple-white.svg" alt="Apple" size={30} />
      </div>

      {/* CTA Button */}
      <Link
        href="/landing/signup"
        style={{
          background: "var(--landing-bg-strong)",
          color: "var(--landing-text-inverted)",
          padding: "12px 20px 12px 24px",
          borderRadius: "4px",
          fontWeight: 500,
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          fontFamily: "var(--landing-font-mono)",
          fontSize: "14px",
          width: "fit-content",
          marginBottom: "16px",
        }}
      >
        <span>Start for</span>
          <span
            style={{
              background: "var(--landing-text-inverted)",
              color: "var(--landing-bg-strong)",
              padding: "4px 8px",
              borderRadius: "3px",
              fontSize: "12px",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              lineHeight: 1,
            }}
          >
          FREE
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          >
            <path d="M6.5 12L17 12M13 16.5L17.5 12L13 7.5" />
          </svg>
        </span>
      </Link>

      {/* Pricing note */}
      <p
        style={{
          color: "var(--landing-text-weak)",
          fontSize: "13px",
          lineHeight: 1.5,
        }}
      >
        Core features are free forever. Orbit Plus is $3/month for advanced AI planning
        and unlimited history. Cancel any time.
      </p>
      </div>

      <div
        className="hero-right"
        style={{
          flex: "0 0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeroAsciiOrbit />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        /* Dark mode filters for single-color logos */
        .landing-page[data-theme="dark"] .hero-logos-row .logo-claude {
          filter: brightness(1.3) contrast(0.9);
        }

        .hero-reveal-heading {
          display: flex;
          flex-direction: column;
          gap: 0.095em;
          margin: 0 0 20px;
          color: #ffffff;
          font-family: var(--font-overused-grotesk), sans-serif;
          font-size: clamp(2.7rem, 5.8vw, 4.4rem);
          font-weight: 320;
          font-variation-settings: "wght" 320;
          line-height: 0.94;
          letter-spacing: 0.018em;
          text-transform: uppercase;
        }

        .landing-page:not([data-theme="dark"]) .hero-reveal-heading {
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.55), 0 0 12px rgba(0, 0, 0, 0.12);
        }

        .hero-reveal-line {
          display: flex;
          width: 100%;
          align-items: baseline;
        }

        .hero-reveal-inline-copy {
          display: inline-flex;
        }

        .hero-reveal-character {
          padding-block: 0.12em;
          margin-block: -0.12em;
        }

        .hero-reveal-line-tertiary {
          font-size: 0.6em;
          letter-spacing: 0.028em;
        }

        .hero-reveal-line-with-focus-icon {
          gap: 0.22em;
        }

        .hero-inline-focus-emoji {
          display: inline-flex;
          font-size: 0.72em;
          align-items: center;
          align-self: baseline;
          line-height: 1;
          transform: translateY(0.04em);
        }

        .hero-reveal-line-with-icon {
          align-items: baseline;
          gap: 0.26em;
        }

        .hero-inline-apple-calendar-reveal {
          display: inline-flex;
          overflow: hidden;
          align-self: baseline;
          line-height: 1;
        }

        .hero-inline-apple-calendar-motion {
          display: inline-flex;
          align-items: flex-end;
        }

        .hero-inline-apple-calendar {
          display: inline-block;
          width: 0.92em;
          height: 0.92em;
          object-fit: contain;
          transform: translateY(0.06em);
        }

        .hero-subtitle {
          color: var(--landing-text);
          font-family: var(--font-overused-grotesk), sans-serif;
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          line-height: 1.45;
          letter-spacing: 0.01em;
        }

        @media (max-width: 60rem) {
          .hero-reveal-heading {
            font-size: clamp(2.15rem, 10.5vw, 3.4rem) !important;
          }
          .hero-logos-row {
            gap: 20px !important;
          }
        }

        @media (max-width: 50rem) {
          .hero-subtitle {
            max-width: 100% !important;
          }
        }

        @media (max-width: 60rem) {
          .hero-section {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
