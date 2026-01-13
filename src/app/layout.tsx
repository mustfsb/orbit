import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SettingsProvider } from "@/context/settings-context";
import { TaskProvider } from "@/context/task-context";
import { TimerProvider } from "@/context/timer-context";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400"],
  style: ["italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Orbit Research",
  description: "A modern, paper-like landing page inspired by Anthropic's design language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${inter.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SettingsProvider>
            <TaskProvider>
              <TimerProvider>
                {children}
              </TimerProvider>
            </TaskProvider>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
