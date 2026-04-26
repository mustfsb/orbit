import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Resources | CIO Council",
  description:
    "Resources from the Federal CIO Council including the CISO Handbook and IT benchmarking data.",
};

export default function ResourcesPage() {
  return (
    <MarketingPage>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
              Resources
            </h1>
          </div>
        </div>
      </section>

      <section className="px-site pb-section">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <aside className="lg:w-64 shrink-0 lg:order-last">
              <div className="sticky top-8 space-y-4">
                <div className="border border-border rounded-2xl p-6">
                  <p className="font-sans text-[15px] leading-[25.5px] mb-4 text-muted-foreground">
                    Type
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-policy text-tag-policy-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                        aria-hidden="true"
                      ></span>
                      Policy
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-priority text-tag-priority-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                        aria-hidden="true"
                      ></span>
                      Priority
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-guidance text-tag-guidance-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                        aria-hidden="true"
                      ></span>
                      Guidance
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-report text-tag-report-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-report-foreground"
                        aria-hidden="true"
                      ></span>
                      Report
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-website text-tag-website-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                        aria-hidden="true"
                      ></span>
                      Website
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-whitepaper text-tag-whitepaper-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-whitepaper-foreground"
                        aria-hidden="true"
                      ></span>
                      Whitepaper
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-tool text-tag-tool-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-tool-foreground"
                        aria-hidden="true"
                      ></span>
                      Tool
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-tag-law text-tag-law-foreground hover:bg-foreground/[0.08] cursor-pointer"
                      aria-pressed="false"
                    >
                      <span
                        className="size-2 shrink-0 rounded-full bg-tag-law-foreground"
                        aria-hidden="true"
                      ></span>
                      Law
                    </button>
                  </div>
                </div>

                <div className="border border-border rounded-2xl p-6 transition-colors hover:bg-muted">
                  <h3 className="m-0">
                    <button
                      type="button"
                      tabIndex={0}
                      aria-expanded="false"
                      className="group/accordion-trigger flex items-center justify-between w-full text-left cursor-pointer font-normal tracking-normal leading-normal text-inherit"
                    >
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground select-none">
                        Subject
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1.8,0.36,1)] group-data-[panel-open]/accordion-trigger:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Cybersecurity",
                        "Cloud",
                        "Data",
                        "Governance",
                        "IT Spending",
                        "Modernization",
                        "Acquisition",
                        "Web & Digital",
                        "Accessibility",
                        "Customer Experience",
                      ].map((subject) => (
                        <button
                          key={subject}
                          type="button"
                          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                          aria-pressed="false"
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-2xl p-6 transition-colors hover:bg-muted">
                  <h3 className="m-0">
                    <button
                      type="button"
                      tabIndex={0}
                      aria-expanded="false"
                      className="group/accordion-trigger flex items-center justify-between w-full text-left cursor-pointer font-normal tracking-normal leading-normal text-inherit"
                    >
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground select-none">
                        Role
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1.8,0.36,1)] group-data-[panel-open]/accordion-trigger:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "CIO",
                        "CISO",
                        "CFO",
                        "Executive",
                        "Architect",
                        "Engineer",
                        "Acquisition",
                      ].map((role) => (
                        <button
                          key={role}
                          type="button"
                          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08] cursor-pointer"
                          aria-pressed="false"
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center transition-all duration-300 opacity-0 pointer-events-none">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full pl-2 pr-3 py-1.5 text-sm bg-muted text-muted-foreground hover:bg-foreground/[0.08] transition-colors cursor-pointer"
                  >
                    <span className="size-5 rounded-full bg-foreground/10 text-xs font-medium flex items-center justify-center">
                      0
                    </span>
                    Reset
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/resources/sofit"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      State of Federal IT (SOFIT)
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Annual report on the state of federal information
                      technology.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-report-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-report-foreground"
                          aria-hidden="true"
                        ></span>
                        Report
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        January 2024
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/resources/ciso-handbook"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      CISO Handbook
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Comprehensive guide for federal Chief Information Security
                      Officers.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-report-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-report-foreground"
                          aria-hidden="true"
                        ></span>
                        Report
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        March 2023
                      </span>
                    </div>
                  </div>
                </Link>

                <a
                  href="/assets/resources/Report-to-the-President-on-IT-Modernization-Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Final IT Modernization Report
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Report to the President on federal IT modernization.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-report-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-report-foreground"
                          aria-hidden="true"
                        ></span>
                        Report
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        December 2017
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="/assets/files/Application-Rationalization-Playbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Application Rationalization Playbook
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Guide for rationalizing application portfolios.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-guidance-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                          aria-hidden="true"
                        ></span>
                        Guidance
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        June 2019
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="/assets/resources/Cloud-Operations-Best-Practices-Guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Cloud Operations Best Practices & Resources Guide
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Best practices for cloud operations in federal agencies.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-guidance-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                          aria-hidden="true"
                        ></span>
                        Guidance
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        September 2020
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="/assets/files/IT_Spending_Maturity_Model_Tool.xlsx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      IT Spending Maturity Model
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Tool for assessing IT spending transparency maturity.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-tool-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-tool-foreground"
                          aria-hidden="true"
                        ></span>
                        Tool
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        August 2019
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="/assets/resources/MIPT-draft-5.0-Final-2020_08.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Meeting IT Priorities with TBM
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      How Technology Business Management supports IT priorities.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-whitepaper-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-whitepaper-foreground"
                          aria-hidden="true"
                        ></span>
                        Whitepaper
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        August 2020
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="/assets/files/IT-Spending-Transparency-Maturity-Model-Whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      IT Spending Transparency Maturity Model
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Framework for improving IT spending transparency.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-whitepaper-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-whitepaper-foreground"
                          aria-hidden="true"
                        ></span>
                        Whitepaper
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        March 2019
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <Link
                  href="/news/federal-zero-trust-data-security-guide"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Federal Zero Trust Data Security Guide
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Guide for implementing zero trust data security.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-guidance-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                          aria-hidden="true"
                        ></span>
                        Guidance
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        April 2023
                      </span>
                    </div>
                  </div>
                </Link>

                <a
                  href="/assets/files/resources/2012_IPv6_Roadmap_FINAL_20120712.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      IPv6 Planning Guide and Roadmap
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Planning guide for IPv6 adoption.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-guidance-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                          aria-hidden="true"
                        ></span>
                        Guidance
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        July 2012
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://itdashboard.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      IT Dashboard
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Federal IT spending and project performance data.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-website-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                          aria-hidden="true"
                        ></span>
                        Website
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://performance.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Performance.gov
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Government performance and accountability information.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-website-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                          aria-hidden="true"
                        ></span>
                        Website
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://fedramp.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      FedRAMP
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Cloud security authorization program.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-website-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                          aria-hidden="true"
                        ></span>
                        Website
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://digital.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      DigitalGov
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Resources for digital government services.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-website-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                          aria-hidden="true"
                        ></span>
                        Website
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://idmanagement.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      FICAM Identity Management
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Federal identity and access management resources.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-website-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                          aria-hidden="true"
                        ></span>
                        Website
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://itvmo.gsa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      IT Vendor Management Office
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Government-wide IT vendor management resources.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-website-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                          aria-hidden="true"
                        ></span>
                        Website
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <Link
                  href="/policies-and-priorities/FITARA"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Federal Information Technology Acquisition Reform Act
                      (FITARA)
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Key legislation for federal IT management.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        December 2014
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/cybersecurity"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Cybersecurity
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Federal cybersecurity priorities and policies.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        January 2025
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/cloud-smart"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Cloud Smart
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Federal cloud adoption strategy.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        June 2019
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/handbook"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      CIO Handbook
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Comprehensive guide for federal CIOs.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-report-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-report-foreground"
                          aria-hidden="true"
                        ></span>
                        Report
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        January 2024
                      </span>
                    </div>
                  </div>
                </Link>

                <a
                  href="/assets/resources/small-agency-cio-handbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Small Agency CIO Handbook
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Guide for CIOs at small federal agencies.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-guidance-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-guidance-foreground"
                          aria-hidden="true"
                        ></span>
                        Guidance
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        October 2018
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/ombegov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      FY25 AI Use Case Inventory
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Consolidated Federal AI Use Case Inventories published on
                      the OMB E-Gov GitHub.
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-website-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-website-foreground"
                          aria-hidden="true"
                        ></span>
                        Website
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        February 2025
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 4H20V10M20 4L10 14M5 8V19H16"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site bg-muted py-section border-t border-border">
        <div className="max-w-site mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] font-medium">
              Have a resource to suggest?
            </h2>
            <p className="font-sans text-[15px] leading-[25.5px] mt-4 text-muted-foreground">
              We&apos;re always looking to expand this library with valuable
              resources for the federal IT community. If you have a suggestion,
              we&apos;d love to hear from you.
            </p>
            <a href="mailto:feedback@cio.gov" className="inline-block mt-6">
              <button
                type="button"
                tabIndex={0}
                className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base"
              >
                Suggest a Resource
              </button>
            </a>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
