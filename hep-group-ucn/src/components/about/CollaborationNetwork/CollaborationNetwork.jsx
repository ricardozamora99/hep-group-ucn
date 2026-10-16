"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./CollaborationNetwork.module.css";
import Container from "@/components/layout/Container";

export default function CollaborationNetwork() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <div className={styles.left}>
            <span className={styles.kicker}><LocalizedText id="p_9708849b2590">Collaborations</LocalizedText></span>
            <h2 className={styles.title}><LocalizedText id="p_4058075e5a3c">Institutional and experimental links</LocalizedText></h2>
            <p className={styles.text}><LocalizedText id="p_0d6d858f97ef">The group’s collaborations with universities, research networks, and large experiments are presented in more detail on the dedicated Collaborations page.</LocalizedText></p>
          </div>

          <div className={styles.right}>
            <Link href={`/${locale}/collaborations`} className={styles.btnGhost}><LocalizedText id="p_25b8513a3df7">Visit Collaborations</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
