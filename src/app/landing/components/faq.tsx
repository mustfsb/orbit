"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Orbit?",
    answer:
      "Orbit is an AI-powered productivity companion that helps you plan deep work sessions, track goals, and maintain focus through intelligent scheduling and distraction-free environments.",
  },
  {
    question: "How do I use Orbit?",
    answer:
      "Sign up for free, set your goals, and let Orbit generate a personalized weekly plan. Use the focus timer to execute deep work sessions and journal to reflect on your progress.",
  },
  {
    question: "Do I need extra subscriptions to use Orbit?",
    answer:
      "No. Orbit's core features are completely free. Orbit Plus ($3/month) adds AI planning, unlimited history, and advanced analytics. Orbit Pro+ is $75 one-time for lifetime access.",
  },
  {
    question: "Can I sync with my existing tools?",
    answer:
      "Yes. Orbit syncs with Google Calendar, Outlook, and Apple Calendar. You can also connect your own OpenAI, Claude, or Gemini API key for enhanced AI features.",
  },
  {
    question: "Can I only use Orbit on the web?",
    answer:
      "No. Orbit is available on the web, as a desktop app for macOS, Windows, and Linux, and as an installable mobile PWA.",
  },
  {
    question: "How much does Orbit cost?",
    answer:
      "Core features are free forever. Orbit Plus is $3/month for AI planning and unlimited history. Orbit Pro+ is $75 one-time with all future updates included.",
  },
  {
    question: "What about data and privacy?",
    answer:
      "Your journal entries and focus data are encrypted and never used for training third-party models. You can export all your data at any time. Learn more in our privacy documentation.",
  },
  {
    question: "Is there a free trial for Plus?",
    answer:
      "Yes. Every new account gets a 14-day free trial of Orbit Plus with full access to AI planning, unlimited history, and advanced analytics. No credit card required.",
  },
];

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, color: "var(--landing-text-weak)" }}
    >
      <path
        d="M8 3V13M3 8H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, color: "var(--landing-text-weak)" }}
    >
      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      style={{
        borderTop: "1px solid var(--landing-border-weak)",
        padding: "var(--landing-vpadding) var(--landing-padding)",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "var(--landing-text-strong)",
          marginBottom: "24px",
        }}
      >
        FAQ
      </h3>
      <ul style={{ padding: 0 }}>
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(index);
          return (
            <li
              key={index}
              style={{
                listStyle: "none",
                marginBottom: "24px",
                lineHeight: "200%",
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: isOpen ? "8px" : "0px",
                  color: "var(--landing-text-strong)",
                  fontWeight: 500,
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                  alignItems: "center",
                  minHeight: "24px",
                  width: "100%",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                }}
              >
                {isOpen ? <MinusIcon /> : <PlusIcon />}
                <span style={{ flexGrow: 1, textAlign: "left" }}>{faq.question}</span>
              </button>
              <div
                style={{
                  marginLeft: "40px",
                  marginBottom: isOpen ? "32px" : "0px",
                  lineHeight: "200%",
                  color: "var(--landing-text)",
                  maxHeight: isOpen ? "500px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease, opacity 0.3s ease, margin-bottom 0.3s ease",
                }}
              >
                {faq.answer}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
