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
                    Michael Duffy
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
              src="/images/members/michael-duffy.png"
              alt="Michael Duffy"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h2>Michael Duffy</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-4 mb-8">
            <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
              Acting Federal Chief Information Security Officer
            </span>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
              Office of Management and Budget
            </span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
            <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
              <p>
                Michael Duffy serves as the interim Federal Chief Information
                Security Officer, responsible for driving cybersecurity policy
                development and adoption, overseeing strategy alignment and
                implementation efforts, and ensuring cyber program improvement
                and maturation across the Federal Government.
              </p>
              <p>
                Duffy has extensive experience managing high visibility
                cybersecurity and critical infrastructure programs and
                operations, most recently at the U.S. Department of Homeland
                Security&apos;s Cybersecurity and Infrastructure Security Agency
                (CISA). He was the Associate Director for Capacity Building
                within CISA&apos;s Cybersecurity Division where he led the
                management and growth of the federal cybersecurity portfolio
                including the government&apos;s flagship cyber program,
                Continuous Diagnostics and Mitigation (CDM), which provides
                agencies with foundational cyber capabilities and enables
                interactive, operational cyber defense for the Federal IT
                Enterprise.
              </p>
              <p>
                While at CISA, Duffy led interagency cybersecurity risk
                management efforts through through the development and execution
                of key federal cybersecurity policies and initiatives; managed
                the cyber practitioner training portfolio; and assisted federal
                and critical infrastructure technology executives and other
                national stakeholders in meeting security and technology
                modernization goals. He established the Federal Enterprise
                Improvement Team to advance and unify collective cyber defense;
                built CISA&apos;s cybersecurity directives program which
                established the federal government as an indsutry leader in
                cybersecurity; and designed and matured the United States&apos;
                first government-wide shared cybersecurity services office which
                provides modern security capabilities to over one hundred
                agencies and dozens of critical infrastructure entities, and
                protects over four million assets.
              </p>
              <p>
                Duffy chairs the Federal Chief Information Security Officers
                (CISO) Council, the primary body for interagency CISO
                collaboration and communication. He also serves as a tri-chair
                of the Committee for National Security Systems, the deputy chair
                of the Federal Acquisition Security Council, and as a board
                member of the Technology Modernization Fund, DHS&apos;s Cyber
                Safety Review Board and the National Institute for Standards and
                Technology&apos;s Information Security and Privacy Advisory
                Board to provide cybersecurity expertise and recommendations to
                Cabinet Secretaries.
              </p>
              <p>
                Duffy holds a Master of Public Administration degree from the
                George Washington University, is a graduate of the Harvard
                Kennedy School&apos;s Senior Executive Fellows program, and is a
                two-time recipient of the Secretary of Homeland Security&apos;s
                Meritorious Service award for his contributions to
                national-level cybersecurity.
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
