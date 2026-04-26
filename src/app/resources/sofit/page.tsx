import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "State of Federal IT | CIO Council Resources",
  description: "State of Federal IT (SOFIT) report from the CIO Council.",
};

export default function SOFITPage() {
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
                    href="/resources"
                    className="hover:text-foreground transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                  <span className="text-primary truncate max-w-[30ch]">
                    State of Federal IT
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
              State of Federal IT
            </h1>
          </div>
        </div>
      </section>

      <section className="px-site pb-12 lg:pb-16">
        <div className="max-w-site mx-auto">
          <div className="max-w-3xl">
            <div className="mb-12">
              <h2 className="font-sans text-[18px] leading-[23px] tracking-[-0.27px] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.3px] font-medium mb-6">
                Introduction
              </h2>
              <div className="prose prose-lg prose-gray">
                <p className="font-sans text-[18px] leading-[27px] text-muted-foreground mb-4">
                  On January 20, 2017, the new administration and its appointees
                  assumed office. Among these appointees were approximately
                  one-third of the CIO Council&apos;s members (agency CIOs) and
                  the Chairperson.
                </p>
                <p className="font-sans text-[18px] leading-[27px] text-muted-foreground mb-4">
                  The CIO Council&apos;s State of Federal Information Technology
                  (SOFIT) report frames the federal IT landscape at that point
                  in time. In addition, it provides recommendations on a variety
                  of initiatives in order to improve Federal IT.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-sans text-[18px] leading-[23px] tracking-[-0.27px] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.3px] font-medium mb-6">
                Report Sections
              </h2>
              <ol className="space-y-4">
                <li>
                  <a
                    href="/assets/files/resources/SOFIT-Other-Sections_Wrapper_PR_v4.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-medium">
                      1. Introduction and Preface
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-medium">
                    2. Policy Papers
                  </span>
                  <ul className="mt-3 ml-6 space-y-2">
                    <li>
                      <a
                        href="/assets/files/resources/SOFIT-Policy-Papers_A_ManagementandOversightofIT_PR_v2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                          Management and Oversight of IT
                        </span>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/assets/files/resources/SOFIT-Policy-Papers_B_IT-Infrastructure_Modernization_PR_v2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                          IT Infrastructure Modernization
                        </span>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/assets/files/resources/SOFIT-Policy-Papers_C_OpenDataOpenGovernment_PR_v2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                          Open Government and Open Data
                        </span>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/assets/files/resources/SOFIT-Policy-Papers_D_FederalSharedServices_PR_v2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                          Federal Shared Services
                        </span>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/assets/files/resources/SOFIT-Policy-Papers_E_Cyber_PR_v2-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                          Cybersecurity
                        </span>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/assets/files/resources/SOFIT-Policy-Papers_F_AcqandContractManagement_PR_v4.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                          IT Acquisition and Contracts Management
                        </span>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/assets/files/resources/SOFIT-Other-Sections_Recommendations_PR_v2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-medium">
                      3. Recommendations
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ol>
            </div>

            <div className="mb-12 p-8 bg-gray-50 rounded-lg">
              <h3 className="font-sans text-[16px] leading-[21px] tracking-[-0.24px] lg:text-[18px] lg:leading-[23px] lg:tracking-[-0.27px] font-medium mb-4">
                Read the Full Report
              </h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-6">
                Download the complete State of Federal IT report for a
                comprehensive overview of the federal IT landscape and
                recommendations.
              </p>
              <a
                href="/assets/files/resources/CIO-Council-State-of-Federal-IT-Report-January-2017-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Download Full Report (PDF)
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border px-site">
        <div className="max-w-site mx-auto flex items-center py-5">
          <Link
            href="/resources"
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
            Back to Resources
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
                Government Towards Zero Trust Cybersecurity Principles.
                M-22-09 charged the Federal CDO Council and Federal CISO
                Council to convene a cross-agency working group of data and
                security experts to develop a data security guide for Federal
                agencies.
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
