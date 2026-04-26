import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/auth-context";
import { GoalsProvider } from "@/context/goals-context";
import { SettingsProvider } from "@/context/settings-context";
import { TaskProvider } from "@/context/task-context";
import { TimerProvider } from "@/context/timer-context";
import { PlannerProvider } from "@/context/planner-context";

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
    <html lang="en" suppressHydrationWarning>
      <body>
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
                    <PlannerProvider>{children}</PlannerProvider>
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
