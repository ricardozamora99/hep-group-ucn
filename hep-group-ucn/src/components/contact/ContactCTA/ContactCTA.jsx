"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
          <span className={styles.kicker}><LocalizedText id="p_838985f1607f">Explore More</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_3f800f2f8b92">Learn more about the group</LocalizedText><span><LocalizedText id="p_45878188fc13">and its activities</LocalizedText></span>
          </h2>
          <p className={styles.text}><LocalizedText id="p_ab647f50d4b5">Explore current research, people, and academic activities across the group’s website.</LocalizedText></p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/people`}><LocalizedText id="p_7db20897053b">People</LocalizedText></Link>
            <Link className={styles.btnGhost} href={`/${locale}/activities`}><LocalizedText id="p_4d0076e6b4c7">Activities</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
