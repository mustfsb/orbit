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
                    Circular A-130
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
              Circular A-130
            </h1>
          </div>
        </div>
      </section>
      <section className="px-site">
        <div className="max-w-site mx-auto">
          <div className="flex items-center mb-10 pb-8 border-b border-border">
            <div className="pr-8">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-policy text-tag-policy-foreground hover:bg-foreground/[0.08]">
                <span
                  className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                  aria-hidden="true"
                ></span>
                Policy
              </span>
            </div>
            <div className="pl-8 border-l border-border">
              <p className="font-sans text-[15px] leading-[25.5px] text-foreground py-1.5">
                July 2016
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
                  <h2
                    className="mt-6 mb-2 font-semibold text-2xl"
                    data-streamdown="heading-2"
                  >
                    Policy Overview
                  </h2>
                  <p>
                    In July 2016, the Office of Management and Budget (OMB)
                    revised{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      data-incomplete="false"
                      data-streamdown="link"
                      href="https://www.federalregister.gov/documents/2016/07/28/2016-17872/revision-of-omb-circular-no-a-130-managing-information-as-a-strategic-resource"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Circular A-130, &quot;Managing Information as a Strategic
                      Resource,&quot;
                    </a>{" "}
                    to reflect changes in law and advances in technology. The
                    revisions also ensure consistency with executive orders,
                    presidential directives, recent OMB policy, and National
                    Institute of Standards and Technology standards and
                    guidelines.
                  </p>
                  <p>
                    The Circular establishes general policy for information
                    governance, acquisitions, records management, open data,
                    workforce, security, and privacy. It also emphasizes the
                    role of both privacy and security in the Federal information
                    life cycle. Importantly, it represents a shift from viewing
                    security and privacy requirements as compliance exercises to
                    understanding security and privacy as crucial elements of a
                    comprehensive, strategic, and continuous risk-based program
                    at Federal agencies.
                  </p>
                  <p>
                    The Circular promotes innovation, enables appropriate
                    information sharing, and fosters the wide-scale and rapid
                    adoption of new technologies while strengthening protections
                    for security and privacy.{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      data-incomplete="false"
                      data-streamdown="link"
                      href="https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View the full, revised policy here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-6">
                Related Policies
              </p>
              <div className="grid gap-4"></div>
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
