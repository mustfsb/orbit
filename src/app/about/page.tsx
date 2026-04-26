import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "About | CIO Council",
  description:
    "Learn about the CIO Council — bringing together Chief Information Officers from across the federal government.",
};

export default function AboutPage() {
  return (
    <MarketingPage>
      <section className="bg-background px-site pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col gap-8 md:gap-16 max-w-site mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-foreground max-w-[1200px]">
              Technology Leadership, Unified Purpose
            </h1>
          </div>
        </div>
      </section>

      <section className="px-site py-section-tight">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary text-primary-foreground ring-1 ring-foreground/10 p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">Federal Agencies</p>
              </div>
              <div className="mb-2">
                <p className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-primary-foreground">24+</p>
              </div>
            </div>
            <div className="bg-primary text-primary-foreground ring-1 ring-foreground/10 p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">Sub-Councils</p>
              </div>
              <div className="mb-2">
                <p className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-primary-foreground">2</p>
              </div>
            </div>
            <div className="bg-primary text-primary-foreground ring-1 ring-foreground/10 p-6 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/60">Established</p>
              </div>
              <div className="mb-2">
                <p className="font-sans text-[56px] leading-[53px] tracking-[-1.96px] lg:text-[96px] lg:leading-[91px] lg:tracking-[-3.36px] font-semibold text-primary-foreground">2002</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site py-section border-t border-border">
        <div className="max-w-site mx-auto">
          <h2 className="mb-10 max-w-[800px]">
            Aligning federal IT strategy and improving how government delivers digital services.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col">
              <h3>Purpose</h3>
              <div className="mt-4 space-y-4 flex-1">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  The CIO Council brings together Chief Information Officers from across the federal government to improve how agencies design, acquire, develop, and manage information resources.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Monitor and improve federal program performance</span></li>
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Attract and retain a high-performance IT workforce</span></li>
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Optimize information resources and investments</span></li>
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Align IT solutions with enterprise business processes</span></li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/policies-and-priorities">
                  <button type="button" tabIndex={0} className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base">Browse policies and priorities</button>
                </Link>
              </div>
            </div>
            <div className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10 flex flex-col">
              <h3>Vision</h3>
              <div className="mt-4 space-y-4 flex-1">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">
                  The CIO Council promotes a prosperous future for the United States through the strategic use of federal information technology.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Drive efficiency and effectiveness across government</span></li>
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Spur innovation in public service delivery</span></li>
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Protect and defend federal digital resources</span></li>
                  <li><span className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Bring government services closer to Americans</span></li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="https://www.govinfo.gov/content/pkg/PLAW-107publ347/pdf/PLAW-107publ347.pdf" target="_blank" rel="noopener noreferrer">
                  <button type="button" tabIndex={0} className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary text-primary-foreground hover:bg-primary/80 h-11 gap-2 px-6 text-base">Statutory requirements</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site py-section border-t border-border">
        <div className="max-w-site mx-auto">
          <h2 className="mb-8 max-w-[640px]">Five mandates from Congress shape how we operate.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">01</span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Develop recommendations for OMB on government information resources management policies</p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">02</span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Share experiences, best practices, and innovative approaches to information resources management</p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">03</span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Assist the Federal CIO in identifying and coordinating multi-agency projects that improve government performance through technology</p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 bg-muted ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-foreground">04</span>
              <div className="border-l pl-6 flex-1 min-w-0 border-border">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Promote the development and use of common performance measures for agency information resources management</p>
              </div>
            </div>
            <div className="rounded-2xl ring-1 p-8 lg:p-10 flex flex-wrap items-center gap-6 md:col-span-2 bg-primary text-primary-foreground ring-foreground/10">
              <span className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium shrink-0 text-primary-foreground">05</span>
              <div className="border-l pl-6 flex-1 min-w-0 border-primary-foreground/40">
                <p className="font-sans text-[15px] leading-[25.5px] text-primary-foreground/80">Work with OPM to assess and address hiring, training, and professional development of the federal IT workforce</p>
              </div>
              <div className="shrink-0 w-full sm:w-auto">
                <a href="https://www.usajobs.gov/Search/?k=cio&p=1">
                  <button type="button" tabIndex={0} className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 gap-2 px-6 text-base">Explore Opportunities</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site bg-muted py-section">
        <div className="max-w-site mx-auto">
          <h2 className="mb-10 max-w-[640px]">How the Council operates and coordinates across federal agencies.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10">
              <h3>Operations</h3>
              <div className="mt-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">The CIO Council conducts monthly meetings with Chief Information Officers, Chief Information Security Officers, and their representatives to discuss key priorities, exchange best practices, and ensure alignment across federal agencies on government-wide technology initiatives.</p>
              </div>
            </div>
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10">
              <h3>CISO Council</h3>
              <div className="mt-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">The CISO Council brings together federal security leaders to coordinate on identity management, risk assessment, vulnerability response, and shared security services. It sets standards and measures performance across government systems.</p>
              </div>
            </div>
            <div className="bg-background rounded-2xl ring-1 ring-foreground/10 p-8 lg:p-10">
              <h3>Digital Experience Council</h3>
              <div className="mt-4">
                <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground">Established under OMB Memorandum M-23-22, the DX Council coordinates across agencies to deliver simple, seamless, and secure digital services. It drives standards for how the public interacts with government online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-site bg-muted py-section">
        <div className="max-w-site mx-auto">
          <h4 className="mb-2">Related Councils</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <a href="https://www.fpc.gov/" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]">
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">Federal Privacy Council</p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">↗ External</p>
            </a>
            <a href="https://www.performance.gov/pic/" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]">
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">Performance Improvement Council</p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">↗ External</p>
            </a>
            <a href="https://cfo.gov/" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]">
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">Federal CFO Council</p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">↗ External</p>
            </a>
            <a href="https://www.chcoc.gov/" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]">
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">Federal CHCO Council</p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">↗ External</p>
            </a>
            <a href="https://cao.gov/" target="_blank" rel="noopener noreferrer" className="bg-muted rounded-2xl ring-1 ring-foreground/10 p-4 transition-colors hover:bg-foreground/[0.08]">
              <p className="font-sans text-[13px] leading-[22px] font-medium text-foreground">Federal CAO Council</p>
              <p className="font-sans text-[13px] leading-[22px] mt-1 text-muted-foreground">↗ External</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-section px-site bg-[var(--footer-bg)]">
        <div className="max-w-site mx-auto">
          <div className="max-w-[800px]">
            <p className="font-sans text-[32px] leading-[37px] tracking-[-0.8px] lg:text-[40px] lg:leading-[46px] lg:tracking-[-1px] font-medium text-[var(--footer-fg)]">Work on problems that matter. If you&apos;re driven by impact, scale, and service, there&apos;s a place for you here. Help shape a digital-first government that works for everyone.</p>
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
