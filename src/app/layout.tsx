import type { Metadata } from "next";
import localFont from "next/font/local";
import { Newsreader, Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/auth-context";
import { GoalsProvider } from "@/context/goals-context";
import { SettingsProvider } from "@/context/settings-context";
import { TaskProvider } from "@/context/task-context";
import { TimerProvider } from "@/context/timer-context";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400"],
  style: ["italic"],
  adjustFontFallback: false,
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const overusedGrotesk = localFont({
  src: "./fonts/overused-grotesk.woff2",
  display: "swap",
  variable: "--font-overused-grotesk",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "Orbit - Cultivate your focus",
  description: "Master your workflow with Orbit. A modern productivity tool designed for deep focus.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${onest.variable} ${jetbrainsMono.variable} ${overusedGrotesk.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <SettingsProvider>
              <GoalsProvider>
                <TaskProvider>
                  <TimerProvider>
                    {children}
                  </TimerProvider>
                </TaskProvider>
              </GoalsProvider>
            </SettingsProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
