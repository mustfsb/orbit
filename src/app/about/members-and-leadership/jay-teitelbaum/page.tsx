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
                    Jay Teitelbaum
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
              src="/images/members/jay-teitelbaum.png"
              alt="Jay Teitelbaum"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h2>Jay Teitelbaum</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-4 mb-8">
            <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
              Acting Deputy Federal Chief Information Officer
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
              Office of Management and Budget
            </span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
            <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
              <p>
                Jay Teitelbaum is the Acting Deputy Federal CIO within the
                Office of Management and Budget. In this role, Jay provides
                expert advice and guidance to OMB and Executive Branch
                leadership on a wide range of highly complex technology policy
                and implementation areas including, but not limited to
                technology modernization, digital service, and cybersecurity.
                Jay is also responsible for the establishment of management
                processes and the creation of an environment conducive to the
                effective utilization of personnel, information technology, and
                financial resources necessary to support OFCIO staff.
                Previously, Jay served as the Chief of Finance and Operations of
                the U.S. Digital Service (USDS), a team of top technologists in
                the Executive Office of the President, responsible for the daily
                operation of USDS headquarters. Prior to USDS, Jay was a civil
                servant at the Department of Homeland Security, where he was
                responsible for securing new funding and budgetary management
                for the Office of the Secretary and Executive Management. Jay is
                passionate about building and leveraging relationships to
                improve government processes and services to the public. Jay
                holds a master&apos;s degree in Homeland Security and Defense
                from the Naval Postgraduate School. Originally from New Jersey,
                Jay now lives in Falls Church, VA, with his wife, Nisha, and
                dog, Riley.
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
