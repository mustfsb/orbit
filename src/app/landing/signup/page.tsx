"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div>
      <div style={{ padding: "var(--landing-padding)" }}>
        <Link
          href="/landing"
          style={{
            color: "var(--landing-text-weak)",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 200px)",
          padding: "var(--landing-padding)",
          borderTop: "1px solid var(--landing-border-weak)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "360px",
            border: "1px solid var(--landing-border-weak)",
            borderRadius: "4px",
            padding: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "var(--landing-text-strong)",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            Create your account
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "var(--landing-text)",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Start your 14-day free trial of Orbit Plus.
          </p>

          <form>
            <label
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--landing-text-strong)",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
              }}
            >
              Email
            </label>
            <input
              type="email"
              style={{
                width: "100%",
                background: "var(--landing-bg-weak)",
                border: "1px solid var(--landing-border-weak)",
                borderRadius: "4px",
                padding: "12px 16px",
                color: "var(--landing-text-strong)",
                fontFamily: "var(--landing-font-mono)",
                fontSize: "14px",
                marginBottom: "20px",
                outline: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--landing-bg-strong)";
                e.currentTarget.style.boxShadow = "0 0 0 3px var(--landing-bg-interactive)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--landing-border-weak)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />

            <label
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--landing-text-strong)",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
              }}
            >
              Password
            </label>
            <input
              type="password"
              style={{
                width: "100%",
                background: "var(--landing-bg-weak)",
                border: "1px solid var(--landing-border-weak)",
                borderRadius: "4px",
                padding: "12px 16px",
                color: "var(--landing-text-strong)",
                fontFamily: "var(--landing-font-mono)",
                fontSize: "14px",
                marginBottom: "20px",
                outline: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--landing-bg-strong)";
                e.currentTarget.style.boxShadow = "0 0 0 3px var(--landing-bg-interactive)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--landing-border-weak)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />

            <label
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--landing-text-strong)",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              style={{
                width: "100%",
                background: "var(--landing-bg-weak)",
                border: "1px solid var(--landing-border-weak)",
                borderRadius: "4px",
                padding: "12px 16px",
                color: "var(--landing-text-strong)",
                fontFamily: "var(--landing-font-mono)",
                fontSize: "14px",
                marginBottom: "20px",
                outline: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--landing-bg-strong)";
                e.currentTarget.style.boxShadow = "0 0 0 3px var(--landing-bg-interactive)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--landing-border-weak)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                background: "var(--landing-bg-strong)",
                color: "var(--landing-text-inverted)",
                padding: "12px",
                borderRadius: "4px",
                border: "none",
                fontWeight: 500,
                fontFamily: "var(--landing-font-mono)",
                fontSize: "14px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--landing-bg-strong-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--landing-bg-strong)";
              }}
            >
              Create account
            </button>
          </form>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "24px 0",
              gap: "12px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "var(--landing-border-weak)",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                color: "var(--landing-text-weaker)",
                fontFamily: "var(--landing-font-mono)",
              }}
            >
              or
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "var(--landing-border-weak)",
              }}
            />
          </div>

          <button
            type="button"
            style={{
              width: "100%",
              background: "transparent",
              color: "var(--landing-text-strong)",
              padding: "12px",
              borderRadius: "4px",
              border: "1px solid var(--landing-border-weak)",
              fontWeight: 500,
              fontFamily: "var(--landing-font-mono)",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--landing-bg-weak-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Continue with GitHub
          </button>
        </div>

        <p
          style={{
            fontSize: "13px",
            color: "var(--landing-text)",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          Already have an account?{" "}
          <Link
            href="/landing/login"
            style={{
              color: "var(--landing-text-strong)",
              textDecoration: "underline",
            }}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
