import type { Metadata } from "next";
import Navbar from "./landing/components/navbar";
import Hero from "./landing/components/hero";
import Features from "./landing/components/features";
import Stats from "./landing/components/stats";
import Pricing from "./landing/components/pricing";
import Privacy from "./landing/components/privacy";
import FAQ from "./landing/components/faq";
import ZenCTA from "./landing/components/zen-cta";
import Newsletter from "./landing/components/newsletter";
import Footer from "./landing/components/footer";
import { DarkModeProvider } from "./landing/components/dark-mode-provider";

export const metadata: Metadata = {
  title: "Orbit — Cultivate your focus",
  description: "A minimal environment for deep work, intentional planning, and cognitive flourishing.",
};

export default function Home() {
  return (
    <DarkModeProvider>
      <div id="landing-root" className="landing-page" suppressHydrationWarning>
        <div className="landing-container">
          <Navbar />
          <Hero />
          <Features />
          <Stats />
          <Pricing />
          <Privacy />
          <FAQ />
          <ZenCTA />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </DarkModeProvider>
  );
}
