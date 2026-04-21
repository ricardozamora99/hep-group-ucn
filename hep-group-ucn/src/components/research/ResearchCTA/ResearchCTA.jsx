"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./ResearchCTA.module.css";
import Container from "@/components/layout/Container";

export default function ResearchCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}>Next Step</span>
          <h2 className={styles.title}>
            Explore the people and outputs
            <span>behind the research program</span>
          </h2>
          <p className={styles.text}>
            Discover the researchers, publications, and academic activity that
            give shape to the group’s scientific work.
          </p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/people`}>
              Meet the Team
            </Link>
            <Link className={styles.btnGhost} href={`/${locale}/publications`}>
              View Publications
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}