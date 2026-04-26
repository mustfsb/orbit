import Image from "next/image";
import styles from "@/styles/components.module.css";

const stats = [
  { value: "3.4x", label: "Average speed lift" },
  { value: "99.9%", label: "Monitoring uptime" },
  { value: "42ms", label: "Median edge response" },
  { value: "2025", label: "Built for modern teams" },
];

const values = [
  {
    title: "Speed is a product feature",
    body: "We treat performance as part of the customer experience, not as a late-stage technical chore.",
  },
  {
    title: "Automation should be legible",
    body: "Every optimization needs clear before-and-after data so teams can trust what changed.",
  },
  {
    title: "Small changes compound",
    body: "Jet focuses on practical improvements that keep working across releases, campaigns, and traffic spikes.",
  },
];

const team = [
  {
    name: "Luca Rossi",
    role: "Founder",
    avatar: "/images/avatars/luca-rossi.jpg",
  },
  {
    name: "Maya Thompson",
    role: "Product",
    avatar: "/images/avatars/maya-thompson.jpg",
  },
  {
    name: "Alex Chen",
    role: "Engineering",
    avatar: "/images/avatars/alex-chen.jpg",
  },
];

export function AboutStats() {
  return (
    <section className={styles.section}>
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <article className={styles.statCard} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutStory() {
  return (
    <section className={`${styles.section} ${styles.sectionTight}`}>
      <div className={styles.featureSplit}>
        <div className={styles.featureCopy}>
          <span className={styles.eyebrow}>Our story</span>
          <h2 className={styles.sectionTitle}>Jet exists because fast sites should not require a full performance team.</h2>
        </div>
        <p className={styles.sectionText}>
          Modern web teams ship quickly, but every release can add image weight, script cost, and monitoring noise.
          Jet brings the repeatable performance work into one focused workflow so teams can launch richer pages
          without accepting slow experiences.
        </p>
      </div>
    </section>
  );
}

export function AboutValues() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Values</span>
        <h2 className={styles.sectionTitle}>Principles behind every optimization.</h2>
      </div>
      <div className={styles.valuesGrid}>
        {values.map((value) => (
          <article className={styles.valueCard} key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutTeam() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Team</span>
        <h2 className={styles.sectionTitle}>Built by performance-obsessed operators.</h2>
      </div>
      <div className={styles.teamGrid}>
        {team.map((member) => (
          <article className={styles.teamCard} key={member.name}>
            <div className={styles.teamAvatar}>
              <Image src={member.avatar} alt={member.name} width={72} height={72} />
            </div>
            <h3>{member.name}</h3>
            <span>{member.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
