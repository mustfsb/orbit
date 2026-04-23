"use client";

const links = [
  { label: "GitHub", count: null, href: "https://github.com/orbit/orbit" },
  { label: "Docs", count: null, href: "#features" },
  { label: "Changelog", count: null, href: "#pricing" },
  { label: "Discord", count: null, href: "#newsletter" },
  { label: "X", count: null, href: "https://x.com/orbit" },
];

export default function Footer() {
  return (
    <footer>
      <div
        className="footer-grid"
        style={{
          borderTop: "1px solid var(--landing-border-weak)",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="footer-cell"
            style={{
              textAlign: "center",
              textDecoration: "none",
              padding: "2rem 0",
              display: "block",
              color: "var(--landing-text-strong)",
              fontFamily: "var(--landing-font-mono)",
              transition: "background 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--landing-bg-weak)";
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textUnderlineOffset = "4px";
              e.currentTarget.style.textDecorationThickness = "1px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            {link.label}
            {link.count && (
              <span
                className="star-count"
                style={{ color: "var(--landing-text-weak)", marginLeft: "8px" }}
              >
                [{link.count}]
              </span>
            )}
          </a>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px var(--landing-padding)",
          fontSize: "12px",
          color: "var(--landing-text-weak)",
        }}
      >
        <span>&copy;2026 Orbit</span>
        <div style={{ display: "flex", gap: "16px" }}>
          <a
            href="#landing-root"
            style={{
              color: "var(--landing-text-weak)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Brand
          </a>
          <a
            href="#privacy"
            style={{
              color: "var(--landing-text-weak)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Privacy
          </a>
          <a
            href="#faq"
            style={{
              color: "var(--landing-text-weak)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Terms
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          border-bottom: none;
        }
        .footer-cell {
          border-right: 1px solid var(--landing-border-weak);
        }
        .footer-cell:last-child {
          border-right: none;
        }
        @media (max-width: 65rem) {
          .footer-grid {
            border-bottom: 1px solid var(--landing-border-weak);
          }
        }
        @media (max-width: 40rem) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .footer-cell:nth-child(3) {
            border-right: none;
          }
          .footer-cell:nth-child(n + 4) {
            border-top: 1px solid var(--landing-border-weak);
          }
          .star-count {
            display: none;
          }
        }
        @media (max-width: 25rem) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-cell:nth-child(2) {
            border-right: none;
          }
          .footer-cell:nth-child(3) {
            border-right: 1px solid var(--landing-border-weak);
            border-top: 1px solid var(--landing-border-weak);
          }
          .footer-cell:nth-child(4) {
            border-right: none;
            border-top: 1px solid var(--landing-border-weak);
          }
          .footer-cell:nth-child(5) {
            border-right: 1px solid var(--landing-border-weak);
            border-top: 1px solid var(--landing-border-weak);
          }
        }
      `}</style>
    </footer>
  );
}
