"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { NavActions } from "@/components/ui/NavActions";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/policies-and-priorities", label: "Policies" },
  { href: "/resources", label: "Resources" },
  { href: "/news", label: "News" },
];

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideBottomBorder, setHideBottomBorder] = useState(false);
  const [isPill, setIsPill] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pillTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const borderTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY > 20;
      setScrolled(s);
      // Only update pill state when menu is closed
      if (!menuOpen) {
        if (s) setIsPill(true);
        else setIsPill(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // When menu opens: drop to rect immediately
  // When menu closes: restore pill after animation finishes (if still scrolled)
  useEffect(() => {
    if (pillTimerRef.current) clearTimeout(pillTimerRef.current);
    if (pillTimerRef.current) clearTimeout(pillTimerRef.current);
    if (menuOpen) {
      setIsPill(false);
      setHideBottomBorder(true);
    } else if (scrolled) {
      pillTimerRef.current = setTimeout(() => setIsPill(true), 320);
      if (borderTimerRef.current) clearTimeout(borderTimerRef.current);
      borderTimerRef.current = setTimeout(() => setHideBottomBorder(false), 310);
    } else {
      setIsPill(false);
      if (borderTimerRef.current) clearTimeout(borderTimerRef.current);
      borderTimerRef.current = setTimeout(() => setHideBottomBorder(false), 310);
    }
  }, [menuOpen, scrolled]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navWidth = isMobile ? "95%" : "1250px";
  const navScrolledWidth = isMobile ? "85%" : "60%";

  const isStyled = scrolled || (isMobile && menuOpen);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        paddingLeft: "var(--px-site, 1.5rem)",
        paddingRight: "var(--px-site, 1.5rem)",
        paddingTop: isStyled ? "12px" : "0px",
        paddingBottom: isStyled ? "4px" : "0px",
        transition: "padding-top 400ms ease, padding-bottom 400ms ease",
      }}
    >
      {/* Wrapper: sized to match the navbar bar, relative for the absolute menu panel */}
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          margin: "0 auto",
          maxWidth: isStyled ? navScrolledWidth : navWidth,
          width: "100%",
          transition: "max-width 400ms ease",
        }}
      >
        {/* Navbar bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: !isStyled
              ? "0px"
              : menuOpen
              ? "16px 16px 0 0"
              : isPill
              ? "9999px"
              : "16px",
            border: isStyled ? "1px solid var(--border)" : "1px solid transparent",
            borderBottom: hideBottomBorder ? "1px solid transparent" : undefined,
            backgroundColor: isStyled
              ? "color-mix(in srgb, var(--background) 90%, transparent)"
              : "transparent",
            backdropFilter: isStyled ? "blur(18px)" : "none",
            WebkitBackdropFilter: isStyled ? "blur(18px)" : "none",
            paddingTop: isStyled ? "8px" : "20px",
            paddingBottom: isStyled ? "8px" : "20px",
            paddingLeft: isStyled ? "16px" : "0px",
            paddingRight: isStyled ? "16px" : "0px",
            transition: "border 200ms ease, background-color 350ms ease, backdrop-filter 350ms ease, padding 350ms ease",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, marginRight: "8px" }}>
            <Image src="/images/logo.svg" alt="Orbit" width={62} height={24} priority className="h-6 w-auto dark:invert" />
          </Link>

          {isMobile ? (
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--foreground)",
                opacity: 0.7,
                flexShrink: 0,
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
              <nav style={{ display: "flex", alignItems: "center" }}>
                <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0, gap: "2px" }}>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "32px",
                          padding: "0 10px",
                          borderRadius: "6px",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--foreground)",
                          opacity: 0.8,
                          transition: "background 150ms ease, opacity 150ms ease",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--muted)"; (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.opacity = "0.8"; }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <NavActions />
            </div>
          )}
        </div>

        {/* Mobile menu — absolutely positioned so it overlays content without pushing it */}
        {isMobile && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 10,
              maxHeight: menuOpen ? "400px" : "0px",
              opacity: menuOpen ? 1 : 0,
              overflow: "hidden",
              pointerEvents: menuOpen ? "auto" : "none",
              transition: "max-height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease",
            }}
          >
            {/* Border is inside overflow:hidden so it collapses with the content — no stray line */}
            <div style={{
              borderLeft: "1px solid var(--border)",
              borderRight: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              borderRadius: "0 0 16px 16px",
              backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}>
            <div style={{ padding: "8px" }}>
              <nav>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "44px",
                          padding: "0 12px",
                          borderRadius: "8px",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--foreground)",
                          transition: "background 150ms ease",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--muted)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        {link.href === navLinks[0].href ? link.label : link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div style={{ borderTop: "1px solid var(--border)", marginTop: "8px", paddingTop: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                <NavActions />
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
