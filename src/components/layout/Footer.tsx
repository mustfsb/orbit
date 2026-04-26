import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components.module.css";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/updates", label: "Updates" },
      { href: "/waitlist", label: "Waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logoLink} aria-label="Jet home">
            <Image src="/images/logo.svg" alt="Jet" width={62} height={24} />
          </Link>
          <p>Performance optimization for fast-growing websites, shipped in a single click.</p>
          <p className={styles.copyright}>© 2025 Jet. All rights reserved.</p>
        </div>

        <div className={styles.footerLinks}>
          {columns.map((column) => (
            <div key={column.title} className={styles.footerColumn}>
              <strong>{column.title}</strong>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
