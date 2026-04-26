import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "./globals.css";

const NavActions = dynamic(
  () => import("@/components/ui/NavActions").then((m) => ({ default: m.NavActions })),
  { ssr: false }
);

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter-variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-variable-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbit",
  description: "Orbit workspace",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Anti-FOIT: apply stored theme class synchronously before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('orbit-theme');if(t==='dark'||t==='light'){document.documentElement.classList.add(t);return;}if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
        {/* Preload hints: browser starts fetching CSS earlier in the waterfall */}
        <link rel="preload" href="/css/styles.css" as="style" />
        <link rel="preload" href="/css/theme.css" as="style" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/theme.css" />
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="transition-[margin-right] duration-300 ease-out">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Skip to main content
          </a>
          <header className="px-site sticky top-0 z-50 transition-all duration-300 translate-y-0 bg-background/90 text-foreground backdrop-blur-xl">
            <div className="py-5 lg:py-[22px] max-w-site mx-auto">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.svg"
                    alt="Orbit"
                    width={62}
                    height={24}
                    priority
                    className="h-6 w-auto dark:invert"
                  />
                </Link>
                <nav className="hidden lg:flex items-center gap-4">
                  <ul className="flex flex-1 list-none items-center justify-center gap-1">
                    <li className="relative">
                      <Link
                        href="/about"
                        className="hover:bg-muted focus:bg-muted rounded-md py-2 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 inline-flex h-9 w-max items-center justify-center bg-transparent px-3 tracking-wide"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        href="/policies-and-priorities"
                        className="hover:bg-muted focus:bg-muted rounded-md py-2 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 inline-flex h-9 w-max items-center justify-center bg-transparent px-3 tracking-wide"
                      >
                        Policies
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        href="/resources"
                        className="hover:bg-muted focus:bg-muted rounded-md py-2 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 inline-flex h-9 w-max items-center justify-center bg-transparent px-3 tracking-wide"
                      >
                        Resources
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        href="/news"
                        className="cursor-pointer border border-transparent bg-clip-padding font-medium focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none hover:bg-muted rounded-md h-9 gap-1 px-3 text-sm tracking-wide text-foreground/90 hover:text-foreground"
                      >
                        News
                      </Link>
                    </li>
                  </ul>
                </nav>
                <NavActions />
              </div>
            </div>
          </header>
          <main id="main-content">{children}</main>
          <footer className="bg-[var(--footer-bg)] text-[var(--footer-fg)] px-site">
            <div className="py-8 max-w-site mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <Link href="/" className="inline-block flex-shrink-0">
                  <Image
                    src="/images/cio-council-logo.svg"
                    alt="CIO Council"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </Link>
                <nav className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-5 lg:gap-y-2 flex-1">
                  <Link
                    href="/news"
                    className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
                  >
                    News
                  </Link>
                  <Link
                    href="/policies-and-priorities"
                    className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
                  >
                    Policies &amp; Priorities
                  </Link>
                  <Link
                    href="/resources"
                    className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
                  >
                    Resources
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/about/members-and-leadership"
                    className="text-sm text-[var(--footer-fg-muted)] hover:text-[var(--footer-fg)] transition-colors"
                  >
                    Members &amp; Leadership
                  </Link>
                </nav>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4 lg:ml-auto flex-shrink-0">
                  <a
                    href="https://www.usa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--footer-fg-subtle)] hover:text-[var(--footer-fg)] transition-colors whitespace-nowrap"
                  >
                    USA.gov
                  </a>
                  <a
                    href="https://www.whitehouse.gov/omb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--footer-fg-subtle)] hover:text-[var(--footer-fg)] transition-colors whitespace-nowrap"
                  >
                    Office of Management and Budget
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-[var(--footer-border)] py-4 max-w-site mx-auto">
              <div className="flex flex-wrap items-center gap-4"></div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
