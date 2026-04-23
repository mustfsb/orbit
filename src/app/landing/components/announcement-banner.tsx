import React from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  return (
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
        }}
      >
        New
      </span>
      <span style={{ color: "var(--landing-text-strong)", lineHeight: 1.4 }}>
        Desktop app available{" "}
        <span className="hidden-on-mobile-sm">on macOS, Windows, and Linux.</span>
        <span className="show-on-mobile-sm">.</span>
      </span>
      <Link
        href="#newsletter"
        className="hidden-mobile-xs"
        style={{
          color: "var(--landing-text-weak)",
          whiteSpace: "nowrap",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.textDecoration = "underline";
          (e.currentTarget as HTMLElement).style.textUnderlineOffset = "2px";
          (e.currentTarget as HTMLElement).style.textDecorationThickness = "1px";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.textDecoration = "none";
        }}
      >
        Get launch updates
      </Link>
      <Link
        href="#newsletter"
        className="show-mobile-xs"
        style={{
          color: "var(--landing-text-weak)",
          whiteSpace: "nowrap",
          textDecoration: "none",
          display: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.textDecoration = "underline";
          (e.currentTarget as HTMLElement).style.textUnderlineOffset = "2px";
          (e.currentTarget as HTMLElement).style.textDecorationThickness = "1px";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.textDecoration = "none";
        }}
      >
        Join the waitlist
      </Link>
      <style jsx>{`
        @media (max-width: 49.125rem) {
          .hidden-on-mobile-sm {
            display: none;
          }
          .show-on-mobile-sm {
            display: inline;
          }
        }
        @media (min-width: 49.125rem) {
          .show-on-mobile-sm {
            display: none;
          }
        }
        @media (max-width: 30.625rem) {
          .hidden-mobile-xs {
            display: none !important;
          }
          .show-mobile-xs {
            display: inline !important;
          }
        }
      `}</style>
    </div>
  );
}
