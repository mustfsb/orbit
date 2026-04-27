export default function Page() {
  return (
    <>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
              Policies
            </h1>
          </div>
        </div>
      </section>
      <section className="px-site pb-section">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <aside className="lg:w-64 shrink-0 lg:order-last">
              <div className="sticky top-8 space-y-4">
                <div className="border border-border rounded-2xl p-6">
                  <p className="font-sans text-[15px] leading-[25.5px] mb-4 text-muted-foreground">
                    Type
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-policy text-tag-policy-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                        aria-hidden="true"
                      ></span>
                      Policy
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-priority text-tag-priority-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                        aria-hidden="true"
                      ></span>
                      Priority
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-law text-tag-law-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-law-foreground"
                        aria-hidden="true"
                      ></span>
                      Law
                    </button>
                  </div>
                </div>
                <div
                  data-orientation="vertical"
                  dir="ltr"
                  role="region"
                  className="border border-border rounded-2xl p-6 transition-colors hover:bg-muted"
                >
                  <div
                    data-orientation="vertical"
                    data-index="-1"
                    data-closed=""
                  >
                    <h3
                      data-orientation="vertical"
                      data-index="-1"
                      data-closed=""
                      className="m-0"
                    >
                      <button
                        type="button"
                        data-value=""
                        data-orientation="vertical"
                        data-index="-1"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-expanded="false"
                        id="base-ui-«R6aq8qH2»"
                        className="group/accordion-trigger flex items-center justify-between w-full text-left cursor-pointer font-normal tracking-normal leading-normal text-inherit"
                      >
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground select-none">
                          Topic
                        </span>
                        <svg
                          className="w-3.5 h-3.5 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1.8,0.36,1)] group-data-[panel-open]/accordion-trigger:rotate-45"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                      </button>
                    </h3>
                    <div
                      data-orientation="vertical"
                      data-index="-1"
                      data-closed=""
                      hidden
                      id="base-ui-«R6aq8qH1»"
                      aria-labelledby="base-ui-«R6aq8qH2»"
                      role="region"
                      style={
                        {
                          "--accordion-panel-height": "auto",
                          "--accordion-panel-width": "auto",
                        } as React.CSSProperties
                      }
                      className="group/accordion-panel grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1.8,0.36,1)] data-[open]:grid-rows-[1fr] grid-rows-[0fr]"
                    >
                      <div className="min-h-0">
                        <div className="transition-[clip-path,opacity] duration-500 ease-[cubic-bezier(0.22,1.8,0.36,1)] group-data-[open]/accordion-panel:[clip-path:inset(0_0_0_0)] group-data-[open]/accordion-panel:opacity-100 [clip-path:inset(0_0_100%_0)] opacity-0 pt-4">
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Cybersecurity
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Data
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Cloud
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Modernization
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Governance
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Workforce
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              IT Spending
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Web & Digital
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                              aria-pressed="false"
                            >
                              Accessibility
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center transition-all duration-300 opacity-0 pointer-events-none">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full pl-2 pr-3 py-1.5 text-sm bg-muted text-muted-foreground hover:bg-foreground/[0.08] transition-colors cursor-pointer"
                  >
                    <span className="size-5 rounded-full bg-foreground/10 text-xs font-medium flex items-center justify-center">
                      0
                    </span>
                    Reset
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </aside>
            <div className="flex-1">
              <div className="grid gap-5">
                <a
                  href="/policies-and-priorities/21st-century-idea-act"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      21st Century IDEA Act
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The 21st Century Integrated Digital Experience Act (21st
                      Century IDEA) became active in December of 2018. It
                      requires all government-produced websites, applications,
                      and other digital products intended for public use to
                      meet...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-law-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-law-foreground"
                          aria-hidden="true"
                        ></span>
                        Law
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        December 2018
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="/policies-and-priorities/architecture-first-procurement"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Architecture-First Procurement
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Clear reference architectures, defined in functional
                      terms, get us to better outcomes faster. Procurement
                      should start with architecture — a shared understanding of
                      what the target state looks like — before any contract is
                      written. Architecture-first procurement means...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="/policies-and-priorities/build-vs-buy"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Build Bespoke Rarely
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Most core capabilities are commodities now. Custom systems
                      mean long-term ownership of every bug, every patch, and
                      every compliance requirement. Building bespoke should be
                      the exception, reserved for truly unique mission needs
                      that no commercial or shared solution can address....
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="/policies-and-priorities/circular-a-130"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Circular A-130
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      In July 2016, the Office of Management and Budget (OMB)
                      revised Circular A-130, &quot;Managing Information as a
                      Strategic Resource,&quot; to...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        July 2016
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="/policies-and-priorities/cloud-smart"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Cloud Smart
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Cloud computing is a means for delivering computing
                      services via IT networks. According to the National
                      Institute of Standards and Technology, cloud enables
                      &quot;on-demand access to shared and scalable pools of
                      computing resources with the goal of minimizing management
                      effort or...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        June 2019
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-site bg-muted py-section border-t border-border">
        <div className="max-w-site mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] font-medium">
              Have a resource to suggest?
            </h2>
            <p className="font-sans text-[15px] leading-[25.5px] mt-4 text-muted-foreground">
              We&apos;re always looking to expand this library with valuable
              resources for the federal IT community. If you have a suggestion,
              we&apos;d love to hear from you.
            </p>
            <a href="mailto:feedback@cio.gov" className="inline-block mt-6">
              <button
                type="button"
                tabIndex={0}
                data-slot="button"
                className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base"
              >
                Suggest a Resource
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
