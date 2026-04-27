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
                    21st Century IDEA
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
              21st Century IDEA
            </h1>
          </div>
        </div>
      </section>
      <section className="px-site">
        <div className="max-w-site mx-auto">
          <div className="flex items-center mb-10 pb-8 border-b border-border">
            <div className="pr-8">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-law text-tag-law-foreground hover:bg-foreground/[0.08]">
                <span
                  className="size-2 shrink-0 rounded-full bg-tag-law-foreground"
                  aria-hidden="true"
                ></span>
                Law
              </span>
            </div>
            <div className="pl-8 border-l border-border">
              <p className="font-sans text-[15px] leading-[25.5px] text-foreground py-1.5">
                December 2018
              </p>
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
                  <p>
                    The{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      data-incomplete="false"
                      data-streamdown="link"
                      href="https://www.congress.gov/bill/115th-congress/house-bill/5759/text"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      21st Century Integrated Digital Experience Act (21st
                      Century IDEA)
                    </a>{" "}
                    became active in December of 2018. It requires all
                    government-produced websites, applications, and other
                    digital products intended for public use to meet certain
                    criteria.
                  </p>
                  <p>
                    All new and redesigned websites must be fully functional on
                    mobile devices, accessible to individuals with disabilities,
                    consistent in appearance, contain a search function, and
                    designed around data-driven, user needs. Agencies must
                    &quot;use web-based forms, web-based applications, or
                    digital services to ensure that user needs are addressed and
                    digital transactions are more efficient and accurate.&quot;
                  </p>
                  <p>
                    Digital products should also be tested continually, and
                    provided through an industry-standard, secure connection.
                    Finally, agencies must assess digital products and their
                    content to remove duplication whenever possible.
                  </p>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-6">
                Related Policies
              </p>
              <div className="grid gap-4">
                <a
                  href="/policies-and-priorities/circular-a-130"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Circular No. A-130 - Managing Information as a Strategic
                    Resource
                  </h4>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                        aria-hidden="true"
                      ></span>
                      Policy
                    </span>
                  </div>
                </a>
              </div>
            </aside>
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
