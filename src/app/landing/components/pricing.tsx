"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/ month",
      description: "For those just getting started with intentional work.",
      features: [
        "Core Focus Timer",
        "Basic Planning",
        "Basic models",
        "Community Access",
        "7 Day History",
      ],
      cta: "Join Beta",
      highlighted: false,
    },
    {
      name: "Plus",
      price: "$3",
      originalPrice: "$5",
      period: "/ month",
      description: "For serious deep workers who need the full suite.",
      features: [
        "Everything in Free",
        "3x AI usage",
        "Advanced AI models",
        "Unlimited History",
        "Advanced Analytics",
        "Cross-device Sync",
        "Priority Support",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Pro+",
      price: "$75",
      period: "once",
      description: "Pay once, own forever. All future updates included.",
      features: [
        "Everything in Plus",
        "Lifetime Access",
        "Future Updates Included",
        "Exclusive Beta Tools",
        "Founder Badge",
      ],
      cta: "Join Beta",
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="landing-section"
      style={{
        borderTop: "1px solid var(--landing-border-weak)",
        padding: "var(--landing-vpadding) var(--landing-padding)",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--landing-text-strong)",
            marginBottom: "12px",
          }}
        >
          Pricing
        </h3>
        <p>
          Simple, transparent pricing for those who take their work seriously.
        </p>
      </div>

      <div
        className="pricing-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="pricing-card"
            style={{
              border: `1px solid ${plan.highlighted ? "var(--landing-border)" : "var(--landing-border-weak)"}`,
              borderRadius: "4px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {plan.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "var(--landing-bg-strong)",
                  color: "var(--landing-text-inverted)",
                  padding: "4px 8px",
                  fontSize: "9px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  borderRadius: "2px",
                }}
              >
                Recommended
              </div>
            )}

            <div
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: plan.highlighted
                  ? "var(--landing-text-strong)"
                  : "var(--landing-text-weak)",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              {plan.name}
            </div>

            <div
              style={{
                marginBottom: "12px",
                display: "flex",
                alignItems: "baseline",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "var(--landing-text-strong)",
                }}
              >
                {plan.price}
              </span>
              {'originalPrice' in plan && plan.originalPrice && (
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--landing-text-weak)",
                    textDecoration: "line-through",
                    marginLeft: "4px",
                  }}
                >
                  {plan.originalPrice}
                </span>
              )}
              <span
                style={{
                  fontSize: "14px",
                  color: "var(--landing-text-weak)",
                }}
              >
                {plan.period}
              </span>
            </div>

            <p style={{ marginBottom: "24px", lineHeight: "150%" }}>
              {plan.description}
            </p>

            <ul
              style={{
                padding: 0,
                margin: 0,
                marginBottom: "24px",
                flex: 1,
              }}
            >
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    listStyle: "none",
                    marginBottom: "10px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--landing-icon)",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "block" }}
                    >
                      <path
                        d="M3 8L6.5 11.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              style={{
                border: "1px solid var(--landing-border-weak)",
                background: plan.highlighted
                  ? "var(--landing-bg-strong)"
                  : "transparent",
                color: plan.highlighted
                  ? "var(--landing-text-inverted)"
                  : "var(--landing-text-strong)",
                padding: "8px 16px",
                borderRadius: "4px",
                width: "100%",
                fontWeight: plan.highlighted ? 500 : 400,
                cursor: "pointer",
                fontFamily: "var(--landing-font-mono)",
                transition: "background 150ms ease, border-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                if (plan.highlighted) {
                  e.currentTarget.style.background =
                    "var(--landing-bg-strong-hover)";
                } else {
                  e.currentTarget.style.background =
                    "var(--landing-bg-weak-hover)";
                  e.currentTarget.style.borderColor = "var(--landing-border)";
                }
              }}
              onMouseLeave={(e) => {
                if (plan.highlighted) {
                  e.currentTarget.style.background =
                    "var(--landing-bg-strong)";
                } else {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor =
                    "var(--landing-border-weak)";
                }
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 40rem) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
