"use client";

import React, { useState } from "react";

const tabs = [
  { id: "curl", label: "curl", command: "curl -fsSL https://orbit.dev/install | bash" },
  { id: "npm", label: "npm", command: "npm install -g @orbit/cli" },
  { id: "bun", label: "bun", command: "bun install -g @orbit/cli" },
  { id: "brew", label: "brew", command: "brew install orbit" },
  { id: "paru", label: "paru", command: "paru -S orbit" },
] as const;

export default function TerminalTabs() {
  const [activeTab, setActiveTab] = useState<string>("curl");
  const [copied, setCopied] = useState(false);

  const activeCommand = tabs.find((t) => t.id === activeTab)?.command ?? "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          border: "1px solid var(--landing-border-weak)",
          borderBottom: "none",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          background: "var(--landing-bg-weak)",
          padding: "0 20px",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              appearance: "none",
              background: "transparent",
              border: 0,
              padding: "16px 0",
              cursor: "pointer",
              color:
                activeTab === tab.id
                  ? "var(--landing-text-strong)"
                  : "var(--landing-text-weak)",
              lineHeight: 1,
              borderBottom:
                activeTab === tab.id
                  ? "2px solid var(--landing-bg-strong)"
                  : "2px solid transparent",
              fontFamily: "var(--landing-font-mono)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        style={{
          background: "var(--landing-bg-weak)",
          border: "1px solid var(--landing-border-weak)",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          padding: "16px",
        }}
      >
        <pre
          style={{
            fontSize: "16px",
            fontFamily: "var(--landing-font-mono)",
            margin: 0,
            overflow: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          <button
            onClick={handleCopy}
            style={{
              all: "unset",
              display: "flex",
              maxWidth: "100%",
              cursor: "pointer",
              alignItems: "center",
              gap: "16px",
              padding: "8px 16px 8px 8px",
              borderRadius: "4px",
              color: "var(--landing-text)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--landing-bg-weak-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <span style={{ fontWeight: 500, color: "var(--landing-text-strong)" }}>
              $
            </span>{" "}
            <span>{activeCommand}</span>
            <span style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
              {copied ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
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
                  style={{ color: "var(--landing-icon)" }}
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </span>
          </button>
        </pre>
      </div>
    </div>
  );
}
