"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./AboutPreview.module.css";
import Container from "@/components/layout/Container";

export default function AboutPreview() {
  const locale = useLocale();

  return (
    <section id="about-preview" className={styles.section}>
      <Container>
        <div className={styles.shell}>
          <header className={styles.header}>
            <div className={styles.kicker}>About the Group</div>
            <h2 className={styles.title}>Particle Physics and Cosmology at UCN</h2>
            <div className={styles.underline} />
          </header>

          <div className={styles.grid}>
            <article className={styles.mainBlock}>
              <div className={styles.mainInner}>
                <div className={styles.eyebrow}>Institutional Overview</div>

                <p className={styles.lead}>
                  We are a research group based at Universidad Católica del Norte,
                  dedicated to advancing knowledge in particle physics, cosmology,
                  and related fields through theoretical and computational approaches.
                </p>

                <p className={styles.body}>
                  Our work brings together researchers and students interested in
                  fundamental questions about matter, the universe, and the methods
                  used to investigate them. The group combines theoretical insight,
                  computational tools, and active academic exchange to develop a
                  coherent research environment at UCN.
                </p>

                <div className={styles.fundingBand}>
                  <div className={styles.fundingLabel}>Supported by</div>
                  <div className={styles.fundingList}>
                    <span>ANID</span>
                    <span>FONDECYT N°1241855</span>
                    <span>Universidad Católica del Norte</span>
                  </div>
                </div>

                <div className={styles.actions}>
                  <Link className={styles.btnGhost} href={`/${locale}/about-group`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            <aside className={styles.sidePanel}>
              <div className={styles.sideCardPrimary}>
                <div className={styles.sideLabel}>Institution</div>
                <div className={styles.sideValue}>
                  Universidad Católica del Norte
                </div>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideLabel}>Location</div>
                <div className={styles.sideValue}>Antofagasta, Chile</div>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideLabel}>Core Focus</div>
                <div className={styles.sideValue}>
                  Theory, Cosmology, Computation
                </div>
              </div>

              <div className={styles.sideCardAccent}>
                <div className={styles.quote}>
                  “A space for fundamental physics, collaboration, and scientific formation.”
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}