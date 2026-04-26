import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/layout/MarketingPage";

export const metadata: Metadata = {
  title: "NCAM 2023: Protecting Yourself Online | CIO Council News",
  description: "National Cybersecurity Awareness Month 2023 — tips for protecting yourself online.",
};

export default function Ncam2023Page() {
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
                  <span className="text-primary truncate max-w-[30ch]">NCAM 2023: Protecting Yourself Online</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="px-site pt-section pb-12 lg:pb-16">
        <div className="max-w-[650px] mx-auto">
          <h2>NCAM 2023: Protecting Yourself Online</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-6 mb-6">
            <time className="font-sans text-[13px] leading-[22px] text-muted-foreground" dateTime="2023-10-23">October 23, 2023</time>
            <span className="text-muted-foreground/40">·</span>
            <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">Ryan A. Higgins</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">2023</span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Cybersecurity</span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Cam</span>
          </div>
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-muted-foreground prose-strong:text-foreground">
            <div className="space-y-4 whitespace-normal *:first:mt-0 *:last:mb-0">
              <p>The 20th anniversary of National Cybersecurity Awareness Month is an excellent reminder that not only are cyber threats still a serious issue, but they have also grown and become more sophisticated. Thankfully, protecting ourselves online has been made easier than ever with the adoption of new technologies to authenticate our identities and growing research into how to leverage the tools available to us. As the Chief Information Security Officer (CISO) for the Department of Commerce, I work closely with the cybersecurity experts at the National Institute of Standards and Technology (NIST). These experts are at the forefront of cybersecurity research.</p>
              <p>One consistent theme you'll hear from NIST and other cybersecurity experts is how human psychology can be exploited by cyber criminals to compromise our accounts. However, research into how we interact online has shown us several straightforward steps we can take to minimize the risk of common behaviors proven to be insecure.</p>
              <p>Over the last few years, we've seen this research help us better understand one of the first things that comes to mind when we think about online safety–passwords. Previously, the conventional wisdom was to create passwords using special characters, capitalization, numbers, letters, and a variety of arbitrary rules including forcing you to change your password multiple times per year. <a className="wrap-anywhere font-medium text-primary underline" href="https://pages.nist.gov/800-63-3/sp800-63b.html" rel="noopener noreferrer" target="_blank">Research</a> shows each of us did the same thing in response–re-used passwords or created variations of the same password because we'd been asked to memorize dozens of unique passwords for every site, log-in, or application.</p>
              <p>Our natural instincts created a weakness in our online security and cyber criminals took advantage. Research on the use of passwords has demonstrated the inherent weakness in expecting users to memorize arbitrarily complex passwords, and the importance of using multi-factor authentication (MFA) to safeguard our private information. Importantly, our thinking has evolved around this topic, and we've identified the following practices to better protect ourselves:</p>
              <ul className="list-inside list-disc whitespace-normal [li_&]:pl-6">
                <li className="py-1 [&>p]:inline">When you must use a password, use a longer password (15 or more characters) or even passphrases, as these provide greater protection than a shorter, arbitrarily complex password. Passphrases have the added benefit of being easy to remember.</li>
                <li className="py-1 [&>p]:inline">Employing MFA (such as a one-time code emailed to you or an authenticator app on your phone) adds a second, critical layer to protect against a compromised password. MFA should be set up anytime it is available. It just takes a couple moments and will give you peace of mind.</li>
                <li className="py-1 [&>p]:inline">Password managers, protected by one very strong, long password with MFA enabled, allow us to create unique passwords for each site without needing to memorize them all.</li>
              </ul>
              <p>These security practices can be combined with others, like updating software and recognizing phishing, for a more secure online experience. I encourage you to take a few minutes to set up a password manager and enable MFA for all your important online accounts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section px-site border-t border-border bg-muted">
        <div className="w-full max-w-site mx-auto">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] mb-16 lg:mb-20 font-medium">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link href="/news/federal-zero-trust-data-security-guide" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">October 31, 2024</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">CISO Council and CDO Council Release Joint Guide on Federal Zero Trust Data Security</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">Today, the CISO Council and CDO Council released the Federal Zero Trust (ZT) Data Security Guide, a first-of-its-kind document and key deliverable of OMB M-22-09, Moving the U.S. Government Towards Zero Trust Cybersecurity Principles. M-22-09 charged the Federal CDO Council and Federal CISO Council to convene a cross-agency working group of data and security experts to develop a data security guide for Federal agencies.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Cybersecurity</span></div>
            </Link>
            <Link href="/news/2023-06-12-federal-tech-day-2023-impact-through-innovation" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">June 12, 2023</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">Federal Tech Day 2023: Impact Through Innovation</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">The Federal Chief Information Officers (CIO) Council, in partnership with the U.S. Department of Labor and U.S. Department of Energy, hosted Federal Tech Day 2023 to showcase innovative technologies developed by federal agencies to help deliver their programs' missions.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">Technology</span></div>
            </Link>
            <Link href="/news/2022-10-26-importance-multifactor-authentication" className="group flex flex-col gap-5 p-8 lg:p-10 bg-background rounded-2xl transition-colors hover:bg-foreground/[0.08]">
              <span className="font-sans text-[13px] leading-[22px] text-muted-foreground">October 26, 2022</span>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] text-foreground font-semibold group-hover:text-foreground/60 transition-colors">The Importance of Multifactor Authentication</h3>
              <p className="font-sans text-[15px] leading-[25.5px] text-muted-foreground line-clamp-3">Cybersecurity Awareness Month is a great opportunity for all of us to think through how we approach cybersecurity in both our work and personal lives.</p>
              <div className="mt-auto"><span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors bg-muted text-muted-foreground hover:bg-foreground/[0.08]">2022</span></div>
            </Link>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
