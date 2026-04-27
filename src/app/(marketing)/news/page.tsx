export default function Page() {
  return (
    <>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
              News
            </h1>
          </div>
        </div>
      </section>
      <section className="px-site pb-section">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <aside className="lg:w-64 shrink-0 lg:order-last">
              <div className="space-y-4">
                <div className="border border-border rounded-2xl p-6">
                  <p className="font-sans text-[15px] leading-[25.5px] mb-4 text-muted-foreground">
                    Topics
                  </p>
                </div>
                <div className="border border-border rounded-2xl p-6">
                  <p className="font-sans text-[15px] leading-[25.5px] mb-4 text-muted-foreground">
                    Connect
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://x.com/ciodotgov"
                        className="text-foreground hover:text-muted-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @CIOdotgov
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:ciocouncil.support@gsa.gov"
                        className="text-foreground hover:text-muted-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/feed.xml"
                        className="text-foreground hover:text-muted-foreground transition-colors"
                      >
                        RSS Feed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            <div className="flex-1">
              <div className="grid gap-12">
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="max-w-[800px]">
            <p className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-[var(--footer-fg)]">
              Work on problems that matter. If you&apos;re driven by impact,
              scale, and service, there&apos;s a place for you here.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-10">
            <a href="https://www.usajobs.gov/Search/?k=cio&p=1">
              <button
                type="button"
                tabIndex={0}
                data-slot="button"
                className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full h-11 gap-2 px-6 text-base bg-[var(--footer-fg)] text-[var(--footer-bg)] hover:bg-[var(--footer-fg)]/90"
              >
                Explore Opportunities
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
