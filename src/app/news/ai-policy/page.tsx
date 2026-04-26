import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "AI Policy | CIO Council News",
  description: "CIO Council article on AI Policy.",
};

export default function AiPolicyPage() {
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
                  <span className="text-primary truncate max-w-[30ch]">The Top 10 Things Federal Technology Leaders Should Know About OMB&apos;s Draft AI Policy</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="px-site pt-section pb-12 lg:pb-16">
        <div className="max-w-[650px] mx-auto">
          <h2>The Top 10 Things Federal Technology Leaders Should Know About OMB&apos;s Draft AI Policy</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-6 mb-6">
            <time className="font-sans text-[13px] leading-[22px] text-muted-foreground" dateTime="December 11, 2023">December 11, 2023</time>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">Clare Martorana</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Artificial Intelligence</span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Policy</span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
            <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
              <p>In October 2023, President Biden signed the landmark <a className="wrap-anywhere font-medium text-primary underline" href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/" rel="noopener noreferrer" target="_blank"><em>Executive Order 14110: Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence</em></a>. We recognize that when AI is used to make decisions and take actions that have a consequential impact on the lives of individuals, the government has a distinct responsibility to identify and manage AI risks. A key action identified in the EO is for the Office of Management and Budget (OMB) to issue guidance on the Federal Government's use of AI, positioning the U.S. to lead by example in the responsible use of this innovative technology. To deliver on this requirement, OMB issued draft AI implementation guidance <a className="wrap-anywhere font-medium text-primary underline" href="https://www.whitehouse.gov/omb/briefing-room/2023/11/01/omb-releases-implementation-guidance-following-president-bidens-executive-order-on-artificial-intelligence/" rel="noopener noreferrer" target="_blank"><em>Advancing Governance, Innovation, and Risk Management for Agency Use of Artificial Intelligence</em></a>.</p>
              <p>The draft policy outlines a series of actions to empower Federal agencies to leverage AI to improve government services and more equitably serve the American people. Below are the top 10 most pressing questions for the Federal senior technology officials that will play an instrumental role in the policy's future implementation.</p>
              <p><span className="font-semibold">1. What is in OMB's proposed AI policy?</span></p>
              <p>The draft guidance outlines three pillars to advance the responsible use of AI in government and proposed agency actions as outlined in the below table.</p>
              <div className="my-4 flex flex-col space-y-2">
                <div className="overflow-x-auto overscroll-y-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead className="bg-muted/80">
                      <tr className="border-border border-b">
                        <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-sm">Pillar</th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-sm">Examples of Proposed Agency Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-muted/40">
                      <tr className="border-border border-b">
                        <td className="px-4 py-2 text-sm">Strengthen AI Governance</td>
                        <td className="px-4 py-2 text-sm">Designate Chief AI Officers holding primary responsibility for coordinating their agency's use of AI, promoting AI innovation, and managing risks from the use of AI.</td>
                      </tr>
                      <tr className="border-border border-b">
                        <td className="px-4 py-2 text-sm">Advance Responsible AI Innovation</td>
                        <td className="px-4 py-2 text-sm">Remove barriers impacting responsible AI use and development of agency AI strategies for achieving enterprise-wide advances in AI maturity</td>
                      </tr>
                      <tr className="border-border border-b">
                        <td className="px-4 py-2 text-sm">Manage Risks from the Use of AI</td>
                        <td className="px-4 py-2 text-sm">Adopt minimum AI risk management practices for AI uses that impact rights and safety</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p>Read additional details in the <a className="wrap-anywhere font-medium text-primary underline" href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/" rel="noopener noreferrer" target="_blank">AI Implementation Guidance Fact Sheet</a>.</p>
              <p><span className="font-semibold">2. What will Chief AI Officers be responsible for? How will the newly created Chief AI Officer role interact with CIOs, CDOs, and CTOs?</span></p>
              <p>Chief AI Officers (CAIOs) will hold primary responsibility in their agency for coordinating their agency's use of AI, promoting AI innovation in their agency, and managing risks from their agency's use of AI. Agencies have flexibility to <em>either</em> create a brand-new position to fill this role or designate an existing official to perform the Chief AI Officer's responsibilities—provided the official has significant expertise in AI. For <Link className="wrap-anywhere font-medium text-primary underline" href="/handbook/it-laws/cfo-act/">CFO Act agencies</Link>, the CAIO must be a position at the Senior Executive Service, Scientific and Professional, or Senior Leader level, or equivalent. In other agencies, the CAIO must be at least a GS-15 or equivalent.</p>
              <p>Cross-cutting work such as AI governance and risk management cannot be performed in a vacuum; Chief AI Officers will need to coordinate with other relevant officials, such as agency CIOs, CDOs, and CTOs. This is necessary for a number of reasons, but importantly, many existing teams already maintain the authorities, resources, and expertise to carry out the responsibilities identified for the Chief AI Officer. CIOs, CDOs, and CTOs will remain deeply involved in the strategic planning for, acquisition of, and delivery of AI within their agencies. The role of the Chief AI Officer will not replace their work, but rather, fill the gaps that such roles were not designed to address. This includes efforts to mitigate algorithmic discrimination and establish processes for individuals to appeal harms caused by government AI.</p>
              <p><span className="font-semibold">3. How should CFO Act agencies ensure their AI Governance Body is sufficiently engaged with existing senior forums?</span></p>
              <p>OMB's draft memorandum would require <Link className="wrap-anywhere font-medium text-primary underline" href="/handbook/it-laws/cfo-act/">CFO Act agencies</Link> establish AI Governance Boards to convene relevant senior officials at least quarterly to govern their agency's use of AI. AI Governance Boards must be chaired by the Deputy Secretary, or equivalent, and vice-chaired by the agency's Chief AI Officer. The board must also include appropriate representation from senior agency officials responsible for elements of AI adoption and risk management.</p>
              <p>Agencies would have the option to convene a new senior-level body or expand the remit of an existing governance body to meet the AI Governance Board requirements. Many agencies already convene senior officials to discuss issues tangential to AI, such as IT modernization, data governance, and privacy. Some agencies have also established groups dedicated to AI governance and innovation specifically. Rather than set up a separate body, agencies can leverage existing mechanisms—if they choose— easing the burden for implementation.</p>
              <p><span className="font-semibold">4. Will my agency need to implement the identified AI risk management requirements every time AI is used?</span></p>
              <p>No. AI has been increasingly integrated in benign software applications and everyday consumer products, such as noise-cancelling headphones and auto-correcting text messages. OMB's proposed AI risk management requirements are only triggered when government AI use cases meet the definition for safety-impacting or rights-impacting. The draft policy takes a risk-based approach to managing AI harms, ensuring agency resources are well spent on AI use cases that pose the greatest risks to the rights and safety of the public. As a rule of thumb, when AI is used to control or meaningfully influence the outcomes of consequential actions or decisions, agencies will need to implement the memorandum's risk management requirements.</p>
              <p><span className="font-semibold">5. How do I know if my use case impacts rights or safety?</span></p>
              <p>OMB's draft memorandum identifies two broad categories of AI:</p>
              <ul className="list-inside list-disc whitespace-normal [li_&]:pl-6">
                <li className="py-1 [&>p]:inline"><em>Rights-Impacting AI</em>: AI whose output serves as a basis for decision or action that has a legal, material, or similarly significant effect on an individual's or community's civil rights, civil liberties, or privacy, equal opportunities, and/or access to critical resources or services; and</li>
                <li className="py-1 [&>p]:inline"><em>Safety-Impacting AI</em>: AI that has the potential to meaningfully impact the safety of human life or well-being, climate or environment, critical infrastructure, and/or strategic assets or resources.</li>
              </ul>
              <p>These categories are further expanded upon in subsection 5(b) of the guidance, where OMB identifies specific purposes for which AI is automatically presumed to be safety-impacting or rights-impacting. This list is intended to reduce uncertainty—both for agencies and for the public—on when additional safeguards are warranted.</p>
              <p><span className="font-semibold">6. How will OMB's AI risk management requirements feed into my agency's Authorization to Operate process?</span></p>
              <p>AI is software and therefore, it is still subject to an agency's authorization process for information systems. <a className="wrap-anywhere font-medium text-primary underline" href="https://bidenwhitehouse.archives.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf" rel="noopener noreferrer" target="_blank">OMB Circular A-130</a>, <em>Managing Information as a Strategic Resource</em>, directly and indirectly tasks agency CIOs with the responsibility to assess information systems for security and privacy risks. However, OMB's draft guidance identifies a new category of risk to consider: risks from the use of AI. This primarily includes risks related to efficacy, safety, equity, fairness, transparency, accountability, appropriateness, or lawfulness of a decision or action resulting from the use of AI to inform, influence, decide, or execute that decision or action.</p>
              <p>When looking at the memorandum's proposed AI risk management requirements, agencies would be directed to use existing processes wherever possible, like the Authorization to Operate process, to assess, manage, evaluate, and continuously monitor this new category of risk from the use of AI. This means when agencies review safety-impacting or rights-impacting AI via their ATO process, the Authorizing Official should collaborate with the Chief AI Officer and other appropriate AI oversight officials to assess the types of risks identified in this memorandum and ensure compliance.</p>
              <p><span className="font-semibold">7. What will this policy mean for agencies' use of generative AI?</span></p>
              <p>It is critical to ensure that the use of generative AI will not cause undue risk to the public. Agencies must ensure that adequate safeguards and oversight mechanisms are in place before generative AI is used. For example, in line with EO 14110, agencies should explore limited access policies to specific generative AI services based on specific risk assessments rather than implementing across the board bans. Additionally, some agencies have already established guidelines and limitations on the appropriate use of particular AI-enabled technologies, such as for facial recognition. Similar guidelines can be written for the responsible use of generative AI.</p>
              <p><span className="font-semibold">8. What resources will be made available to help agencies with implementation?</span></p>
              <p>EO 14110 identifies a few actions that will directly assist agencies with implementation of OMB's memorandum, once finalized. This includes:</p>
              <ul className="list-inside list-disc whitespace-normal [li_&]:pl-6">
                <li className="py-1 [&>p]:inline"><em>Guidelines, tools, and practices</em> developed by NIST to support implementation of the minimum risk-management practices described in OMB's memorandum;</li>
                <li className="py-1 [&>p]:inline"><em>Further procurement guidance</em> from OMB to ensure that Federal AI procurement aligns with the policies in this memorandum, and a method to track agencies' AI maturity; and</li>
                <li className="py-1 [&>p]:inline"><em>A national surge in AI talent</em> to grow the Federal Government's AI workforce capacity.</li>
              </ul>
              <p><span className="font-semibold">9. Would this draft policy apply to contractors?</span></p>
              <p>Yes. The guidance will apply to any development, use, or procurement of AI by the Federal government or on its behalf, and pursuant to EO 14110, OMB will issue further guidance focused specifically on contractors in the coming months.</p>
              <p><span className="font-semibold">10. What happens next?</span></p>
              <p>OMB collected public comments and will be reviewing recommendations on <a className="wrap-anywhere font-medium text-primary underline" href="https://www.regulations.gov/" rel="noopener noreferrer" target="_blank">regulations.gov</a> and publishing the comments. The next draft of the policy will be shared with the interagency council established in subsection 10.1(a) of EO 14110 before the policy's final issuance. The final guidance is due within 150 days of the order.</p>
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
            <Link href="/news/ai-in-action" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">January 15, 2025</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">AI in Action: 5 Essential Findings from the 2024 Federal AI Use Case Inventory</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">This year, agencies publicly reported more than 1,700 ways they are using Artificial Intelligence (AI) to advance their missions and deliver better experiences to the public.</p>
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
