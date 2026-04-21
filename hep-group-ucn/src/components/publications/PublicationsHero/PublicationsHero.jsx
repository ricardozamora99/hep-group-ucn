"use client";

import styles from "./PublicationsHero.module.css";
import Container from "@/components/layout/Container";

export default function PublicationsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <Container>
        <div className={styles.inner}>
          <div className={styles.kickerWrap}>
            <span className={styles.kicker}>Publications</span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                Publications across
                <span>cosmology, particle physics,</span>
                and computation
              </h1>

              <p className={styles.lead}>
                This page gathers representative scientific output related to
                cosmology, dark matter, neutrino physics, Higgs physics,
                large-scale structure, gravitational waves, and computational
                methods, presented in a curated and searchable format.
              </p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}>Publication Overview</div>
                <div className={styles.panelBody}>
                  <p>
                    A curated publication space designed to explore research
                    output by topic, title, and scientific direction.
                  </p>

                  <div className={styles.stats}>
                    <div>
                      <span>Coverage</span>
                      <strong>2023 · 2024 · 2025 · 2026</strong>
                    </div>
                    <div>
                      <span>Themes</span>
                      <strong>Cosmology · DM · Neutrinos · BSM</strong>
                    </div>
                    <div>
                      <span>Format</span>
                      <strong>Searchable · Curated · Topic-based</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}>Output</span>
                <p>
                  A research record organized through themes, visibility, and
                  scientific context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}