import type { Metadata } from "next";
import "./landing.css";
import { DarkModeProvider } from "./components/dark-mode-provider";

export const metadata: Metadata = {
  title: "Orbit — Cultivate your focus",
  description: "A minimal environment for deep work, intentional planning, and cognitive flourishing.",
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('landing-theme');
      var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var root = document.getElementById('landing-root');
      if (root) root.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <DarkModeProvider>
        <div id="landing-root" className="landing-page" suppressHydrationWarning>
          <div className="landing-container">
            {children}
          </div>
        </div>
      </DarkModeProvider>
    </>
  );
}
