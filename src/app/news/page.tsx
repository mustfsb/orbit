import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "News | CIO Council",
  description: "News and updates from the Federal Chief Information Officers Council.",
};

export default function NewsPage() {
  return (
    <MarketingPage>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">News</h1>
          </div>
        </div>
      </section>
      <section className="px-site pb-section">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <aside className="lg:w-64 shrink-0 lg:order-last">
              <div className="space-y-4">
                <div className="border border-border rounded-2xl p-6">
                  <p className="font-sans text-[15px] leading-[25.5px] mb-4 text-muted-foreground">Topics</p>
                </div>
                <div className="border border-border rounded-2xl p-6">
                  <p className="font-sans text-[15px] leading-[25.5px] mb-4 text-muted-foreground">Connect</p>
                  <ul className="space-y-3">
                    <li><a href="https://x.com/ciodotgov" className="text-foreground hover:text-muted-foreground transition-colors" target="_blank" rel="noopener noreferrer">@CIOdotgov</a></li>
                    <li><a href="mailto:ciocouncil.support@gsa.gov" className="text-foreground hover:text-muted-foreground transition-colors" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                    <li><Link href="/feed.xml" className="text-foreground hover:text-muted-foreground transition-colors">RSS Feed</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
            <div className="flex-1">
              <div className="grid gap-12">
                <article>
                  <Link href="/news/ai-transparency-listening-session" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="2025-09-26">September 26, 2025</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">Office of Management and Budget</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">AI Transparency Listening Session with the White House Office of Management and Budget</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">The White House Office of Management and Budget (OMB) is leading a series of listening sessions to learn more from industry about their approaches to AI transparency and auditable risk management.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Artificial Intelligence</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Guidance</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/ai-in-action" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="2025-01-15">January 15, 2025</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">Clare Martorana</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">AI in Action: 5 Essential Findings from the 2024 Federal AI Use Case Inventory</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">This year, agencies publicly reported more than 1,700 ways they are using Artificial Intelligence (AI) to advance their missions and deliver better experiences to the public.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Artificial Intelligence</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Policy</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/federal-zero-trust-data-security-guide" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="October 31, 2024">October 31, 2024</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">Steven Hernandez</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">CISO Council and CDO Council Release Joint Guide on Federal Zero Trust Data Security</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">Today, the CISO Council and CDO Council released the Federal Zero Trust (ZT) Data Security Guide, a first-of-its-kind document and key deliverable of OMB M-22-09, Moving the U.S. Government Towards Zero Trust Cybersecurity Principles. M-22-09 charged the Federal CDO Council and Federal CISO Council to convene a cross-agency working group of data and security experts to develop a data security guide for Federal agencies.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Cybersecurity</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Data</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Collaboration</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Guidance</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/ai-policy" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="December 11, 2023">December 11, 2023</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">Clare Martorana</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">The Top 10 Things Federal Technology Leaders Should Know About OMB's Draft AI Policy</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">In October 2023, President Biden signed the landmark Executive Order 14110: Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence. We recognize that when AI is used to make decisions and take actions that have a consequential impact on the lives of individuals, the government has a distinct responsibility to identify and manage AI risks.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Artificial Intelligence</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Policy</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/help-us-deliver-a-digital-first-government" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="November 17, 2023">November 17, 2023</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">Clare Martorana</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">Help Us Deliver A Digital-First Government</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">In September 2023, The Office of Management and Budget published the Delivering a Digital-First Public Experience guidance. The guidance provides agencies with tangible actions and timelines to deliver a digital experience that meets the public's expectation now and in the future.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Customer Experience</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Guidance</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Digital Experience</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/2023-10-23-ncam-2023-protecting-yourself-online" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="2023-10-23">October 23, 2023</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">Ryan A. Higgins</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">NCAM 2023: Protecting Yourself Online</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">The 20th anniversary of National Cybersecurity Awareness Month is an excellent reminder that not only are cyber threats still a serious issue, but they have also grown and become more sophisticated.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">2023</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Cybersecurity</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Cam</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/2023-06-12-federal-tech-day-2023-impact-through-innovation" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="2023-06-12">June 12, 2023</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">CIO Council</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">Federal Tech Day 2023: Impact Through Innovation</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">The Federal Chief Information Officers (CIO) Council, in partnership with the U.S. Department of Labor and U.S. Department of Energy, hosted Federal Tech Day 2023 to showcase innovative technologies developed by federal agencies to help deliver their programs' missions.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Technology</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Fraud Detection</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Cybersecurity</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Artificial Intelligence</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/2023-06-02-apply-to-be-a-cxo-fellow-and-enhance-your-leadership-skills" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="June 02, 2023">June 2, 2023</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">CIO Council</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">Apply to Be a CXO Fellow and Enhance Your Leadership Skills</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">The CXO Fellowship Application is Live! If you are a GS-09 to GS-13 employee (or equivalent) who is passionate about technology, understands how the Federal Government operates, and drives change within your agency, consider applying to the CXO Fellows Program. The application period for the FY 2024 cohort ends June 9 at 5 p.m. ET.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Cxo</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Leadership</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Workforce</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Development</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/2023-05-11-cio-council-releases-handbook-for-small-agency-cios-and-executives" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="2023-05-11">May 11, 2023</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">Chris Chilbert</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">CIO Council Releases Handbook for Small Agency CIOs and Executives</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">The Small Agency CIO Council published the Federal Small Agency CIO and IT Executive Handbook in partnership with GSA's IT Modernization division. Small agencies often have unique organizational structures that do not follow the traditional staffing model for IT administration.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">It Modernization</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Sacc</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Smallagency</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Guidance</span>
                      </div>
                    </div>
                  </Link>
                </article>
                <article>
                  <Link href="/news/2023-03-29-fraud-dection-prevention-symposium" className="group block p-8 lg:p-10 bg-muted rounded-2xl ring-1 ring-foreground/10 transition-colors hover:bg-foreground/[0.08]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <time className="font-sans text-[15px] leading-[25.5px] text-muted-foreground" dateTime="2023-03-29">March 29, 2023</time>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground truncate max-w-[18ch]">CIO Council</span>
                      </div>
                      <h3 className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">Fraud Detection &amp; Prevention Symposium: Increasing Collaboration and Driving Action</h3>
                      <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground mt-2 line-clamp-3">In February 2023, the Federal Chief Information Officers (CIO) Council hosted a Fraud Detection &amp; Prevention Symposium featuring over 20 executives, technologists, and changemakers from 10+ agencies, academia, and the private sector.</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">It Modernization</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Fraud Detection</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors text-muted-foreground hover:bg-foreground/[0.08] bg-background">Collaboration</span>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="max-w-[800px]">
            <p className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-[var(--footer-fg)]">Work on problems that matter. If you&apos;re driven by impact, scale, and service, there&apos;s a place for you here.</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-10">
            <a href="https://www.usajobs.gov/Search/?k=cio&p=1">
              <button type="button" tabIndex={0} className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full h-11 gap-2 px-6 text-base bg-[var(--footer-fg)] text-[var(--footer-bg)] hover:bg-[var(--footer-fg)]/90">Explore Opportunities</button>
            </a>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
