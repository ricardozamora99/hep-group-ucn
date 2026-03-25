"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./ActivitiesCTA.module.css";
import Container from "@/components/layout/Container";

export default function ActivitiesCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}>Next Step</span>
          <h2 className={styles.title}>
            Explore the group’s contact
            <span>and future activities</span>
          </h2>
          <p className={styles.text}>
            Get in touch to learn more about workshops, academic exchange, and
            the broader activity of the group.
          </p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/contact`}>
              Contact the Group
            </Link>
            <Link className={styles.btnGhost} href={`/${locale}/journal-club`}>
              Journal Club
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}