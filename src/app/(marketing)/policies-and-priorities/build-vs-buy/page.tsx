export default function Page() {
  return (
    <>
      <div
        data-breadcrumb="true"
        className="sticky z-40 bg-background/90 backdrop-blur-xl transition-[top,box-shadow] duration-300 [[data-scrolled]_&]:shadow-[0_1px_8px_rgba(0,0,0,0.08)] "
        style={{ top: "var(--header-offset, 0px)" }}
      >
        <div className="border-y border-border px-site">
          <div className="max-w-site mx-auto flex items-center justify-between py-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <a
                    href="/policies-and-priorities"
                    className="hover:text-foreground transition-colors"
                  >
                    Policies & Priorities
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                  <span className="text-primary truncate max-w-[30ch]">
                    Build Bespoke Rarely
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
              Build Bespoke Rarely
            </h1>
          </div>
        </div>
      </section>
      <section className="px-site">
        <div className="max-w-site mx-auto">
          <div className="flex items-center mb-10 pb-8 border-b border-border">
            <div className="pr-8">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-priority text-tag-priority-foreground hover:bg-foreground/[0.08]">
                <span
                  className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                  aria-hidden="true"
                ></span>
                Priority
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 lg:pt-12 pb-12 lg:pb-16 px-site">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32">
            <div className="lg:col-span-2 max-w-[650px]">
              <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
                <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
                  <h2
                    className="mt-6 mb-2 font-semibold text-2xl"
                    data-streamdown="heading-2"
                  >
                    Priority Overview
                  </h2>
                  <p>
                    Most core capabilities are commodities now. Custom systems
                    mean long-term ownership of every bug, every patch, and
                    every compliance requirement. Building bespoke should be the
                    exception, reserved for truly unique mission needs that no
                    commercial or shared solution can address.
                  </p>
                  <p>
                    Agencies should default to buying proven commercial
                    solutions or leveraging government-wide shared services.
                    When building is necessary, it should follow modern
                    engineering practices with clear ownership, maintainability
                    plans, and exit strategies.
                  </p>
                  <h2
                    className="mt-6 mb-2 font-semibold text-2xl"
                    data-streamdown="heading-2"
                  >
                    Why This Matters
                  </h2>
                  <p>
                    Custom-built systems are expensive to maintain and difficult
                    to secure at scale. The Federal CIO Council promotes a
                    buy-first, build-rarely approach that frees agency resources
                    to focus on mission-unique challenges rather than
                    reinventing commodity capabilities.
                  </p>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-1"></aside>
          </div>
        </div>
      </section>
      <div className="border-t border-border px-site">
        <div className="max-w-site mx-auto flex items-center py-5">
          <a
            href="/policies-and-priorities"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Policies & Priorities
          </a>
        </div>
      </div>
      <section className="py-section px-site border-t border-border bg-muted">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] mb-16 lg:mb-20 font-medium">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5"></div>
        </div>
      </section>
    </>
  );
}
