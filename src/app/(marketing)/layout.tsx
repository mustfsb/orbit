import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <footer className="bg-[var(--footer-bg)] text-[var(--footer-fg)] px-site">
        <div className="py-8 max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <Link href="/" className="inline-block flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Orbit"
                width={62}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <nav className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-5 lg:gap-y-2 flex-1">
              <Link
                href="/about"
                className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-[var(--footer-border)] py-4 max-w-site mx-auto">
          <div className="flex flex-wrap items-center gap-4"></div>
        </div>
      </footer>
    </>
  );
}
