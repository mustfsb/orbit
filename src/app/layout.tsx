import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
          {children}
        </div>
      </body>
    </html>
  );
}
