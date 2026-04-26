import styles from "@/styles/components.module.css";

const faqs = [
  {
    title: "Can I change plans later?",
    body: "Yes. Start with the plan that fits your current traffic and move up when your optimization needs grow.",
  },
  {
    title: "Do I need to install code?",
    body: "Jet starts from your URL and guides setup only when a deeper integration is needed for monitoring.",
  },
  {
    title: "What happens after I join?",
    body: "The Jet team reviews your site, activates your workspace, and helps you run the first optimization pass.",
  },
];

export function PricingFaq() {
  return (
    <section className={`${styles.section} ${styles.sectionTight}`}>
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>FAQ</span>
        <h2 className={styles.sectionTitle}>Simple pricing for faster sites.</h2>
      </div>
      <div className={styles.faqGrid}>
        {faqs.map((faq) => (
          <article className={styles.valueCard} key={faq.title}>
            <h3>{faq.title}</h3>
            <p>{faq.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
