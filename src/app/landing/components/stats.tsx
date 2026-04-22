"use client";

export default function Stats() {
  const stats = [
    {
      fig: "Fig 1.",
      value: "2K+",
      label: "Waitlist Signups",
      svg: (
        <svg
          width="180"
          height="80"
          viewBox="0 0 180 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Line chart with upward trend */}
          <path
            d="M0 70 L20 65 L40 55 L60 58 L80 42 L100 38 L120 25 L140 22 L160 10 L180 5"
            stroke="#565656"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Area fill below the line */}
          <path
            d="M0 70 L20 65 L40 55 L60 58 L80 42 L100 38 L120 25 L140 22 L160 10 L180 5 L180 80 L0 80 Z"
            fill="#565656"
            fillOpacity="0.06"
          />
          {/* Dots on the line */}
          <circle cx="20" cy="65" r="3" fill="#8E8B8B" />
          <circle cx="40" cy="55" r="3" fill="#8E8B8B" />
          <circle cx="60" cy="58" r="3" fill="#BCBBBB" />
          <circle cx="80" cy="42" r="3" fill="#BCBBBB" />
          <circle cx="100" cy="38" r="3" fill="#DAD9D9" />
          <circle cx="120" cy="25" r="3" fill="#DAD9D9" />
          <circle cx="140" cy="22" r="4" fill="#565656" />
          <circle cx="160" cy="10" r="4" fill="#565656" />
          <circle cx="180" cy="5" r="5" fill="#565656" />
        </svg>
      ),
    },
    {
      fig: "Fig 2.",
      value: "500+",
      label: "Beta Testers",
      svg: (
        <svg
          width="180"
          height="80"
          viewBox="0 0 180 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((col) =>
            [0, 1, 2, 3, 4, 5].map((row) => (
              <circle
                key={`${col}-${row}`}
                cx={col * 15 + 7}
                cy={row * 13 + 7}
                r="4"
                fill={
                  [
                    "#CFCECD",
                    "#8E8B8B",
                    "#BCBBBB",
                    "#DAD9D9",
                    "#565656",
                    "#F1F0F0",
                  ][(col + row) % 6]
                }
                fillOpacity={0.15 + ((col * 5 + row) % 9) * 0.09}
              />
            ))
          )}
        </svg>
      ),
    },
    {
      fig: "Fig 3.",
      value: "10K+",
      label: "Focus Sessions",
      svg: (
        <svg
          width="180"
          height="80"
          viewBox="0 0 180 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="55" width="22" height="25" fill="#CFCECD" fillOpacity="0.2" />
          <rect x="26" y="42" width="22" height="38" fill="#8E8B8B" fillOpacity="0.35" />
          <rect x="52" y="35" width="22" height="45" fill="#BCBBBB" fillOpacity="0.5" />
          <rect x="78" y="28" width="22" height="52" fill="#DAD9D9" fillOpacity="0.65" />
          <rect x="104" y="18" width="22" height="62" fill="#565656" fillOpacity="0.8" />
          <rect x="130" y="8" width="22" height="72" fill="#F1F0F0" fillOpacity="0.95" />
          <rect x="156" y="2" width="22" height="78" fill="#565656" fillOpacity="0.98" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="landing-section"
      style={{
        borderTop: "1px solid var(--landing-border-weak)",
        padding: "var(--landing-vpadding) var(--landing-padding)",
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--landing-text-strong)",
            marginBottom: "12px",
          }}
        >
          Trusted by focused minds
        </h3>
        <p style={{ lineHeight: "200%" }}>
          With over{" "}
          <strong style={{ color: "var(--landing-text-strong)", fontWeight: 500 }}>
            2,000
          </strong>{" "}
          waitlist signups,{" "}
          <strong style={{ color: "var(--landing-text-strong)", fontWeight: 500 }}>
            500
          </strong>{" "}
          beta testers, and more than{" "}
          <strong style={{ color: "var(--landing-text-strong)", fontWeight: 500 }}>
            10,000
          </strong>{" "}
          focus sessions logged, Orbit is helping people reclaim their attention every day.
        </p>
      </div>

      <div
        className="stats-container"
        style={{
          marginTop: "48px",
          marginLeft: "40px",
          display: "flex",
          gap: "64px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.fig}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              textAlign: "left",
              width: "100%",
            }}
          >
            <div>{stat.svg}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <span
                className="fig-label"
                style={{
                  fontSize: "14px",
                  color: "var(--landing-text-weak)",
                  padding: 0,
                  margin: 0,
                }}
              >
                {stat.fig}
              </span>
              <strong style={{ color: "var(--landing-text-strong)", fontWeight: 500 }}>
                {stat.value}
              </strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 70rem) {
          .fig-label {
            display: none;
          }
        }
        @media (max-width: 60rem) {
          .stats-container {
            gap: 56px !important;
          }
        }
        @media (max-width: 50rem) {
          .stats-container {
            gap: 48px !important;
          }
        }
        @media (max-width: 40rem) {
          .stats-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
