"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/components.module.css";

const navLinks: { href: string; label: string; badge?: string }[] = [
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/policies-and-priorities", label: "Policies" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
];

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("orbit-theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("orbit-theme", next);
    setTheme(next);
  };

  const ThemeButton = () => (
    <button
      type="button"
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logoLink} aria-label="Orbit home">
          <Image src="/images/logo.svg" alt="Orbit" width={62} height={24} priority />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
              {link.badge ? <span className={styles.badge}>{link.badge}</span> : null}
            </Link>
          ))}
        </nav>

        <div className={styles.navActions}>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact
          </Link>
          <Link href="/waitlist" className={styles.primaryButton}>
            Join waitlist
          </Link>
          <ThemeButton />
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`} />
        </button>
      </div>

      <nav
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink} onClick={() => setOpen(false)}>
            {link.label}
            {link.badge ? <span className={styles.badge}>{link.badge}</span> : null}
          </Link>
        ))}
        <Link href="/contact" className={styles.secondaryButton} onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link href="/waitlist" className={styles.primaryButton} onClick={() => setOpen(false)}>
          Join waitlist
        </Link>
        <ThemeButton />
      </nav>
    </header>
  );
}
