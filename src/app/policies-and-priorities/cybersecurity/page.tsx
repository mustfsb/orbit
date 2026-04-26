import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Cybersecurity | CIO Council Policies",
  description: "Federal cybersecurity policy priorities from the CIO Council.",
};

export default function CybersecurityPage() {
  return (
    <MarketingPage>
      <div
        className="sticky z-40 bg-background/90 backdrop-blur-xl transition-[top,box-shadow] duration-300 [[data-scrolled]_&]:shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
        style={{ top: "var(--header-offset, 0px)" }}
      >
        <div className="border-y border-border px-site">
          <div className="max-w-site mx-auto flex items-center justify-between py-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Link
                    href="/policies-and-priorities"
                    className="hover:text-foreground transition-colors"
                  >
                    Policies &amp; Priorities
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                  <span className="text-primary truncate max-w-[30ch]">
                    Cybersecurity
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
              Cybersecurity
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
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    Priority Overview
                  </h2>
                  <p>
                    Our Nation's security and economic prosperity depend on the
                    stability and integrity of our Federal communications and
                    information infrastructure. Threats to cyberspace pose some
                    of the most serious challenges of the 21st century for the
                    United States. The President has made strengthening the
                    Nation's cybersecurity a priority from the outset of this
                    Administration.
                  </p>
                  <p>
                    In May 2017, the President signed{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      href="https://www.federalregister.gov/documents/2017/05/16/2017-10004/strengthening-the-cybersecurity-of-federal-networks-and-critical-infrastructure"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Executive Order 13800, Strengthening the Cybersecurity of
                      Federal Networks and Critical Infrastructure
                    </a>
                    , which concentrates on IT modernization and cybersecurity
                    risk management. Executive Order 13800 reinforces the{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      href="/policies-and-priorities/FISMA/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Federal Information Security Modernization Act
                    </a>{" "}
                    by holding agency heads accountable for managing
                    cybersecurity risks to their enterprises. It requires each
                    agency to assess its cybersecurity risks and submit a plan
                    to OMB detailing actions to implement the NIST Cybersecurity
                    Framework.
                  </p>
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    Why This Matters to the CIO Council
                  </h2>
                  <p>
                    To address the threats posed on our nation's cybersecurity
                    defenses, the Federal Government must continue to advance
                    technical and policy protection capabilities for national
                    systems. We must also expand partnerships with the private
                    sector and work with Congress to clarify roles and
                    responsibilities.
                  </p>
                  <p>
                    The CIO Council, and the{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      href="/about/members-and-leadership/ciso-council/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Chief Information Security Officers Council
                    </a>
                    , leverage FISMA quarterly reporting and agency
                    cybersecurity budget enhancements to meet the key Federal
                    cybersecurity priorities across the enterprise. These
                    include: Increasing Cyber Threat Awareness, Standardizing
                    Cyber and IT Capabilities, and Driving Agency
                    Accountability. OMB and the Department of Homeland Security
                    continue to improve FISMA oversight and execution to enable
                    better cybersecurity risk management within individual
                    agencies and across the Federal government
                  </p>
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    Incident Response Resources Repository
                  </h2>
                  <p>
                    FISMA requires that the Office of Management and Budget
                    (OMB) oversee Federal agency information security policies
                    and practices, which includes coordinating with Federal
                    agencies on cybersecurity incidents or operational events
                    that might impact our nation's security posture. OMB
                    launched an{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      href="https://community.max.gov/pages/viewpage.action?spaceKey=Egov&title=Incident+Response+Resources"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Incident Response Resources Repository
                    </a>{" "}
                    to support agencies in defining cybersecurity incident
                    classification, outlining reporting guidance and procedures,
                    and providing general resources for cybersecurity incidents.
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-6">
                Related Policies
              </p>
              <div className="grid gap-4">
                <Link
                  href="/policies-and-priorities/cyber-workforce-strategy"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Federal Cybersecurity Workforce Strategy
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
                </Link>
                <Link
                  href="/policies-and-priorities/management-HVA"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Management of High Value Assets
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
                </Link>
                <Link
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
                </Link>
                <Link
                  href="/policies-and-priorities/FISMA"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Federal Information Security Modernization Act (FISMA)
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
                </Link>
                <Link
                  href="/policies-and-priorities/fedramp"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    The Federal Risk and Authorization Management Program
                    (FedRAMP)
                  </h4>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                        aria-hidden="true"
                      ></span>
                      Priority
                    </span>
                  </div>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="border-t border-border px-site">
        <div className="max-w-site mx-auto flex items-center py-5">
          <Link
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
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Policies &amp; Priorities
          </Link>
        </div>
      </div>

      <section className="py-section px-site border-t border-border bg-muted">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] mb-16 lg:mb-20 font-medium">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              href="/news/ai-transparency-listening-session"
              className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]"
            >
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                September 26, 2025
              </span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">
                AI Transparency Listening Session with the White House Office of
                Management and Budget
              </h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">
                The White House Office of Management and Budget (OMB) is leading
                a series of listening sessions to learn more from industry about
                their approaches to AI transparency and auditable risk
                management.
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">
                  Artificial Intelligence
                </span>
              </div>
            </Link>
            <Link
              href="/news/ai-in-action"
              className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]"
            >
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                January 15, 2025
              </span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">
                AI in Action: 5 Essential Findings from the 2024 Federal AI Use
                Case Inventory
              </h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">
                This year, agencies publicly reported more than 1,700 ways they
                are using Artificial Intelligence (AI) to advance their missions
                and deliver better experiences to the public.
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">
                  Artificial Intelligence
                </span>
              </div>
            </Link>
            <Link
              href="/news/federal-zero-trust-data-security-guide"
              className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]"
            >
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                October 31, 2024
              </span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">
                CISO Council and CDO Council Release Joint Guide on Federal Zero
                Trust Data Security
              </h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">
                Today, the CISO Council and CDO Council released the Federal
                Zero Trust (ZT) Data Security Guide, a first-of-its-kind
                document and key deliverable of OMB M-22-09, Moving the U.S.
                Government Towards Zero Trust Cybersecurity Principles. M-22-09
                charged the Federal CDO Council and Federal CISO Council to
                convene a cross-agency working group of data and security
                experts to develop a data security guide for Federal agencies.
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">
                  Cybersecurity
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
