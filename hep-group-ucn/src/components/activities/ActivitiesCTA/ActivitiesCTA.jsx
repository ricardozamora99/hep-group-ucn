"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
          <span className={styles.kicker}><LocalizedText id="p_226366c3301a">Next Step</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_42f8a67652e1">Explore the group’s contact</LocalizedText><span><LocalizedText id="p_36cc43f34acf">and future activities</LocalizedText></span>
          </h2>
          <p className={styles.text}><LocalizedText id="p_060073496211">Use the contact page for invitations, proposed visits, or details about upcoming events.</LocalizedText></p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/contact`}><LocalizedText id="p_a1cdac30a12d">Contact the Group</LocalizedText></Link>
            <Link className={styles.btnGhost} href={`/${locale}/journal-club`}><LocalizedText id="p_9bd1891b5019">Journal Club</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
