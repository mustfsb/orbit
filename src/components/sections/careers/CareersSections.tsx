import Link from "next/link";
import styles from "@/styles/components.module.css";

const jobs = [
  ["Senior Frontend Engineer", "Engineering", "Remote", "Full-time"],
  ["Performance Engineer", "Engineering", "Remote", "Full-time"],
  ["Product Designer", "Design", "Remote", "Full-time"],
  ["Growth Marketing Lead", "Growth", "New York", "Full-time"],
  ["Customer Success Manager", "Customer", "Remote", "Full-time"],
  ["Developer Advocate", "Marketing", "Remote", "Full-time"],
  ["Data Analyst", "Operations", "London", "Full-time"],
  ["Founding Account Executive", "Sales", "San Francisco", "Full-time"],
];

const perks = [
  {
    title: "Remote-first work",
    body: "Build from wherever you do your best focused work with overlap for product reviews and launch moments.",
  },
  {
    title: "High-trust ownership",
    body: "Small teams own complete outcomes, from the first customer signal through production polish.",
  },
  {
    title: "Performance culture",
    body: "We care about craft, clarity, speed, and measurable improvements in the product and the company.",
  },
];

export function CareersPerks() {
  return (
    <section className={styles.section}>
      <div className={styles.valuesGrid}>
        {perks.map((perk) => (
          <article className={styles.valueCard} key={perk.title}>
            <h3>{perk.title}</h3>
            <p>{perk.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OpenRoles() {
  return (
    <section className={`${styles.section} ${styles.sectionTight}`}>
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Open roles</span>
        <h2 className={styles.sectionTitle}>8 open positions.</h2>
      </div>

      <div className={styles.jobsGrid}>
        {jobs.map(([title, team, location, type]) => (
          <article className={styles.jobCard} key={title}>
            <div>
              <h3>{title}</h3>
              <span className={styles.jobMeta}>{team}</span>
              <div className={styles.jobTags}>
                <span>{location}</span>
                <span>{type}</span>
              </div>
            </div>
            <Link href="/contact" className={styles.secondaryButton}>
              Apply
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
