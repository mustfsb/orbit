import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Cloud Smart | CIO Council Policies",
  description: "The federal Cloud Smart policy from the CIO Council.",
};

export default function CloudSmartPage() {
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
                    Cloud Smart
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
              Cloud Smart
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
            <div className="pl-8 border-l border-border">
              <p className="font-sans text-[15px] leading-[25.5px] text-foreground py-1.5">
                June 2019
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
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    Policy Overview
                  </h2>
                  <p>
                    Cloud computing is a means for delivering computing services
                    via IT networks. According to the National Institute of
                    Standards and Technology, cloud enables "on-demand access to
                    shared and scalable pools of computing resources with the
                    goal of minimizing management effort or service provider
                    interaction." In short, purchasing these services through a
                    provider means agencies do not need to directly pay for the
                    assets (e.g., hardware, software, networks) needed for those
                    services.
                  </p>
                  <p>
                    As of June 2019, the Federal Cloud Computing Strategy —
                    Cloud Smart — is a long-term, high-level strategy to drive
                    cloud adoption in Federal agencies. This was the first cloud
                    policy update in seven years, offering a path forward for
                    agencies to migrate to a safe and secure cloud
                    infrastructure. This strategy supports agencies to achieve
                    additional savings, security, and faster services.
                  </p>
                  <p>
                    Cloud Smart is founded on three key pillars of successful
                    cloud adoption: security, procurement, and workforce.
                    Collectively, these elements embody the interdisciplinary
                    approach to IT modernization that the Federal enterprise
                    needs in order to provide improved return on its
                    investments, enhanced security, and higher quality services
                    to the American people.
                  </p>
                  <p>
                    Review more about Cloud at{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      href="https://cloud.cio.gov/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Cloud.CIO.gov
                    </a>
                    .
                  </p>
                  <p>
                    Access the{" "}
                    <a
                      className="wrap-anywhere font-medium text-primary underline"
                      href="/assets/files/Application-Rationalization-Playbook.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Application Rationalization Playbook
                    </a>
                    .
                  </p>
                  <h2 className="mt-6 mb-2 font-semibold text-2xl">
                    Why This Matters to the CIO Council
                  </h2>
                  <p>
                    The case for using cloud capabilities in government has been
                    clearly proven – to drive savings, to improve security, and
                    to deliver mission-serving solutions faster.
                  </p>
                  <p>
                    The Federal Government's responsibility is to achieve the
                    benefits of cloud computing as quickly as possible. Any
                    inefficiencies negatively impact its ability to serve the
                    American public. Cloud computing has the potential to play a
                    major part in addressing these inefficiencies and improving
                    government service delivery.
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
