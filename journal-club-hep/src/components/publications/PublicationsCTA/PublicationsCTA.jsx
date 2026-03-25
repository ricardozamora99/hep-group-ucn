"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./PublicationsCTA.module.css";
import Container from "@/components/layout/Container";

export default function PublicationsCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}>Next Step</span>
          <h2 className={styles.title}>
            Explore the research
            <span>behind the publications</span>
          </h2>
          <p className={styles.text}>
            Move from the publication record to the broader scientific profile,
            people, and research directions of the group.
          </p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/research`}>
              Explore Research
            </Link>
            <Link className={styles.btnGhost} href={`/${locale}/people`}>
              Meet the Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}