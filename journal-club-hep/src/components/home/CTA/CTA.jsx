"use client";

import Link from "next/link";
import styles from "./CTA.module.css";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section id="home-cta" className={styles.section}>
      <Container>
        <div className={styles.box}>
          <div className={styles.kicker}>Get in Touch</div>
          <h2 className={styles.title}>
            Join our research community or collaborate with us
          </h2>
          <p className={styles.text}>
            We welcome academic interaction, research dialogue, and opportunities
            for collaboration in particle physics, cosmology, and related fields.
          </p>

          <div className={styles.actions}>
            <Link className={styles.btnPrimary} href="/contact">
              Contact
            </Link>
            <Link className={styles.btnGhost} href="/contact">
              Collaborate
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}