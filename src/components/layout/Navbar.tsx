"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/components.module.css";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/updates", label: "Updates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers", badge: "8" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logoLink} aria-label="Jet home">
          <Image src="/images/logo.svg" alt="Jet" width={62} height={24} priority />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
              {link.badge ? <span className={styles.badge}>{link.badge}</span> : null}
            </Link>
          ))}
        </nav>

        <div className={styles.navActions}>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact
          </Link>
          <Link href="/waitlist" className={styles.primaryButton}>
            Join waitlist
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`} />
        </button>
      </div>

      <nav
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink} onClick={() => setOpen(false)}>
            {link.label}
            {link.badge ? <span className={styles.badge}>{link.badge}</span> : null}
          </Link>
        ))}
        <Link href="/contact" className={styles.secondaryButton} onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link href="/waitlist" className={styles.primaryButton} onClick={() => setOpen(false)}>
          Join waitlist
        </Link>
      </nav>
    </header>
  );
}
