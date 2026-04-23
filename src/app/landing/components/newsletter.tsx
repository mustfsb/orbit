"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      style={{
        borderTop: "1px solid var(--landing-border-weak)",
        padding: "var(--landing-vpadding) var(--landing-padding)",
        color: "var(--landing-text)",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "var(--landing-text-strong)",
          marginBottom: "12px",
        }}
      >
        Be the first to know when we release new features
      </h3>
      <p style={{ marginBottom: "24px" }}>Join the waitlist for early access.</p>

      {submitted ? (
        <p style={{ color: "var(--landing-text-strong)", fontWeight: 500 }}>Subscribed!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="newsletter-form"
          style={{ position: "relative" }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="newsletter-input"
            style={{
              background: "var(--landing-bg-weak)",
              borderRadius: "6px",
              border: "1px solid var(--landing-border-weak)",
              padding: "20px",
              width: "100%",
              color: "var(--landing-text-strong)",
              fontFamily: "var(--landing-font-mono)",
              outline: "none",
            }}
            required
          />
          <button
            type="submit"
            className="newsletter-button"
            style={{
              position: "absolute",
              height: "40px",
              right: "12px",
              top: "50%",
              marginTop: "-20px",
              background: "var(--landing-bg-strong)",
              padding: "4px 20px",
              color: "var(--landing-text-inverted)",
              borderRadius: "4px",
              border: "none",
              outline: "none",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "var(--landing-font-mono)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--landing-bg-strong-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--landing-bg-strong)";
            }}
          >
            Subscribe
          </button>
        </form>
      )}

      <style jsx>{`
        .newsletter-input::placeholder {
          color: var(--landing-text-weak);
          opacity: 1;
        }
        .newsletter-input:focus {
          background: var(--landing-bg-interactive-weaker);
          outline: none;
          border: 1px solid var(--landing-bg-strong);
          box-shadow: 0 0 0 3px var(--landing-bg-interactive);
        }
        @media (max-width: 30rem) {
          .newsletter-button {
            position: relative !important;
            left: 0;
            right: 0;
            bottom: 0;
            top: auto;
            width: 100%;
            margin-top: 12px;
          }
          .newsletter-input {
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
