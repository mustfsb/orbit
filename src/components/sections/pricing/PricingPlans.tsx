import Link from "next/link";
import styles from "@/styles/components.module.css";

const plans = [
  {
    name: "Starter",
    description: "For teams optimizing a single marketing site.",
    price: "$19",
    cadence: "/month",
    cta: "Join waitlist",
    featured: false,
    features: ["1 website", "Weekly optimization runs", "Image compression", "Basic speed report", "Email support"],
  },
  {
    name: "Pro",
    description: "For growing companies that need continuous speed monitoring.",
    price: "$49",
    cadence: "/month",
    cta: "Join waitlist",
    featured: true,
    features: [
      "5 websites",
      "Daily optimization runs",
      "Code and image cleanup",
      "Core Web Vitals monitoring",
      "Real-time alerts",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For high-traffic teams with custom performance workflows.",
    price: "Custom",
    cadence: "",
    cta: "Contact",
    featured: false,
    features: [
      "Unlimited websites",
      "Custom optimization rules",
      "Dedicated performance review",
      "SLA monitoring",
      "SSO and team controls",
      "Dedicated support",
    ],
  },
];

export function PricingPlans() {
  return (
    <section className={styles.section}>
      <div className={styles.pricingGrid}>
        {plans.map((plan) => (
          <article
            className={`${styles.planCard} ${plan.featured ? styles.planCardFeatured : ""}`}
            key={plan.name}
          >
            {plan.featured ? <span className={styles.planBadge}>POPULAR</span> : null}
            <div>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>
            <div className={styles.price}>
              <strong>{plan.price}</strong>
              {plan.cadence ? <span>{plan.cadence}</span> : null}
            </div>
            <Link href={plan.cta === "Contact" ? "/contact" : "/waitlist"} className={styles.primaryButton}>
              {plan.cta}
            </Link>
            <ul className={styles.featureList}>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
