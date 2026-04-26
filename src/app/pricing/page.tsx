import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: null,
    description: "Tasks, focus timer, goals, and journal — always free, no card required.",
    cta: "Get started",
    href: "/dashboard",
    featured: false,
    features: [
      "Unlimited tasks",
      "Pomodoro focus timer",
      "Goal tracking",
      "Journal entries",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    cadence: "/month",
    description: "Everything in Free, plus the AI planner and full cross-device sync.",
    cta: "Join waitlist",
    href: "/waitlist",
    featured: true,
    features: [
      "AI weekly planner",
      "Cross-device sync",
      "Planner history",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    price: "Custom",
    cadence: null,
    description:
      "Shared workspaces, team analytics, and admin controls for organizations.",
    cta: "Contact us",
    href: "/contact",
    featured: false,
    features: [
      "Shared workspaces",
      "Team analytics",
      "Admin controls",
      "SSO support",
      "Dedicated support",
    ],
  },
];

const comparison = [
  {
    category: "Core workspace",
    rows: [
      { feature: "Unlimited tasks",       free: true,  pro: true,  teams: true  },
      { feature: "Pomodoro focus timer",  free: true,  pro: true,  teams: true  },
      { feature: "Goal tracking",         free: true,  pro: true,  teams: true  },
      { feature: "Journal entries",       free: true,  pro: true,  teams: true  },
      { feature: "Basic analytics",       free: true,  pro: true,  teams: true  },
    ],
  },
  {
    category: "AI & planning",
    rows: [
      { feature: "AI weekly planner",     free: false, pro: true,  teams: true  },
      { feature: "Cross-device sync",     free: false, pro: true,  teams: true  },
      { feature: "Planner history",       free: false, pro: true,  teams: true  },
      { feature: "Advanced analytics",    free: false, pro: true,  teams: true  },
    ],
  },
  {
    category: "Teams",
    rows: [
      { feature: "Shared workspaces",     free: false, pro: false, teams: true  },
      { feature: "Team analytics",        free: false, pro: false, teams: true  },
      { feature: "Admin controls",        free: false, pro: false, teams: true  },
      { feature: "SSO support",           free: false, pro: false, teams: true  },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Community support",     free: true,  pro: true,  teams: true  },
      { feature: "Priority support",      free: false, pro: true,  teams: true  },
      { feature: "Dedicated support",     free: false, pro: false, teams: true  },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-site pt-20 pb-16 border-b border-border text-center">
        <div className="max-w-site mx-auto">
          <p className="font-sans text-[13px] leading-[19.5px] tracking-[0.8px] uppercase text-muted-foreground mb-5">
            Pricing
          </p>
          <h1 className="font-sans text-[40px] leading-[46px] tracking-[-1px] lg:text-[64px] lg:leading-[70px] lg:tracking-[-2px] font-semibold text-foreground max-w-[720px] mx-auto mb-5">
            Simple, honest pricing.
          </h1>
          <p className="font-sans text-[18px] leading-[27px] text-muted-foreground max-w-[480px] mx-auto">
            Start for free. Upgrade when the AI planner becomes central to your
            week.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-section px-site bg-muted">
        <div className="w-full max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Free */}
            <div className="bg-primary dark:bg-primary-foreground rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
              <div>
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60 dark:text-primary/60 mb-2">
                  Free
                </p>
                <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-primary-foreground dark:text-primary">
                  $0
                </p>
              </div>
              <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80 dark:text-primary/80">
                Tasks, focus timer, goals, and journal — always free, no card
                required.
              </p>
              <ul className="space-y-2 flex-1">
                {plans[0].features.map((f) => (
                  <li
                    key={f}
                    className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80 dark:text-primary/80 flex items-center gap-2"
                  >
                    <span className="text-primary-foreground/40 dark:text-primary/40">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/dashboard">
                <button
                  type="button"
                  className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 h-11 px-6 text-base w-full"
                >
                  Get started
                </button>
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-primary dark:bg-primary-foreground rounded-2xl ring-2 ring-primary-foreground/30 dark:ring-primary/30 ring-offset-2 ring-offset-muted p-8 lg:p-10 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60 dark:text-primary/60">
                    Pro
                  </p>
                  <span className="font-sans text-[11px] font-semibold bg-primary-foreground text-primary dark:bg-primary dark:text-primary-foreground rounded-full px-2 py-0.5">
                    Popular
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-primary-foreground dark:text-primary">
                    $9
                  </p>
                  <span className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60 dark:text-primary/60">
                    /month
                  </span>
                </div>
              </div>
              <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80 dark:text-primary/80">
                Everything in Free, plus the AI planner and full cross-device
                sync.
              </p>
              <ul className="space-y-2 flex-1">
                {plans[1].features.map((f) => (
                  <li
                    key={f}
                    className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80 dark:text-primary/80 flex items-center gap-2"
                  >
                    <span className="text-primary-foreground/40 dark:text-primary/40">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/waitlist">
                <button
                  type="button"
                  className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 h-11 px-6 text-base w-full"
                >
                  Join waitlist
                </button>
              </Link>
            </div>

            {/* Teams */}
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col gap-6">
              <div>
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-2">
                  Teams
                </p>
                <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-foreground">
                  Custom
                </p>
              </div>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                Shared workspaces, team analytics, and admin controls for
                organizations.
              </p>
              <ul className="space-y-2 flex-1">
                {plans[2].features.map((f) => (
                  <li
                    key={f}
                    className="font-sans text-[15px] leading-[25.5px] text-muted-foreground flex items-center gap-2"
                  >
                    <span className="text-foreground/40">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button
                  type="button"
                  className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 px-6 text-base w-full"
                >
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-section px-site border-t border-border">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium mb-14">
            Everything, side by side.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-6 pr-6 font-normal w-[46%]" />
                  <th className="pb-6 px-6 text-center w-[18%]">
                    <div className="font-sans text-[15px] leading-[25.5px] font-medium text-foreground">
                      Free
                    </div>
                    <div className="font-sans text-[13px] leading-[19.5px] text-muted-foreground">
                      $0
                    </div>
                  </th>
                  <th className="pb-6 px-6 text-center w-[18%]">
                    <div className="font-sans text-[15px] leading-[25.5px] font-medium text-foreground">
                      Pro
                    </div>
                    <div className="font-sans text-[13px] leading-[19.5px] text-muted-foreground">
                      $9/mo
                    </div>
                  </th>
                  <th className="pb-6 px-6 text-center w-[18%]">
                    <div className="font-sans text-[15px] leading-[25.5px] font-medium text-foreground">
                      Teams
                    </div>
                    <div className="font-sans text-[13px] leading-[19.5px] text-muted-foreground">
                      Custom
                    </div>
                  </th>
                </tr>
              </thead>
              {comparison.map((group) => (
                <tbody key={group.category}>
                  <tr>
                    <td colSpan={4} className="pt-8 pb-3 pr-6">
                      <span className="font-sans text-[11px] leading-[17px] tracking-[0.7px] uppercase text-muted-foreground font-medium">
                        {group.category}
                      </span>
                    </td>
                  </tr>
                  {group.rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i < group.rows.length - 1
                          ? "border-b border-border/40"
                          : ""
                      }
                    >
                      <td className="py-3.5 pr-6 font-sans text-[15px] leading-[25.5px] text-foreground">
                        {row.feature}
                      </td>
                      {(["free", "pro", "teams"] as const).map((plan) => (
                        <td key={plan} className="py-3.5 px-6 text-center">
                          {row[plan] ? (
                            <span
                              className="inline-flex items-center justify-center text-foreground"
                              aria-label="Included"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M3 8l3.5 3.5L13 4.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="font-sans text-[15px] text-muted-foreground/30"
                              aria-label="Not included"
                            >
                              —
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="max-w-[640px]">
            <p className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-[var(--footer-fg)]">
              Start with what you need today. Add more when it matters.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-10">
            <Link href="/dashboard">
              <button
                type="button"
                className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full h-11 gap-2 px-6 text-base bg-[var(--footer-fg)] text-[var(--footer-bg)] hover:bg-[var(--footer-fg)]/90"
              >
                Get started free
              </button>
            </Link>
            <Link href="/about">
              <button
                type="button"
                className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-transparent hover:bg-primary-foreground/10 h-11 gap-2 px-6 text-base border border-[var(--footer-fg-subtle)] text-[var(--footer-fg)]"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
