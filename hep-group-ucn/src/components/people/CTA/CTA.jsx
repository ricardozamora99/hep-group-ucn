"use client";

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
          <span className={styles.kicker}>Get in Touch</span>
          <h2 className={styles.title}>
            Join the conversation,
            <span>connect with the group</span>
          </h2>
          <p className={styles.text}>
            We welcome academic dialogue, scientific exchange, and opportunities
            for collaboration in particle physics, cosmology, and related
            fields.
          </p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href={`/${locale}/contact`}>
              Contact
            </Link>
            <Link className={styles.btnGhost} href={`/${locale}/contact`}>
              Collaborate
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}