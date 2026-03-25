"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./JournalClubTeaser.module.css";
import Container from "@/components/layout/Container";

export default function JournalClubTeaser() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <div className={styles.left}>
            <span className={styles.kicker}>Journal Club</span>
            <h2 className={styles.title}>
              Talks and regular scientific discussion
            </h2>
            <p className={styles.text}>
              The group’s talks, invited presentations, and regular discussion
              sessions are presented in more detail on the dedicated Journal
              Club page.
            </p>
          </div>

          <div className={styles.right}>
            <Link href={`/${locale}/journal-club`} className={styles.btnGhost}>
              Visit Journal Club
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}