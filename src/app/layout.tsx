import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbit",
  description: "Orbit workspace",
  icons: {
    icon: "/favicon.ico",
  },
};

const themeScript = `(function(){var t=localStorage.getItem('orbit-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.add(t)})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
