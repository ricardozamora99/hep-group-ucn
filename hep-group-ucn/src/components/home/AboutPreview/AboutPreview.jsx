"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./AboutPreview.module.css";
import Container from "@/components/layout/Container";

export default function AboutPreview() {
  const locale = useLocale();

  return (
    <section id="about-preview" className={styles.section}>
      <div className={styles.bgGlow} />
      <Container>
        <div className={styles.shell}>
          <div className={styles.topLine}>
            <span className={styles.kicker}><LocalizedText id="p_8f53a5bb8a3e">About the Group</LocalizedText></span>
            <span className={styles.line} />
          </div>

          <div className={styles.layout}>
            <div className={styles.left}>
              <h2 className={styles.title}><LocalizedText id="p_ce03ffdda9c4">A scientific community</LocalizedText><span><LocalizedText id="p_b09a3615afad">rooted at UCN</LocalizedText></span>
              </h2>

              <p className={styles.lead}><LocalizedText id="p_06a7d7c89c85">The UCN Particle Physics & Cosmology Group is a research space shaped by fundamental questions in particle physics, cosmology, and related theoretical and computational approaches.</LocalizedText></p>

              <p className={styles.body}><LocalizedText id="p_649ee75c6fec">Our mission is to advance particle physics and cosmology through rigorous theory, computation, and student formation, while strengthening an internationally connected research environment at UCN.</LocalizedText></p>

              <div className={styles.actions}>
                <Link className={styles.btnPrimary} href={`/${locale}/collaborations`}><LocalizedText id="p_42714994439b">Explore Collaborations</LocalizedText></Link>
                <div className={styles.note}><LocalizedText id="p_6ade009e0014">Mission · training · collaboration · scientific identity</LocalizedText></div>
              </div>
            </div>

            <aside className={styles.right}>
              <div className={styles.mainCard}>
                <span className={styles.cardLabel}><LocalizedText id="p_d4b1ea5708dd">Long-term direction</LocalizedText></span>
                <p><LocalizedText id="p_307bf59e70d4">To consolidate at UCN a lasting, internationally connected environment for high-energy physics and cosmology.</LocalizedText></p>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <span><LocalizedText id="p_65a1553729e3">Institution</LocalizedText></span>
                  <strong><LocalizedText id="p_e1e751caa432">Universidad Católica del Norte</LocalizedText></strong>
                </div>

                <div className={styles.infoCard}>
                  <span><LocalizedText id="p_15b61974b270">Location</LocalizedText></span>
                  <strong><LocalizedText id="p_910eaee55d1b">Antofagasta, Chile</LocalizedText></strong>
                </div>

                <Link href={`/${locale}/collaborations`} className={styles.infoCardAccent}>
                  <span><LocalizedText id="p_b3e1c95a4be3">Scientific network</LocalizedText></span>
                  <strong><LocalizedText id="p_b490d66d12f6">Collaborations across institutions and experiments</LocalizedText></strong>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
