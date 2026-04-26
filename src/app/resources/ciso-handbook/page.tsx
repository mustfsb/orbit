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
                  <a
                    href="/resources"
                    className="hover:text-foreground transition-colors"
                  >
                    Resources
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                  <span className="text-primary truncate max-w-[30ch]">
                    CISO Handbook
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-center">
        <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
            <div className="flex flex-col gap-6">
              <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
                CISO Handbook
              </h1>
            </div>
          </div>
        </section>
      </div>
      <section className="px-site pb-12 lg:pb-16">
        <div className="max-w-[650px] mx-auto">
          <div className="mb-12">
            <h2 className="font-sans text-[18px] leading-[23px] tracking-[-0.27px] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.3px] font-medium mb-6">
              Introduction
            </h2>
            <div className="prose prose-lg prose-gray">
              <p className="font-sans text-[18px] leading-[27px] text-muted-foreground mb-4">
                The CISO Handbook was created to educate and inform new and
                existing CISOs about their role in Federal cybersecurity. It
                provides resources to help CISOs responsibly apply risk
                management principles to help Federal agencies meet mission
                objectives, and makes CISOs aware of laws, policies, tools, and
                initiatives that can assist them as they develop or improve
                cybersecurity programs for their organizations.
              </p>
              <p className="font-sans text-[18px] leading-[27px] text-muted-foreground">
                The Handbook is a key document, coordinated through the CIO and
                CISO Councils, to improve the vital federal cybersecurity
                reskilling and workforce development efforts outlined in the{" "}
                <a
                  href="https://trumpadministration.archives.performance.gov/PMA/PMA.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline hover:text-muted-foreground"
                >
                  President&apos;s Management Agenda
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="font-sans text-[18px] leading-[23px] tracking-[-0.27px] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.3px] font-medium mb-6">
              Key Elements of the Handbook
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Overview of the CISO role (page 7) and key government-wide
                  organizations (page 11).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  CISO Reference Sections with high-level information about
                  important cybersecurity documents: Federal risk management
                  publications (page 31) and Government-wide policy documents
                  (page 50).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Information on the Framework for Improving Critical
                  Infrastructure Cybersecurity (also known as the NIST
                  Cybersecurity Framework or the CSF) and how it can be
                  leveraged in conjunction with other NIST risk management
                  publications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Resources and links for workforce, contracting, and other
                  government-wide services with which CISOs should be familiar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  Extensive, searchable appendices that consolidate key
                  statutory language, policy templates, government-wide
                  services, and other previously disparate resources.
                </span>
              </li>
            </ul>
          </div>
          <div className="mb-12 p-8 md:p-12 bg-muted rounded-2xl">
            <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium mb-4">
              Download the Complete Handbook
            </h3>
            <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mb-6">
              Download the complete CISO Handbook for comprehensive guidance on
              federal cybersecurity responsibilities and resources.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="font-sans text-[18px] leading-[23px] tracking-[-0.27px] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.3px] font-medium mb-6">
              Annual Reporting Schedule
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="text-left py-3 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-semibold">
                        Quarter
                      </span>
                    </th>
                    <th className="text-left py-3 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-semibold">
                        Deadline
                      </span>
                    </th>
                    <th className="text-left py-3 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-semibold">
                        Reporting
                      </span>
                    </th>
                    <th className="text-left py-3">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-semibold">
                        Responsible Parties
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-medium">
                        FYQ1
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        January
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        Q1 CIO FISMA Reporting, Annual HVA Reporting
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        CFO Act Agencies (Required), Small Agencies (Optional)
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-medium">
                        FYQ2
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        April
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        Q2 CIO FISMA Report
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        All Civilian Agencies
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-medium">
                        FYQ3
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        July
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        Q3 CIO FISMA Reporting
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        CFO Act Agencies (Required), Small Agencies (Optional)
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground font-medium">
                        FYQ4
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        October
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        Annual CIO FISMA Reporting, Annual IG FISMA Reporting,
                        Annual SAOP FISMA Reporting
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                        All Civilian Agencies
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="font-sans text-[18px] leading-[23px] tracking-[-0.27px] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.3px] font-medium mb-6">
              Related
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]"
              >
                <div className="flex flex-col h-full">
                  <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    NIST Cybersecurity Framework
                  </h3>
                  <div className="flex items-center gap-2 mt-auto pt-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">
                      External
                    </span>
                    <svg
                      className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-auto"
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
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-border px-site">
        <div className="max-w-site mx-auto flex items-center py-5">
          <a
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
          </a>
        </div>
      </div>
      <section className="py-section px-site border-t border-border bg-muted">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] mb-16 lg:mb-20 font-medium">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5"></div>
        </div>
      </section>
    </>
  );
}
