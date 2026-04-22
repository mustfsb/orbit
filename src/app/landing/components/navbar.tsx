"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDarkMode } from "./dark-mode-provider";

function BrandLogo() {
  const { theme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch — render neutral on server
  if (!mounted) {
    return (
      <svg width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <text x="64" y="96" textAnchor="middle" fontFamily='"Times New Roman", Times, serif' fontStyle="italic" fontSize="140" fill="var(--landing-text-strong)">
          O
        </text>
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="orbit-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <text
        x="64"
        y="96"
        textAnchor="middle"
        fontFamily='"Times New Roman", Times, serif'
        fontStyle="italic"
        fontSize="140"
        fill={theme === "dark" ? "#fff" : "url(#orbit-icon-gradient)"}
      >
        O
      </text>
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "6px",
        color: "var(--landing-text-strong)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!mounted ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
        </svg>
      ) : theme === "dark" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

const navLinks = [
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        minHeight: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `10px var(--landing-padding)`,
        position: "sticky",
        top: 0,
        background: "var(--landing-bg)",
        borderBottom: "1px solid var(--landing-border-weak)",
        zIndex: 10,
      }}
    >
      <Link
        href="/landing"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BrandLogo />
      </Link>

      {/* Desktop nav */}
      <nav
        className="landing-nav-desktop"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "var(--landing-text-strong)",
              fontSize: "14px",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/landing/login"
          style={{
            textDecoration: "none",
            color: "var(--landing-text-strong)",
            fontSize: "14px",
            padding: "6px 12px",
          }}
        >
          Log in
        </Link>
        <Link
          href="/landing/signup"
          style={{
            background: "var(--landing-bg-strong)",
            color: "var(--landing-text-inverted)",
            padding: "6px 14px",
            borderRadius: "4px",
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Sign up
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile controls */}
      <div
        className="landing-nav-mobile-controls"
        style={{
          display: "none",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <ThemeToggle />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            color: "var(--landing-text-strong)",
          }}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — grid layout */}
      {mobileMenuOpen && (
        <div
          className="landing-nav-mobile"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--landing-bg)",
            borderBottom: "1px solid var(--landing-border-weak)",
            zIndex: 20,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="landing-nav-mobile-cell"
              style={{
                textDecoration: "none",
                color: "var(--landing-text-strong)",
                padding: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 500,
                fontSize: "14px",
                transition: "background 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--landing-bg-weak)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/landing/login"
            className="landing-nav-mobile-cell"
            style={{
              textDecoration: "none",
              color: "var(--landing-text-strong)",
              padding: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: "14px",
              transition: "background 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--landing-bg-weak)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Log in
          </Link>
          <Link
            href="/landing/signup"
            className="landing-nav-mobile-cell landing-nav-mobile-signup"
            style={{
              background: "var(--landing-bg-strong)",
              color: "var(--landing-text-inverted)",
              padding: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Sign up
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 40rem) {
          .landing-nav-desktop {
            display: none !important;
          }
          .landing-nav-mobile-controls {
            display: flex !important;
          }
          .landing-nav-mobile {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
          }
          .landing-nav-mobile-cell {
            border-top: 1px solid var(--landing-border-weak);
          }
          .landing-nav-mobile-cell:nth-child(odd) {
            border-right: 1px solid var(--landing-border-weak);
          }
          .landing-nav-mobile-signup {
            grid-column: span 2;
            border-right: none !important;
          }
        }
        @media (min-width: 40.001rem) {
          .landing-nav-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
