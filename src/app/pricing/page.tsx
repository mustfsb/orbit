import { MarketingPage } from "@/components/layout/MarketingPage";
import { PricingFaq } from "@/components/sections/pricing/PricingFaq";
import { PricingPlans } from "@/components/sections/pricing/PricingPlans";
import styles from "@/styles/components.module.css";

export default function PricingPage() {
  return (
    <MarketingPage>
      <section className={styles.pricingHero}>
        <span className={styles.eyebrow}>Pricing</span>
        <h1 className={styles.heroTitle}>Choose the plan that fits your speed goals.</h1>
        <p className={styles.heroText}>
          Start with a focused optimization workflow, then scale monitoring and automation as your website grows.
        </p>
      </section>
      <PricingPlans />
      <PricingFaq />
    </MarketingPage>
  );
}
