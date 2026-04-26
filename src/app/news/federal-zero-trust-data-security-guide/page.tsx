import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "Federal Zero Trust Data Security Guide | CIO Council News",
  description: "CIO Council article on the Federal Zero Trust Data Security Guide.",
};

export default function FederalZeroTrustDataSecurityGuidePage() {
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
                  <span className="text-primary truncate max-w-[30ch]">CISO Council and CDO Council Release Joint Guide on Federal Zero Trust Data Security</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="px-site pt-section pb-12 lg:pb-16">
        <div className="max-w-[650px] mx-auto">
          <h2>CISO Council and CDO Council Release Joint Guide on Federal Zero Trust Data Security</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-6 mb-6">
            <time className="font-sans text-[13px] leading-[22px] text-muted-foreground" dateTime="October 31, 2024">October 31, 2024</time>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">Steven Hernandez</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Cybersecurity</span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Data</span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Collaboration</span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Guidance</span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
            <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
              <p>Today, the CISO Council and CDO Council released the Federal Zero Trust (ZT) Data Security Guide <Link className="wrap-anywhere font-medium text-primary underline" href="/zero-trust-data-security-guide-may2025/">resource</Link>, a first-of-its-kind document and key deliverable of OMB M-22-09, <em>Moving the U.S. Government Towards Zero Trust Cybersecurity Principles</em>. M-22-09 charged the Federal CDO Council and Federal CISO Council to convene a cross-agency working group of data and security experts to develop a data security guide for Federal agencies.</p>
              <p>More than 30 Federal agencies and departments answered the call to author the <a className="wrap-anywhere font-medium text-primary underline" href="/assets/files/Zero-Trust-DataSecurityGuide_RevisedMay2025_CIO.govVersion.pdf" rel="noopener noreferrer" target="_blank">Federal Zero Trust Data Security Guide</a>. The Guide and <Link className="wrap-anywhere font-medium text-primary underline" href="/zero-trust-data-security-guide-oct2024/appendices">companion document</Link> will assist practitioners in operationalizing data security using a ZT framework.</p>
              <p>"To meet the moment of the security paradigm shift to zero trust, the Federal Government is transforming how we work. This is the first time that Federal security teams and data teams are coming together in this way to tackle a challenge of this magnitude." – Steven Hernandez, Chief Information Security Officer (Department of Education), Co-Chair of the CISO Council</p>
              <p>"This guide represents insights from agency practitioners who are in the trenches working to implement zero trust and secure their organization's data. We're building a cooperative relationship between data and cyber to tackle this government-wide challenge and ultimately ensure the public's data is secured." – Kirsten Dalboe, Chief Data Officer (Federal Energy Regulatory Commission), Chair of the CDO Council</p>
              <p>Each agency has a unique mission, structure, and budget with varying risk tolerances and levels of cybersecurity maturity. This guide is intended to meet agencies where they are as they work to strengthen their data security architecture and continue on their ZT journey.</p>
              <p>The implementation of ZT principles is paramount for the Federal government to secure its data assets in an increasingly complex and contested cyber environment. By adhering to the core tenets of ZT — never trust, always verify — agencies can ensure that their data is categorized and safeguarded with the utmost precision.</p>
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
            <Link href="/news/help-us-deliver-a-digital-first-government" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">November 17, 2023</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">Help Us Deliver A Digital-First Government</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">In September 2023, The Office of Management and Budget published the Delivering a Digital-First Public Experience guidance. The guidance provides agencies with tangible actions and timelines to deliver a digital experience that meets the public's expectation now and in the future.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Customer Experience</span></div>
            </Link>
            <Link href="/news/2023-10-23-ncam-2023-protecting-yourself-online" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">October 23, 2023</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">NCAM 2023: Protecting Yourself Online</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">The 20th anniversary of National Cybersecurity Awareness Month is an excellent reminder that not only are cyber threats still a serious issue, but they have also grown and become more sophisticated.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">2023</span></div>
            </Link>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
