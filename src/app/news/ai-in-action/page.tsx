import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "AI in Action | CIO Council News",
  description: "CIO Council article on AI in Action.",
};

export default function AiInActionPage() {
  return (
    <MarketingPage>
      <div
        data-breadcrumb="true"
        className="sticky z-40 bg-background/90 backdrop-blur-xl transition-[top,box-shadow] duration-300 [[data-scrolled]_&]:shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
        style={{ top: "var(--header-offset, 0px)" }}
      >
        <div className="border-y border-border px-site">
          <div className="max-w-site mx-auto flex items-center justify-between py-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Link href="/news" className="hover:text-foreground transition-colors">News</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-foreground/50">/</span>
                  <span className="text-primary truncate max-w-[30ch]">AI in Action: 5 Essential Findings from the 2024 Federal AI Use Case Inventory</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="px-site pt-section pb-12 lg:pb-16">
        <div className="max-w-[650px] mx-auto">
          <h2>AI in Action: 5 Essential Findings from the 2024 Federal AI Use Case Inventory</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-6 mb-6">
            <time className="font-sans text-[13px] leading-[22px] text-muted-foreground" dateTime="2025-01-15">January 15, 2025</time>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">Clare Martorana</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Artificial Intelligence</span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Policy</span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
            <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
              <p>This year, agencies publicly reported more than 1,700 ways they are using Artificial Intelligence (AI) to advance their missions and deliver better experiences to the public. While the full listing of use cases is available <Link className="wrap-anywhere font-medium text-primary underline" href="/policies-and-priorities/Executive-Order-13960-AI-Use-Case-Inventories-Reference/">here</Link>, I want to highlight five key takeaways you need to know:</p>
              <p><span className="font-semibold">1. Compared to 2023, Federal agencies have more than doubled their AI use in the last year, citing improvements to operational efficiency and the execution of their missions as key drivers for increased utilization.</span></p>
              <p>In this cycle of reporting, 37 agencies are sharing how they are developing and using AI. Collectively, the Department of Health and Human Services (HHS), the Department of Veterans Affairs (VA), the Department of Homeland Security (DHS), and the Department of the Interior (DOI) account for <span className="font-semibold">50%</span> of this year's publicly-reported AI use cases.</p>
              <p>While agencies cite a host of expected benefits from their AI use, some common themes include: enhanced anomaly detection, streamlined business processes, and improved decision-making.</p>
              <p><span className="font-semibold">2. Federal agencies are predominantly leveraging AI to assist with administrative and IT functions; however, AI use cases in health and medical applications closely follow.</span></p>
              <p><span className="font-semibold">Roughly 46%</span> of AI use cases across the Federal government are categorized as <span className="font-semibold">mission-enabling</span>, which includes management of finances, human resources, and facilities and properties. This category also captures agency cybersecurity, IT, procurement, and other administrative functions.</p>
              <p>As reflected in this year's inventory:</p>
              <ul className="list-inside list-disc whitespace-normal [li_&]:pl-6">
                <li className="py-1 [&>p]:inline">The Department of Labor (DOL) is using an AI assistant to help answer common procurement or specific contract questions.</li>
                <li className="py-1 [&>p]:inline">The U.S. Patent and Trademark Office (USPTO) is using AI to assist examiners with finding relevant documents to help search and adjudicate new patent applications.</li>
              </ul>
              <p>Additionally, <span className="font-semibold">approximately 13%</span> of use cases are categorized under <span className="font-semibold">health and medical</span>, followed by <span className="font-semibold">roughly 9% of use cases supporting government services or benefits delivery</span>, which covers processing and improving access for government benefits (such as Medicare and Medicaid, Social Security, and unemployment).</p>
              <p>Additional use cases include:</p>
              <ul className="list-inside list-disc whitespace-normal [li_&]:pl-6">
                <li className="py-1 [&>p]:inline">The Centers for Disease Control and Prevention (CDC) using AI to accelerate their investigations of multi-state foodborne disease outbreaks that otherwise requires extensive time and human effort.</li>
                <li className="py-1 [&>p]:inline">The Veterans Benefits Administration (VBA) protecting veterans' benefit payments by using AI to help detect fraudulent direct deposit changes.</li>
                <li className="py-1 [&>p]:inline">The Social Security Administration (SSA) using AI to support Disability Program adjudicators in maximizing the quality, speed, and consistency of their decision-making.</li>
              </ul>
              <p>Other areas of application include law and justice, education and workforce, transportation, science and space, and energy and the environment. Furthermore, <span className="font-semibold">more than 100 use cases</span> directly support <a className="wrap-anywhere font-medium text-primary underline" href="https://www.performance.gov/cx/hisps/" rel="noopener noreferrer" target="_blank">High Impact Service Providers</a> (HISPs) – including at the Veterans Benefits Administration, the Public Experience Portfolio at General Services Administration, and the Social Security Administration.</p>
              <p><span className="font-semibold">3. Approximately 50% of all reported AI use cases are developed in-house, illustrating Federal agencies' capacity for innovation.</span></p>
              <p>In an effort to increase public transparency into agencies' procurement and development processes, we've expanded this year's inventory to link use cases to specific agency contracts and solicitations, including whether a use case involves custom-developed and/or publicly available code. <span className="font-semibold">Over 40%</span> of use cases include custom-developed code, much of which is publicly available, inviting innovation and continued collaboration across the Federal ecosystem.</p>
              <p>Federal agencies are leveraging both internal expertise and external partnerships to integrate AI into their operations at relatively proportional rates, which ensures the government can innovate and adapt AI technologies according to its specific needs.</p>
              <p><span className="font-semibold">4. Federal agencies are showcasing increased AI maturity, including by accelerating access to necessary tools and infrastructures for development.</span></p>
              <p>For AI currently <span className="font-semibold">in operation</span> within an agency:</p>
              <ul className="list-inside list-disc whitespace-normal [li_&]:pl-6">
                <li className="py-1 [&>p]:inline">Agencies are developing comprehensive documentation for their AI use cases outlining appropriateness of data for analysis and decision-making.</li>
                <li className="py-1 [&>p]:inline"><span className="font-semibold">Over 35%</span> of the AI is developed on existing enterprise data and analytics platforms within an agency or re-use production-level code and/or data from a different use case.</li>
              </ul>
              <p>The above figures demonstrate agencies' agility and efficiency in leveraging AI for scalable and impactful solutions.</p>
              <p><span className="font-semibold">5. Approximately 13% of Federal AI use cases could impact the public's rights or safety, as defined by <a className="wrap-anywhere font-medium text-primary underline" href="https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/03/M-24-10-Advancing-Governance-Innovation-and-Risk-Management-for-Agency-Use-of-Artificial-Intelligence.pdf" rel="noopener noreferrer" target="_blank">OMB Memorandum M-24-10</a>.</span></p>
              <p>For these use cases, agencies are required to implement concrete safeguards before use. The inventory provides visibility into agency approaches to AI risk management, which include a range of actions to reliably assess, test, and monitor AI's impacts on the public and mitigate the risks of algorithmic discrimination.</p>
              <p>For example, as of December 16, 2024, agencies have completed AI Impact Assessments for <span className="font-semibold">more than 80%</span> of rights- and/or safety-impacting use cases and independent evaluations of <span className="font-semibold">more than 70%</span> of such use cases. Additionally, <span className="font-semibold">nearly half</span> of rights-impacting use cases have an established process in place to appeal or contest an AI system's outcome and/or opt-out from the AI functionality in favor of a human alternative.</p>
              <p>In select cases, OMB granted extensions to agencies that requested additional time to implement the required safeguards. Additional information on these extensions can be found on <Link className="wrap-anywhere font-medium text-primary underline" href="/policies-and-priorities/Executive-Order-13960-AI-Use-Case-Inventories-Reference/">cio.gov</Link>.</p>
              <p>The Federal Government continues to lead the world in the safe and responsible use of AI. To read more about all the ways Federal agencies are using AI and implementing concrete safeguards to protect the public's rights and safety while doing so, view the full listing of use cases <a className="wrap-anywhere font-medium text-primary underline" href="https://github.com/ombegov/2024-Federal-AI-Use-Case-Inventory" rel="noopener noreferrer" target="_blank">here</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section px-site border-t border-border bg-muted">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] mb-16 lg:mb-20 font-medium">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link href="/news/ai-transparency-listening-session" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">September 26, 2025</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">AI Transparency Listening Session with the White House Office of Management and Budget</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">The White House Office of Management and Budget (OMB) is leading a series of listening sessions to learn more from industry about their approaches to AI transparency and auditable risk management.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Artificial Intelligence</span></div>
            </Link>
            <Link href="/news/ai-policy" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">December 11, 2023</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">The Top 10 Things Federal Technology Leaders Should Know About OMB's Draft AI Policy</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">In October 2023, President Biden signed the landmark Executive Order 14110: Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence. We recognize that when AI is used to make decisions and take actions that have a consequential impact on the lives of individuals, the government has a distinct responsibility to identify and manage AI risks.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Artificial Intelligence</span></div>
            </Link>
            <Link href="/news/2023-06-12-federal-tech-day-2023-impact-through-innovation" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">June 12, 2023</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">Federal Tech Day 2023: Impact Through Innovation</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">The Federal Chief Information Officers (CIO) Council, in partnership with the U.S. Department of Labor and U.S. Department of Energy, hosted Federal Tech Day 2023 to showcase innovative technologies developed by federal agencies to help deliver their programs' missions.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Technology</span></div>
            </Link>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
