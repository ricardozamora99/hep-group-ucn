"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./PeopleCTA.module.css";
import Container from "@/components/layout/Container";

export default function PeopleCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}>Next Step</span>
          <h2 className={styles.title}>
            Interested in joining
            <span>or collaborating?</span>
          </h2>
          <p className={styles.text}>
            Explore the group’s activities or get in touch to learn more about
            research opportunities, collaboration, and academic exchange.
          </p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/contact`}>
              Contact the Group
            </Link>
            <Link className={styles.btnGhost} href={`/${locale}/activities`}>
              Activities
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}