import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Policies & Priorities | CIO Council",
  description:
    "Federal IT policies and priorities from the CIO Council, covering cybersecurity, cloud, data, workforce, and more.",
};

export default function PoliciesAndPrioritiesPage() {
  return (
    <MarketingPage>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
              Policies
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
              </div>
            </aside>

            <div className="flex-1">
              <div className="grid gap-5">
                <Link
                  href="/policies-and-priorities/21st-century-idea-act"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      21st Century IDEA Act
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The 21st Century Integrated Digital Experience Act (21st
                      Century IDEA) became active in December of 2018. It
                      requires all government-produced websites, applications,
                      and other digital products intended for public use to
                      meet...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-law-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-law-foreground"
                          aria-hidden="true"
                        ></span>
                        Law
                      </span>
                      <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">
                        December 2018
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/architecture-first-procurement"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Architecture-First Procurement
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Clear reference architectures, defined in functional
                      terms, get us to better outcomes faster. Procurement
                      should start with architecture — a shared understanding of
                      what the target state looks like — before any contract is
                      written. Architecture-first procurement means...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/build-vs-buy"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Build Bespoke Rarely
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Most core capabilities are commodities now. Custom systems
                      mean long-term ownership of every bug, every patch, and
                      every compliance requirement. Building bespoke should be
                      the exception, reserved for truly unique mission needs
                      that no commercial or shared solution can address....
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/cpic"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Capital Planning and Investment Control (CPIC)
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Division E of the Information Technology Management
                      Reform Act of 1996 (Public Law 104–106, Clinger Cohen
                      Act) requires federal executive departments and agencies
                      to use a disciplined capital planning and investment
                      control (CPIC) process to acquire, use, maintain, and...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/circular-a-130"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Circular A-130
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      In July 2016, the Office of Management and Budget (OMB)
                      revised Circular A-130, "Managing Information as a
                      Strategic Resource," to...
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
                        July 2016
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/cloud-smart"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Cloud Smart
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Cloud computing is a means for delivering computing
                      services via IT networks. According to the National
                      Institute of Standards and Technology, cloud enables
                      "on-demand access to shared and scalable pools of
                      computing resources with the goal of minimizing management
                      effort or...
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
                  href="/policies-and-priorities/ipv6"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Completing the Transition to Internet Protocol Version 6
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Office of Management and Budget (OMB) is seeking
                      public comment on a draft memorandum titled, Completing
                      the Transition to Internet Protocol Version 6. The public
                      comment period on the draft memorandum begins on Monday,
                      March 2nd in the...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/cybersecurity"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Cybersecurity
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Our Nation's security and economic prosperity depend on
                      the stability and integrity of our Federal communications
                      and information infrastructure. Threats to cyberspace pose
                      some of the most serious challenges of the 21st century
                      for the United States. The President has made...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/data"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Data
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Federal Government must treat data as a strategic
                      asset — collecting, managing, and using it responsibly to
                      improve decision-making, strengthen accountability, and
                      deliver better services to the public. OMB Memorandum...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/design-to-reduce-interaction"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Design to Reduce Interaction
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The best digital service is often the one where nothing
                      happens because nothing needed to. Designing to reduce
                      interaction means eliminating unnecessary steps,
                      automating routine processes, and proactively delivering
                      services before people have to ask. This principle
                      draws...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/evidence-based-policymaking"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Evidence-Based Policymaking
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Foundations for Evidence-Based Policymaking Act (or
                      OPEN Government Data Act, Pub.L. 115–435) is a United
                      States law that requires the federal government to
                      modernize its data management practices. The bill requires
                      agencies to submit annually to the Office of
                      Management...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/executive-order-13960-ai-use-case-inventories-reference"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Executive Order 13960 AI Use Case Inventories Reference
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Consistent with Section 5 of Executive Order (EO) 13960,
                      "Promoting the Use of Trustworthy Artificial Intelligence
                      in the Federal Government," and pursuant to the Advancing
                      American AI Act and OMB Memorandum M-24-10, *Advancing
                      Governance, Innovation, and Risk Management for...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/cyber-workforce-strategy"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Federal Cybersecurity Workforce Strategy
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Per the Federal Cybersecurity Workforce Strategy, via
                      Executive Order 13800, the President will continue to hold
                      heads of executive departments and agencies accountable
                      for managing cybersecurity...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/federal-data-center-enhancement-act"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Federal Data Center Enhancement Act
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Office of Management and Budget (OMB) released
                      Memorandum M-25-03 to fulfill requirements of the Federal
                      Data Center Enhancement Act (FDCEA) of...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/fisma"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Federal Information Security Modernization Act of 2014
                      (FISMA)
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Federal Information Security Modernization Act of 2014
                      (FISMA), dating back to 2002, requires agencies to report
                      the status of their information security programs to OMB
                      and requires Inspectors General (IG) to conduct...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-law-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-law-foreground"
                          aria-hidden="true"
                        ></span>
                        Law
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/fitara"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Federal Information Technology Acquisition Reform Act
                      (FITARA)
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Federal Information Technology Acquisition Reform Act
                      (FITARA), as of December 2014, is a historic law that
                      represented the first major overhaul of Federal IT in
                      almost 20 years. Since FITARA's enactment, OMB published
                      guidance to agencies to ensure that...
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
                  href="/policies-and-priorities/fedramp"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      FedRAMP
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Federal Risk and Authorization Management Program
                      (FedRAMP) is a government-wide program that provides a
                      standardized approach to security assessment,
                      authorization, and continuous monitoring for cloud
                      products and services. FedRAMP created and...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/icam"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Identity, Credentialing, and Access Management (ICAM)
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The memorandum OMB M-19-17 in May 2019, Identity,
                      Credentialing, and Access Management (ICAM), sets forth
                      the Federal Government's latest ICAM policy and overrides
                      a number of prior OMB memos dating...
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
                        May 2019
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/management-hva"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Management of High Value Assets
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      With the creation of the High Value Asset (HVA) initiative
                      in 2015, the Federal Government's CFO Act agencies took a
                      pivotal step toward the identification of its most
                      critical assets. DHS, in coordination with OMB,
                      established a capability to assess agency HVAs,
                      resulting in...
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
                        December 2018
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/measure-what-matters"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Measure What Matters
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Talent retention and impact. Fewer manual data calls.
                      Fewer duplicative information requests. Measurement should
                      focus on outcomes that matter — not activity metrics that
                      create reporting burden without driving improvement.
                      Effective measurement means defining clear success...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/people-and-culture"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      People &amp; Culture
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The U.S. Tech Force is about building durable capability
                      and professional identity across government, not just
                      staffing projects. Federal technology leadership depends
                      on attracting, developing, and retaining a world-class
                      workforce equipped to meet...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/practical-ai-adoption"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Practical AI Adoption
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Every federal employee should have access to baseline
                      AI-enabled productivity tools. Practical AI adoption means
                      moving beyond pilot projects and proof-of-concepts to
                      embed artificial intelligence into everyday government
                      workflows where it delivers measurable value. This...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/scale-through-shared-services"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Scale Through Shared Services
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Breaking down silos across identity, data exchange,
                      cybersecurity, and cloud services is how we move faster
                      and spend less. Shared services allow agencies to leverage
                      common platforms, reduce duplicative spending, and deliver
                      consistent experiences across government. This...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/section508"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Section 508
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      In 1998, Congress amended the Rehabilitation Act of 1973
                      to require Federal agencies to make their electronic and
                      information technology (EIT) accessible to people with
                      disabilities. The law (29 U.S.C § 794...
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
                        January 18, 2018
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/shared-services"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Shared Services
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Centralized Mission Support Capabilities for the
                      Federal Government memorandum, as of April 2019, is a
                      strategy based on industry experiences and lessons learned
                      from other central governments. Its goal is to reduce...
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
                        April 2019
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/modernize-to-simplify"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Simplify, Don't Repackage
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      Modernization starts with a blank whiteboard and a hard
                      question: what problem are we actually solving? Too often,
                      legacy system replacements replicate existing complexity
                      rather than eliminating it. True modernization means
                      rethinking processes from the ground up....
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/tmf"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Technology Modernization Fund
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Technology Modernization Fund (TMF) was authorized by
                      the Modernizing Government Technology Act of 2017. The TMF
                      is an innovative funding vehicle that gives agencies
                      additional ways to deliver services to the American public
                      more quickly, better secure sensitive systems...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/trusted-internet-connection"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Trusted Internet Connection
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The purpose of the Trusted Internet Connections (TIC)
                      initiative is to enhance network security across the
                      Federal Government. Initially, this was done through the
                      consolidation of external connections and the
                      deployment...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-policy-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-policy-foreground"
                          aria-hidden="true"
                        ></span>
                        Policy
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/policies-and-priorities/workforce"
                  className="group block bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08] p-5 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      Workforce
                    </h3>
                    <p className="font-sans text-[15px] leading-[25.5px] mt-3 text-muted-foreground">
                      The Federal Government needs an IT workforce that can
                      effectively carry out its mission. "Workforce" is a push
                      toward identifying, hiring, and empowering the best
                      possible people in federal IT. The Administration's
                      broader focus on Developing the Workforce of the 21st...
                    </p>
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-tag-priority-foreground bg-background hover:bg-foreground/[0.08]">
                        <span
                          className="size-2 shrink-0 rounded-full bg-tag-priority-foreground"
                          aria-hidden="true"
                        ></span>
                        Priority
                      </span>
                    </div>
                  </div>
                </Link>
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
              We're always looking to expand this library with valuable
              resources for the federal IT community. If you have a suggestion,
              we'd love to hear from you.
            </p>
            <a href="mailto:feedback@cio.gov" className="inline-block mt-6">
              <button
                type="button"
                tabIndex={0}
                className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base"
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
