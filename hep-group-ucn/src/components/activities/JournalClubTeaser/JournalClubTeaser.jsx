"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_9bd1891b5019">Journal Club</LocalizedText></span>
            <h2 className={styles.title}><LocalizedText id="p_a83f2b929dc7">Talks and regular scientific discussion</LocalizedText></h2>
            <p className={styles.text}><LocalizedText id="p_ee7626cf2b2e">The group’s talks, invited presentations, and regular discussion sessions are presented in more detail on the dedicated Journal Club page.</LocalizedText></p>
          </div>

          <div className={styles.right}>
            <Link href={`/${locale}/journal-club`} className={styles.btnGhost}><LocalizedText id="p_c9200c818938">Visit Journal Club</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
