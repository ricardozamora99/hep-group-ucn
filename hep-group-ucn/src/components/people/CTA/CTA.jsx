"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./CTA.module.css";
import Container from "@/components/layout/Container";

export default function CTA() {
  const locale = useLocale();

  return (
    <section id="home-cta" className={styles.section}>
      <div className={styles.bg} />
      <Container>
        <div className={styles.box}>
          <span className={styles.kicker}><LocalizedText id="p_727fa290a135">Get in Touch</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_740c90f53254">Join the conversation,</LocalizedText><span><LocalizedText id="p_3fcc2c53b920">connect with the group</LocalizedText></span>
          </h2>
          <p className={styles.text}><LocalizedText id="p_f80cb4e9475d">We welcome academic dialogue, scientific exchange, and opportunities for collaboration in particle physics, cosmology, and related fields.</LocalizedText></p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/contact`}><LocalizedText id="p_2b5c3d26721a">Contact</LocalizedText></Link>
            <Link className={styles.btnGhost} href={`/${locale}/contact`}><LocalizedText id="p_39ae26876607">Collaborate</LocalizedText></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
