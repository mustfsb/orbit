import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "FedRAMP | CIO Council Policies",
  description:
    "Federal Risk and Authorization Management Program (FedRAMP) policy overview.",
};

export default function FedRAMPPage() {
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
                    FedRAMP
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
              FedRAMP
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
                    Program Overview
                  </h2>
                  <p>
                    The{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      href="https://www.fedramp.gov/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Federal Risk and Authorization Management Program
                      (FedRAMP)
                    </a>{" "}
                    is a government-wide program that provides a standardized
                    approach to security assessment, authorization, and
                    continuous monitoring for cloud products and services.
                    FedRAMP created and manages a core set of processes to
                    ensure effective, repeatable cloud security for the
                    government. It also established a mature marketplace to
                    increase utilization and familiarity with cloud services
                    while facilitating collaboration across government through
                    open exchanges of lessons learned, use cases, and tactical
                    solutions.
                  </p>
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    Updated Guidance
                  </h2>
                  <p>
                    OMB has issued updated guidance that defines the scope of
                    cloud products subject to FedRAMP, sets agency requirements
                    for granting authorization and reuse, and promotes a
                    transparent and consistent process for performing security
                    assessment and authorizations of cloud services by Federal
                    agencies. Key areas of the guidance include how the FedRAMP
                    Program will:
                  </p>
                  <ol className="list-inside list-decimal whitespace-normal [li_&]:pl-6">
                    <li className="py-1 [&>p]:inline">
                      Be an information security program grounded in technical
                      expertise and risk management.
                    </li>
                    <li className="py-1 [&>p]:inline">
                      Offer multiple cloud authorization structures that
                      incentivize agency partnership and reuse.
                    </li>
                    <li className="py-1 [&>p]:inline">
                      Streamline manual authorization processes through
                      increased automation.
                    </li>
                    <li className="py-1 [&>p]:inline">
                      Leverage shared infrastructure between the Federal
                      Government and private sector.
                    </li>
                  </ol>
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    Why This Matters to the CIO Council
                  </h2>
                  <p>
                    By adopting innovative cloud services to meet their critical
                    mission needs, agencies have the opportunity to save both
                    time and money. FedRAMP enables agencies to rapidly adapt
                    from old, insecure legacy IT to mission-enabling, secure,
                    and cost effective cloud-based IT.
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
                  href="/policies-and-priorities/cloud-smart"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Cloud Smart
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
                <a
                  href="/assets/files/resources/Cloud-Computing-One-Cloud-Does-Not-Fit-All-Adopting-a-Secure-Cloud-for-Government.pptx"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    One Cloud Does Not Fit All - Adopting a Secure Cloud for
                    Government
                  </h4>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-guidance-foreground bg-background hover:bg-foreground/[0.08]">
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                        aria-hidden="true"
                      ></span>
                      Presentation
                    </span>
                  </div>
                </a>
                <a
                  href="/assets/files/Application-Rationalization-Playbook.pdf"
                  className="block p-6 bg-muted rounded-2xl group transition-colors hover:bg-foreground/[0.08]"
                >
                  <h4 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Application Rationalization Playbook
                  </h4>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-guidance-foreground bg-background hover:bg-foreground/[0.08]">
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                        aria-hidden="true"
                      ></span>
                      Guidance
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
