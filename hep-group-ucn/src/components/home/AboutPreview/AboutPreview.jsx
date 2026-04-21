"use client";

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
            <span className={styles.kicker}>About the Group</span>
            <span className={styles.line} />
          </div>

          <div className={styles.layout}>
            <div className={styles.left}>
              <h2 className={styles.title}>
                A first look
                <span>at the group</span>
              </h2>

              <p className={styles.lead}>
                The UCN Particle Physics & Cosmology Group is a research space
                shaped by fundamental questions in particle physics, cosmology,
                and related theoretical and computational approaches.
              </p>

              <p className={styles.body}>
                On this page, you get a sketch of the group’s research life,
                people, and current activity. The broader institutional profile,
                mission, collaborations, academic environment, and support
                structure are presented in the About section.
              </p>

              <div className={styles.actions}>
                <Link className={styles.btnPrimary} href={`/${locale}/about-group`}>
                  Enter About
                </Link>
                <div className={styles.note}>
                  Institutional profile · collaborations · support · academic context
                </div>
              </div>
            </div>

            <aside className={styles.right}>
              <div className={styles.mainCard}>
                <span className={styles.cardLabel}>Overview</span>
                <p>
                  A group connecting theory, phenomenology, cosmology, and
                  academic formation within a broader scientific network.
                </p>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <span>Institution</span>
                  <strong>Universidad Católica del Norte</strong>
                </div>

                <div className={styles.infoCard}>
                  <span>Location</span>
                  <strong>Antofagasta, Chile</strong>
                </div>

                <div className={styles.infoCardAccent}>
                  <span>Grants</span>
                  <strong>ANID · FONDECYT · UCN</strong>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}