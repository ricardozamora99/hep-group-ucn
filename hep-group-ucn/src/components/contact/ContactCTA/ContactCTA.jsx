"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import Container from "@/components/layout/Container";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}>Explore More</span>
          <h2 className={styles.title}>
            Learn more about the group
            <span>and its activities</span>
          </h2>
          <p className={styles.text}>
            Explore current research, people, and academic activities across the
            group’s website.
          </p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/people`}>
              People
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