import Image from "next/image";
import Link from "next/link";

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
                   <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                   <Link
                    href="/about/members-and-leadership"
                    className="hover:text-foreground transition-colors"
                  >
                    Members & Leadership
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                  <span className="text-primary truncate max-w-[30ch]">
                    Gregory Barbaccia
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="px-site pt-section pb-12 lg:pb-16">
        <div className="max-w-[650px] mx-auto">
          <div className="w-32 h-32 rounded-2xl overflow-hidden bg-muted mb-8 border-[0.5px] border-foreground/15">
            <Image
              src="/images/members/gregory-barbaccia.jpg"
              alt="Gregory Barbaccia"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h2>Gregory Barbaccia</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-4 mb-8">
            <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
              Federal Chief Information Officer
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
              Office of Management and Budget
            </span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
            <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
              <p>
                Gregory Barbaccia serves as the United States Federal Chief
                Information Officer, overseeing the implementation of secure,
                reliable, and high-performing technology across the Federal
                government. Prior to joining the White House, Gregory served in
                multiple leadership positions in the commercial technology
                sector where he executed robust information security strategies
                and implemented advanced analytics and security solutions at
                scale. Gregory is a Certified Information Systems Security
                Professional (CISSP) and is a US Army Intelligence Veteran,
                having served in Iraq and Afghanistan.
              </p>
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
