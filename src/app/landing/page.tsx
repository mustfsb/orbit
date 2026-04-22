import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Stats from "./components/stats";
import Pricing from "./components/pricing";
import Privacy from "./components/privacy";
import FAQ from "./components/faq";
import ZenCTA from "./components/zen-cta";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <>
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
    </>
  );
}
