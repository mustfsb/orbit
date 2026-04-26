import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
              One workspace for planning, focus, and reflection.
            </h1>
            <p className="font-sans text-[18px] leading-[27px] text-muted-foreground max-w-[640px]">
              Orbit connects your tasks, goals, focus sessions, and journal into
              a single system — so your daily actions stay anchored to what
              actually matters.
            </p>
          </div>
        </div>
      </section>

      <section className="px-site py-section-tight">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary text-primary-foreground ring-1 ring-foreground/10 p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">
                  App Surfaces
                </p>
              </div>
              <div className="mb-2">
                <p className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-primary-foreground">
                  10+
                </p>
              </div>
            </div>
            <div className="bg-primary text-primary-foreground ring-1 ring-foreground/10 p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">
                  Core Principles
                </p>
              </div>
              <div className="mb-2">
                <p className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-primary-foreground">
                  5
                </p>
              </div>
            </div>
            <div className="bg-primary text-primary-foreground ring-1 ring-foreground/10 p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">
                  Core Loop Steps
                </p>
              </div>
              <div className="mb-2">
                <p className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-primary-foreground">
                  4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site py-section border-t border-border">
        <div className="max-w-site mx-auto">
          <h2 className="mb-10 max-w-[800px]">
            Aligning what you plan today with where you want to go.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col">
              <h3>Purpose</h3>
              <div className="mt-4 space-y-4 flex-1">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Orbit brings together tasks, focus sessions, goals, journal,
                  analytics, and an AI planner into one connected workspace. No
                  switching between tools. No lost context.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Track tasks and focus sessions together
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Set long-term goals and see real progress
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Write and reflect without switching apps
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Let AI build a realistic plan from what you&apos;ve
                      captured
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/planner">
                  <button
                    type="button"
                    tabIndex={0}
                    data-slot="button"
                    className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base"
                  >
                    Explore the planner
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col">
              <h3>Vision</h3>
              <div className="mt-4 space-y-4 flex-1">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  A future where your tools understand what you&apos;re working
                  toward — and help you stay with it. Orbit should feel like a
                  reliable second mind, not another system to maintain.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Plan around real time, not just lists
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Build momentum that carries across weeks
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Trust your tools to remember what matters
                    </span>
                  </li>
                  <li>
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                      Spend less time organizing, more time doing
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/pricing">
                  <button
                    type="button"
                    tabIndex={0}
                    data-slot="button"
                    className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base"
                  >
                    View pricing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site py-section border-t border-border">
        <div className="max-w-site mx-auto">
          <h2 className="mb-8 max-w-[640px]">
            Five principles that guide how Orbit is built.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">
                01
              </span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Calm by default — the interface should reduce noise, not
                  amplify it
                </p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">
                02
              </span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  One personal workspace — planning, focus, goals, journal,
                  analytics, and library should feel connected
                </p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">
                03
              </span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Durable progress — important user work should increasingly
                  survive across sessions and devices
                </p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">
                04
              </span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Helpful intelligence — AI features should operate on product
                  context, not generic prompts alone
                </p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 md:col-span-2 bg-primary text-primary-foreground ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-primary-foreground">
                05
              </span>
              <div className="border-l pl-6 flex-1 min-w-0 border-primary-foreground/40">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80">
                  Honest scope — Orbit should expand from a strong single-user
                  core before taking on broad integrations or collaboration
                </p>
              </div>
              <div className="shrink-0 w-full sm:w-auto">
                <Link href="/dashboard">
                  <button
                    type="button"
                    tabIndex={0}
                    data-slot="button"
                    className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 gap-2 px-6 text-base"
                  >
                    Open Orbit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site bg-muted py-section">
        <div className="max-w-site mx-auto">
          <h2 className="mb-10 max-w-[640px]">How Orbit works.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10">
              <h3>Plan</h3>
              <div className="mt-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Start each week in the AI planner. It reads your existing
                  tasks and goals, then generates a structured schedule. Refine
                  it through a conversational chat until it fits your week.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10">
              <h3>Focus</h3>
              <div className="mt-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Work through your plan with Pomodoro-style focus sessions.
                  Each completed session is logged automatically and feeds your
                  analytics, streak tracking, and goal rewards.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10">
              <h3>Reflect</h3>
              <div className="mt-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Review your week through journal entries and analytics. See
                  where momentum built and where it stalled — then use that
                  signal to shape next week&apos;s plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site bg-muted py-section">
        <div className="max-w-site mx-auto">
          <h4 className="mb-2">Explore Orbit</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Link
              href="/planner"
              className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]"
            >
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">
                AI Planner
              </p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">
                → App
              </p>
            </Link>
            <Link
              href="/todos"
              className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]"
            >
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">
                Task Manager
              </p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">
                → App
              </p>
            </Link>
            <Link
              href="/goals"
              className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]"
            >
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">
                Goals
              </p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">
                → App
              </p>
            </Link>
            <Link
              href="/journal"
              className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]"
            >
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">
                Journal
              </p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">
                → App
              </p>
            </Link>
            <Link
              href="/analytics"
              className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]"
            >
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">
                Analytics
              </p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">
                → App
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="max-w-[800px]">
            <p className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-[var(--footer-fg)]">
              Design your work around what actually matters. Orbit keeps your
              tasks, goals, focus sessions, and reflections in one place — so
              planning stays a habit, not a chore.
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
                Open Orbit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
