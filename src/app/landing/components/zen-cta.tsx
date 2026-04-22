"use client";

function ClaudeLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 2L4 8.5V19.5L14 26L24 19.5V8.5L14 2Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M14 6L8 10.5V17.5L14 22L20 17.5V10.5L14 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function OpenAILogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 4V7M14 21V24M4 14H7M21 14H24M6.7 6.7L8.8 8.8M19.2 19.2L21.3 21.3M6.7 21.3L8.8 19.2M19.2 8.8L21.3 6.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4C19.5 4 24 8.5 24 14C24 19.5 19.5 24 14 24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 24C8.5 24 4 19.5 4 14C4 8.5 8.5 4 14 4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="14" cy="14" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function GenericLogo1() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 14H19M14 9V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GenericLogo2() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4L24 10V18L14 24L4 18V10L14 4Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function GenericLogo3() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4C20 4 24 8 24 14C24 20 20 24 14 24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 24C8 24 4 20 4 14C4 8 8 4 14 4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

function GenericLogo4() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="16" height="16" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 14H18M14 10V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const logos = [
  ClaudeLogo,
  OpenAILogo,
  GoogleLogo,
  GenericLogo1,
  GenericLogo2,
  GenericLogo3,
  GenericLogo4,
];

export default function ZenCTA() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--landing-border-weak)",
        display: "flex",
        flexDirection: "column",
        padding: "var(--landing-vpadding) var(--landing-padding)",
      }}
    >
      <strong
        style={{
          color: "var(--landing-text-strong)",
          fontWeight: 700,
          marginBottom: "16px",
          display: "block",
        }}
      >
        Access AI-optimized planning models
      </strong>
      <p
        style={{
          color: "var(--landing-text)",
          marginBottom: "24px",
          maxWidth: "90%",
        }}
      >
        Zen gives you access to handpicked AI models fine-tuned for productivity and focus. No more generic advice — get plans that actually work for your cognitive patterns.
      </p>
      <div
        style={{
          display: "flex",
          gap: "24px",
          marginBottom: "40px",
          flexWrap: "wrap",
          color: "var(--landing-bg-strong)",
        }}
      >
        {logos.map((Logo, i) => (
          <Logo key={i} />
        ))}
      </div>
      <a
        href="/zen"
        style={{
          background: "var(--landing-bg)",
          color: "var(--landing-text-strong)",
          border: "1px solid var(--landing-border-weak)",
          borderRadius: "4px",
          padding: "8px 12px 8px 20px",
          fontWeight: 500,
          display: "flex",
          width: "fit-content",
          gap: "12px",
          textDecoration: "none",
          fontFamily: "var(--landing-font-mono)",
          alignItems: "center",
          transition: "background 150ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--landing-bg-weak)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--landing-bg)";
        }}
      >
        Learn about Zen
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
    </section>
  );
}
