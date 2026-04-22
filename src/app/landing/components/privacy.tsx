"use client";

export default function Privacy() {
  return (
    <section
      className="landing-section"
      style={{
        borderTop: "1px solid var(--landing-border-weak)",
        padding: "var(--landing-vpadding) var(--landing-padding)",
      }}
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <span style={{ color: "var(--landing-icon)", flexShrink: 0, marginTop: "2px" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2L3 5.5V9.5C3 13.5 6 17 10 18C14 17 17 13.5 17 9.5V5.5L10 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 10L9.5 12L13 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--landing-text-strong)",
              marginBottom: "12px",
            }}
          >
            Built for privacy first
          </h3>
          <p style={{ lineHeight: "200%" }}>
            Orbit does not store any of your personal journal entries or focus
            data without explicit permission. Your thoughts remain yours.{" "}
            <a
              href="/privacy"
              style={{
                color: "var(--landing-text-strong)",
                textDecoration: "underline",
              }}
            >
              Learn more about privacy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
