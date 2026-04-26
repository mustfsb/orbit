import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import styles from "@/styles/components.module.css";

export function MarketingPage({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
