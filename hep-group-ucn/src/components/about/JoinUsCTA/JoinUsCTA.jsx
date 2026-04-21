"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./JoinUsCTA.module.css";
import Container from "@/components/layout/Container";

export default function JoinUsCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <div className={styles.bgImage} />
      <div className={styles.overlay} />

      <Container>
        <div className={styles.inner}>
          <span className={styles.kicker}>Next step</span>
          <h2>
            Explore the people,
            <span>research, and activities</span>
            behind the group
          </h2>
          <p>
            The About page is only the beginning. Discover the group’s research
            directions, meet its members, and follow the academic activities
            that shape its scientific life.
          </p>

          <div className={styles.actions}>
            <Link href={`/${locale}/research`} className={styles.primary}>
              Explore Research
            </Link>
            <Link href={`/${locale}/people`} className={styles.secondary}>
              Meet the Team
            </Link>
            <Link href={`/${locale}/contact`} className={styles.secondary}>
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}