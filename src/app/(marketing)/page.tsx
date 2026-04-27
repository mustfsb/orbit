import Link from "next/link";
import { FaqSection } from "@/components/sections/faq/FaqSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { AgentShowcase } from "@/components/sections/AgentShowcase";

import {
  SiGooglecalendar,
  SiNotion,
  SiSlack,
  SiApple,
  SiOpenai,
  SiClaude,
} from "react-icons/si";

export default function Page() {
  return (
    <>
      <section className="px-site py-section">
        <div className="max-w-site mx-auto">
          <p className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground mb-12 max-w-[1000px]">
            Plan your week. Stay in focus. See the pattern.
          </p>
          <div>
            <Link href="/dashboard">
              <button
                type="button"
                tabIndex={0}
                data-slot="button"
                className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base"
              >
                Get started
              </button>
            </Link>
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Social proof */}
      <section className="py-10 px-site border-t border-border">
        <div className="max-w-site mx-auto">
          <p className="font-sans text-[12px] leading-[18px] tracking-[0.8px] uppercase text-muted-foreground mb-6 text-center">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Vercel", "Figma", "Linear", "Notion", "Stripe", "OpenAI"].map(
              (name) => (
                <span
                  key={name}
                  className="font-sans text-[13px] font-medium text-muted-foreground bg-muted rounded-full px-4 py-1.5 ring-1 ring-foreground/10"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-section px-site border-t border-border">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] max-w-[800px] mb-20 lg:mb-24 font-medium">
            Every part of your work connected in one place.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link
              href="/planner"
              className="group bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col gap-5 transition-colors hover:bg-foreground/[0.08]"
            >
              <h4 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium">
                AI Weekly Planner
              </h4>
              <p className="font-sans text-[18px] leading-[27px] text-muted-foreground">
                Tell Orbit what&apos;s on your plate. It builds a structured
                weekly plan grounded in your tasks and goals — then refines it
                through conversation.
              </p>
            </Link>
            <Link
              href="/timer"
              className="group bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col gap-5 transition-colors hover:bg-foreground/[0.08]"
            >
              <h4 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium">
                Focus Sessions
              </h4>
              <p className="font-sans text-[18px] leading-[27px] text-muted-foreground">
                Run timed Pomodoro sessions against your plan. Every session is
                logged automatically and feeds your analytics and goal progress.
              </p>
            </Link>
            <Link
              href="/dashboard"
              className="group bg-primary rounded-2xl p-8 lg:p-10 flex flex-col gap-5 transition-colors hover:bg-primary/90"
            >
              <span className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-primary-foreground">
                Open the workspace
              </span>
              <span className="font-sans text-[18px] leading-[27px] text-primary-foreground/60">
                Tasks, goals, journal, analytics, and your plan — all connected
                by design.
              </span>
            </Link>
          </div>
        </div>
      </section>

      <AgentShowcase />

      {/* Stats */}
      <section className="py-section px-site border-t border-border">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
            {[
              { value: "10K+", label: "Tasks completed daily" },
              { value: "4.9★", label: "Average user rating" },
              { value: "3×", label: "More focused work sessions" },
              { value: "Free", label: "To get started today" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-foreground">
                  {value}
                </p>
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="mb-10 lg:mb-12">
            <p className="font-sans text-[12px] leading-[18px] tracking-[0.8px] uppercase text-[var(--footer-fg-subtle)] mb-4">
              Works with
            </p>
            <div className="flex gap-3 flex-wrap">
              {(
                [
                  { Icon: SiGooglecalendar, label: "Google Calendar", color: "#4285F4" },
                  { Icon: SiNotion, label: "Notion", color: "#000000" },
                  { Icon: SiSlack, label: "Slack", color: "#4A154B" },
                  { Icon: SiApple, label: "Apple Calendar", color: "#000000" },
                  { Icon: SiOpenai, label: "OpenAI", color: "#000000" },
                  { Icon: SiClaude, label: "Claude", color: "#CC785C" },
                ] as const
              ).map(({ Icon, label, color }) => (
                <div
                  key={label}
                  title={label}
                  className="w-11 h-11 lg:w-12 lg:h-12 rounded-lg bg-[var(--footer-fg)] flex items-center justify-center"
                >
                  <Icon size={20} color={color} aria-label={label} />
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[800px]">
            <p className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-[var(--footer-fg)]">
              Built for people who care about doing their best work — not just
              tracking it. One workspace. One loop. Your work, your pace.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-10">
            <Link href="/dashboard">
              <button
                type="button"
                tabIndex={0}
                data-slot="button"
                className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full h-11 gap-2 px-6 text-base bg-[var(--footer-fg)] text-[var(--footer-bg)] hover:bg-[var(--footer-fg)]/90"
              >
                Get started
              </button>
            </Link>
            <Link href="/about">
              <button
                type="button"
                tabIndex={0}
                data-slot="button"
                className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-transparent hover:bg-primary-foreground/10 h-11 gap-2 px-6 text-base border-[var(--footer-fg-subtle)] text-[var(--footer-fg)]"
              >
                See how it works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Planner highlight */}
      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-sans text-[12px] leading-[18px] tracking-[0.8px] uppercase text-[var(--footer-fg-subtle)] mb-4">
                AI Planner
              </p>
              <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-1.44px] font-medium text-[var(--footer-fg)] mb-6 max-w-[480px]">
                Your week, planned before Monday arrives.
              </h2>
              <p className="font-sans text-[18px] leading-[27px] text-[var(--footer-fg-subtle)] mb-8 max-w-[420px]">
                Tell Orbit what&apos;s on your plate — tasks, goals, constraints. The
                AI planner builds a structured, realistic schedule and refines it
                as your week evolves.
              </p>
              <Link href="/planner">
                <button
                  type="button"
                  className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-[var(--footer-fg)] text-[var(--footer-bg)] hover:bg-[var(--footer-fg)]/90 h-11 gap-2 px-6 text-base"
                >
                  Try the planner
                </button>
              </Link>
            </div>
            <div className="bg-[var(--footer-fg)]/5 ring-1 ring-[var(--footer-fg)]/10 rounded-2xl p-8 flex flex-col gap-4">
              <p className="font-sans text-[13px] leading-[19.5px] tracking-[0.6px] uppercase text-[var(--footer-fg-subtle)]">
                This week&apos;s plan
              </p>
              {[
                { day: "Mon", task: "Deep work: Q2 strategy doc", duration: "2h" },
                { day: "Tue", task: "Product review + async replies", duration: "1.5h" },
                { day: "Wed", task: "Focus: feature spec writing", duration: "3h" },
                { day: "Thu", task: "1:1s + team sync", duration: "2h" },
                { day: "Fri", task: "Review + plan next week", duration: "1h" },
              ].map(({ day, task, duration }) => (
                <div
                  key={day}
                  className="flex items-center gap-4 border-b border-[var(--footer-fg)]/10 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-sans text-[13px] font-medium text-[var(--footer-fg-subtle)] w-8 shrink-0">
                    {day}
                  </span>
                  <span className="font-sans text-[14px] text-[var(--footer-fg)] flex-1">
                    {task}
                  </span>
                  <span className="font-sans text-[13px] text-[var(--footer-fg-subtle)] shrink-0">
                    {duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section px-site border-t border-border bg-muted">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] mb-4 font-medium">
            Simple, honest pricing.
          </h2>
          <p className="font-sans text-[18px] leading-[27px] text-muted-foreground mb-16 max-w-[540px]">
            Start for free. Upgrade when the AI planner becomes central to your
            week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col gap-6">
              <div>
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-2">
                  Free
                </p>
                <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-foreground">
                  $0
                </p>
              </div>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                Tasks, focus timer, goals, and journal — always free, no card
                required.
              </p>
              <ul className="space-y-2 flex-1">
                {[
                  "Unlimited tasks",
                  "Pomodoro focus timer",
                  "Goal tracking",
                  "Journal entries",
                  "Basic analytics",
                ].map((f) => (
                  <li
                    key={f}
                    className="font-sans text-[15px] leading-[25.5px] text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/dashboard">
                <button
                  type="button"
                  className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 px-6 text-base w-full"
                >
                  Get started
                </button>
              </Link>
            </div>

            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                    Pro
                  </p>
                  <span className="font-sans text-[11px] font-semibold bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                    Popular
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-foreground">
                    $9
                  </p>
                  <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                    /month
                  </span>
                </div>
              </div>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                Everything in Free, plus the AI planner and full cross-device
                sync.
              </p>
              <ul className="space-y-2 flex-1">
                {[
                  "AI weekly planner",
                  "Cross-device sync",
                  "Planner history",
                  "Advanced analytics",
                  "Priority support",
                ].map((f) => (
                  <li
                    key={f}
                    className="font-sans text-[15px] leading-[25.5px] text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing">
                <button
                  type="button"
                  className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 px-6 text-base w-full"
                >
                  Join waitlist
                </button>
              </Link>
            </div>

            <div className="bg-primary rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
              <div>
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60 mb-2">
                  Teams
                </p>
                <p className="font-sans text-[40px] leading-[46px] tracking-[-1px] font-semibold text-primary-foreground">
                  Custom
                </p>
              </div>
              <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/70">
                Shared workspaces, team analytics, and admin controls for
                organizations.
              </p>
              <ul className="space-y-2 flex-1">
                {[
                  "Shared workspaces",
                  "Team analytics",
                  "Admin controls",
                  "SSO support",
                  "Dedicated support",
                ].map((f) => (
                  <li
                    key={f}
                    className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/70"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing">
                <button
                  type="button"
                  className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-6 text-base w-full"
                >
                  Contact us
                </button>
              </Link>
            </div>
          </div>
          <p className="mt-10 font-sans text-[15px] leading-[25.5px] text-muted-foreground">
            <Link
              href="/pricing"
              className="hover:text-foreground underline underline-offset-2 transition-colors"
            >
              See full plan details →
            </Link>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section px-site border-t border-border">
        <div className="max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium mb-12 lg:mb-16 max-w-[540px]">
            People who take their work seriously use Orbit.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "I used to start Monday with no idea how to fit everything in. Now Orbit builds the plan and I just execute.",
                author: "Product Manager",
                company: "Series B startup",
              },
              {
                quote:
                  "The focus timer paired with the planner changed how I think about my day. I actually finish what I start.",
                author: "Senior Engineer",
                company: "Remote team",
              },
              {
                quote:
                  "I've tried every todo app. Orbit is the first one that connects tasks to time and shows me the pattern.",
                author: "Founder",
                company: "Indie hacker",
              },
            ].map(({ quote, author, company }) => (
              <div
                key={author}
                className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 flex flex-col gap-6"
              >
                <p className="font-sans text-[16px] leading-[24px] text-foreground flex-1">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-sans text-[14px] font-medium text-foreground">
                    {author}
                  </p>
                  <p className="font-sans text-[13px] text-muted-foreground">
                    {company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto flex flex-col items-center text-center">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] font-medium text-[var(--footer-fg)] mb-10 max-w-[600px]">
            Stay close to what&apos;s next.
          </h2>
          <a
            href="https://x.com/ciodotgov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="@CIOdotgov"
          >
            <button
              type="button"
              tabIndex={0}
              data-slot="button"
              className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 gap-2 px-6 text-base"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              Subscribe
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
