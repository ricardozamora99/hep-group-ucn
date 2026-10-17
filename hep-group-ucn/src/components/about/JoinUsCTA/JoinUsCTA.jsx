"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./JoinUsCTA.module.css";
import Container from "@/components/layout/Container";

export default function JoinUsCTA() {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <div className={styles.bgImage} />
      <div className={styles.overlay} />

      <Container>
        <div className={styles.inner}>
          <span className={styles.kicker}><LocalizedText id="p_298a9207a732">Next step</LocalizedText></span>
          <h2><LocalizedText id="p_82d6ec9e5304">Explore the people,</LocalizedText><span><LocalizedText id="p_3e6eb5de697b">research, and activities</LocalizedText></span><LocalizedText id="p_aff51b25e054">behind the group</LocalizedText></h2>
          <div className={styles.actions}>
            <Link href={`/${locale}/research`} className={styles.primary}><LocalizedText id="p_989d068de9a7">Explore Research</LocalizedText></Link>
            <Link href={`/${locale}/people`} className={styles.secondary}><LocalizedText id="p_72271dec619e">Meet the Team</LocalizedText></Link>
            <Link href={`/${locale}/contact`} className={styles.secondary}><LocalizedText id="p_2b5c3d26721a">Contact</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
